import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Calendar,
  User,
  ChevronRight,
  ExternalLink,
  Copy,
  Linkedin,
  Twitter,
  MessageCircle,
  CheckCircle
} from "lucide-react";
import { getNewsBySlug, getRelatedNews } from "@/data/newsData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const news = slug ? getNewsBySlug(slug) : null;

  // Set page metadata for SEO
  useEffect(() => {
    if (news) {
      document.title = news.metaTitle || news.headline;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', news.metaDescription || news.excerpt);
      }
    }
  }, [news]);

  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">News Not Found</h1>
            <p className="text-muted-foreground mb-8">The requested news item could not be found.</p>
            <Link to="/news">
              <Button className="bg-gold hover:bg-gold-light text-primary-foreground">
                Back to Newsroom
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const publishedDate = new Date(news.publishedAt);
  const relatedNews = getRelatedNews(news.slug, news.category, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = news.headline;
    const text = news.excerpt;

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
    return news.content.sections.map((section, index) => {
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
        
        case 'highlight':
          return (
            <div key={index} className="bg-gradient-to-r from-gold/10 to-gold-light/10 border-l-4 border-gold p-6 my-8 rounded-r-lg">
              <p className="text-foreground text-lg font-medium leading-relaxed">
                {section.content}
              </p>
            </div>
          );
        
        case 'list':
          return (
            <div key={index} className="mb-6">
              <p className="text-foreground leading-relaxed mb-4 text-lg">{section.content}</p>
              <ul className="space-y-3 ml-6">
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
            <Link to="/news" className="hover:text-gold transition-colors">News</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{news.headline}</span>
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
            Back to Newsroom
          </Button>
        </div>
      </section>

      {/* Hero Meta Block */}
      <section className="py-12 bg-card border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-4">
              <Badge variant="outline" className="bg-gold/10 border-gold text-gold">
                {news.category}
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-gold mb-6 font-montserrat leading-tight">
              {news.headline}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gold" />
                <span className="font-medium">{format(publishedDate, 'MMMM dd, yyyy')}</span>
              </div>
              {news.author && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gold" />
                  <span>By {news.author}</span>
                </div>
              )}
              {news.source && (
                <div className="flex items-center gap-2">
                  {news.sourceUrl && <ExternalLink className="w-4 h-4 text-gold" />}
                  <span className="font-medium">Source: {news.source}</span>
                </div>
              )}
            </div>

            {/* Share Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
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

            {/* Read Original Button */}
            {news.sourceUrl && (
              <div className="mb-6">
                <a 
                  href={news.sourceUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gold hover:bg-gold-light text-primary-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Original Article
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              {renderContent()}
            </article>

            {/* Key Highlights */}
            {news.keyHighlights && news.keyHighlights.length > 0 && (
              <div className="mt-12 p-6 bg-card border border-gold/20 rounded-xl">
                <h3 className="text-xl font-bold text-gradient-gold mb-4 font-montserrat">Key Highlights</h3>
                <ul className="space-y-3">
                  {news.keyHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-card border-t border-gold/10">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gradient-gold mb-8 font-montserrat text-center">
                Related News
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedNews.map((relatedItem) => {
                  const relatedDate = new Date(relatedItem.publishedAt);
                  
                  return (
                    <article key={relatedItem.id} className="bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 group">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <Badge variant="outline" className="bg-gold/10 border-gold/50 text-gold text-xs">
                          {relatedItem.category}
                        </Badge>
                      </div>

                      {/* Headline */}
                      <Link to={`/news/${relatedItem.slug}`} className="block mb-3">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors line-clamp-2 font-montserrat">
                          {relatedItem.headline}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {relatedItem.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{format(relatedDate, 'MMM dd, yyyy')}</span>
                        {relatedItem.source && <span>{relatedItem.source}</span>}
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

export default NewsDetail;