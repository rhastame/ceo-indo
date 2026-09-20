import React, { useState, useMemo } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbox } from '@/components/Lightbox';
import { photos, albums, getAvailableYears, searchPhotos, Photo } from '@/data/galleryData';
import { Search, Calendar, Camera, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const itemsPerPage = 12;
  const availableYears = getAvailableYears();

  const categories = [
    { id: 'all', name: 'All', count: photos.length },
    ...albums.map(album => ({
      id: album.id,
      name: album.name,
      count: photos.filter(p => p.album === album.id).length
    }))
  ];

  // Filter photos based on active filters
  const filteredPhotos = useMemo(() => {
    let filtered = photos;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(photo => photo.album === activeCategory);
    }

    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(photo => photo.year === parseInt(selectedYear));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(photo => 
        photo.caption.toLowerCase().includes(lowerQuery) ||
        photo.album.toLowerCase().includes(lowerQuery) ||
        photo.alt.toLowerCase().includes(lowerQuery)
      );
    }

    return filtered;
  }, [activeCategory, selectedYear, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPhotos = filteredPhotos.slice(startIndex, startIndex + itemsPerPage);

  const openLightbox = (photoIndex: number) => {
    // Find the global index of the photo in the filtered list
    const globalIndex = photos.findIndex(p => p.id === filteredPhotos[photoIndex].id);
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  const resetFilters = () => {
    setActiveCategory('all');
    setSelectedYear('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Update page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, selectedYear, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-background/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dokumentasi kegiatan Global CEO Indonesia.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 bg-muted/30 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gold text-black'
                      : 'bg-card text-muted-foreground hover:bg-gold/10 hover:text-gold border border-border'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              {/* Year Filter */}
              <div className="relative">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="appearance-none bg-card border border-border rounded-lg px-4 py-2 pr-8 text-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                >
                  <option value="all">All Years</option>
                  {availableYears.map(year => (
                    <option key={year} value={year.toString()}>{year}</option>
                  ))}
                </select>
                <Calendar className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search photos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card border-border focus:ring-gold focus:border-gold"
                />
              </div>

              {/* Reset Filters */}
              {(activeCategory !== 'all' || selectedYear !== 'all' || searchQuery) && (
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  size="sm"
                  className="border-gold text-gold hover:bg-gold/10"
                >
                  Reset Filters
                </Button>
              )}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">
              Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''}
              {activeCategory !== 'all' && (
                <span> in <span className="text-gold font-medium">{categories.find(c => c.id === activeCategory)?.name}</span></span>
              )}
              {selectedYear !== 'all' && (
                <span> from <span className="text-gold font-medium">{selectedYear}</span></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Photos Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search terms.
              </p>
              <Button onClick={resetFilters} className="btn-gold">
                View All Photos
              </Button>
            </div>
          ) : (
            <>
              {/* Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {paginatedPhotos.map((photo, index) => {
                  const album = albums.find(a => a.id === photo.album);
                  return (
                    <Card 
                      key={photo.id}
                      className="bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group cursor-pointer break-inside-avoid"
                      onClick={() => openLightbox(startIndex + index)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          style={{ aspectRatio: `${photo.width}/${photo.height}` }}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-white font-medium text-sm mb-1">{photo.caption}</p>
                                <div className="flex items-center space-x-2 text-xs">
                                  {album && (
                                    <span className="bg-gold/20 text-gold px-2 py-1 rounded">
                                      {album.name}
                                    </span>
                                  )}
                                  <span className="text-white/70">{photo.year}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                  <Button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10 disabled:opacity-50"
                  >
                    Previous
                  </Button>
                  
                  <div className="flex space-x-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          variant={currentPage === pageNum ? "default" : "outline"}
                          size="sm"
                          className={currentPage === pageNum ? "btn-gold" : "border-gold text-gold hover:bg-gold/10"}
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <Button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold/10 disabled:opacity-50"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Album Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gold text-center mb-12">Explore Albums</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {albums.map((album) => (
              <Link key={album.id} to={`/gallery/${album.slug}`}>
                <Card className="bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={album.coverPhoto}
                      alt={album.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{album.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">{album.photoCount} photos</span>
                        <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Need Media Access?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request high-resolution images or additional media materials for your publication or marketing needs.
          </p>
          <Link to="/contact">
            <Button className="btn-gold text-lg px-8 py-3">
              Request Media Access
              <Users className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        photos={photos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      <Footer />
    </div>
  );
};

export default Gallery;