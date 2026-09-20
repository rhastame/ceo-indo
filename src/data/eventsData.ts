export interface EventData {
  id: string;
  slug: string;
  title: string;
  category: "Roundtable" | "Conference" | "Workshop" | "Networking" | "Seminar";
  date: string; // ISO date string
  time: string; // e.g., "09:00 - 17:00 WIB"
  location: {
    city: string;
    venue: string;
    address: string;
  };
  shortDescription: string;
  overview: string[];
  agenda: {
    time: string;
    session: string;
    speaker?: string;
  }[];
  speakers: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  }[];
  notes: string[];
  capacity: number;
  registeredCount: number;
  status: "upcoming" | "past" | "cancelled";
  bannerImage?: string;
}

export const eventsData: EventData[] = [
  {
    id: "1",
    slug: "jakarta-business-summit-2025",
    title: "Jakarta Business Summit 2025",
    category: "Conference",
    date: "2025-03-15",
    time: "09:00 - 17:00 WIB",
    location: {
      city: "Jakarta",
      venue: "Grand Ballroom Hotel Indonesia Kempinski",
      address: "Jl. M.H. Thamrin No.1, Jakarta Pusat"
    },
    shortDescription: "Annual gathering of Indonesia's top business leaders to discuss economic trends and opportunities.",
    overview: [
      "Join Indonesia's most influential CEOs and business leaders for a day of strategic discussions on the country's economic future. This premier summit brings together 500+ executives to share insights on digital transformation, sustainable business practices, and market opportunities in Southeast Asia.",
      "Network with industry pioneers, participate in interactive workshops, and gain exclusive access to market research and investment opportunities. The summit features keynote presentations from Fortune 500 CEOs and government leaders."
    ],
    agenda: [
      { time: "08:00 - 09:00", session: "Registration & Welcome Coffee" },
      { time: "09:00 - 09:30", session: "Opening Remarks", speaker: "Budi Santoso, CEO TechVision Indonesia" },
      { time: "09:30 - 10:30", session: "Keynote: Digital Economy Transformation", speaker: "Sari Wijaya, CEO GreenEnergy Corp" },
      { time: "10:30 - 11:00", session: "Coffee Break & Networking" },
      { time: "11:00 - 12:00", session: "Panel: Sustainable Business Practices" },
      { time: "12:00 - 13:30", session: "Networking Lunch" },
      { time: "13:30 - 14:30", session: "Fireside Chat: Investment Opportunities" },
      { time: "14:30 - 15:30", session: "Workshop: Strategic Planning 2025" },
      { time: "15:30 - 16:00", session: "Coffee Break" },
      { time: "16:00 - 17:00", session: "Closing Remarks & Awards Ceremony" }
    ],
    speakers: [
      { name: "Budi Santoso", title: "CEO & Founder", company: "TechVision Indonesia" },
      { name: "Sari Wijaya", title: "Chief Executive Officer", company: "GreenEnergy Corp" },
      { name: "Ahmad Rahman", title: "CEO & Managing Director", company: "Maritime Solutions" },
      { name: "Dr. Maya Kusuma", title: "President Director", company: "InnovateFarm" }
    ],
    notes: [
      "Business formal dress code required",
      "Limited to 500 participants",
      "Lunch and refreshments included",
      "Certificate of attendance provided",
      "Simultaneous translation available"
    ],
    capacity: 500,
    registeredCount: 342,
    status: "upcoming"
  },
  {
    id: "2",
    slug: "surabaya-ceo-roundtable",
    title: "Surabaya CEO Roundtable",
    category: "Roundtable",
    date: "2025-02-20",
    time: "14:00 - 17:00 WIB",
    location: {
      city: "Surabaya",
      venue: "Shangri-La Hotel Surabaya",
      address: "Jl. Mayjen Sungkono No.120, Surabaya"
    },
    shortDescription: "Exclusive roundtable discussion for East Java business leaders on regional economic development.",
    overview: [
      "An intimate gathering of 30 selected CEOs from East Java to discuss regional economic challenges and opportunities. This exclusive roundtable focuses on collaborative strategies for business growth and infrastructure development in Eastern Indonesia.",
      "Participants will engage in moderated discussions on trade corridors, manufacturing competitiveness, and cross-border investment opportunities with neighboring countries."
    ],
    agenda: [
      { time: "13:30 - 14:00", session: "Registration & Welcome Reception" },
      { time: "14:00 - 14:15", session: "Welcome & Introductions" },
      { time: "14:15 - 15:15", session: "Discussion: Regional Economic Outlook" },
      { time: "15:15 - 15:30", session: "Coffee Break" },
      { time: "15:30 - 16:30", session: "Workshop: Infrastructure Investment" },
      { time: "16:30 - 17:00", session: "Action Planning & Next Steps" }
    ],
    speakers: [
      { name: "Indra Gunawan", title: "CEO", company: "HealthTech Solutions" },
      { name: "Linda Sari", title: "President & CEO", company: "FinanceFlow" }
    ],
    notes: [
      "Invitation-only event",
      "Maximum 30 participants",
      "Business casual dress code",
      "Light refreshments provided"
    ],
    capacity: 30,
    registeredCount: 28,
    status: "upcoming"
  },
  {
    id: "3",
    slug: "bali-leadership-workshop",
    title: "Bali Leadership Excellence Workshop",
    category: "Workshop",
    date: "2025-04-10",
    time: "09:00 - 16:00 WIB",
    location: {
      city: "Bali",
      venue: "The Mulia Resort & Villas",
      address: "Jl. Raya Nusa Dua Selatan, Bali"
    },
    shortDescription: "Intensive leadership development workshop in Bali's inspiring environment.",
    overview: [
      "Develop your leadership capabilities in Bali's serene and inspiring environment. This intensive workshop combines executive coaching techniques with practical leadership tools for modern business challenges.",
      "Led by certified executive coaches and featuring interactive sessions, case studies, and peer learning opportunities. Includes mindfulness practices and wellness activities integrated with leadership development."
    ],
    agenda: [
      { time: "08:30 - 09:00", session: "Registration & Breakfast" },
      { time: "09:00 - 10:30", session: "Leadership Assessment & Goal Setting" },
      { time: "10:30 - 10:45", session: "Break" },
      { time: "10:45 - 12:00", session: "Emotional Intelligence for Leaders" },
      { time: "12:00 - 13:00", session: "Lunch Break" },
      { time: "13:00 - 14:30", session: "Strategic Decision Making Workshop" },
      { time: "14:30 - 14:45", session: "Break" },
      { time: "14:45 - 16:00", session: "Action Planning & Commitment" }
    ],
    speakers: [
      { name: "Ratna Dewi", title: "Founder & CEO", company: "EduTech Indonesia" },
      { name: "Eko Prasetyo", title: "Managing Director", company: "SmartCity Solutions" }
    ],
    notes: [
      "Resort casual dress code",
      "Workshop materials included",
      "Lunch and coffee breaks provided",
      "Limited to 25 participants for personalized attention"
    ],
    capacity: 25,
    registeredCount: 18,
    status: "upcoming"
  },
  {
    id: "4",
    slug: "medan-tech-innovation-conference",
    title: "Medan Tech Innovation Conference",
    category: "Conference",
    date: "2024-12-15",
    time: "09:00 - 17:00 WIB",
    location: {
      city: "Medan",
      venue: "Grand Aston City Hall Hotel & Serviced Residences",
      address: "Jl. Balai Kota No.1, Medan"
    },
    shortDescription: "Technology innovation conference showcasing digital transformation in North Sumatra.",
    overview: [
      "A comprehensive look at technology innovation and digital transformation opportunities in North Sumatra. This conference brought together tech entrepreneurs, investors, and government officials to discuss the region's digital future.",
      "Presentations covered fintech, agtech, e-commerce, and smart city initiatives with specific focus on solutions for emerging markets and rural communities."
    ],
    agenda: [
      { time: "08:30 - 09:00", session: "Registration" },
      { time: "09:00 - 09:30", session: "Opening Ceremony" },
      { time: "09:30 - 10:30", session: "Keynote: Digital Transformation in ASEAN" },
      { time: "10:30 - 11:00", session: "Coffee Break" },
      { time: "11:00 - 12:00", session: "Panel: Fintech for Financial Inclusion" },
      { time: "12:00 - 13:00", session: "Lunch & Networking" },
      { time: "13:00 - 14:00", session: "Workshop: AgTech Solutions" },
      { time: "14:00 - 15:00", session: "Investor Panel" },
      { time: "15:00 - 15:30", session: "Coffee Break" },
      { time: "15:30 - 17:00", session: "Demo Day & Closing" }
    ],
    speakers: [
      { name: "Rudi Hermawan", title: "CEO", company: "TourismTech" },
      { name: "Diana Kusuma", title: "Founder & CEO", company: "RetailRevolution" }
    ],
    notes: [
      "Event concluded successfully",
      "200+ participants attended",
      "Presentations available for download"
    ],
    capacity: 250,
    registeredCount: 223,
    status: "past"
  },
  {
    id: "5",
    slug: "makassar-maritime-summit",
    title: "Makassar Maritime Industry Summit",
    category: "Conference",
    date: "2024-11-08",
    time: "08:30 - 16:30 WIB",
    location: {
      city: "Makassar",
      venue: "Four Points by Sheraton Makassar",
      address: "Jl. Andi Djemma No.130, Makassar"
    },
    shortDescription: "Maritime industry leaders discuss logistics and shipping innovation in Eastern Indonesia.",
    overview: [
      "The inaugural Maritime Industry Summit focused on strengthening Indonesia's position as a global maritime hub. Industry leaders discussed port modernization, shipping efficiency, and sustainable maritime practices.",
      "Special emphasis on connecting eastern Indonesian ports with global supply chains and developing maritime technology solutions for archipelagic challenges."
    ],
    agenda: [
      { time: "08:00 - 08:30", session: "Registration" },
      { time: "08:30 - 09:00", session: "Welcome Address" },
      { time: "09:00 - 10:00", session: "Keynote: Maritime Indonesia 2030" },
      { time: "10:00 - 10:30", session: "Coffee Break" },
      { time: "10:30 - 11:30", session: "Port Infrastructure Development" },
      { time: "11:30 - 12:30", session: "Shipping Technology Innovation" },
      { time: "12:30 - 13:30", session: "Networking Lunch" },
      { time: "13:30 - 14:30", session: "Sustainable Maritime Practices" },
      { time: "14:30 - 15:00", session: "Coffee Break" },
      { time: "15:00 - 16:00", session: "Investment Opportunities" },
      { time: "16:00 - 16:30", session: "Closing Ceremony" }
    ],
    speakers: [
      { name: "Ahmad Rahman", title: "CEO & Managing Director", company: "Maritime Solutions" },
      { name: "Agus Rahman", title: "Managing Director", company: "CleanWater Solutions" }
    ],
    notes: [
      "Successfully completed event",
      "150 maritime industry professionals attended",
      "Follow-up regional meetings scheduled"
    ],
    capacity: 150,
    registeredCount: 142,
    status: "past"
  },
  {
    id: "6",
    slug: "yogyakarta-social-impact-forum",
    title: "Yogyakarta Social Impact Business Forum",
    category: "Seminar",
    date: "2025-05-22",
    time: "10:00 - 15:00 WIB",
    location: {
      city: "Yogyakarta",
      venue: "Royal Ambarrukmo Hotel",
      address: "Jl. Laksda Adisucipto No.81, Yogyakarta"
    },
    shortDescription: "Exploring business models that create positive social and environmental impact.",
    overview: [
      "Discover how successful businesses are integrating social impact into their core strategies. This forum showcases Indonesian companies leading in social entrepreneurship, sustainable business models, and community development.",
      "Learn about impact measurement, stakeholder engagement, and creating shared value while maintaining profitability. Network with social entrepreneurs and impact investors."
    ],
    agenda: [
      { time: "09:30 - 10:00", session: "Registration & Welcome Coffee" },
      { time: "10:00 - 10:15", session: "Opening Remarks" },
      { time: "10:15 - 11:15", session: "Keynote: Business as a Force for Good" },
      { time: "11:15 - 11:30", session: "Coffee Break" },
      { time: "11:30 - 12:30", session: "Panel: Measuring Social Impact" },
      { time: "12:30 - 13:30", session: "Lunch & Networking" },
      { time: "13:30 - 14:30", session: "Workshop: Sustainable Business Models" },
      { time: "14:30 - 15:00", session: "Closing & Call to Action" }
    ],
    speakers: [
      { name: "Dewi Lestari", title: "President Director", company: "FashionForward" },
      { name: "Maya Kusuma", title: "President Director", company: "InnovateFarm" }
    ],
    notes: [
      "Smart casual dress code",
      "Vegetarian lunch options available",
      "Impact toolkit provided to all participants",
      "Limited to 80 participants"
    ],
    capacity: 80,
    registeredCount: 45,
    status: "upcoming"
  }
];

export const cities = [
  "All Cities",
  "Jakarta",
  "Surabaya", 
  "Bali",
  "Medan",
  "Makassar",
  "Yogyakarta"
];

export const getEventBySlug = (slug: string): EventData | undefined => {
  return eventsData.find(event => event.slug === slug);
};

export const getUpcomingEvents = (): EventData[] => {
  return eventsData.filter(event => event.status === "upcoming");
};

export const getPastEvents = (): EventData[] => {
  return eventsData.filter(event => event.status === "past");
};