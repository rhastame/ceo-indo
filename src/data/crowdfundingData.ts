export interface CrowdfundingProject {
  id: string;
  slug: string;
  name: string;
  location: string;
  industry: string;
  targetFunding: number;
  raisedFunding: number;
  daysLeft: number;
  description: string;
  founder: {
    name: string;
    role: string;
    bio: string;
    avatar?: string;
  };
  fundingBreakdown: {
    production: number;
    marketing: number;
    operations: number;
    reserve: number;
  };
  projectedROI: string;
  risks: string[];
  coverImage?: string;
}

export const crowdfundingProjects: CrowdfundingProject[] = [
  {
    id: "1",
    slug: "kopi-nusantara-premium",
    name: "Kopi Nusantara Premium",
    location: "Bandung, Jawa Barat",
    industry: "F&B / Agribisnis",
    targetFunding: 500000000,
    raisedFunding: 320000000,
    daysLeft: 45,
    description: "Kopi premium dari perkebunan lokal dengan proses modern dan sustainable farming. Menghadirkan cita rasa kopi Indonesia berkualitas tinggi untuk pasar domestik dan ekspor.",
    founder: {
      name: "Ahmad Rizki",
      role: "Founder & CEO",
      bio: "Pengusaha muda dengan pengalaman 8 tahun di industri kopi. Alumni IPB dengan spesialisasi agribisnis."
    },
    fundingBreakdown: {
      production: 40,
      marketing: 30,
      operations: 20,
      reserve: 10
    },
    projectedROI: "15-20% dalam 18 bulan dengan ekspansi ke 5 kota besar",
    risks: [
      "Fluktuasi harga komoditas kopi",
      "Kompetisi pasar yang ketat",
      "Cuaca dan kondisi alam yang mempengaruhi hasil panen"
    ]
  },
  {
    id: "2",
    slug: "fintech-umkm-digital",
    name: "FinTech UMKM Digital",
    location: "Jakarta Selatan",
    industry: "Teknologi / Fintech",
    targetFunding: 750000000,
    raisedFunding: 425000000,
    daysLeft: 32,
    description: "Platform finansial teknologi yang memudahkan UMKM dalam akses permodalan, pembayaran digital, dan manajemen keuangan dengan teknologi AI dan blockchain.",
    founder: {
      name: "Sarah Indira",
      role: "Founder & CTO",
      bio: "Tech entrepreneur dengan pengalaman 10+ tahun di Silicon Valley. Lulusan Stanford University dengan fokus pada financial technology."
    },
    fundingBreakdown: {
      production: 50,
      marketing: 25,
      operations: 15,
      reserve: 10
    },
    projectedROI: "25-35% dalam 24 bulan dengan target 10,000 UMKM pengguna",
    risks: [
      "Regulasi fintech yang berubah",
      "Kompetisi dengan pemain besar",
      "Adopsi teknologi oleh UMKM tradisional"
    ]
  },
  {
    id: "3",
    slug: "fashion-sustainable-indonesia",
    name: "Fashion Sustainable Indonesia",
    location: "Yogyakarta",
    industry: "Fashion / Tekstil",
    targetFunding: 350000000,
    raisedFunding: 180000000,
    daysLeft: 60,
    description: "Brand fashion berkelanjutan dengan menggunakan bahan organik dan mendukung pengrajin lokal. Menggabungkan desain modern dengan nilai-nilai tradisional Indonesia.",
    founder: {
      name: "Maya Sari",
      role: "Creative Director",
      bio: "Designer fashion dengan pengalaman internasional. Lulusan London College of Fashion dengan passion untuk sustainable fashion."
    },
    fundingBreakdown: {
      production: 35,
      marketing: 35,
      operations: 20,
      reserve: 10
    },
    projectedROI: "18-22% dalam 20 bulan dengan ekspansi online dan offline",
    risks: [
      "Tren fashion yang cepat berubah",
      "Supply chain bahan sustainable",
      "Kompetisi dengan fast fashion"
    ]
  },
  {
    id: "4",
    slug: "agritech-smart-farming",
    name: "AgriTech Smart Farming",
    location: "Malang, Jawa Timur",
    industry: "Agribisnis / Teknologi",
    targetFunding: 600000000,
    raisedFunding: 150000000,
    daysLeft: 75,
    description: "Solusi pertanian cerdas dengan IoT sensors, automated irrigation, dan AI-powered crop monitoring untuk meningkatkan produktivitas dan efisiensi petani.",
    founder: {
      name: "Budi Hartono",
      role: "Founder & CEO",
      bio: "Insinyur pertanian dengan pengalaman R&D di multinational agribusiness. Alumni Universitas Brawijaya dengan fokus precision agriculture."
    },
    fundingBreakdown: {
      production: 45,
      marketing: 20,
      operations: 25,
      reserve: 10
    },
    projectedROI: "20-30% dalam 30 bulan dengan target 1000 petani mitra",
    risks: [
      "Adopsi teknologi oleh petani tradisional",
      "Infrastruktur internet di daerah rural",
      "Biaya maintenance teknologi"
    ]
  },
  {
    id: "5",
    slug: "edtech-skill-development",
    name: "EdTech Skill Development",
    location: "Surabaya, Jawa Timur",
    industry: "Teknologi / Pendidikan",
    targetFunding: 450000000,
    raisedFunding: 270000000,
    daysLeft: 28,
    description: "Platform pembelajaran online yang fokus pada skill development dan professional certification dengan mentor industri dan kurikulum yang selalu update.",
    founder: {
      name: "Andi Wijaya",
      role: "Founder & CEO",
      bio: "Educator dan tech entrepreneur dengan pengalaman 12 tahun di industri pendidikan. Lulusan ITB dengan passion untuk democratizing education."
    },
    fundingBreakdown: {
      production: 40,
      marketing: 30,
      operations: 20,
      reserve: 10
    },
    projectedROI: "22-28% dalam 18 bulan dengan target 50,000 active users",
    risks: [
      "Kompetisi dengan platform global",
      "Kualitas konten dan mentor",
      "User retention dan engagement"
    ]
  }
];

export const getCrowdfundingProject = (slug: string): CrowdfundingProject | undefined => {
  return crowdfundingProjects.find(project => project.slug === slug);
};

export const getRelatedProjects = (currentSlug: string, limit: number = 3): CrowdfundingProject[] => {
  return crowdfundingProjects
    .filter(project => project.slug !== currentSlug)
    .slice(0, limit);
};