import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Users, Check } from "lucide-react";

const Giveaways = () => {
  const activeGiveaways = [
    {
      title: "Legendary Skin Bundle",
      description: "Unlock 5 exclusive neon-themed weapon skins and character cosmetics",
      requirement: "Complete 10 matches this week",
      endDate: "3 days left",
      participants: 12450,
      featured: true
    },
    {
      title: "Premium Battle Pass",
      description: "Season 3 Battle Pass with instant tier 25 unlock",
      requirement: "Refer 3 friends to join",
      endDate: "5 days left",
      participants: 8920,
      featured: false
    },
    {
      title: "Currency Boost Pack",
      description: "10,000 in-game credits plus 2x XP boost for 7 days",
      requirement: "Daily login streak of 7 days",
      endDate: "1 week left",
      participants: 15670,
      featured: false
    }
  ];

  const pastWinners = [
    { name: "NeonStrike", prize: "Ultimate Skin Pack", date: "Jan 10, 2025" },
    { name: "CyberPulse", prize: "5000 Credits", date: "Jan 08, 2025" },
    { name: "VoltRacer", prize: "Premium Pass", date: "Jan 05, 2025" },
    { name: "QuantumLeap", prize: "Legendary Bundle", date: "Jan 03, 2025" },
  ];

  return (
    <Layout>
      <Hero 
        title="Exclusive Giveaways"
        subtitle="Claim your rewards and unlock premium content through special events and challenges"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Active Giveaways */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Gift className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold neon-text">Active Giveaways</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activeGiveaways.map((giveaway, index) => (
              <Card 
                key={index}
                className={`${
                  giveaway.featured 
                    ? 'gradient-border md:row-span-2 hover:animate-glow-pulse' 
                    : 'glass-card hover:animate-glow-pulse'
                } transition-all cursor-pointer group`}
              >
                <CardHeader>
                  {giveaway.featured && (
                    <Badge className="w-fit mb-4 bg-secondary">Featured</Badge>
                  )}
                  <CardTitle className={`${giveaway.featured ? 'text-3xl' : 'text-xl'} group-hover:text-primary transition-colors`}>
                    {giveaway.title}
                  </CardTitle>
                  <CardDescription className={giveaway.featured ? 'text-lg' : ''}>
                    {giveaway.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{giveaway.requirement}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">{giveaway.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">{giveaway.participants.toLocaleString()} participants</span>
                  </div>
                  <Button className="w-full shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]">
                    Claim Reward
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mb-16 gradient-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 neon-text-magenta">How Giveaways Work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-2">Choose Your Challenge</h4>
                <p className="text-sm text-muted-foreground">Browse active giveaways and select ones that match your playstyle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center text-secondary font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-2">Complete Requirements</h4>
                <p className="text-sm text-muted-foreground">Fulfill the challenge objectives within the time limit</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-2">Claim Your Prize</h4>
                <p className="text-sm text-muted-foreground">Rewards are automatically added to your account</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Winners */}
        <div>
          <h3 className="text-2xl font-bold mb-6 neon-text">Recent Winners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastWinners.map((winner, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {winner.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold mb-1">{winner.name}</h4>
                  <p className="text-sm text-primary mb-1">{winner.prize}</p>
                  <p className="text-xs text-muted-foreground">{winner.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Giveaways;
