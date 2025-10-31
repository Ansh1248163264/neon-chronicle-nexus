import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Clock, Users, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Giveaway {
  id: string;
  title: string;
  description: string;
  reward: string;
  entry_method: string;
  ends_at: string;
  entries_count: number;
  status: string;
  image_url: string | null;
}

const Giveaways = () => {
  const { toast } = useToast();
  const [giveaways, setGiveaways] = useState<Giveaway[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGiveaways();
  }, []);

  const fetchGiveaways = async () => {
    try {
      const { data, error } = await supabase
        .from('giveaways')
        .select('*')
        .eq('status', 'active')
        .order('ends_at', { ascending: true });

      if (error) throw error;
      setGiveaways(data || []);
    } catch (error) {
      console.error('Error fetching giveaways:', error);
      toast({
        title: "Error",
        description: "Failed to load giveaways",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getTimeRemaining = (endDate: string) => {
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    const diff = end - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} left`;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} left`;
    
    return "Ending soon";
  };

  if (loading) {
    return (
      <Layout>
        <Hero title="Exclusive Giveaways" subtitle="Loading..." compact />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title="Exclusive Giveaways"
        subtitle="Claim your rewards and unlock premium content through special events and challenges"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Gift className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold neon-text font-display">Active Giveaways</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {giveaways.map((giveaway, index) => (
              <Card 
                key={giveaway.id}
                className={`${
                  index === 0
                    ? 'gradient-border md:col-span-2 hover:animate-glow-pulse' 
                    : 'glass-card hover:animate-glow-pulse'
                } transition-all cursor-pointer group`}
              >
                {giveaway.image_url && (
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={giveaway.image_url} 
                      alt={giveaway.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  {index === 0 && (
                    <Badge className="w-fit mb-4 bg-secondary font-display">Featured</Badge>
                  )}
                  <CardTitle className={`${index === 0 ? 'text-3xl' : 'text-xl'} group-hover:text-primary transition-colors font-display`}>
                    {giveaway.title}
                  </CardTitle>
                  <CardDescription className={index === 0 ? 'text-lg' : ''}>
                    {giveaway.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{giveaway.entry_method}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">{getTimeRemaining(giveaway.ends_at)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">{giveaway.entries_count.toLocaleString()} participants</span>
                  </div>
                  <Button className="w-full shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)] font-display">
                    Claim Reward
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16 gradient-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 neon-text-magenta font-display">How Giveaways Work</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold font-display">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-display">Choose Your Challenge</h4>
                <p className="text-sm text-muted-foreground">Browse active giveaways and select ones that match your playstyle</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center text-secondary font-bold font-display">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-display">Complete Requirements</h4>
                <p className="text-sm text-muted-foreground">Fulfill the challenge objectives within the time limit</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent font-bold font-display">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-2 font-display">Claim Your Prize</h4>
                <p className="text-sm text-muted-foreground">Rewards are automatically added to your account</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Giveaways;
