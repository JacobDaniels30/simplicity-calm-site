import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { FileText, Users, Calendar, Award } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.jpeg";

const Home = () => {
  const services = [
    {
      icon: FileText,
      title: "Word Processing",
      description: "Professional document creation, formatting, and editing services to keep your business communications polished and professional.",
    },
    {
      icon: Users,
      title: "HR Support",
      description: "Comprehensive HR solutions including recruitment assistance, employee relations, and compliance support tailored to your needs.",
    },
    {
      icon: Calendar,
      title: "Administrative Filing & Bookings",
      description: "Efficient organization of your administrative tasks, scheduling, and booking management to keep your operations running smoothly.",
    },
    {
      icon: Award,
      title: "Staff Appraisals",
      description: "Structured performance evaluation systems to help you recognize talent and support professional development in your team.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/20 via-background to-secondary/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiKDE5NSwgMjE4LCAyMzUpIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Established 2022
                </span>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <img 
                  src={logo} 
                  alt="Simplicity - Simplify Your Life" 
                  className="h-32 md:h-40 w-auto object-contain"
                />
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                For all your Administrative and HR worries — Making Life Easier.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/packages">View Our Packages</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contact">Get in Touch</a>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
              <img 
                src={heroImage} 
                alt="Professional administrative workspace" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Simplicity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Simplicity is not just a business support company — it's a business based on <span className="text-primary font-medium">family, loyalty, and compassion</span>. We aim to create long-lasting bonds with our clients and their businesses, providing support that goes beyond just administrative tasks.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that every business is unique, which is why we offer personalized solutions tailored to your specific needs. Let us handle the complexities so you can focus on what matters most — growing your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for all your administrative and HR needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/packages">Explore Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Ready to simplify your business? We're here to help.
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

export default Home;
