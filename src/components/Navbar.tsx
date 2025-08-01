import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Search } from '@/components/Search';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Donate', path: '/donate' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-lg bg-card/98' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Holistic Heroes Home">
            <div className="text-2xl font-bold gradient-text">
              Holistic Heroes
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 animated-underline ${
                  isActive(item.path)
                    ? 'text-healing-blue'
                    : 'text-muted-foreground hover:text-healing-blue'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Search />
            <ThemeToggle />
            <Button asChild className="bg-gradient-to-r from-healing-blue to-calm-teal hover:opacity-90 transition-opacity">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Search />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-healing-blue bg-healing-blue-light'
                    : 'text-muted-foreground hover:text-healing-blue hover:bg-muted'
                }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button asChild className="w-full bg-gradient-to-r from-healing-blue to-calm-teal">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;