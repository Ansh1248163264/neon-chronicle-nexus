import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      {/* Floating Glow Orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float [animation-delay:1s] pointer-events-none" />
      
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t-2 border-primary/20 glass-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 neon-text">AestheticMadeGames</h3>
              <p className="text-muted-foreground text-sm">
                Crafting the future of gaming with cutting-edge technology and cyberpunk aesthetics.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/news" className="text-muted-foreground hover:text-primary transition-colors">News</a></li>
                <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/leaderboard" className="text-muted-foreground hover:text-primary transition-colors">Leaderboard</a></li>
                <li><a href="/giveaways" className="text-muted-foreground hover:text-primary transition-colors">Giveaways</a></li>
                <li><a href="/support/troubleshooting" className="text-muted-foreground hover:text-primary transition-colors">Support</a></li>
                <li><a href="/presskit" className="text-muted-foreground hover:text-primary transition-colors">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="/data-protection" className="text-muted-foreground hover:text-primary transition-colors">Data Protection</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 AestheticMadeGames. All rights reserved. Powered by neon dreams.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
