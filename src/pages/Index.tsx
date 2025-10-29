import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Trophy, Gamepad2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Gamepad2 className="w-12 h-12 text-primary" />,
      title: "Next-Gen Gaming",
      description: "Experience cutting-edge gameplay mechanics powered by advanced AI and real-time physics."
    },
    {
      icon: <Trophy className="w-12 h-12 text-secondary" />,
      title: "Competitive Ranks",
      description: "Climb the global leaderboards and prove your dominance in intense multiplayer matches."
    },
    {
      icon: <Zap className="w-12 h-12 text-accent" />,
      title: "Lightning Fast",
      description: "Optimized for performance with 120+ FPS support and minimal latency for competitive edge."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Vibrant Community",
      description: "Join thousands of players worldwide in our growing cyberpunk gaming ecosystem."
    },
  ];

  return (
    <Layout>
      <Hero 
        title="Welcome to the Future"
        subtitle="Where cyberpunk aesthetics collide with revolutionary gameplay"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Link to="/news">
            <Button size="lg" className="text-lg px-8 py-6 shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)] hover:shadow-[0_0_40px_hsl(189_100%_50%_/_0.8)] transition-all">
              Latest Updates
            </Button>
          </Link>
          <Link to="/leaderboard">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-secondary hover:bg-secondary/20 hover:shadow-[0_0_30px_hsl(320_100%_50%_/_0.4)]">
              View Rankings
            </Button>
          </Link>
        </div>
      </Hero>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 neon-text-magenta">Why Choose Us</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We're redefining gaming with innovative technology and stunning visual design
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="glass-card hover:animate-glow-pulse transition-all cursor-pointer group"
            >
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="gradient-border rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4 neon-text">Ready to Join the Revolution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of the next generation of gaming. Compete, collaborate, and conquer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/giveaways">
              <Button size="lg" variant="default" className="shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]">
                Claim Rewards
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/20">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-5xl font-bold neon-text mb-2">50K+</div>
            <div className="text-muted-foreground">Active Players</div>
          </div>
          <div className="animate-fade-in [animation-delay:0.1s]">
            <div className="text-5xl font-bold neon-text-magenta mb-2">120+</div>
            <div className="text-muted-foreground">FPS Performance</div>
          </div>
          <div className="animate-fade-in [animation-delay:0.2s]">
            <div className="text-5xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Server Uptime</div>
          </div>
          <div className="animate-fade-in [animation-delay:0.3s]">
            <div className="text-5xl font-bold neon-text mb-2">15+</div>
            <div className="text-muted-foreground">Game Modes</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
