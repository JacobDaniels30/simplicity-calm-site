import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Simplicity - Simplify Your Life" 
              className="h-12 w-auto object-contain"
            />
            <p className="text-sm text-muted-foreground">
              Making life easier since 2022. For all your Administrative and HR worries.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:info@simplicityhr.co.za" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} />
                <span>info@simplicityhr.co.za</span>
              </a>
              <a href="tel:+27123456789" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} />
                <span>+27 12 345 6789</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <address className="not-italic">
                  12 Pluto Road, Ocean View<br />
                  South Africa
                </address>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
            </div>
            <a
              href="https://www.simplicityhr.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-block"
            >
              www.simplicityhr.co.za
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Simplicity. All rights reserved. Established 2022.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
