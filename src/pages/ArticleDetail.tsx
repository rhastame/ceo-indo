import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Clock, 
  User,
  Calendar,
  ChevronRight,
  Share2,
  Copy,
  Linkedin,
  Twitter,
  MessageCircle
} from "lucide-react";
import { getArticleBySlug, getRelatedArticles } from "@/data/articlesData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : null;

  // Set page metadata for SEO
  useEffect(() => {
    if (article) {
      document.title = article.metaTitle || article.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.metaDescription || article.excerpt);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested article could not be found.</p>
            <Link to="/articles">
              <Button className="bg-gold hover:bg-gold-light text-primary-foreground">
                Back to Articles
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const publishedDate = new Date(article.publishedAt);
  const relatedArticles = getRelatedArticles(article.slug, article.category, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    const text = article.excerpt;

    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`, '_blank');
        break;
    }
  };

  const renderContent = () => {
    return article.content.sections.map((section, index) => {
      switch (section.type) {
        case 'heading':
          return (
            <h2 key={index} className="text-2xl font-bold text-gradient-gold mb-6 mt-8 font-montserrat">
              {section.content}
            </h2>
          );
        
        case 'paragraph':
          return (
            <p key={index} className="text-foreground leading-relaxed mb-6 text-lg">
              {section.content}
            </p>
          );
        
        case 'quote':
          return (
            <blockquote key={index} className="border-l-4 border-gold bg-card p-6 my-8 rounded-r-lg">
              <p className="text-foreground text-xl italic leading-relaxed mb-4">
                "{section.content}"
              </p>
              {section.author && (
                <cite className="text-gold font-semibold">— {section.author}</cite>
              )}
            </blockquote>
          );
        
        case 'list':
          return (
            <div key={index} className="mb-6">
              <p className="text-foreground leading-relaxed mb-4 text-lg">{section.content}</p>
              <ul className="space-y-2 ml-6">
                {section.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-foreground">
                    <div className="w-2 h-2 bg-gold rounded-full mt-3 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        
        case 'image':
          return (
            <figure key={index} className="my-8">
              <img 
                src={section.content}
                alt={section.imageAlt || ''}
                className="w-full rounded-lg"
                loading="lazy"
              />
              {section.imageAlt && (
                <figcaption className="text-muted-foreground text-sm mt-2 text-center">
                  {section.imageAlt}
                </figcaption>
              )}
            </figure>
          );
        
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-4 bg-card border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/articles" className="hover:text-gold transition-colors">Articles</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-gold hover:text-gold-light hover:bg-gold/10 p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-card to-background">
        {/* Cover Image */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img 
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <Badge variant="outline" className="bg-gold/90 border-gold text-primary-foreground backdrop-blur-sm">
                  {article.category}
                </Badge>
              </div>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-6 font-montserrat leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" />
                  <span className="text-foreground font-medium">{article.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>{format(publishedDate, 'MMMM dd, yyyy')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold" />
                  <span>{article.readingTime} min read</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-medium text-foreground">Share:</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('copy')}
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('linkedin')}
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <Linkedin className="w-4 h-4 mr-1" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('twitter')}
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <Twitter className="w-4 h-4 mr-1" />
                    X
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleShare('whatsapp')}
                    className="border-gold/30 text-gold hover:bg-gold/10"
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {renderContent()}
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gold/20">
              <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="bg-gold/10 border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground px-3 py-1"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-card border border-gold/20 rounded-xl">
              <h3 className="text-lg font-bold text-gold mb-4 font-montserrat">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  <img 
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-foreground text-lg">{article.author.name}</h4>
                  <p className="text-gold text-sm mb-2">{article.author.role} at {article.author.company}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{article.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-card border-t border-gold/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gradient-gold mb-8 font-montserrat text-center">
                Related Articles
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => {
                  const relatedDate = new Date(relatedArticle.publishedAt);
                  
                  return (
                    <article key={relatedArticle.id} className="bg-background border border-gold/30 rounded-xl overflow-hidden transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 group">
                      {/* Cover Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={relatedArticle.coverImage}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="outline" className="bg-gold/90 border-gold text-primary-foreground backdrop-blur-sm text-xs">
                            {relatedArticle.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <Link to={`/articles/${relatedArticle.slug}`} className="block mb-3">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2 font-montserrat">
                            {relatedArticle.title}
                          </h3>
                        </Link>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{relatedArticle.author.name}</span>
                          <span>{format(relatedDate, 'MMM dd')}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ArticleDetail;