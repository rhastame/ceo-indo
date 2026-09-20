import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Users, MapPin, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ceoProfiles, industries, provinces, type CEOProfile } from "@/data/ceoData";
import { cn } from "@/lib/utils";

const CEODirectoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedProvince, setSelectedProvince] = useState("All Provinces");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  // Filter and search logic
  const filteredCEOs = useMemo(() => {
    let filtered = ceoProfiles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(ceo => 
        ceo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ceo.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ceo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by industry
    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter(ceo => ceo.industry === selectedIndustry);
    }

    // Filter by province
    if (selectedProvince !== "All Provinces") {
      filtered = filtered.filter(ceo => ceo.province === selectedProvince);
    }

    return filtered;
  }, [searchTerm, selectedIndustry, selectedProvince]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCEOs.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCEOs = filteredCEOs.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (type: string, value: string) => {
    setCurrentPage(1);
    if (type === "industry") setSelectedIndustry(value);
    if (type === "province") setSelectedProvince(value);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageSizeChange = (size: string) => {
    setPageSize(Number(size));
    setCurrentPage(1);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const CEOCard = ({ ceo }: { ceo: CEOProfile }) => (
    <div className="bg-background border border-gold/30 rounded-xl p-6 transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/20 group">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold-light/20 rounded-full flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={ceo.image} 
            alt={ceo.name}
            className="w-full h-full object-cover rounded-full"
            loading="lazy"
          />
        </div>
        
        {/* Name & Title */}
        <h3 className="text-lg font-bold text-gold mb-1 font-montserrat">{ceo.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{ceo.title}</p>
        
        {/* Company & Industry */}
        <div className="flex items-center gap-1 mb-1">
          <Building2 className="w-3 h-3 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">{ceo.company}</p>
        </div>
        <p className="text-xs text-muted-foreground mb-2">{ceo.industry}</p>
        
        {/* Province */}
        <div className="flex items-center gap-1 mb-4">
          <MapPin className="w-3 h-3 text-muted-foreground" />
          <p className="text-xs text-muted-foreground">{ceo.province}</p>
        </div>
        
        {/* View Profile Button */}
        <Link to={`/ceo/${ceo.slug}`} className="w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300 group-hover:border-gold"
          >
            View Profile
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-background py-16 border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient-gold font-montserrat">
                CEO Directory
              </h1>
            </div>
            <p className="text-lg text-muted-foreground mb-2">
              Connect with Indonesia's most influential business leaders
            </p>
            <p className="text-sm text-muted-foreground">
              {filteredCEOs.length} of {ceoProfiles.length} members
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto mt-6" />
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-card border-b border-gold/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-4 items-end">
              {/* Search Bar */}
              <div className="lg:col-span-4">
                <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search by name or company..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-10 bg-background border-gold/30 focus:border-gold"
                  />
                </div>
              </div>

              {/* Industry Filter */}
              <div className="lg:col-span-3">
                <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                <Select value={selectedIndustry} onValueChange={(value) => handleFilterChange("industry", value)}>
                  <SelectTrigger className="bg-background border-gold/30 focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-gold/30">
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry} className="hover:bg-gold/10">
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Province Filter */}
              <div className="lg:col-span-3">
                <label className="block text-sm font-medium text-foreground mb-2">Province</label>
                <Select value={selectedProvince} onValueChange={(value) => handleFilterChange("province", value)}>
                  <SelectTrigger className="bg-background border-gold/30 focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-gold/30">
                    {provinces.map((province) => (
                      <SelectItem key={province} value={province} className="hover:bg-gold/10">
                        {province}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Page Size Selector */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Per Page</label>
                <Select value={pageSize.toString()} onValueChange={handlePageSizeChange}>
                  <SelectTrigger className="bg-background border-gold/30 focus:border-gold">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-gold/30">
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {currentCEOs.length > 0 ? (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                  {currentCEOs.map((ceo) => (
                    <CEOCard key={ceo.id} ceo={ceo} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {startIndex + 1} to {Math.min(endIndex, filteredCEOs.length)} of {filteredCEOs.length} results
                    </p>
                    
                    <div className="flex items-center gap-2">
                      {/* Previous Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>

                      {/* Page Numbers */}
                      {getPageNumbers().map((page, index) => (
                        <Button
                          key={index}
                          variant={page === currentPage ? "default" : "outline"}
                          size="sm"
                          onClick={() => typeof page === 'number' && setCurrentPage(page)}
                          disabled={page === '...'}
                          className={cn(
                            "min-w-[40px]",
                            page === currentPage
                              ? "bg-gold text-primary-foreground hover:bg-gold-light"
                              : "border-gold/30 text-foreground hover:bg-gold/10",
                            page === '...' && "cursor-default hover:bg-transparent"
                          )}
                        >
                          {page}
                        </Button>
                      ))}

                      {/* Next Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="border-gold/30 text-foreground hover:bg-gold/10 disabled:opacity-50"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-16">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-6">
                  No CEOs match your current search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedIndustry("All Industries");
                    setSelectedProvince("All Provinces");
                    setCurrentPage(1);
                  }}
                  className="border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CEODirectoryPage;