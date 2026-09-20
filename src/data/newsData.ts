export interface NewsData {
  id: string;
  slug: string;
  headline: string;
  category: "Press Release" | "Org Updates" | "Event Recap" | "Policy & Economy" | "Media Coverage";
  excerpt: string;
  content: {
    sections: {
      type: "paragraph" | "heading" | "list" | "image" | "highlight";
      content: string;
      items?: string[]; // for lists
      imageAlt?: string; // for images
    }[];
  };
  publishedAt: string; // ISO date string
  author?: string;
  source?: string; // e.g., "Kompas", "Detik", "Internal"
  sourceUrl?: string; // Link to original article
  coverImage?: string;
  keyHighlights?: string[];
  status: "published" | "draft";
  metaTitle?: string;
  metaDescription?: string;
}

export const newsData: NewsData[] = [
  {
    id: "1",
    slug: "global-ceo-indonesia-launches-digital-hub-jakarta",
    headline: "Global CEO Indonesia Launches Digital Innovation Hub in Jakarta",
    category: "Press Release",
    excerpt: "New 5,000 sqm facility will serve as headquarters for digital transformation initiatives and startup incubation programs across Indonesia.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "JAKARTA, December 12, 2024 - Global CEO Indonesia today announced the official launch of its Digital Innovation Hub, a state-of-the-art facility located in Jakarta's central business district that will serve as the organization's flagship center for digital transformation initiatives."
        },
        {
          type: "highlight",
          content: "The 5,000 square meter facility represents a $15 million investment in Indonesia's digital future and will house startup incubation programs, executive training centers, and collaborative workspaces for member companies."
        },
        {
          type: "paragraph",
          content: "The Digital Innovation Hub will feature cutting-edge technology infrastructure, including AI research labs, blockchain development centers, and IoT testing facilities. The facility is expected to support over 100 startups annually and provide digital transformation consulting services to Global CEO Indonesia's 3,000+ member companies."
        },
        {
          type: "heading",
          content: "Supporting Indonesia's Digital Economy"
        },
        {
          type: "paragraph",
          content: "\"This Digital Innovation Hub represents our commitment to positioning Indonesia as a leader in the digital economy,\" said Budi Karya Sumadi, Chairman of Global CEO Indonesia. \"By bringing together established business leaders with emerging entrepreneurs, we're creating an ecosystem that will drive innovation across all sectors of the Indonesian economy.\""
        },
        {
          type: "list",
          content: "Key features of the Digital Innovation Hub include:",
          items: [
            "Startup incubation spaces for up to 50 companies",
            "Executive education center with capacity for 200 participants", 
            "AI and machine learning research laboratories",
            "Collaborative meeting spaces and event halls",
            "24/7 co-working areas for member companies"
          ]
        },
        {
          type: "paragraph",
          content: "The facility will officially open to members and partners on January 15, 2025, with a grand opening ceremony featuring keynote presentations from leading technology executives and government officials."
        }
      ]
    },
    publishedAt: "2024-12-12",
    author: "Global CEO Indonesia Communications Team",
    source: "Internal",
    coverImage: "/api/placeholder/800/400",
    keyHighlights: [
      "$15 million investment in digital infrastructure",
      "5,000 sqm facility in Jakarta CBD",
      "Support for 100+ startups annually",
      "Serves 3,000+ member companies"
    ],
    status: "published",
    metaTitle: "Global CEO Indonesia Launches Digital Innovation Hub in Jakarta",
    metaDescription: "New $15M digital innovation facility will support startups and drive Indonesia's digital transformation initiatives."
  },
  {
    id: "2",
    slug: "jakarta-business-summit-2025-success",
    headline: "Jakarta Business Summit 2025 Attracts 500+ CEOs, Announces $2B Investment Commitments",
    category: "Event Recap",
    excerpt: "Three-day summit concluded with major investment announcements and partnership agreements among Indonesia's top business leaders.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "The Jakarta Business Summit 2025 concluded successfully on March 17, with over 500 CEOs and business leaders from across Indonesia and Southeast Asia participating in three days of strategic discussions, networking, and partnership development."
        },
        {
          type: "highlight", 
          content: "The summit generated $2 billion in new investment commitments and resulted in 25 major partnership agreements between Indonesian companies and international investors."
        },
        {
          type: "paragraph",
          content: "Key themes included sustainable business practices, digital transformation, and cross-border investment opportunities. The event featured keynote presentations from Fortune 500 CEOs, government ministers, and leading entrepreneurs."
        },
        {
          type: "heading",
          content: "Major Announcements"
        },
        {
          type: "list",
          content: "Significant outcomes from the summit included:",
          items: [
            "TechVision Indonesia announced $500M expansion into renewable energy",
            "Three new unicorn startups received Series C funding totaling $800M",
            "Government unveiled new policies supporting startup development",
            "Regional trade agreements signed with Malaysian and Singaporean partners",
            "Launch of Indonesia-ASEAN Business Council initiative"
          ]
        }
      ]
    },
    publishedAt: "2024-03-18",
    author: "Event Communications Team",
    source: "Internal", 
    coverImage: "/api/placeholder/800/400",
    keyHighlights: [
      "500+ CEO participants",
      "$2B in investment commitments",
      "25 major partnership agreements",
      "Three-day summit in Jakarta"
    ],
    status: "published"
  },
  {
    id: "3",
    slug: "indonesia-startup-funding-reaches-record-high",
    headline: "Indonesian Startups Secure Record $3.2B in Funding During 2024",
    category: "Policy & Economy",
    excerpt: "Government data shows 25% increase in venture capital investments, with fintech and e-commerce leading growth sectors.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Indonesian startups raised a record $3.2 billion in venture capital funding during 2024, representing a 25% increase from the previous year, according to data released by the Ministry of Investment and Coordinating Ministry for Economic Affairs."
        },
        {
          type: "paragraph",
          content: "The growth was primarily driven by investments in fintech, e-commerce, and healthcare technology sectors, with several Indonesian companies achieving unicorn status during the year."
        },
        {
          type: "heading",
          content: "Sector Breakdown"
        },
        {
          type: "list",
          content: "Investment distribution by sector:",
          items: [
            "Fintech: $1.2B (37.5% of total)",
            "E-commerce: $800M (25%)",
            "Healthtech: $400M (12.5%)",
            "Logistics: $350M (11%)",
            "Agtech: $300M (9%)",
            "Other sectors: $150M (5%)"
          ]
        }
      ]
    },
    publishedAt: "2024-01-15",
    source: "Kompas",
    sourceUrl: "https://kompas.com/startup-funding-2024",
    coverImage: "/api/placeholder/800/400", 
    status: "published"
  },
  {
    id: "4",
    slug: "new-board-members-appointed-2025",
    headline: "Global CEO Indonesia Appoints Five New Board Members for 2025-2030 Term",
    category: "Org Updates",
    excerpt: "Expanded board brings expertise in sustainability, technology, and regional development to guide organization's strategic direction.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Global CEO Indonesia has appointed five new board members to serve during the 2025-2030 term, bringing enhanced expertise in sustainability, digital transformation, and regional economic development to the organization's leadership structure."
        },
        {
          type: "paragraph",
          content: "The new board members were selected based on their demonstrated leadership in key growth sectors and their commitment to advancing Indonesia's position in the global economy."
        },
        {
          type: "heading",
          content: "New Board Members"
        },
        {
          type: "list",
          content: "The appointed board members include:",
          items: [
            "Dr. Maya Sari - CEO of GreenTech Indonesia, sustainability expert",
            "Ir. Rudi Prasetyo - Founder of Digital Solutions Asia",
            "Hj. Siti Rahman - Managing Director of Maritime Logistics Corp",
            "Prof. Ahmad Wijaya - Technology Innovation Advisor",
            "Dra. Linda Kusuma - Regional Development Specialist"
          ]
        }
      ]
    },
    publishedAt: "2024-11-20",
    author: "Organizational Development Team",
    source: "Internal",
    status: "published"
  },
  {
    id: "5",
    slug: "ceo-forum-sustainable-business-practices",
    headline: "CEO Forum Focuses on Sustainable Business Practices for Indonesian Companies",
    category: "Media Coverage",
    excerpt: "Leading business publication highlights Global CEO Indonesia's initiative to promote environmental and social responsibility among member companies.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "A recent CEO forum organized by Global CEO Indonesia, focusing on sustainable business practices, has gained significant attention from national and international media outlets for its comprehensive approach to environmental and social responsibility."
        },
        {
          type: "paragraph",
          content: "The forum brought together 150 CEOs to discuss implementation strategies for sustainable business models, ESG reporting standards, and the integration of social impact metrics into corporate performance evaluations."
        },
        {
          type: "heading",
          content: "Media Highlights"
        },
        {
          type: "paragraph",
          content: "The event was covered extensively by major Indonesian business publications, with particular focus on the practical frameworks presented for implementing sustainability initiatives in traditional industries."
        }
      ]
    },
    publishedAt: "2024-10-05",
    source: "Detik Finance",
    sourceUrl: "https://finance.detik.com/ceo-sustainability-forum",
    coverImage: "/api/placeholder/800/400",
    status: "published"
  },
  {
    id: "6",
    slug: "government-partnership-sme-development",
    headline: "Government Partners with Global CEO Indonesia to Accelerate SME Digital Transformation",
    category: "Press Release", 
    excerpt: "New public-private partnership aims to digitize 10,000 small and medium enterprises across Indonesia over the next two years.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "The Indonesian Ministry of Cooperatives and SMEs has announced a strategic partnership with Global CEO Indonesia to accelerate digital transformation among small and medium enterprises (SMEs) nationwide."
        },
        {
          type: "highlight",
          content: "The initiative aims to digitize 10,000 SMEs over the next two years through technology training, digital platform integration, and access to e-commerce marketplaces."
        },
        {
          type: "paragraph",
          content: "Under the partnership, Global CEO Indonesia member companies will provide mentorship, technology resources, and market access to participating SMEs, creating a comprehensive support ecosystem for Indonesia's crucial small business sector."
        }
      ]
    },
    publishedAt: "2024-09-15",
    author: "Government Relations Team", 
    source: "Internal",
    keyHighlights: [
      "10,000 SMEs to be digitized",
      "Two-year partnership program",
      "Government-private sector collaboration",
      "Focus on technology training and market access"
    ],
    status: "published"
  },
  {
    id: "7",
    slug: "quarterly-meeting-economic-outlook-2025",
    headline: "Q4 2024 Member Meeting Addresses Economic Outlook and Investment Strategies for 2025",
    category: "Org Updates",
    excerpt: "Quarterly gathering of 200+ members focused on economic forecasts, market opportunities, and strategic planning for the coming year.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "Global CEO Indonesia's fourth quarter member meeting concluded with comprehensive discussions on economic forecasts, investment strategies, and market opportunities for 2025."
        },
        {
          type: "paragraph",
          content: "Over 200 member CEOs participated in the quarterly gathering, which featured presentations from leading economists, government advisors, and international investment experts."
        }
      ]
    },
    publishedAt: "2024-12-15",
    author: "Member Relations Team",
    source: "Internal",
    status: "published"
  },
  {
    id: "8",
    slug: "indonesia-asean-trade-opportunities-2023",
    headline: "Study Reveals $50B in Untapped ASEAN Trade Opportunities for Indonesian Businesses",
    category: "Policy & Economy",
    excerpt: "Comprehensive research identifies key sectors and markets where Indonesian companies can expand regional presence and increase exports.",
    content: {
      sections: [
        {
          type: "paragraph",
          content: "A comprehensive study commissioned by Global CEO Indonesia in partnership with regional trade organizations has identified over $50 billion in untapped trade opportunities within the ASEAN region for Indonesian businesses."
        },
        {
          type: "paragraph", 
          content: "The research analyzed trade flows, market gaps, and regulatory frameworks across all ASEAN member countries to identify specific sectors where Indonesian companies have competitive advantages but limited market penetration."
        }
      ]
    },
    publishedAt: "2023-08-20",
    source: "Jakarta Post",
    sourceUrl: "https://jakartapost.com/asean-trade-opportunities",
    status: "published"
  }
];

export const newsCategories = [
  "All Categories",
  "Press Release",
  "Org Updates", 
  "Event Recap",
  "Policy & Economy",
  "Media Coverage"
];

export const getNewsYears = (): string[] => {
  const years = newsData
    .map(news => new Date(news.publishedAt).getFullYear())
    .filter((year, index, arr) => arr.indexOf(year) === index)
    .sort((a, b) => b - a); // Sort descending (newest first)
    
  return ["All Years", ...years.map(year => year.toString())];
};

export const getNewsBySlug = (slug: string): NewsData | undefined => {
  return newsData.find(news => news.slug === slug);
};

export const getNewsByCategory = (category: string): NewsData[] => {
  if (category === "All Categories") {
    return newsData.filter(news => news.status === "published");
  }
  return newsData.filter(news => 
    news.category === category && news.status === "published"
  );
};

export const getNewsByYear = (year: string): NewsData[] => {
  if (year === "All Years") {
    return newsData.filter(news => news.status === "published");
  }
  return newsData.filter(news => {
    const newsYear = new Date(news.publishedAt).getFullYear().toString();
    return newsYear === year && news.status === "published";
  });
};

export const getRelatedNews = (currentSlug: string, category: string, limit: number = 3): NewsData[] => {
  return newsData
    .filter(news => 
      news.slug !== currentSlug && 
      news.category === category && 
      news.status === "published"
    )
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};