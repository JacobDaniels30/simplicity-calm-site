import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-semibold text-lg">S</span>
              </div>
              <span className="ml-3 text-xl font-semibold text-foreground">Simplicity</span>
            </div>
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
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>South Africa</span>
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
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
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
