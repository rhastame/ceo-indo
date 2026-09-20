import ceo1 from "@/assets/ceo-1.jpg";
import ceo2 from "@/assets/ceo-2.jpg";
import ceo3 from "@/assets/ceo-3.jpg";

export interface CEOProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  province: string;
  image: string;
  bio: string;
  expertise: string[];
  contact: {
    email?: string;
    linkedin?: string;
    website?: string;
  };
  highlights: string[];
  companyLink?: string;
}

export const ceoProfiles: CEOProfile[] = [
  {
    id: "1",
    slug: "budi-santoso",
    name: "Budi Santoso",
    title: "CEO & Founder",
    company: "TechVision Indonesia",
    industry: "Technology",
    province: "DKI Jakarta",
    image: ceo1,
    bio: "Visionary leader with over 15 years of experience in technology innovation and digital transformation. Founded TechVision Indonesia in 2015, growing it from a startup to one of Indonesia's leading tech companies.",
    expertise: ["Digital Transformation", "Fintech", "AI & Machine Learning", "Strategic Leadership"],
    contact: {
      email: "budi.santoso@techvision.id",
      linkedin: "https://linkedin.com/in/budisantoso",
      website: "https://techvision.id"
    },
    highlights: ["Forbes 30 Under 30 Indonesia", "Indonesia Tech Innovation Award 2023"],
    companyLink: "https://techvision.id"
  },
  {
    id: "2",
    slug: "sari-wijaya",
    name: "Sari Wijaya",
    title: "Chief Executive Officer",
    company: "GreenEnergy Corp",
    industry: "Renewable Energy",
    province: "Jawa Barat",
    image: ceo2,
    bio: "Pioneering sustainable energy solutions across Indonesia. Led GreenEnergy Corp through major expansion projects, establishing solar farms in 12 provinces and contributing to Indonesia's renewable energy targets.",
    expertise: ["Renewable Energy", "Sustainable Development", "Project Management", "Environmental Leadership"],
    contact: {
      email: "sari.wijaya@greenenergy.co.id",
      linkedin: "https://linkedin.com/in/sariwijaya",
      website: "https://greenenergy.co.id"
    },
    highlights: ["Indonesia Green Leader 2022", "ASEAN Clean Energy Champion"],
    companyLink: "https://greenenergy.co.id"
  },
  {
    id: "3",
    slug: "ahmad-rahman",
    name: "Ahmad Rahman",
    title: "CEO & Managing Director",
    company: "Maritime Solutions",
    industry: "Logistics",
    province: "Sumatera Utara",
    image: ceo3,
    bio: "Expert in maritime logistics and supply chain optimization. Under his leadership, Maritime Solutions has become Indonesia's largest integrated logistics provider, connecting islands across the archipelago.",
    expertise: ["Supply Chain Management", "Maritime Operations", "Business Strategy", "International Trade"],
    contact: {
      email: "ahmad.rahman@maritimesolutions.id",
      linkedin: "https://linkedin.com/in/ahmadrahman",
      website: "https://maritimesolutions.id"
    },
    highlights: ["Indonesia Logistics Excellence Award", "Maritime Industry Pioneer 2023"],
    companyLink: "https://maritimesolutions.id"
  },
  // Additional profiles for pagination testing
  {
    id: "4",
    slug: "maya-kusuma",
    name: "Maya Kusuma",
    title: "President Director",
    company: "InnovateFarm",
    industry: "Agriculture",
    province: "Jawa Tengah",
    image: ceo1,
    bio: "Revolutionary agricultural technology leader transforming traditional farming through precision agriculture and IoT solutions.",
    expertise: ["AgTech", "IoT", "Precision Agriculture", "Innovation Management"],
    contact: {
      email: "maya.kusuma@innovatefarm.id",
      linkedin: "https://linkedin.com/in/mayakusuma"
    },
    highlights: ["Indonesia AgTech Innovation Award", "Smart Farming Pioneer"],
  },
  {
    id: "5",
    slug: "indra-gunawan",
    name: "Indra Gunawan",
    title: "Chief Executive Officer",
    company: "HealthTech Solutions",
    industry: "Healthcare",
    province: "DKI Jakarta",
    image: ceo2,
    bio: "Healthcare innovation expert leading digital health transformation across Indonesia with telemedicine and health analytics platforms.",
    expertise: ["Digital Health", "Telemedicine", "Healthcare Analytics", "Medical Technology"],
    contact: {
      email: "indra.gunawan@healthtech.id",
      website: "https://healthtech.id"
    },
    highlights: ["Indonesia HealthTech Leader 2023", "Digital Health Innovation Award"],
  },
  {
    id: "6",
    slug: "ratna-dewi",
    name: "Ratna Dewi",
    title: "Founder & CEO",
    company: "EduTech Indonesia",
    industry: "Education",
    province: "Jawa Timur",
    image: ceo3,
    bio: "Education technology visionary democratizing access to quality education through innovative online learning platforms.",
    expertise: ["EdTech", "Online Learning", "Educational Psychology", "Platform Development"],
    contact: {
      email: "ratna.dewi@edutech.id",
      linkedin: "https://linkedin.com/in/ratnadewi"
    },
    highlights: ["Education Innovation Excellence", "Indonesia EdTech Pioneer 2022"],
  },
  {
    id: "7",
    slug: "eko-prasetyo",
    name: "Eko Prasetyo",
    title: "Managing Director",
    company: "SmartCity Solutions",
    industry: "Smart City",
    province: "Bali",
    image: ceo1,
    bio: "Urban technology specialist developing smart city solutions for sustainable urban development across Indonesian cities.",
    expertise: ["Smart City", "Urban Planning", "IoT Infrastructure", "Sustainability"],
    contact: {
      email: "eko.prasetyo@smartcity.id",
      website: "https://smartcity.id"
    },
    highlights: ["Smart City Innovation Award", "Urban Technology Leader"],
  },
  {
    id: "8",
    slug: "linda-sari",
    name: "Linda Sari",
    title: "President & CEO",
    company: "FinanceFlow",
    industry: "Financial Services",
    province: "DKI Jakarta",
    image: ceo2,
    bio: "Financial technology innovator revolutionizing digital banking and payment systems for underbanked communities.",
    expertise: ["Fintech", "Digital Banking", "Payment Systems", "Financial Inclusion"],
    contact: {
      email: "linda.sari@financeflow.id",
      linkedin: "https://linkedin.com/in/lindasari"
    },
    highlights: ["Fintech Innovation Excellence", "Financial Inclusion Champion 2023"],
  },
  {
    id: "9",
    slug: "rudi-eko-hartono",
    name: "Rudi Eko Hartono",
    title: "Direktur",
    company: "PT Tudung Putra Putri Jaya",
    industry: "Tourism & Hospitality",
    province: "Yogyakarta",
    image: ceo3,
    bio: "Tourism technology expert creating digital solutions to promote Indonesian cultural heritage and sustainable tourism.",
    expertise: ["Tourism Technology", "Cultural Heritage", "Sustainable Tourism", "Digital Marketing"],
    contact: {
      email: "rudi.hermawan@tourismtech.id",
      website: "https://tourismtech.id"
    },
    highlights: ["Indonesia Tourism Innovation Award", "Cultural Heritage Digital Pioneer"],
  },
  {
    id: "10",
    slug: "diana-kusuma",
    name: "Diana Kusuma",
    title: "Founder & CEO",
    company: "RetailRevolution",
    industry: "Retail & E-commerce",
    province: "Sumatera Selatan",
    image: ceo1,
    bio: "E-commerce innovation leader transforming traditional retail through omnichannel solutions and AI-driven customer experiences.",
    expertise: ["E-commerce", "Retail Technology", "AI Customer Experience", "Omnichannel Strategy"],
    contact: {
      email: "diana.kusuma@retailrev.id",
      linkedin: "https://linkedin.com/in/dianakusuma"
    },
    highlights: ["E-commerce Excellence Award", "Retail Innovation Leader 2023"],
  },
  {
    id: "11",
    slug: "agus-rahman",
    name: "Agus Rahman",
    title: "Managing Director",
    company: "CleanWater Solutions",
    industry: "Water & Sanitation",
    province: "Kalimantan Timur",
    image: ceo2,
    bio: "Water technology specialist providing clean water access to remote Indonesian communities through innovative filtration systems.",
    expertise: ["Water Technology", "Environmental Engineering", "Community Development", "Sustainable Solutions"],
    contact: {
      email: "agus.rahman@cleanwater.id",
      website: "https://cleanwater.id"
    },
    highlights: ["Clean Water Innovation Award", "Environmental Impact Leader"],
  },
  {
    id: "12",
    slug: "dewi-lestari",
    name: "Dewi Lestari",
    title: "President Director",
    company: "FashionForward",
    industry: "Fashion & Apparel",
    province: "Jawa Barat",
    image: ceo3,
    bio: "Sustainable fashion pioneer promoting Indonesian textile heritage while building eco-friendly fashion supply chains.",
    expertise: ["Sustainable Fashion", "Textile Innovation", "Supply Chain Management", "Cultural Heritage"],
    contact: {
      email: "dewi.lestari@fashionforward.id",
      linkedin: "https://linkedin.com/in/dewilestari"
    },
    highlights: ["Sustainable Fashion Leader", "Indonesian Heritage Fashion Award"],
  }
];

export const industries = [
  "All Industries",
  "Technology", 
  "Renewable Energy", 
  "Logistics", 
  "Agriculture", 
  "Healthcare", 
  "Education", 
  "Smart City", 
  "Financial Services", 
  "Tourism & Hospitality", 
  "Retail & E-commerce", 
  "Water & Sanitation", 
  "Fashion & Apparel"
];

export const provinces = [
  "All Provinces",
  "DKI Jakarta",
  "Jawa Barat",
  "Jawa Tengah", 
  "Jawa Timur",
  "Sumatera Utara",
  "Sumatera Selatan",
  "Bali",
  "Yogyakarta",
  "Kalimantan Timur"
];

export const getCEOBySlug = (slug: string): CEOProfile | undefined => {
  return ceoProfiles.find(ceo => ceo.slug === slug);
};