import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lightbox } from '@/components/Lightbox';
import { useParams, Link } from 'react-router-dom';
import { getAlbumBySlug, getPhotosByAlbum, photos } from '@/data/galleryData';
import { ArrowLeft, Camera, Users } from 'lucide-react';

const GalleryAlbum = () => {
  const { album: albumSlug } = useParams<{ album: string }>();
  const album = albumSlug ? getAlbumBySlug(albumSlug) : null;
  const albumPhotos = albumSlug ? getPhotosByAlbum(albumSlug) : [];
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!album || !albumSlug) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Album Not Found</h1>
          <p className="text-muted-foreground mb-8">The album you're looking for doesn't exist.</p>
          <Link to="/gallery">
            <Button className="btn-gold">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Gallery
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const openLightbox = (photoIndex: number) => {
    // Find the global index of the photo in the complete photos array
    const globalIndex = photos.findIndex(p => p.id === albumPhotos[photoIndex].id);
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="py-6 bg-muted/20 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">Home</Link>
            <span className="text-muted-foreground">→</span>
            <Link to="/gallery" className="text-muted-foreground hover:text-gold transition-colors">Gallery</Link>
            <span className="text-muted-foreground">→</span>
            <span className="text-foreground font-medium">{album.name}</span>
          </div>
        </div>
      </section>

      {/* Album Header */}
      <section className="py-16 bg-gradient-to-br from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/gallery">
              <Button variant="outline" className="mb-8 border-gold text-gold hover:bg-gold/10">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Gallery
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">
              {album.name}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {album.description}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>{albumPhotos.length} photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Album Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {albumPhotos.length === 0 ? (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No Photos in This Album</h3>
              <p className="text-muted-foreground">Check back later for updates.</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {albumPhotos.map((photo, index) => (
                <Card 
                  key={photo.id}
                  className="bg-black border border-gold/30 hover:border-gold/60 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 group cursor-pointer break-inside-avoid"
                  onClick={() => openLightbox(index)}
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
                            <span className="text-white/70 text-xs">{photo.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-y border-gold/30">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Need Media Access?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Request high-resolution images from this album for your publication or marketing needs.
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

export default GalleryAlbum;