import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const ProvincialLeadership = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("Semua");

  const regions = [
    "Semua",
    "Sumatera", 
    "Jawa", 
    "Kalimantan", 
    "Sulawesi", 
    "Bali-Nusa", 
    "Maluku"
  ];

  // Sample provincial leadership data
  const provincialData = [
    // Sumatera
    { province: "Aceh", region: "Sumatera", ketua: "H. Muhammad Yusuf", sekretaris: "Dra. Siti Aminah", bendahara: "Ir. Ahmad Rizki" },
    { province: "Sumatera Utara", region: "Sumatera", ketua: "Ir. Budi Santoso", sekretaris: "Ny. Linda Sari", bendahara: "Drs. Eko Prasetyo" },
    { province: "Sumatera Barat", region: "Sumatera", ketua: "Dr. Indra Gunawan", sekretaris: "Hj. Ratna Dewi", bendahara: "H. Agus Rahman" },
    { province: "Riau", region: "Sumatera", ketua: "Drs. Bambang Wijaya", sekretaris: "Ny. Maya Sari", bendahara: "Ir. Rudi Hermawan" },
    { province: "Kepulauan Riau", region: "Sumatera", ketua: "H. Ruslan Effendi", sekretaris: "Dra. Diana Kusuma", bendahara: "Drs. Hasan Ali" },
    { province: "Jambi", region: "Sumatera", ketua: "Ir. Susilo Bambang", sekretaris: "Ny. Sri Wahyuni", bendahara: "Dr. Tri Susanto" },
    { province: "Sumatera Selatan", region: "Sumatera", ketua: "Drs. Airlangga Hartarto", sekretaris: "Hj. Dewi Lestari", bendahara: "H. Abdullah Rahman" },
    { province: "Bengkulu", region: "Sumatera", ketua: "Dr. Haryanto Wibowo", sekretaris: "Ny. Sari Indah", bendahara: "Ir. Andi Wijaya" },
    { province: "Lampung", region: "Sumatera", ketua: "H. Budi Karya Sumadi", sekretaris: "Dra. Mega Sari", bendahara: "Drs. Irwan Nasution" },
    { province: "Bangka Belitung", region: "Sumatera", ketua: "Ir. Joko Widodo", sekretaris: "Ny. Retno Marsudi", bendahara: "Dr. Mahfud MD" },
    
    // Jawa
    { province: "DKI Jakarta", region: "Jawa", ketua: "Ir. Anies Baswedan", sekretaris: "Dra. Sri Mulyani", bendahara: "Drs. Tito Karnavian" },
    { province: "Jawa Barat", region: "Jawa", ketua: "H. Ridwan Kamil", sekretaris: "Ny. Emil Dardak", bendahara: "Dr. Dedi Mulyadi" },
    { province: "Jawa Tengah", region: "Jawa", ketua: "Drs. Ganjar Pranowo", sekretaris: "Hj. Ida Fauziyah", bendahara: "H. Ahmad Luthfi" },
    { province: "DI Yogyakarta", region: "Jawa", ketua: "Sri Sultan HB X", sekretaris: "GBPH Joyokusumo", bendahara: "KRT Notonegoro" },
    { province: "Jawa Timur", region: "Jawa", ketua: "Drs. Khofifah Indar", sekretaris: "Dr. Emil Dardak", bendahara: "H. Gus Ipul" },
    { province: "Banten", region: "Jawa", ketua: "H. Wahidin Halim", sekretaris: "Dra. Iti Oktavia", bendahara: "Drs. Andika Hazrumy" },
    
    // Kalimantan
    { province: "Kalimantan Barat", region: "Kalimantan", ketua: "Drs. Sutarmidji", sekretaris: "Ny. Mariana Sutarmidji", bendahara: "Dr. Harisson" },
    { province: "Kalimantan Tengah", region: "Kalimantan", ketua: "H. Sugianto Sabran", sekretaris: "Hj. Nurhidayah", bendahara: "Ir. Habib Said Ismail" },
    { province: "Kalimantan Selatan", region: "Kalimantan", ketua: "H. Sahbirin Noor", sekretaris: "Dra. Rusmiah Sabran", bendahara: "H. Muhidin" },
    { province: "Kalimantan Timur", region: "Kalimantan", ketua: "Dr. Isran Noor", sekretaris: "Ny. Hadi Mulyadi", bendahara: "Drs. Rusmadi Wongso" },
    { province: "Kalimantan Utara", region: "Kalimantan", ketua: "Drs. Zainal Paliwang", sekretaris: "Ny. Yansen TP", bendahara: "H. Udin Hianggio" },
    
    // Sulawesi
    { province: "Sulawesi Utara", region: "Sulawesi", ketua: "Drs. Olly Dondokambey", sekretaris: "Ny. Steven Kandouw", bendahara: "Dr. James Sumendap" },
    { province: "Sulawesi Tengah", region: "Sulawesi", ketua: "Ir. Rusdy Mastura", sekretaris: "Hj. Ma'ruf Amin", bendahara: "H. Longki Djanggola" },
    { province: "Sulawesi Selatan", region: "Sulawesi", ketua: "Prof. Nurdin Abdullah", sekretaris: "Dr. Andi Sudirman", bendahara: "H. Andi Mahmud" },
    { province: "Sulawesi Tenggara", region: "Sulawesi", ketua: "H. Ali Mazi", sekretaris: "Ny. Lukman Abunawas", bendahara: "Drs. Hugua" },
    { province: "Gorontalo", region: "Sulawesi", ketua: "Drs. Rusli Habibie", sekretaris: "Ny. Idris Rahim", bendahara: "H. Nelson Pomalingo" },
    { province: "Sulawesi Barat", region: "Sulawesi", ketua: "H. Ali Baal Masdar", sekretaris: "Hj. Enny Anggraeny", bendahara: "Drs. Baharuddin Djafar" },
    
    // Bali-Nusa
    { province: "Bali", region: "Bali-Nusa", ketua: "I Wayan Koster", sekretaris: "Ni Luh Made Ruastiti", bendahara: "I Gede Winasa" },
    { province: "Nusa Tenggara Barat", region: "Bali-Nusa", ketua: "Dr. Zulkieflimansyah", sekretaris: "Hj. Sitti Rohmi", bendahara: "H. Suhaili" },
    { province: "Nusa Tenggara Timur", region: "Bali-Nusa", ketua: "Drs. Viktor Laiskodat", sekretaris: "Ny. Josef Nae Soi", bendahara: "Dr. Bennyamin Messakh" },
    
    // Maluku
    { province: "Maluku", region: "Maluku", ketua: "Drs. Murad Ismail", sekretaris: "Ny. Barnabas Orno", bendahara: "H. Said Assagaff" },
    { province: "Maluku Utara", region: "Maluku", ketua: "H. Abdul Ghani Kasuba", sekretaris: "Hj. Yani Ahmad", bendahara: "Drs. Armyn Fauzi" },
    { province: "Papua", region: "Maluku", ketua: "Drs. Lukas Enembe", sekretaris: "Ny. Klemen Tinal", bendahara: "Dr. Constant Karma" },
    { province: "Papua Barat", region: "Maluku", ketua: "Drs. Dominggus Mandacan", sekretaris: "Ny. Ayub Wanma", bendahara: "H. Muhammad Musa'ad" },
  ];

  const filteredData = useMemo(() => {
    let filtered = provincialData;
    
    // Filter by region
    if (activeRegion !== "Semua") {
      filtered = filtered.filter(item => item.region === activeRegion);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ketua.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.sekretaris && item.sekretaris.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.bendahara && item.bendahara.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }, [searchTerm, activeRegion]);

  const ProvinceCard = ({ data }: { data: typeof provincialData[0] }) => (
    <div className="bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
          <MapPin className="w-5 h-5 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-bold text-gold font-montserrat">{data.province}</h3>
      </div>
      
      <div className="space-y-3">
        {/* Ketua */}
        <div>
          <p className="font-bold text-gold text-lg mb-1">Ketua Provinsi</p>
          <p className="text-foreground">{data.ketua}</p>
        </div>
        
        {/* Sekretaris */}
        {data.sekretaris && (
          <div>
            <p className="text-gold text-md mb-1">Sekretaris</p>
            <p className="text-foreground">{data.sekretaris}</p>
          </div>
        )}
        
        {/* Bendahara */}
        {data.bendahara && (
          <div>
            <p className="text-gold text-md mb-1">Bendahara</p>
            <p className="text-foreground">{data.bendahara}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Indonesia Map Background */}
      <section className="relative bg-background py-20 border-b border-gold/20 overflow-hidden">
        {/* Faint Indonesia Map Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 400" className="w-full h-full text-gold">
            <path d="M100,200 C150,180 200,220 300,200 C400,180 500,220 600,200 C700,180 800,220 900,200" 
                  stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3"/>
            <circle cx="200" cy="200" r="8" fill="currentColor" opacity="0.4"/>
            <circle cx="400" cy="180" r="6" fill="currentColor" opacity="0.4"/>
            <circle cx="600" cy="220" r="10" fill="currentColor" opacity="0.4"/>
            <circle cx="750" cy="190" r="7" fill="currentColor" opacity="0.4"/>
            <path d="M150,250 Q200,230 250,240 T350,235" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M450,260 Q500,240 550,250 T650,245" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gradient-gold font-montserrat">
                Provincial Leadership
              </h1>
            </div>
            <p className="text-xl text-muted-foreground font-medium">
              Pengurus Provinsi CEO Indonesia
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-card border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari provinsi atau nama pengurus..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-background border-gold/30 focus:border-gold rounded-lg text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Region Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-all duration-300",
                    activeRegion === region
                      ? "bg-gold text-primary-foreground font-bold"
                      : "bg-background border border-gold/30 text-foreground hover:border-gold hover:bg-gold/10"
                  )}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Leadership Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredData.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredData.map((province, index) => (
                  <ProvinceCard key={index} data={province} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">Tidak Ada Hasil</h3>
                <p className="text-muted-foreground">
                  Tidak ditemukan provinsi atau pengurus yang sesuai dengan pencarian Anda.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Quote Strip */}
      <section className="py-12 bg-gradient-to-r from-background via-background/95 to-background relative overflow-hidden border-t border-gold/20">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold-light/10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-gradient-gold italic leading-relaxed font-montserrat">
              "Dari Aceh hingga Maluku, bersama kita memimpin Indonesia menuju masa depan."
            </blockquote>
            <div className="w-32 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-8 animate-glow" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProvincialLeadership;