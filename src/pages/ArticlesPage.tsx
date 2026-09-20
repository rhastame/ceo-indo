import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Clock, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { articlesData, categories, getArticlesByCategory, type ArticleData } from "@/data/articlesData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(9);

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let filtered = getArticlesByCategory(selectedCategory);

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        article.author.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const ArticleCard = ({ article }: { article: ArticleData }) => {
    const publishedDate = new Date(article.publishedAt);
    
    return (
      <article className="bg-background border border-gold/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 group">
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-gold/90 border-gold text-primary-foreground backdrop-blur-sm">
              {article.category}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-full">
          {/* Title */}
          <Link to={`/articles/${article.slug}`} className="block mb-3">
            <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2 font-montserrat">
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="space-y-3">
            {/* Author & Reading Time */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="w-3 h-3" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>{article.readingTime} min read</span>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{format(publishedDate, 'MMM dd, yyyy')}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {article.tags.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-gold/10 border-gold/30 text-gold text-xs px-2 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-background py-16 border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold font-montserrat">
                Articles
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-2">
              Insights, strategies, and thought leadership from Indonesia's business community
            </p>
            <p className="text-sm text-muted-foreground">
              {filteredArticles.length} articles available
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-card border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Category Filters */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm",
                      selectedCategory === category
                        ? "bg-gold text-primary-foreground font-bold"
                        : "bg-background border border-gold/30 text-foreground hover:border-gold hover:bg-gold/10"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-background border-gold/30 focus:border-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {currentArticles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {currentArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {startIndex + 1} to {Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
                    </p>
                    
                    <div className="flex items-center gap-2">
                      {/* Previous Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>

                      {/* Page Numbers */}
                      {getPageNumbers().map((page, index) => (
                        <Button
                          key={index}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => typeof page === 'number' && setCurrentPage(page)}
                          disabled={page === '...'}
                          className={cn(
                            "min-w-[40px]",
                            page === currentPage
                              ? "bg-gold text-primary-foreground hover:bg-gold-light"
                              : "border-gold/30 text-foreground hover:bg-gold/10",
                            page === '...' && "cursor-default hover:bg-transparent"
                          )}
                        >
                          {page}
                        </Button>
                      ))}

                      {/* Next Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Articles Found</h3>
                <p className="text-muted-foreground mb-6">
                  No articles match your current search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                    setCurrentPage(1);
                  }}
                  className="border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlesPage;