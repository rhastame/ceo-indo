import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Newspaper, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { newsData, newsCategories, getNewsYears, getNewsByCategory, getNewsByYear, type NewsData } from "@/data/newsData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const availableYears = getNewsYears();

  // Filter and search logic
  const filteredNews = useMemo(() => {
    let filtered = newsData.filter(news => news.status === "published");

    // Filter by category
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(news => news.category === selectedCategory);
    }

    // Filter by year
    if (selectedYear !== "All Years") {
      filtered = filtered.filter(news => {
        const newsYear = new Date(news.publishedAt).getFullYear().toString();
        return newsYear === selectedYear;
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(news => 
        news.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        news.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (news.author && news.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (news.source && news.source.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Sort by date (newest first)
    return filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [selectedCategory, selectedYear, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredNews.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (type: string, value: string) => {
    setCurrentPage(1);
    if (type === "category") setSelectedCategory(value);
    if (type === "year") setSelectedYear(value);
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

  const NewsCard = ({ news }: { news: NewsData }) => {
    const publishedDate = new Date(news.publishedAt);
    
    return (
      <article className="bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 group">
        <div className="flex flex-col h-full">
          {/* Category Badge */}
          <div className="mb-3">
            <Badge variant="outline" className="bg-gold/10 border-gold/50 text-gold text-xs">
              {news.category}
            </Badge>
          </div>

          {/* Headline */}
          <Link to={`/news/${news.slug}`} className="block mb-3">
            <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2 font-montserrat">
              {news.headline}
            </h3>
          </Link>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{format(publishedDate, 'MMM dd, yyyy')}</span>
            </div>
            {news.source && (
              <div className="flex items-center gap-1">
                {news.sourceUrl && <ExternalLink className="w-3 h-3" />}
                <span className="font-medium">{news.source}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {news.excerpt}
          </p>

          {/* Author if available */}
          {news.author && (
            <p className="text-xs text-muted-foreground mb-4">
              By {news.author}
            </p>
          )}

          {/* CTA Button */}
          <div className="mt-auto">
            <Link to={`/news/${news.slug}`}>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 group-hover:border-gold"
              >
                Read More
              </Button>
            </Link>
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
                <Newspaper className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold font-montserrat">
                Newsroom
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-2">
              Latest updates, announcements, and coverage from Global CEO Indonesia
            </p>
            <p className="text-sm text-muted-foreground">
              {filteredNews.length} news items available
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
                {newsCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleFilterChange("category", category)}
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

            {/* Search and Year Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 bg-background border-gold/30 focus:border-gold"
                />
              </div>

              {/* Year Filter */}
              <div className="w-48">
                <Select value={selectedYear} onValueChange={(value) => handleFilterChange("year", value)}>
                  <SelectTrigger className="bg-background border-gold/30 focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-gold/30">
                    {availableYears.map((year) => (
                      <SelectItem key={year} value={year} className="hover:bg-gold/10">
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {currentNews.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                  {currentNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {startIndex + 1} to {Math.min(endIndex, filteredNews.length)} of {filteredNews.length} news items
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
                <Newspaper className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No News Found</h3>
                <p className="text-muted-foreground mb-6">
                  No news items match your current search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Categories");
                    setSelectedYear("All Years");
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

export default NewsPage;