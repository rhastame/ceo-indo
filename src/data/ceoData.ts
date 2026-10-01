const profileImages = import.meta.glob("../assets/*.{jpeg,jpg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const getProfileImage = (filename: string) => {
  const imagePath = `../assets/${filename}`;
  return profileImages[imagePath] ?? "";
};

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
    slug: "moeldoko",
    name: "Dr. (H.C) Jenderal TNI (Purn.) Moeldoko, S.I.P, M.A",
    title: "Founder",
    company: "PT. Mobil Anak Bangsa (MAB)",
    industry: "Automotive",
    province: "Nasional",
    image: getProfileImage("Moeldoko.jpeg"),
    bio: "Founder of PT. Mobil Anak Bangsa (MAB).",
    expertise: ["Automotive", "Entrepreneurship", "Strategic Leadership"],
    contact: {},
    highlights: [
      "Founder PT. Mobil Anak Bangsa (MAB)",
      "Electric Vehicle & Automotive Industry",
      "Entrepreneurship",
      "Strategic Leadership"
    ],
  },
  {
    id: "2",
    slug: "trisya-suherman",
    name: "Trisya Suherman, SE, CWC, Dipl. Cidesco SPA",
    title: "Ketua Umum",
    company: "PT. Louise and Chelsea Indonesia (Bambu Spa), PT. Anugerah Kembang Sejahtera, PT. Wahyu Subur Berkah & PT. Tanjung Lesung Buana Makmur",
    industry: "Business Leadership",
    province: "Nasional",
    image: getProfileImage("Trisya Suherman.png"),
    bio: "Pengusaha dan pemimpin bisnis Indonesia dengan pengalaman di bidang hospitality, wellness, property, food & beverage, dan pengembangan kewirausahaan. Pendiri Bambu Spa dan Ketua Umum Global CEO Indonesia periode 2025–2030.",
    expertise: [
      "Business Leadership",
      "Entrepreneurship",
      "Hospitality",
      "Wellness",
      "Property",
      "Business Development"
    ],
    contact: {},
    highlights: [
      "Ketua Umum Global CEO Indonesia 2025–2030",
      "Founder Bambu Spa",
      "Business Leader & Entrepreneur",
      "Hospitality & Wellness Industry",
      "Property & Business Development"
    ],
  },
  {
    id: "3",
    slug: "muhammad-tito-karnavian",
    name: "Jenderal Pol (Purn) Prof. Drs. H. Muhammad Tito Karnavian, M.A, Ph. D",
    title: "Menteri Dalam Negeri",
    company: "Kementerian Dalam Negeri Republik Indonesia",
    industry: "Government",
    province: "Nasional",
    image: getProfileImage("Tito Karnavian.jpeg"),
    bio: "Menteri Dalam Negeri Republik Indonesia.",
    expertise: ["Public Administration", "Government Leadership", "National Policy"],
    contact: {},
    highlights: [
      "Menteri Dalam Negeri Republik Indonesia",
      "Kepala BNPP",
      "Mantan Kapolri",
      "Public Administration & Government Leadership",
      "National Policy & Governance"
    ],
  },
  {
    id: "4",
    slug: "setiawan-mardjuki",
    name: "Setiawan Mardjuki",
    title: "Director",
    company: "PT Jababeka Tbk",
    industry: "Property",
    province: "Jawa Barat",
    image: getProfileImage("Setiawan Mardjuki.jpeg"),
    bio: "Director of PT Jababeka Tbk.",
    expertise: [
      "Property Development",
      "Business Strategy",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT Jababeka Tbk",
      "Director PT Plaza Indonesia Jababeka",
      "Commissioner PT Banten West Java Tourism Development",
      "Property & Industrial Estate Development"
    ],
  },
  {
    id: "5",
    slug: "rudi-eko-hartono",
    name: "Rudi Eko Hartono",
    title: "Director",
    company: "PT Tudung Putra Putri Jaya",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Rudi Eko Hartono.jpeg"),
    bio: "Director PT Tudung Putra Putri Jaya.",
    expertise: ["Business Strategy", "Business Leadership"],
    contact: {},
    highlights: [
      "Director PT Tudung Putra Putri Jaya",
      "Business Strategy & Leadership",
      "Corporate Management"
    ],
  },
  {
    id: "6",
    slug: "bingar-egidius-situmorang",
    name: "Bingar Egidius Situmorang",
    title: "CEO",
    company: "PT. Mustika Ratu Tbk",
    industry: "Beauty & Personal Care",
    province: "DKI Jakarta",
    image: getProfileImage("Bingar Egidius Situmorang.jpeg"),
    bio: "CEO of PT. Mustika Ratu Tbk.",
    expertise: [
      "Beauty Industry",
      "Consumer Goods",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Presiden Director PT Mustika Ratu Tbk",
      "Former Head of Retail Samsung Electronics",
      "Consumer Goods & Beauty Industry",
      "Sales & Retail Leadership",
      "Experience at Mondelez International & Procter & Gamble"
    ],
  },
  {
    id: "7",
    slug: "calvin-lukmantara",
    name: "Calvin Lukmantara",
    title: "Director, Vice President Director & Co-Founder",
    company: "Tangcity Superblock, Novotel Tangerang & Kumparan",
    industry: "Property & Hospitality",
    province: "Banten",
    image: getProfileImage("Calvin Lukmantara.jpeg"),
    bio: "Business leader with roles across Tangcity Superblock, Novotel Tangerang, and Kumparan.",
    expertise: [
      "Property Development",
      "Hospitality",
      "Media",
      "Entrepreneurship"
    ],
    contact: {},
    highlights: [
      "Director Tangcity Superblock",
      "Vice President Director Novotel Tangerang",
      "Co-Founder Kumparan",
      "Property & Hospitality Leadership",
      "Media & Entrepreneurship"
    ],
  },
  {
    id: "8",
    slug: "helmy-yahya",
    name: "Helmy Yahya, MPAcc, Akt., CPMA, CA",
    title: "Public Figure & Business Leader",
    company: "Badarock Nusantara, R66 Media, Triwarsana, Metropolis Realty, PT Neomed Ikhlas Hub, One Goal Partners, Jobseekers Company, dan IKANAS STAN",
    industry: "Media, Entertainment & Business",
    province: "DKI Jakarta",
    image: getProfileImage("Helmy Yahya.jpeg"),
    bio: "Helmy Yahya, MPAcc, Akt., CPMA, CA, merupakan public figure, entrepreneur, komunikator, dan business leader Indonesia yang memiliki pengalaman panjang di industri media, entertainment, bisnis, dan public speaking. Ia pernah menjabat sebagai Director Utama TVRI serta memimpin berbagai perusahaan di bidang media, produksi televisi, properti, dan bisnis. Helmy juga aktif sebagai communication coach dan pembicara dalam bidang public speaking, communication, negotiation, pitching, dan personal branding.",
    expertise: [
      "Public Speaking",
      "Communication",
      "Media & Broadcasting",
      "Business Leadership",
      "Entrepreneurship",
      "Presentation",
      "Negotiation",
      "Personal Branding",
      "Entertainment",
      "Property"
    ],
    contact: {},
    highlights: [
      "Director Utama TVRI 2017–2020",
      "Chairman R66 Media",
      "CEO Badarock Nusantara",
      "30+ Tahun Pengalaman di Media & Entertainment",
      "Business & Leadership Speaker",
      "Public Speaking & Communication Coach"
    ]
  },
  {
    id: "9",
    slug: "mohammad-feriadi",
    name: "Mohammad Feriadi",
    title: "President Director",
    company: "PT Tiki Jalur Nugraha Ekakurir (JNE)",
    industry: "Logistics",
    province: "DKI Jakarta",
    image: getProfileImage("Mohammad Feriadi.jpeg"),
    bio: "President Director of PT Tiki Jalur Nugraha Ekakurir (JNE).",
    expertise: ["Logistics", "Supply Chain Management", "Business Leadership"],
    contact: {},
    highlights: [
      "President Director PT Tiki Jalur Nugraha Ekakurir (JNE)",
      "Logistics & Supply Chain Leadership",
      "Business & Corporate Leadership"
    ],
  },
  {
    id: "10",
    slug: "rudy-margono",
    name: "Rudy Margono",
    title: "Komisaris Utama & Komisaris",
    company: "PT Perdana Gapuraprima, PT. Graha Azura & PT. Best Prima Indonesia",
    industry: "Property",
    province: "Nasional",
    image: getProfileImage("Rudy Margono.jpeg"),
    bio: "Komisaris Utama at PT Perdana Gapuraprima and Komisaris at PT. Graha Azura and PT. Best Prima Indonesia.",
    expertise: ["Property Development", "Corporate Governance", "Business Leadership"],
    contact: {},
    highlights: [
      "Komisaris Utama PT Perdana Gapuraprima",
      "Komisaris PT. Graha Azura",
      "Komisaris PT. Best Prima Indonesia",
      "35+ Tahun Pengalaman di Sektor Real Estate",
      "Property Development & Investment",
      "Gapuraprima Group Leadership"
    ],
  },
  {
    id: "11",
    slug: "nanan-soekarna",
    name: "Komjen. Pol (Purn) Drs. Nanan Soekarna, M. Kom",
    title: "Ketua Umum",
    company: "Asosiasi Penambang Nickel Indonesia (APNI)",
    industry: "Mining & Nickel",
    province: "Nasional",
    image: getProfileImage("Nanan Soekarna.jpeg"),
    bio: "Ketua Umum of Asosiasi Penambang Nickel Indonesia (APNI).",
    expertise: ["Mining", "Nickel Industry", "Association Leadership", "Strategic Leadership"],
    contact: {},
    highlights: [
      "Ketua Umum Asosiasi Penambang Nickel Indonesia (APNI)",
      "Mining & Nickel Industry Leadership",
      "Association Leadership",
      "Strategic Leadership"
    ],
  },
  {
    id: "12",
    slug: "hamidin",
    name: "Irjen Pol. (Purn.) Drs. H. Hamidin",
    title: "Presiden Komisaris (Independen)",
    company: "PT. Karya Pacific Energy Tbk",
    industry: "Energy",
    province: "Nasional",
    image: getProfileImage("Hamidin.jpeg"),
    bio: "Presiden Komisaris (Independen) of PT. Karya Pacific Energy Tbk.",
    expertise: ["Energy", "Corporate Governance", "Strategic Leadership"],
    contact: {},
    highlights: [
      "Presiden Komisaris Independen PT Karya Pacific Energy Tbk",
      "Kelompok Ahli Perbatasan RI Kementerian Dalam Negeri",
      "Corporate Governance & Oversight",
      "Strategic Leadership"
    ],
  },
  {
    id: "13",
    slug: "susilowati-ningsih",
    name: "Susilowati Ningsih, SM, MM",
    title: "CEO",
    company: "Media Infobrand Group",
    industry: "Media",
    province: "Nasional",
    image: getProfileImage("Susilowati Ningsih.jpeg"),
    bio: "CEO of Media Infobrand Group.",
    expertise: ["Media", "Brand Strategy", "Business Leadership"],
    contact: {},
    highlights: [
      "CEO Media INFOBRAND Group",
      "20+ Tahun Pengalaman di Media, Sales & Marketing",
      "Founder & Business Leader di Industri Media",
      "Brand & Business Communication",
      "Entrepreneurship & Business Development"
    ],
  },
  {
    id: "14",
    slug: "prasetio-erlimus",
    name: "Prasetio Erlimus",
    title: "Director",
    company: "PT Dunia Sehat Sentosa",
    industry: "Healthcare",
    province: "Nasional",
    image: getProfileImage("Prasetio Erlimus.jpeg"),
    bio: "Director of PT Dunia Sehat Sentosa.",
    expertise: ["Healthcare", "Business Leadership", "Operations"],
    contact: {},
    highlights: [
      "Director PT Dunia Sehat Sentosa",
      "Healthcare Industry",
      "Business Leadership",
      "Operations"
    ],
  },
  {
    id: "15",
    slug: "virgo-riand-william-saputra",
    name: "Virgo Riand (William Saputra)",
    title: "Chief Of Bussiness Development & Investment Representative",
    company: "Triniti Land & DreamVille Super Beach Club",
    industry: "Property & Hospitality",
    province: "Nasional",
    image: getProfileImage("Virgo Riand.jpeg"),
    bio: "Chief Of Bussiness Development at Triniti Land and Investment Representative at DreamVille Super Beach Club.",
    expertise: ["Business Development", "Investment", "Property", "Hospitality"],
    contact: {},
    highlights: [
      "Chief Of Business Development Triniti Land",
      "Investment Representative DreamVille Super Beach Club",
      "Co-Founder RSI International School",
      "Real Estate & Investment",
      "Education & Entrepreneurship"
    ],
  },
  {
    id: "16",
    slug: "melissiana-dharmawati",
    name: "Melissiana Dharmawati",
    title: "Senior Transformation Director",
    company: "PT Novus Technologies Pte Ltd",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Melissiana Dharmawati.jpeg"),
    bio: "Senior Transformation Director at PT Novus Technologies Pte Ltd.",
    expertise: ["Business Transformation", "Technology", "Strategic Leadership"],
    contact: {},
    highlights: [
      "Senior Transformation Director Novus Technologies Pte Ltd",
      "Former President of the Board PT Euronet Technologies Indonesia",
      "Business Transformation & Technology",
      "Mergers & Acquisitions",
      "Government Liaison & Strategic Management"
    ],
  },
  {
    id: "17",
    slug: "achmad-umar",
    name: "Achmad Umar",
    title: "Presiden Director",
    company: "PT. Bhumyamca Sekawan",
    industry: "Manufacturing",
    province: "Nasional",
    image: getProfileImage("Achmad Umar.jpeg"),
    bio: "Presiden Director of PT. Bhumyamca Sekawan.",
    expertise: ["Manufacturing", "Operations", "Business Leadership"],
    contact: {},
    highlights: [
      "Presiden Director PT. Bhumyamca Sekawan",
      "Commercial Real Estate Leadership",
      "Cilandak Commercial Estate",
      "Operations & Property Management",
      "40+ Tahun Pengalaman di Dunia Bisnis"
    ],
  },
  {
    id: "18",
    slug: "andy-arif-widjaja",
    name: "Andy Arif Widjaja",
    title: "CEO",
    company: "PT. Berkat Elektrik Sejati Tangguh",
    industry: "Energy",
    province: "Nasional",
    image: getProfileImage("Andy Arif Widjaja.jpeg"),
    bio: "CEO of PT. Berkat Elektrik Sejati Tangguh.",
    expertise: ["Energy", "Operations", "Business Leadership"],
    contact: {},
    highlights: [
      "CEO PT. Berkat Elektrik Sejati Tangguh",
      "Energy Industry",
      "Operations & Business Management",
      "Corporate Leadership"
    ],
  },
  {
    id: "19",
    slug: "andy-yaw",
    name: "Andy Yaw",
    title: "CEO",
    company: "PT Dusgluck",
    industry: "Manufacturing",
    province: "Nasional",
    image: getProfileImage("Andy Yaw.jpeg"),
    bio: "CEO of PT Dusgluck.",
    expertise: ["Operations", "Business Strategy", "Corporate Leadership"],
    contact: {},
    highlights: [
      "CEO PT Dusgluck",
      "Manufacturing Industry",
      "Operations Management",
      "Business Strategy & Leadership"
    ],
  },
  {
    id: "20",
    slug: "harris-gunario",
    name: "Harris Gunario",
    title: "Director",
    company: "PT Bondor Indonesia",
    industry: "Manufacturing",
    province: "Nasional",
    image: getProfileImage("Harris Gunario Flazz.jpeg"),
    bio: "Director of PT Bondor Indonesia.",
    expertise: ["Manufacturing", "Operations", "Business Leadership"],
    contact: {},
    highlights: [
      "Director PT Bondor Indonesia",
      "Manufacturing Industry",
      "Operations & Business Management",
      "Corporate Leadership"
    ],
  },
  {
    id: "21",
    slug: "charles-menaro",
    name: "Charles Menaro",
    title: "President Commissioner",
    company: "Meratus Line",
    industry: "Logistics",
    province: "Nasional",
    image: getProfileImage("Charles Menaro.jpeg"),
    bio: "President Commissioner of Meratus Line.",
    expertise: ["Logistics", "Maritime Operations", "Corporate Governance"],
    contact: {},
    highlights: [
      "President Commissioner Meratus Line",
      "Maritime & Logistics Industry",
      "Corporate Governance",
      "Strategic Leadership"
    ],
  },
  {
    id: "22",
    slug: "catherine-patinah",
    name: "Catherine Patinah",
    title: "CEO",
    company: "PT Carvil Abadi (Carvil)",
    industry: "Fashion & Apparel",
    province: "Nasional",
    image: getProfileImage("Catherine Patinah.jpeg"),
    bio: "CEO of PT Carvil Abadi (Carvil).",
    expertise: ["Fashion", "Consumer Goods", "Business Leadership"],
    contact: {},
    highlights: [
      "CEO PT Carvil Abadi (Carvil)",
      "Fashion & Apparel Industry",
      "Consumer Goods",
      "Business Leadership"
    ],
  },
  {
    id: "23",
    slug: "christian-liadinata",
    name: "Christian Liadinata",
    title: "President Director",
    company: "PT Murni Solusindo Nusantara",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Christian Liadinata.jpeg"),
    bio: "President Director of PT Murni Solusindo Nusantara.",
    expertise: ["Technology", "Operations", "Business Leadership"],
    contact: {},
    highlights: [
      "President Director PT Murni Solusindo Nusantara",
      "Digital Technology & IT Solutions",
      "Retail Technology Transformation",
      "Automation & Customer Experience",
      "Technology Business Leadership"
    ],
  },
  {
    id: "24",
    slug: "christine-gunadi",
    name: "Christine Gunadi",
    title: "Director",
    company: "PT Prima Bikreasindo Indotama",
    industry: "Manufacturing",
    province: "Nasional",
    image: getProfileImage("Christine Gunadi.jpeg"),
    bio: "Director of PT Prima Bikreasindo Indotama.",
    expertise: ["Operations", "Business Strategy", "Corporate Leadership"],
    contact: {},
    highlights: [
      "Director PT Prima Bikreasindo Indotama",
      "Manufacturing Industry",
      "Operations Management",
      "Business Strategy & Corporate Leadership"
    ],
  },
  {
    id: "25",
    slug: "daniel-tedja",
    name: "Daniel Tedja",
    title: "Commercial Director",
    company: "PT Sinar Tambang Arthalestari (Semen Bima)",
    industry: "Construction",
    province: "Nasional",
    image: getProfileImage("Daniel Tedja.jpeg"),
    bio: "Commercial Director of PT Sinar Tambang Arthalestari (Semen Bima).",
    expertise: ["Commercial Strategy", "Construction Materials", "Business Development"],
    contact: {},
    highlights: [
      "Commercial Director PT Sinar Tambang Arthalestari (Semen Bima)",
      "10+ Tahun di Commercial Leadership Semen Bima",
      "Construction Materials Industry",
      "Commercial Strategy & Business Development"
    ],
  },
  {
    id: "26",
    slug: "davy-makimian",
    name: "Davy Makimian",
    title: "CEO",
    company: "PT Alternative Media Group",
    industry: "Media",
    province: "Nasional",
    image: getProfileImage("Davy Makimian.jpeg"),
    bio: "CEO of PT Alternative Media Group.",
    expertise: ["Media", "Business Strategy", "Corporate Leadership"],
    contact: {},
    highlights: [
      "CEO PT Alternative Media Group",
      "Out-of-Home Media & Digital Media",
      "Property, Manufacturing & IT Experience",
      "Media & Business Leadership",
      "Media Technology & Innovation"
    ],
  },
  {
    id: "27",
    slug: "edy-chandra",
    name: "Edy Chandra",
    title: "Director",
    company: "PT Rimbo Panjang Sumber Makmur",
    industry: "Agriculture",
    province: "Nasional",
    image: getProfileImage("Edy Chandra.jpeg"),
    bio: "Director of PT Rimbo Panjang Sumber Makmur.",
    expertise: ["Agriculture", "Operations", "Business Leadership"],
    contact: {},
    highlights: [
      "Director PT Rimbo Panjang Sumber Makmur",
      "Agriculture Industry",
      "Operations Management",
      "Business Leadership"
    ],
  },
  {
    id: "28",
    slug: "edy-tuhirman",
    name: "Edy Tuhirman",
    title: "CEO",
    company: "Generali Indonesia",
    industry: "Financial Services",
    province: "Nasional",
    image: getProfileImage("Photo_Edy Tuhirman_Generali Indonesia (2).jpg.jpeg"),
    bio: "CEO of Generali Indonesia.",
    expertise: ["Insurance", "Financial Services", "Business Leadership"],
    contact: {},
    highlights: [
      "CEO Generali Indonesia",
      "25+ Tahun Pengalaman di Insurance & Financial Services",
      "Membangun Generali Indonesia dari Awal hingga Profit",
      "Pengalaman di Bank Danamon, Citibank, Amex & AIG",
      "Insurance, Banking & Capital Markets Leadership",
      "Best CEO & Indonesia Most Admired CEO"
    ],
  },
  {
    id: "29",
    slug: "elizabeth-am-setiaatmadja",
    name: "Elizabeth A.M Setiaatmadja",
    title: "Director",
    company: "PT Duta Niaga Esa",
    industry: "Consumer Goods",
    province: "Nasional",
    image: getProfileImage("Elizabeth A.M. Setiaatmadja.jpeg"),
    bio: "Director of PT Duta Niaga Esa.",
    expertise: ["Consumer Goods", "Business Strategy", "Corporate Leadership"],
    contact: {},
    highlights: [
      "Director PT Duta Niaga Esa",
      "Consumer Goods Industry",
      "Business Strategy",
      "Corporate Leadership"
    ],
  },
  {
    id: "30",
    slug: "innico-sjahandi",
    name: "Innico Sjahandi",
    title: "Founder",
    company: "Igor's Pastry",
    industry: "Food & Beverage",
    province: "Nasional",
    image: getProfileImage("Innico Sjahandi.jpeg"),
    bio: "Founder of Igor's Pastry.",
    expertise: ["Food & Beverage", "Entrepreneurship", "Business Leadership"],
    contact: {},
    highlights: [
      "Founder Igor's Pastry",
      "Pioneer Premium Pastry & Bakery",
      "15+ Tahun Pengalaman F&B Hospitality",
      "Food Quality & Healthy Pastry",
      "Entrepreneurship & Brand Development"
    ],
  },
  {
    id: "31",
    slug: "kenny-hartono",
    name: "Kenny Hartono",
    title: "CEO",
    company: "PT. XAVIER MARKS KENCANA",
    industry: "Beauty & Personal Care",
    province: "Nasional",
    image: getProfileImage("Kenny Hartono.jpeg"),
    bio: "CEO of PT. XAVIER MARKS KENCANA.",
    expertise: ["Beauty Industry", "Business Leadership", "Consumer Goods"],
    contact: {},
    highlights: [
      "CEO PT. XAVIER MARKS KENCANA",
      "Beauty & Personal Care Industry",
      "Consumer Goods",
      "Business Leadership"
    ],
  },
  {
    id: "32",
    slug: "lassi-filgo",
    name: "Lassi Filgo",
    title: "Presiden Director",
    company: "PT. Interteknis Suryaterang",
    industry: "Manufacturing",
    province: "Nasional",
    image: getProfileImage("Lassi Filgo.jpeg"),
    bio: "Presiden Director of PT. Interteknis Suryaterang.",
    expertise: ["Manufacturing", "Operations", "Business Leadership"],
    contact: {},
    highlights: [
      "Presiden Director PT. Interteknis Suryaterang",
      "Manufacturing Industry",
      "Operations & Business Leadership",
      "Corporate Management"
    ],
  },
  {
    id: "33",
    slug: "manish-gidwani",
    name: "Manish Gidwani",
    title: "Director & Co-Founder",
    company: "Pierian LSAF Pte Ltd",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Manish Gidwani.jpeg"),
    bio: "Director and Co-Founder of Pierian LSAF Pte Ltd.",
    expertise: ["Entrepreneurship", "Technology", "Business Strategy"],
    contact: {},
    highlights: [
      "Director & Co-Founder Pierian LSAF Pte Ltd",
      "CEO & Founder London School of Accountancy and Finance",
      "Chairperson ISCA Indonesia",
      "20+ Tahun Pengalaman di Professional Accountancy & Education",
      "Finance Automation & Digital Transformation",
      "M&A Advisory & Business Consulting"
    ],
  },
  {
    id: "34",
    slug: "marchella-purwanika",
    name: "Marchella Purwanika",
    title: "Director",
    company: "Jambuluwuk Hotels and Resort",
    industry: "Tourism & Hospitality",
    province: "Nasional",
    image: getProfileImage("Marchella Purwanika.jpeg"),
    bio: "Director of Jambuluwuk Hotels and Resort.",
    expertise: ["Hospitality", "Tourism", "Business Leadership"],
    contact: {},
    highlights: [
      "Director Jambuluwuk Hotels and Resort",
      "Hospitality Industry",
      "Tourism & Resort Management",
      "Business Leadership"
    ],
  },
  {
    id: "35",
    slug: "marco-iswara",
    name: "Marco Iswara",
    title: "Komisaris Independen",
    company: "PT WIR ASIA Tbk",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Marco Iswara.jpeg"),
    bio: "Komisaris Independen of PT WIR ASIA Tbk.",
    expertise: ["Technology", "Corporate Governance", "Strategic Leadership"],
    contact: {},
    highlights: [
      "Komisaris Independen PT WIR ASIA Tbk",
      "Technology & Digital Industry",
      "Corporate Governance",
      "Strategic Leadership"
    ],
  },
  {
    id: "36",
    slug: "maringan-tobing",
    name: "Maringan Tobing, CATS, CCPS",
    title: "CEO",
    company: "PT. Marindo Elang Perkasa",
    industry: "Business Services",
    province: "Nasional",
    image: getProfileImage("Maringan Tobing.jpeg"),
    bio: "CEO of PT. Marindo Elang Perkasa.",
    expertise: ["Business Strategy", "Operations", "Corporate Leadership"],
    contact: {},
    highlights: [
      "CEO PT. Marindo Elang Perkasa",
      "Business Strategy",
      "Operations Management",
      "Corporate Leadership"
    ],
  },
  {
    id: "37",
    slug: "reza-bagus",
    name: "Reza Bagus",
    title: "Director",
    company: "PT Pasir Mas",
    industry: "Manufacturing",
    province: "Nasional",
    image: getProfileImage("Reza Bagus.jpeg"),
    bio: "Director of PT Pasir Mas.",
    expertise: ["Operations", "Business Strategy", "Corporate Leadership"],
    contact: {},
    highlights: [
      "Director PT Pasir Mas",
      "Manufacturing Industry",
      "Operations Management",
      "Business Strategy & Corporate Leadership"
    ],
  },
  {
    id: "38",
    slug: "ricordias-domini-panggabean",
    name: "Ricordias Domini Panggabean",
    title: "Director",
    company: "PT Namalo Persada",
    industry: "Business Services",
    province: "Nasional",
    image: getProfileImage("Ricordias Domini Panggabean.jpeg"),
    bio: "Director of PT Namalo Persada.",
    expertise: ["Business Strategy", "Operations", "Corporate Leadership"],
    contact: {},
    highlights: [
      "Director PT Namalo Persada",
      "20+ Tahun Pengalaman Profesional",
      "Accounting & Business Analysis",
      "Business Process Improvement",
      "Corporate Leadership"
    ],
  },
  {
    id: "39",
    slug: "robert-daniel-suhardiman",
    name: "Ir. Robert Daniel Suhardiman, SH, MH",
    title: "Director",
    company: "PT Pantoru Mas (Tamara Center)",
    industry: "Property",
    province: "Nasional",
    image: getProfileImage("Robert Daniel Suhardiman.jpeg"),
    bio: "Director of PT Pantoru Mas (Tamara Center).",
    expertise: ["Property", "Business Strategy", "Corporate Leadership"],
    contact: {},
    highlights: [
      "Director PT Pantoru Mas (Tamara Center)",
      "Property Development",
      "Business Strategy",
      "Corporate Leadership"
    ],
  },
  {
    id: "40",
    slug: "robert-tan",
    name: "Robert Tan",
    title: "Director Utama",
    company: "PT Primamitra Abadi Sentosa",
    industry: "Business Services",
    province: "Nasional",
    image: getProfileImage("Robert Tan.jpeg"),
    bio: "Director Utama of PT Primamitra Abadi Sentosa.",
    expertise: ["Business Strategy", "Operations", "Corporate Leadership"],
    contact: {},
    highlights: [
      "Managing Director Primamitra Abadi Sentosa",
      "Director of Technology PT Margacipta Wirasentosa",
      "Managing Director PT Spectrum Cahaya Nusantara",
      "Security & Network Infrastructure",
      "Technology & Business Solutions"
    ],
  },
  {
    id: "41",
    slug: "rudi-hidayat",
    name: "Rudi Hidayat",
    title: "CEO",
    company: "V2 Indonesia",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Rudi Hidayat.jpeg"),
    bio: "CEO of V2 Indonesia.",
    expertise: ["Technology", "Business Strategy", "Business Leadership"],
    contact: {},
    highlights: [
      "Founder & CEO V2 Indonesia",
      "30+ Tahun Pengalaman di Audio Visual Technology",
      "Pioneer Digital Technology & AV Solutions",
      "Immersive xR & Entertainment Technology",
      "Technology Innovation & Business Development"
    ],
  },
  {
    id: "42",
    slug: "rudy-susanto",
    name: "Ir. Rudy Susanto",
    title: "Director Utama",
    company: "PT Megatech Engineer",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Ir. Rudy Susanto.jpeg"),
    bio: "Director Utama of PT Megatech Engineer.",
    expertise: [
      "Engineering",
      "Technology",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Director Utama PT Megatech Engineer",
      "Engineering & Technology",
      "Business Leadership",
      "Corporate Management"
    ],
  },
  {
    id: "43",
    slug: "siek-evelyn",
    name: "Siek Evelyn",
    title: "Director",
    company: "PT Elang Perkasa",
    industry: "Business Services",
    province: "Nasional",
    image: getProfileImage("Siek Evelyn.jpeg"),
    bio: "Director of PT Elang Perkasa.",
    expertise: [
      "Business Strategy",
      "Operations",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT Elang Perkasa",
      "Business Strategy",
      "Operations Management",
      "Corporate Leadership"
    ],
  },
  {
    id: "44",
    slug: "silvia-kurniady",
    name: "Silvia Kurniady",
    title: "Founder",
    company: "Hana Berkat Indonesia (Hana Glow)",
    industry: "Beauty & Personal Care",
    province: "Nasional",
    image: getProfileImage("Silvia Kurniady.jpeg"),
    bio: "Founder of Hana Berkat Indonesia (Hana Glow).",
    expertise: [
      "Beauty Industry",
      "Entrepreneurship",
      "Consumer Goods"
    ],
    contact: {},
    highlights: [
      "Founder Hana Berkat Indonesia (Hana Glow)",
      "Beauty & Cosmetics Industry",
      "Product Research & Development",
      "Entrepreneurship & Brand Building"
    ],
  },
  {
    id: "45",
    slug: "stephanus-prasasto-suwargono",
    name: "Stephanus Prasasto Suwargono",
    title: "Director",
    company: "PT Globalindo Rekayasa Eco Energi",
    industry: "Renewable Energy",
    province: "Nasional",
    image: getProfileImage("Stephanus Prasasto.jpeg"),
    bio: "Director of PT Globalindo Rekayasa Eco Energi.",
    expertise: [
      "Renewable Energy",
      "Engineering",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT Globalindo Rekayasa Eco Energi",
      "Renewable Energy",
      "Engineering & Technology",
      "Business Leadership"
    ],
  },
  {
    id: "46",
    slug: "tedy-the-kion",
    name: "Tedy The Kion",
    title: "Director Utama",
    company: "PT Netafarm Indoagri Surabaya",
    industry: "Agriculture",
    province: "Nasional",
    image: getProfileImage("Tedy The Kion.jpeg"),
    bio: "Director Utama of PT Netafarm Indoagri Surabaya.",
    expertise: [
      "Agriculture",
      "Operations",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Director Utama PT Netafarm Indoagri Surabaya",
      "Agriculture Industry",
      "Operations Management",
      "Business Leadership"
    ],
  },
  {
    id: "47",
    slug: "ussyana-dethan",
    name: "Ussyana Dethan",
    title: "Director",
    company: "PT Isi Bai As",
    industry: "Business Services",
    province: "Nasional",
    image: getProfileImage("Ussyana.jpeg"),
    bio: "Director of PT Isi Bai As.",
    expertise: [
      "Business Strategy",
      "Operations",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT ISI BAI AS",
      "Legal & Business Consulting",
      "Business Management",
      "Strategic Consulting",
      "Legal Advisory & Compliance"
    ],
  },
  {
    id: "48",
    slug: "yogi-kristofer-gunario",
    name: "Yogi Kristofer Gunario",
    title: "Director",
    company: "PT Gastri Gizi Sarana",
    industry: "Healthcare",
    province: "Nasional",
    image: getProfileImage("Yogi Kristofer Gunario.jpeg"),
    bio: "Director of PT Gastri Gizi Sarana.",
    expertise: [
      "Healthcare",
      "Operations",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT Gastri Gizi Sarana",
      "Healthcare Industry",
      "Operations Management",
      "Business Leadership"
    ],
  },
  {
    id: "49",
    slug: "yucuanto-susetyo",
    name: "Yucuanto Susetyo",
    title: "CEO",
    company: "Viar Motor Indonesia",
    industry: "Automotive",
    province: "Nasional",
    image: getProfileImage("Yucuanto Susetyo.jpeg"),
    bio: "CEO of Viar Motor Indonesia.",
    expertise: [
      "Automotive",
      "Business Strategy",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "CEO Viar Motor Indonesia",
      "Automotive Industry",
      "Business Strategy",
      "Corporate Leadership"
    ],
  },
  {
    id: "50",
    slug: "anthon-hilman",
    name: "Anthon Hilman",
    title: "CEO",
    company: "PT Bali Ria Internasional",
    industry: "Tourism & Hospitality",
    province: "Nasional",
    image: getProfileImage("Anton Hilman.jpeg"),
    bio: "CEO of PT Bali Ria Internasional.",
    expertise: [
      "Tourism",
      "Hospitality",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "CEO PT Bali Ria Internasional",
      "Tourism & Hospitality Industry",
      "Business Development",
      "Hospitality Leadership"
    ],
  },
  {
    id: "51",
    slug: "benny-lianto",
    name: "Dr.Ir Benny Lianto, M.M.B.A.T",
    title: "Rektor",
    company: "Universitas Surabaya",
    industry: "Education",
    province: "Nasional",
    image: getProfileImage("Benny Lianto.jpeg"),
    bio: "Rektor of Universitas Surabaya.",
    expertise: [
      "Education",
      "Academic Leadership",
      "Strategic Leadership"
    ],
    contact: {},
    highlights: [
      "Rektor Universitas Surabaya",
      "Academic Leadership",
      "Higher Education Management",
      "Strategic Leadership"
    ],
  },  {
    id: "52",
    slug: "arvin-hartono",
    name: "Arvin Hartono",
    title: "Director",
    company: "PT Pillar Karya Agung",
    industry: "Construction",
    province: "Nasional",
    image: getProfileImage("Arvin Hartono.jpeg"),
    bio: "Director of PT Pillar Karya Agung.",
    expertise: [
      "Construction",
      "Operations",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT Pillar Karya Agung",
      "Construction Industry",
      "Operations Management",
      "Business Leadership"
    ],
  },  {
    id: "53",
    slug: "hendry-hasiholan-batubara",
    name: "Hendry Hasiholan Batubara",
    title: "Komisaris Independen",
    company: "PT Mitra Adiperkasa Tbk",
    industry: "Retail & E-commerce",
    province: "Nasional",
    image: getProfileImage("Hendry Hasiholan Batubara.jpeg"),
    bio: "Komisaris Independen of PT Mitra Adiperkasa Tbk.",
    expertise: [
      "Retail",
      "Corporate Governance",
      "Strategic Leadership"
    ],
    contact: {},
    highlights: [
      "Komisaris Independen PT Mitra Adiperkasa Tbk",
      "Former Director PT Mitra Adiperkasa Tbk",
      "President Director PT Sumarco Makmun Indah",
      "Retail & Corporate Governance",
      "Strategic Leadership"
    ],
  },  {
    id: "54",
    slug: "ijek-widyakrisnadi",
    name: "Ijek Widyakrisnadi",
    title: "Director",
    company: "PT Kawan Lama Sejahtera",
    industry: "Retail & E-commerce",
    province: "Nasional",
    image: getProfileImage("Ijek Widyakrisnadi.webp"),
    bio: "Director of PT Kawan Lama Sejahtera.",
    expertise: [
      "Retail",
      "Business Strategy",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "Director PT Kawan Lama Sejahtera",
      "Retail Industry",
      "Business Strategy",
      "Corporate Leadership"
    ],
  },  {
    id: "55",
    slug: "tasya-widya-krisnadi",
    name: "Tasya Widya Krisnadi",
    title: "Managing Director",
    company: "PT Toys Games Indonesia",
    industry: "Retail & E-commerce",
    province: "Nasional",
    image: getProfileImage("Tasya Widya Krisnadi.jpeg"),
    bio: "Managing Director of PT Toys Games Indonesia.",
    expertise: [
      "Retail",
      "Business Strategy",
      "Operations"
    ],
    contact: {},
    highlights: [
      "Managing Director PT Toys Games Indonesia",
      "Founder Toys Kingdom",
      "Managing Director Pendopo & ATARU",
      "Retail & Merchandising",
      "Business Strategy & Sustainable Growth"
    ],
  },  {
    id: "56",
    slug: "rhenald-kasali",
    name: "Prof. Rhenald Kasali, Ph.D.",
    title: "Guru Besar UI & Founder",
    company: "Universitas Indonesia & Rumah Perubahan",
    industry: "Education",
    province: "Nasional",
    image: getProfileImage("Rhenald Kasali.jpeg"),
    bio: "Guru Besar at Universitas Indonesia and Founder of Rumah Perubahan.",
    expertise: [
      "Education",
      "Organizational Change",
      "Entrepreneurship",
      "Leadership"
    ],
    contact: {},
    highlights: [
      "Guru Besar Fakultas Ekonomi & Bisnis Universitas Indonesia",
      "Founder Rumah Perubahan",
      "Management & Organizational Change Expert",
      "Author & Public Intellectual",
      "Entrepreneurship & Leadership"
    ],
  },  {
    id: "57",
    slug: "cri-puspa-dewi-motik-pramono",
    name: "Dr. Hj. Cri Puspa Dewi Motik Pramono, M.A., M.Si.",
    title: "Founder",
    company: "IWAPI",
    industry: "Association",
    province: "Nasional",
    image: getProfileImage("Dewi Motik Pramono.jpeg"),
    bio: "Founder of IWAPI.",
    expertise: [
      "Entrepreneurship",
      "Association Leadership",
      "Women's Economic Empowerment"
    ],
    contact: {},
    highlights: [
      "Founder IWAPI",
      "Ketua Umum IWAPI 1982–1992",
      "Founder Yayasan Putri Ayu",
      "Women's Entrepreneurship & Economic Empowerment",
      "Business & Association Leadership"
    ],
  },  {
    id: "58",
    slug: "ali-hanafia-lijaya",
    name: "Ali Hanafia Lijaya",
    title: "Commissioner",
    company: "PT Era Hutama Energi",
    industry: "Energy",
    province: "Nasional",
    image: getProfileImage("Ali Hanafiah.jpeg"),
    bio: "Commissioner of PT Era Hutama Energi.",
    expertise: [
      "Energy",
      "Corporate Governance",
      "Strategic Leadership"
    ],
    contact: {},
    highlights: [
      "Commissioner PT Era Hutama Energi",
      "Mining & Silica Sand Industry",
      "Corporate Governance",
      "Strategic Leadership"
    ],
  },  {
    id: "59",
    slug: "benny-ranti",
    name: "Dr. Ir Benny Ranti, M.Sc",
    title: "CEO",
    company: "PT Inforindo Intersolusi",
    industry: "Technology",
    province: "Nasional",
    image: getProfileImage("Benny Ranti.jpeg"),
    bio: "CEO of PT Inforindo Intersolusi.",
    expertise: [
      "Technology",
      "Business Strategy",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "CEO PT Inforindo Intersolusi",
      "Technology Industry",
      "Business Strategy",
      "Corporate Leadership"
    ],
  },  {
    id: "60",
    slug: "handaka-santosa",
    name: "Handaka Santosa",
    title: "Director",
    company: "PT Mitra Adiperkasa Tbk",
    industry: "Retail & E-commerce",
    province: "Nasional",
    image: getProfileImage("Handaka Santosa.jpeg"),
    bio: "Director of PT Mitra Adiperkasa Tbk.",
    expertise: [
      "Retail",
      "Business Strategy",
      "Operations"
    ],
    contact: {},
    highlights: [
      "Director PT Mitra Adiperkasa Tbk",
      "Retail & Consumer Business",
      "Business Strategy",
      "Operations Management"
    ],
  },  {
    id: "61",
    slug: "hariyadi-bs-sukamdani",
    name: "Ir. H. Hariyadi B.S Sukamdani, MM",
    title: "Presiden Director",
    company: "PT Hotel Sahid Jaya Internasional",
    industry: "Tourism & Hospitality",
    province: "Nasional",
    image: getProfileImage("Haryadi Sukamdani.jpeg"),
    bio: "Presiden Director of PT Hotel Sahid Jaya Internasional.",
    expertise: [
      "Hospitality",
      "Tourism",
      "Business Leadership"
    ],
    contact: {},
    highlights: [
      "Presiden Director PT Hotel Sahid Jaya Internasional",
      "Hospitality & Tourism Industry",
      "Hotel & Property Business",
      "Business Leadership"
    ],
  },
  {
    id: "62",
    slug: "husni-ali",
    name: "Husni Ali",
    title: "Presiden Director",
    company: "PT Indonesia Prima Property Tbk (OMRE)",
    industry: "Property",
    province: "Nasional",
    image: getProfileImage("Husni Ali.jpeg"),
    bio: "Presiden Director of PT Indonesia Prima Property Tbk (OMRE).",
    expertise: [
      "Property",
      "Business Strategy",
      "Corporate Leadership"
    ],
    contact: {},
    highlights: [
      "Presiden Director PT Indonesia Prima Property Tbk",
      "Property Development",
      "Corporate Strategy",
      "Business Leadership"
    ],
  },
  {
    id: "63",
    slug: "martin-minar-widjaja",
    name: "Martin Minar Widjaja",
    title: "Founder & Director",
    company: "PT Javanesia Frestama Indonesia",
    industry: "Food & Beverage",
    province: "Nasional",
    image: getProfileImage("Martin Minar Widjaja.jpeg"),
    bio: "Founder and Director of PT Javanesia Frestama Indonesia.",
    expertise: [
      "Entrepreneurship",
      "Food & Beverage",
      "Business Strategy"
    ],
    contact: {},
    highlights: [
      "Founder & Director PT Javanesia Frestama Indonesia",
      "Food & Beverage Industry",
      "Entrepreneurship",
      "Business Strategy & Development"
    ],
  },
  {
    id: "64",
    slug: "meidy-katrin-lengkey",
    name: "Meidy Katrin Lengkey",
    title: "Sekretaris Umum",
    company: "Asosiasi Penambang Nikel Indonesia",
    industry: "Mining & Nickel",
    province: "Nasional",
    image: getProfileImage("Meidy Katrin Lengkey.jpeg"),
    bio: "Sekretaris Umum of Asosiasi Penambang Nikel Indonesia.",
    expertise: [
      "Mining",
      "Nickel Industry",
      "Association Leadership"
    ],
    contact: {},
    highlights: [
      "Sekretaris Umum Asosiasi Penambang Nikel Indonesia",
      "Nickel Mining Industry",
      "Association Leadership",
      "Industry Networking"
    ],
  },
  {
    id: "65",
    slug: "paulus-i-nugroho",
    name: "Paulus I Nugroho",
    title: "Managing Director",
    company: "PT Kapal Api Global",
    industry: "Consumer Goods",
    province: "Nasional",
    image: getProfileImage("Paulus I Nugroho.jpeg"),
    bio: "Managing Director of PT Kapal Api Global.",
    expertise: [
      "Consumer Goods",
      "Business Strategy",
      "Operations"
    ],
    contact: {},
    highlights: [
      "Managing Director PT Kapal Api Global",
      "Consumer Goods Industry",
      "Business Strategy",
      "Operations & Corporate Leadership"
    ],
  },
];

export const industries = [
  "All Industries",
  "Technology", 
  "Renewable Energy", 
  "Logistics", 
  "Property",
  "Beauty & Personal Care",
  "Property & Hospitality",
  "Public Figure",
  "Hospitality & Wellness",
  "Mining & Nickel",
  "Energy",
  "Automotive",
  "Government",
  "Media",
  "Manufacturing",
  "Construction",
  "Consumer Goods",
  "Food & Beverage",
  "Business Services",
  "Association",
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
  "Kalimantan Timur",
  "Nasional"
];

export const getCEOBySlug = (slug: string): CEOProfile | undefined => {
  return ceoProfiles.find(ceo => ceo.slug === slug);
};