import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/news", label: "News" },
    { path: "/blog", label: "Blog" },
    { path: "/leaderboard", label: "Leaderboard" },
    { path: "/giveaways", label: "Giveaways" },
    { path: "/partners", label: "Partners" },
    { path: "/careers", label: "Careers" },
    { path: "/support/troubleshooting", label: "Support" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-2 border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold">
              <span className="neon-text">Aesthetic</span>
              <span className="neon-text-magenta">Made</span>
              <span className="text-accent">Games</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className={`relative transition-all duration-300 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]"
                      : "hover:text-primary hover:shadow-[0_0_10px_hsl(189_100%_50%_/_0.3)]"
                  }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]"
                        : "hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
