import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Mission */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">Holistic Heroes Coalition</div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering veterans through education and access to holistic practices for improved well-being and quality of life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <div><a href="/about" className="hover:text-accent transition-colors">About Us</a></div>
              <div><a href="/programs" className="hover:text-accent transition-colors">Programs</a></div>
              <div><a href="/donate" className="hover:text-accent transition-colors">Donate</a></div>
              <div><a href="/contact" className="hover:text-accent transition-colors">Contact</a></div>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="space-y-2 text-sm">
              <div>Email: <a href="mailto:david@holisticheroes.org" className="hover:text-accent transition-colors">david@holisticheroes.org</a></div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" asChild className="bg-transparent border-primary-foreground/30 hover:bg-accent">
                  <a href="https://instagram.com/holisticheroes" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <span className="text-sm">@holisticheroes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <div className="space-y-2">
            <p>Copyright © 2024 Holistic Heroes - All Rights Reserved.</p>
            <p className="text-xs">
              This website uses cookies to enhance your experience. By continuing to use this site, you consent to our use of cookies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;