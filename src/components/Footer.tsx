import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';
import { FeedbackForm } from './FeedbackForm';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold gradient-text mb-4">
              Holistic Heroes Coalition
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering veterans through education and access to holistic practices like breathwork 
              and cold exposure therapy. Transform your life with natural, drug-free healing.
            </p>
            <div className="flex items-center space-x-4">
              <FeedbackForm />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-healing-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-healing-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground hover:text-healing-blue transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-healing-blue transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-healing-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="mailto:info@holisticheroes.org" 
                  className="text-muted-foreground hover:text-healing-blue transition-colors"
                >
                  info@holisticheroes.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-muted-foreground" />
                <a 
                  href="https://instagram.com/holisticheroes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-healing-blue transition-colors"
                >
                  @holisticheroes
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Austin, Texas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Holistic Heroes Coalition. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-healing-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-healing-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;