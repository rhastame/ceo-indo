export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  category: "Leadership" | "Strategy" | "Innovation" | "Economy" | "Community";
  excerpt: string;
  content: {
    sections: {
      type: "paragraph" | "heading" | "quote" | "list" | "image";
      content: string;
      items?: string[]; // for lists
      imageAlt?: string; // for images
      author?: string; // for quotes
    }[];
  };
  coverImage: string;
  author: {
    name: string;
    role: string;
    company: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string; // ISO date string
  readingTime: number; // minutes
  tags: string[];
  status: "published" | "draft";
  metaTitle?: string;
  metaDescription?: string;
}

export const articlesData: ArticleData[] = [
  {
    id: "1",
    slug: "digital-transformation-leadership-indonesia",
    title: "Leading Digital Transformation in Indonesian Enterprises",
    category: "Leadership",
    excerpt: "How Indonesian CEOs are successfully navigating digital transformation challenges and driving innovation across traditional industries.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Digital transformation has become more than just a buzzword in Indonesia's business landscape. As the world's fourth most populous country embraces the digital age, CEOs across the archipelago are facing unprecedented challenges and opportunities in modernizing their enterprises."
        },
        {
          type: "heading",
          content: "The Current State of Digital Adoption"
        },
        {
          type: "paragraph", 
          content: "Recent studies show that 73% of Indonesian companies have accelerated their digital transformation initiatives since 2020. However, the journey is far from uniform across industries and regions."
        },
        {
          type: "quote",
          content: "The key to successful digital transformation isn't just technology—it's about changing mindsets and building a culture that embraces continuous learning.",
          author: "Budi Santoso, CEO TechVision Indonesia"
        },
        {
          type: "heading",
          content: "Key Success Factors"
        },
        {
          type: "list",
          content: "Based on interviews with 50+ Indonesian CEOs, the following factors emerged as critical:",
          items: [
            "Strong leadership commitment from the top",
            "Investment in employee digital literacy programs",
            "Strategic partnerships with technology providers",
            "Customer-centric approach to digital solutions",
            "Agile organizational structures that can adapt quickly"
          ]
        },
        {
          type: "paragraph",
          content: "Companies that have successfully implemented these factors report 40% faster time-to-market for new products and 30% improvement in customer satisfaction scores."
        },
        {
          type: "heading",
          content: "Overcoming Cultural Resistance"
        },
        {
          type: "paragraph",
          content: "One of the biggest challenges Indonesian leaders face is managing cultural resistance to change. Traditional business practices run deep, and convincing teams to embrace new ways of working requires careful change management."
        },
        {
          type: "paragraph",
          content: "Successful leaders emphasize the importance of gradual implementation, extensive training programs, and celebrating early wins to build momentum across the organization."
        }
      ]
    },
    coverImage: "/api/placeholder/800/400",
    author: {
      name: "Dr. Sarah Wijaya",
      role: "Technology Strategy Consultant", 
      company: "Digital Indonesia Advisory",
      avatar: "/api/placeholder/80/80",
      bio: "Dr. Sarah Wijaya is a leading expert in digital transformation with over 15 years of experience advising Indonesian enterprises. She holds a PhD in Information Systems from University of Indonesia."
    },
    publishedAt: "2024-12-10",
    readingTime: 8,
    tags: ["Digital Transformation", "Leadership", "Technology", "Change Management", "Indonesia"],
    status: "published",
    metaTitle: "Digital Transformation Leadership Guide for Indonesian CEOs",
    metaDescription: "Learn how Indonesian CEOs are successfully leading digital transformation initiatives across traditional industries and driving innovation."
  },
  {
    id: "2", 
    slug: "sustainable-business-strategies-2025",
    title: "Sustainable Business Strategies for Indonesia's Economic Growth",
    category: "Strategy",
    excerpt: "Exploring how Indonesian companies are integrating sustainability into their core business strategies while maintaining profitability and growth.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "As global awareness of environmental and social issues continues to grow, Indonesian businesses are increasingly recognizing that sustainability isn't just good for the planet—it's good for business too."
        },
        {
          type: "heading",
          content: "The Business Case for Sustainability"
        },
        {
          type: "paragraph",
          content: "Companies that have integrated sustainability into their core strategies report significant benefits including cost savings, improved brand reputation, better employee retention, and access to new markets and investment opportunities."
        },
        {
          type: "quote",
          content: "Sustainability is not a cost center—it's an innovation driver that opens up new revenue streams and competitive advantages.",
          author: "Sari Wijaya, CEO GreenEnergy Corp"
        },
        {
          type: "heading",
          content: "Implementation Framework"
        },
        {
          type: "list",
          content: "A practical framework for implementing sustainable business practices:",
          items: [
            "Conduct comprehensive environmental and social impact assessment",
            "Set measurable sustainability goals aligned with UN SDGs", 
            "Integrate sustainability metrics into executive compensation",
            "Engage stakeholders including employees, customers, and communities",
            "Regularly report on progress and continuously improve"
          ]
        },
        {
          type: "paragraph",
          content: "Leading Indonesian companies are already seeing results from these approaches, with some reporting 25% reduction in operational costs and 35% improvement in employee engagement scores."
        }
      ]
    },
    coverImage: "/api/placeholder/800/400",
    author: {
      name: "Prof. Ahmad Raharjo",
      role: "Sustainability Expert",
      company: "Indonesia Sustainability Institute", 
      avatar: "/api/placeholder/80/80",
      bio: "Professor Ahmad Raharjo is a renowned sustainability expert and former advisor to the Indonesian Ministry of Environment. He has authored 12 books on sustainable business practices."
    },
    publishedAt: "2024-12-08",
    readingTime: 6,
    tags: ["Sustainability", "ESG", "Business Strategy", "Green Business", "Corporate Responsibility"],
    status: "published"
  },
  {
    id: "3",
    slug: "ai-innovation-manufacturing-sector",
    title: "AI-Driven Innovation Transforming Indonesia's Manufacturing Sector",
    category: "Innovation", 
    excerpt: "How artificial intelligence and machine learning are revolutionizing manufacturing processes across Indonesia, from predictive maintenance to quality control.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Indonesia's manufacturing sector, which contributes approximately 20% to the nation's GDP, is experiencing a technological revolution driven by artificial intelligence and machine learning innovations."
        },
        {
          type: "heading",
          content: "AI Applications in Manufacturing"
        },
        {
          type: "paragraph",
          content: "From predictive maintenance that reduces downtime by 40% to quality control systems that achieve 99.7% accuracy, AI is transforming how Indonesian manufacturers operate."
        },
        {
          type: "list",
          content: "Key AI applications currently being implemented:",
          items: [
            "Predictive maintenance using IoT sensors and machine learning",
            "Computer vision for automated quality inspection",
            "Supply chain optimization through demand forecasting",
            "Energy management systems for cost reduction",
            "Robotic process automation for repetitive tasks"
          ]
        },
        {
          type: "quote",
          content: "AI has helped us reduce waste by 30% and increase production efficiency by 45%. The ROI was achieved within 18 months of implementation.",
          author: "Linda Kusuma, Manufacturing Director"
        }
      ]
    },
    coverImage: "/api/placeholder/800/400",
    author: {
      name: "Dr. Rudi Hartono",
      role: "AI Research Director",
      company: "Indonesia Tech Institute",
      avatar: "/api/placeholder/80/80", 
      bio: "Dr. Rudi Hartono leads AI research initiatives focused on industrial applications. He has 20+ years of experience in manufacturing technology and holds multiple patents in automation systems."
    },
    publishedAt: "2024-12-05",
    readingTime: 7,
    tags: ["Artificial Intelligence", "Manufacturing", "Industry 4.0", "Automation", "Innovation"],
    status: "published"
  },
  {
    id: "4",
    slug: "indonesia-startup-ecosystem-2025-outlook",
    title: "Indonesia's Startup Ecosystem: 2025 Market Outlook and Opportunities",
    category: "Economy",
    excerpt: "An in-depth analysis of Indonesia's thriving startup ecosystem, investment trends, and emerging opportunities for entrepreneurs and investors in 2025.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Indonesia's startup ecosystem has matured significantly over the past decade, evolving from a nascent market to one of Southeast Asia's most dynamic entrepreneurial landscapes. As we look toward 2025, several trends are shaping the future of innovation in the archipelago."
        },
        {
          type: "heading",
          content: "Investment Landscape"
        },
        {
          type: "paragraph",
          content: "Venture capital investments in Indonesian startups reached $3.2 billion in 2024, representing a 25% increase from the previous year. This growth is driven by both domestic and international investors recognizing the market's potential."
        },
        {
          type: "list",
          content: "Key investment sectors showing strong growth:",
          items: [
            "Fintech and digital banking solutions",
            "E-commerce and marketplace platforms", 
            "Healthtech and telemedicine",
            "Agtech and sustainable agriculture",
            "Logistics and supply chain optimization"
          ]
        }
      ]
    },
    coverImage: "/api/placeholder/800/400",
    author: {
      name: "Maya Purnama",
      role: "Venture Capital Partner",
      company: "Indonesia Growth Partners",
      avatar: "/api/placeholder/80/80",
      bio: "Maya Purnama is a partner at Indonesia Growth Partners, focusing on early-stage technology investments. She has invested in over 30 Indonesian startups and serves on multiple startup boards."
    },
    publishedAt: "2024-12-03",
    readingTime: 9,
    tags: ["Startups", "Venture Capital", "Investment", "Entrepreneurship", "Market Analysis"],
    status: "published"
  },
  {
    id: "5",
    slug: "building-resilient-business-communities",
    title: "Building Resilient Business Communities in Post-Pandemic Indonesia",
    category: "Community",
    excerpt: "How Indonesian business leaders are fostering collaboration, knowledge sharing, and mutual support to create more resilient commercial ecosystems.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "The COVID-19 pandemic tested the resilience of business communities worldwide, but it also highlighted the critical importance of collaboration, knowledge sharing, and mutual support among business leaders."
        },
        {
          type: "heading",
          content: "The Power of Collaborative Networks"
        },
        {
          type: "paragraph",
          content: "Indonesian business communities that weathered the pandemic most successfully were those with strong collaborative networks, shared resources, and collective problem-solving capabilities."
        },
        {
          type: "quote",
          content: "Individual businesses may compete, but as a community, we must collaborate to create an environment where everyone can thrive.",
          author: "Ahmad Rahman, CEO Maritime Solutions"
        }
      ]
    },
    coverImage: "/api/placeholder/800/400",
    author: {
      name: "Dewi Sartika",
      role: "Community Development Specialist",
      company: "Indonesia Business Networks",
      avatar: "/api/placeholder/80/80",
      bio: "Dewi Sartika has spent 12 years building and strengthening business communities across Indonesia. She specializes in collaborative frameworks and community resilience strategies."
    },
    publishedAt: "2024-12-01",
    readingTime: 5,
    tags: ["Community Building", "Collaboration", "Business Networks", "Resilience", "Post-Pandemic"],
    status: "published"
  },
  {
    id: "6",
    slug: "financial-inclusion-digital-banking",
    title: "Driving Financial Inclusion Through Digital Banking Innovation",
    category: "Innovation",
    excerpt: "How Indonesian fintech companies are leveraging technology to provide banking services to underserved populations and drive financial inclusion.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Indonesia's vast archipelago and diverse population present unique challenges for traditional banking, but digital innovation is opening new pathways to financial inclusion for millions of previously underserved Indonesians."
        },
        {
          type: "heading", 
          content: "The Digital Banking Revolution"
        },
        {
          type: "paragraph",
          content: "Digital banks and fintech companies are reaching remote islands and rural communities where traditional brick-and-mortar banks couldn't establish profitable operations."
        }
      ]
    },
    coverImage: "/api/placeholder/800/400",
    author: {
      name: "Indra Wijaya",
      role: "Fintech Innovation Lead",
      company: "Digital Finance Indonesia",
      avatar: "/api/placeholder/80/80", 
      bio: "Indra Wijaya leads digital innovation initiatives focused on financial inclusion. He has launched multiple successful fintech products serving rural Indonesian communities."
    },
    publishedAt: "2024-11-28", 
    readingTime: 6,
    tags: ["Financial Inclusion", "Digital Banking", "Fintech", "Innovation", "Rural Development"],
    status: "published"
  }
];

export const categories = [
  "All Categories",
  "Leadership", 
  "Strategy",
  "Innovation", 
  "Economy",
  "Community"
];

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articlesData.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: string): ArticleData[] => {
  if (category === "All Categories") {
    return articlesData.filter(article => article.status === "published");
  }
  return articlesData.filter(article => 
    article.category === category && article.status === "published"
  );
};

export const getRelatedArticles = (currentSlug: string, category: string, limit: number = 3): ArticleData[] => {
  return articlesData
    .filter(article => 
      article.slug !== currentSlug && 
      article.category === category && 
      article.status === "published"
    )
    .slice(0, limit);
};