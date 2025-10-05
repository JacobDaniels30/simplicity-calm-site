import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import ContactForm from "@/components/ContactForm";

const Packages = () => {
  const packages = [
    {
      title: "Option 1",
      price: "R250",
      duration: "hour",
      features: [
        "Perfect for once-off tasks",
        "Small administrative projects",
        "No long-term commitment",
        "Pay as you go",
        "Flexible scheduling",
      ],
    },
    {
      title: "Option 2",
      price: "R2,250",
      duration: "month",
      features: [
        "10 hours of dedicated support",
        "Regular HR assistance",
        "Administrative task management",
        "Priority scheduling",
        "Monthly progress reports",
      ],
      note: "Requires a 6-month contract",
      highlighted: true,
    },
    {
      title: "Option 3",
      price: "R4,500",
      duration: "month",
      features: [
        "20 hours of comprehensive support",
        "Extended business assistance",
        "Full HR & admin coverage",
        "Dedicated account manager",
        "Quarterly business reviews",
      ],
      note: "Requires a 6-month contract",
    },
    {
      title: "Option 4",
      price: "Custom",
      features: [
        "Tailor-made solutions",
        "Customized service packages",
        "Flexible hour allocations",
        "Specialized project support",
        "Scalable as your business grows",
      ],
      note: "Requires a 6-month contract - Contact us for pricing",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/20 via-background to-secondary/20 py-20" aria-labelledby="packages-heading">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDE5NSwgMjE4LCAyMzUpIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" aria-hidden="true" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 id="packages-heading" className="text-4xl md:text-5xl font-bold text-foreground">
              Our Packages & Pricing
            </h1>
            <p className="text-base md:text-xl text-muted-foreground">
              Choose the perfect plan for your business needs. Flexible options designed to make your life easier.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center">
              <p className="text-lg text-foreground">
                <span className="font-semibold">Note:</span> Options 2, 3, and 4 require a 6-month contract to ensure consistent, quality service and build a lasting partnership with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/20" aria-labelledby="contact-heading-packages">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="contact-heading-packages" className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Contact us today to discuss which package is right for you
              </p>
            </div>

            <div className="bg-card rounded-3xl shadow-lg p-8 border border-border/40">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
