import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Star, Users, Crown, Shield, Lightbulb, ChevronDown } from "lucide-react";
import { useState } from "react";

const Team = () => {
  const [openLeader, setOpenLeader] = useState<string | null>(null);

  // Top leaders data with their members
  const topLeaders = [
    { 
      id: "hamidin",
      name: "Dewan Pembina", 
      role: "IRJEN.POL.HAMIDIN",
      members: [
        "Ali Hanafia", "Benny Ranti", "Freddy Soenjoto", "Ganang Soedirman", 
        "Handaka Santosa", "Hendry Hashiloan Batubara", "Haryadi Sukamdani", 
        "Hush Ali", "Martin Minar Widjaja", "Meidy Caterine", "Paulus J Nugroho", "Setiawan Mardjuki"
      ]
    },
    { 
      id: "nanan",
      name: "Dewan Pengawas", 
      role: "KOMJEN.POL.(PURN) NANAN SOEKARNA",
      members: [
        "Irjen (P) MZ Muttaqien", "Bingar Egidius Situmorang", "Calvin Lukmantara", 
        "Helmy Yahya", "Ishak Chandra", "Kemal Gani", "Nyoman Santiawan", 
        "Sudiono Lim", "Susanty Wijaya", "Thomas Sugiarto", "Vicky Gan", "Vivick Tjangkung"
      ]
    },
    { 
      id: "budi",
      name: "Dewan Pakar", 
      role: "-",
      members: ["Hendy Setiono", "Jarot Trisunu", "Kevin Wu", "Prof. Agus", "Prof. Nizam", "Prof. Roy Darmawan",
        "Robintan Sulaiman", "Sonny Pudjianto", "Dr. Yusuf Kristianto"
      ]
    }
  ];

  const dewanPengurusUtama = [
    { name: "Ketua Umum", role: "TRISYA SUHERMAN", image: "/placeholder-ceo.jpg" },
    { name: "Wakil Ketua Umum", role: "VIRGO RIAND", image: "/placeholder-ceo.jpg" },
    { name: "Sekretaris Jenderal", role: "SUSILOWATI NINGSIH", image: "/placeholder-ceo.jpg" },
    { name: "Bendahara Umum", role: "MELISSIANA D", image: "/placeholder-ceo.jpg" },
  ];

  const bidangBidang = [
    {
      name: "Bidang Industri & Perdagangan",
      ketua: ["ANTONIUS TONY, ", "IRFAN SUJOTO, ", "HARIANTO TIAN"],
      anggota: ["Siti Nurhaliza", "Bambang Sutrisno", "Maya Purnama"]
    },
    {
      name: "Bidang Properti & Infrastruktur",
      ketua: ["FIFI ARYIANTI, ", "IWAN DIAH"],
      anggota: ["Ahmad Fauzi", "Linda Sari", "Budi Hartono"]
    },
    {
      name: "Bidang Keuangan & Investasi",
      ketua: "ABIWODO",
      anggota: ["Ratna Dewi, ", "Eko Prasetyo, ", "Diana Sari"]
    },
    {
      name: "Bidang Koperasi & UMKM",
      ketua: ["FITRI KOESOMO, ", "THEO RACHMAT"],
      anggota: ["Indra Gunawan", "Sri Wahyuni", "Agus Rahman"]
    },
    {
      name: "Bidang Pajak dan Bea Cukai",
      ketua: ["HALIM SANTOSO, ", "HALIMAH SKY"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Pariwisata dan Budaya",
      ketua: ["SUSIANA HENDRO, ", "FLORINA"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Sosial dan Kesejahteraan",
      ketua: "MECHA",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Pelatihan dan Pembinaan SDM",
      ketua: ["JONO EFENDI, ", "MARINGAN TOBING"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Hukum dan HAM",
      ketua: ["PRAKAS RAKA, ", "ANTHON SANTOSO"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Perlindungan Perempuan dan Anak",
      ketua: ["LUSIANA, ", "MEI"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Pertanian",
      ketua: ["MUTIA, ", "SOLIKHIN SOERSAEBIO"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Kelautan",
      ketua: ["ELLEN ARIFIN, ", "RICORDIUS"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Pendidikan",
      ketua: ["HERMANTO YAPUTRA, ", "NA PUTRA, ", "PUSPITA ZOROWAR"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Ketahanan Pangan",
      ketua: ["NANA IRLISA, ", "DONNY DEKAIZER"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Kesehatan",
      ketua: ["Dr. DERYL, ", "LILIK YUSUF"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Hubungan Antar Lembaga",
      ketua: ["I MADE SAMUDRA, ", "ROBBY SOEMODIHARDJO, ", "JEANNE SOMPIE"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Hubungan Masyarakat",
      ketua: ["NANA SARINAH, ", "CICILIA ROSALINDA"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Hubungan Luar Negeri",
      ketua: ["JULIUS KURNIAWAN, ", "HELGA"],
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Ekonomi Kreatif",
      ketua: "VALENTINO IVAN",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Sain dan Teknologi",
      ketua: "MICHAEL YANG",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Logistik dan Transportasi",
      ketua: "RENNI SIREGAR",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Politik",
      ketua: "GERRY HUKUBUN",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Pertambangan dan Energi",
      ketua: "HERMAN LEE",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Golf",
      ketua: "BEN EZRA",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    },
    {
      name: "Bidang Investor Club",
      ketua: "DIAN MUTIA",
      anggota: ["Dewi Lestari", "Rudi Hermawan", "Sari Indah"]
    }
  ];

  const LeaderCard = ({ leader }: { leader: typeof topLeaders[0] }) => {
    const isOpen = openLeader === leader.id;
    
    return (
      <div className="space-y-0">
        <Collapsible 
          open={isOpen} 
          onOpenChange={(open) => setOpenLeader(open ? leader.id : null)}
        >
          <CollapsibleTrigger asChild>
            <div className="bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 cursor-pointer">
              <div className="text-center">
                <div className="mx-auto bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center mb-4 w-16 h-16">
                  <Users className="text-gold w-8 h-8" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-bold text-gold text-lg font-montserrat">
                    {leader.name}
                  </h3>
                  <ChevronDown className={`w-4 h-4 text-gold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                <p className="text-muted-foreground text-sm">
                  {leader.role}
                </p>
              </div>
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="mt-4 bg-background border border-gold/30 rounded-xl p-6 shadow-lg shadow-gold/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {leader.members.map((member, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                    <p className="text-sm text-foreground">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  };

  const TeamCard = ({ member, isLarge = false }: { member: { name: string; role: string; image: string }; isLarge?: boolean }) => (
    <div className={`bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 ${isLarge ? 'md:p-8' : ''}`}>
      <div className="text-center">
        <div className={`mx-auto bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center mb-4 ${isLarge ? 'w-20 h-20' : 'w-16 h-16'}`}>
          <Users className={`text-gold ${isLarge ? 'w-10 h-10' : 'w-8 h-8'}`} />
        </div>
        <h3 className={`font-bold text-gold mb-2 font-montserrat ${isLarge ? 'text-xl' : 'text-lg'}`}>
          {member.name}
        </h3>
        <p className={`text-muted-foreground ${isLarge ? 'text-base' : 'text-sm'}`}>
          {member.role}
        </p>
      </div>
    </div>
  );

  const SectionIcon = ({ icon: Icon, title }: { icon: any; title: string }) => (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h2 className="text-3xl font-bold text-gradient-gold font-montserrat">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-background py-20 border-b border-gold/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <Star className="w-32 h-32 text-gold animate-pulse" />
          </div>
          <div className="absolute top-32 right-20">
            <Crown className="w-24 h-24 text-gold animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute bottom-20 left-1/4">
            <Shield className="w-28 h-28 text-gold animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          <div className="absolute bottom-32 right-1/3">
            <Lightbulb className="w-20 h-20 text-gold animate-pulse" style={{ animationDelay: '3s' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6 font-montserrat">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              Dewan Pimpinan Pusat CEO Indonesia
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              (Masa Bakti 2025–2030)
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Top Leaders */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topLeaders.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Dewan Pengurus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <SectionIcon icon={Users} title="Dewan Pengurus" />
          
          {/* Pengurus Utama */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gold mb-6 font-montserrat">Pengurus Utama</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dewanPengurusUtama.map((member, index) => (
                <TeamCard key={index} member={member} isLarge />
              ))}
            </div>
          </div>

          {/* Bidang-Bidang */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-6 font-montserrat">Bidang-Bidang</h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {bidangBidang.map((bidang, index) => (
                <AccordionItem 
                  key={index} 
                  value={`bidang-${index}`}
                  className="bg-card border border-gold/30 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gold/5 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary-foreground">{index + 1}</span>
                      </div>
                      <span className="font-bold text-gold font-montserrat">{bidang.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4">
                      {/* Ketua Bidang */}
                      <div className="bg-background/50 rounded-lg p-4 border border-gold/20">
                        <p className="font-semibold text-gold">{bidang.ketua}</p>
                      </div>
                      
                      {/* Anggota */}
                      {/*
                      <div>
                        <p className="text-sm text-muted-foreground mb-3">Anggota Bidang</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {bidang.anggota.map((anggota, idx) => (
                            <div key={idx} className="bg-background/50 rounded p-3 border border-gold/10">
                              <p className="text-sm font-medium text-foreground">{anggota}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      */}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;