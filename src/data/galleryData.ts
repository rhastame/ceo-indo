export interface Photo {
  id: string;
  src: string;
  alt: string;
  album: string;
  year: number;
  caption: string;
  width: number;
  height: number;
}

export interface Album {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverPhoto: string;
  photoCount: number;
}

export const albums: Album[] = [
  {
    id: "events",
    name: "Events",
    slug: "events",
    description: "Dokumentasi berbagai acara dan konferensi CEO Indonesia",
    coverPhoto: "/api/placeholder/800/600",
    photoCount: 24
  },
  {
    id: "csr",
    name: "CSR",  
    slug: "csr",
    description: "Kegiatan Corporate Social Responsibility dan program sosial",
    coverPhoto: "/api/placeholder/800/600",
    photoCount: 18
  },
  {
    id: "gathering",
    name: "Gathering",
    slug: "gathering", 
    description: "Networking dan pertemuan informal antar anggota",
    coverPhoto: "/api/placeholder/800/600",
    photoCount: 15
  },
  {
    id: "international",
    name: "International",
    slug: "international",
    description: "Kegiatan internasional dan kerjasama luar negeri",
    coverPhoto: "/api/placeholder/800/600",
    photoCount: 12
  },
  {
    id: "behind-scenes",
    name: "Behind the Scenes", 
    slug: "behind-scenes",
    description: "Di balik layar persiapan acara dan kegiatan",
    coverPhoto: "/api/placeholder/800/600",
    photoCount: 21
  }
];

export const photos: Photo[] = [
  // Events
  {
    id: "1",
    src: "/api/placeholder/800/600",
    alt: "National CEO Conference 2025 - Opening Ceremony",
    album: "events",
    year: 2025,
    caption: "National CEO Conference 2025 - Opening Ceremony",
    width: 800,
    height: 600
  },
  {
    id: "2", 
    src: "/api/placeholder/600/800",
    alt: "Keynote Speaker at CEO Conference",
    album: "events",
    year: 2025,
    caption: "Keynote Speaker at CEO Conference",
    width: 600,
    height: 800
  },
  {
    id: "3",
    src: "/api/placeholder/900/500",
    alt: "Panel Discussion - Future of Indonesian Business",
    album: "events",
    year: 2025,
    caption: "Panel Discussion - Future of Indonesian Business",
    width: 900,
    height: 500
  },
  {
    id: "4",
    src: "/api/placeholder/700/700",
    alt: "CEO Awards Night 2024",
    album: "events", 
    year: 2024,
    caption: "CEO Awards Night 2024",
    width: 700,
    height: 700
  },
  {
    id: "5",
    src: "/api/placeholder/800/500",
    alt: "Leadership Summit Jakarta",
    album: "events",
    year: 2024,
    caption: "Leadership Summit Jakarta",
    width: 800,
    height: 500
  },
  {
    id: "6",
    src: "/api/placeholder/600/700",
    alt: "Executive Roundtable Discussion",
    album: "events",
    year: 2024,
    caption: "Executive Roundtable Discussion",
    width: 600,
    height: 700
  },

  // CSR
  {
    id: "7",
    src: "/api/placeholder/800/600",
    alt: "Gerakan Beasiswa Pemimpin Muda",
    album: "csr",
    year: 2024,
    caption: "Gerakan Beasiswa Pemimpin Muda",
    width: 800,
    height: 600
  },
  {
    id: "8",
    src: "/api/placeholder/600/800",
    alt: "Community Development Program",
    album: "csr",
    year: 2024,
    caption: "Community Development Program",
    width: 600,
    height: 800
  },
  {
    id: "9",
    src: "/api/placeholder/700/500",
    alt: "Environmental Conservation Initiative",
    album: "csr",
    year: 2024,
    caption: "Environmental Conservation Initiative",
    width: 700,
    height: 500
  },
  {
    id: "10",
    src: "/api/placeholder/800/700",
    alt: "Healthcare Support Program",
    album: "csr",
    year: 2023,
    caption: "Healthcare Support Program",
    width: 800,
    height: 700
  },
  {
    id: "11",
    src: "/api/placeholder/600/600",
    alt: "Education Fund Distribution",
    album: "csr",
    year: 2023,
    caption: "Education Fund Distribution",
    width: 600,
    height: 600
  },

  // Gathering
  {
    id: "12",
    src: "/api/placeholder/800/600",
    alt: "Leaders Networking Night",
    album: "gathering",
    year: 2024,
    caption: "Leaders Networking Night",
    width: 800,
    height: 600
  },
  {
    id: "13",
    src: "/api/placeholder/600/800",
    alt: "Monthly CEO Breakfast Meeting",
    album: "gathering",
    year: 2024,
    caption: "Monthly CEO Breakfast Meeting",
    width: 600,
    height: 800
  },
  {
    id: "14",
    src: "/api/placeholder/900/600",
    alt: "Golf Tournament & Networking",
    album: "gathering",
    year: 2024,
    caption: "Golf Tournament & Networking",
    width: 900,
    height: 600
  },
  {
    id: "15",
    src: "/api/placeholder/700/700",
    alt: "Executive Dinner",
    album: "gathering",
    year: 2023,
    caption: "Executive Dinner",
    width: 700,
    height: 700
  },
  {
    id: "16",
    src: "/api/placeholder/800/500",
    alt: "Weekend Leadership Retreat",
    album: "gathering",
    year: 2023,
    caption: "Weekend Leadership Retreat",
    width: 800,
    height: 500
  },

  // International
  {
    id: "17",
    src: "/api/placeholder/800/600",
    alt: "Singapore CEO Roundtable",
    album: "international",
    year: 2025,
    caption: "Singapore CEO Roundtable",
    width: 800,
    height: 600
  },
  {
    id: "18",
    src: "/api/placeholder/600/800",
    alt: "Malaysia Business Forum",
    album: "international",
    year: 2024,
    caption: "Malaysia Business Forum",
    width: 600,
    height: 800
  },
  {
    id: "19",
    src: "/api/placeholder/900/500",
    alt: "Australia Trade Mission",
    album: "international",
    year: 2024,
    caption: "Australia Trade Mission",
    width: 900,
    height: 500
  },
  {
    id: "20",
    src: "/api/placeholder/700/600",
    alt: "China Business Partnership Summit",
    album: "international",
    year: 2024,
    caption: "China Business Partnership Summit",
    width: 700,
    height: 600
  },
  {
    id: "21",
    src: "/api/placeholder/800/700",
    alt: "USA Executive Exchange Program",
    album: "international",
    year: 2023,
    caption: "USA Executive Exchange Program",
    width: 800,
    height: 700
  },

  // Behind the Scenes
  {
    id: "22",
    src: "/api/placeholder/800/600",
    alt: "Production & Rehearsal",
    album: "behind-scenes",
    year: 2025,
    caption: "Production & Rehearsal",
    width: 800,
    height: 600
  },
  {
    id: "23",
    src: "/api/placeholder/600/800",
    alt: "Event Setup and Preparation",
    album: "behind-scenes",
    year: 2025,
    caption: "Event Setup and Preparation",
    width: 600,
    height: 800
  },
  {
    id: "24",
    src: "/api/placeholder/700/500",
    alt: "Team Meeting and Planning",
    album: "behind-scenes",
    year: 2024,
    caption: "Team Meeting and Planning",
    width: 700,
    height: 500
  },
  {
    id: "25",
    src: "/api/placeholder/800/800",
    alt: "Venue Decoration Process",
    album: "behind-scenes",
    year: 2024,
    caption: "Venue Decoration Process",
    width: 800,
    height: 800
  },
  {
    id: "26",
    src: "/api/placeholder/600/600",
    alt: "Sound Check and Technical Rehearsal",
    album: "behind-scenes",
    year: 2024,
    caption: "Sound Check and Technical Rehearsal",
    width: 600,
    height: 600
  },
  {
    id: "27",
    src: "/api/placeholder/900/600",
    alt: "Catering and Hospitality Preparation",
    album: "behind-scenes",
    year: 2023,
    caption: "Catering and Hospitality Preparation",
    width: 900,
    height: 600
  }
];

export const getPhotosByAlbum = (albumSlug: string): Photo[] => {
  return photos.filter(photo => photo.album === albumSlug);
};

export const getPhotosByYear = (year: number): Photo[] => {
  return photos.filter(photo => photo.year === year);
};

export const getAlbumBySlug = (slug: string): Album | undefined => {
  return albums.find(album => album.slug === slug);
};

export const getAvailableYears = (): number[] => {
  const years = [...new Set(photos.map(photo => photo.year))];
  return years.sort((a, b) => b - a); // Descending order
};

export const searchPhotos = (query: string): Photo[] => {
  if (!query.trim()) return photos;
  
  const lowerQuery = query.toLowerCase();
  return photos.filter(photo => 
    photo.caption.toLowerCase().includes(lowerQuery) ||
    photo.album.toLowerCase().includes(lowerQuery) ||
    photo.alt.toLowerCase().includes(lowerQuery)
  );
};