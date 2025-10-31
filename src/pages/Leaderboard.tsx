import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface LeaderboardEntry {
  id: string;
  player_name: string;
  score: number;
  rank: number | null;
  kills: number;
  wins: number;
  level: number;
  avatar_url: string | null;
}

const Leaderboard = () => {
  const { toast } = useToast();
  const [players, setPlayers] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const { data, error } = await supabase
        .from('leaderboard_entries')
        .select('*')
        .order('score', { ascending: false })
        .limit(10);

      if (error) throw error;
      setPlayers(data || []);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      toast({
        title: "Error",
        description: "Failed to load leaderboard",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-600" />;
    return <div className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold font-display">{rank}</div>;
  };

  const getTierByLevel = (level: number) => {
    if (level >= 85) return "Legendary";
    if (level >= 70) return "Master";
    if (level >= 50) return "Diamond";
    if (level >= 30) return "Platinum";
    return "Gold";
  };

  const getTierColor = (tier: string) => {
    if (tier === "Legendary") return "bg-gradient-to-r from-yellow-500 to-orange-500";
    if (tier === "Master") return "bg-gradient-to-r from-purple-500 to-pink-500";
    if (tier === "Diamond") return "bg-gradient-to-r from-cyan-500 to-blue-500";
    if (tier === "Platinum") return "bg-gradient-to-r from-slate-400 to-slate-600";
    return "bg-gradient-to-r from-yellow-600 to-yellow-800";
  };

  if (loading) {
    return (
      <Layout>
        <Hero title="Global Leaderboard" subtitle="Loading..." compact />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title="Global Leaderboard"
        subtitle="Rise through the ranks and claim your place among the elite warriors"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="glass-card premium-card text-center p-6 border-2 border-primary/20">
            <div className="text-4xl font-bold neon-text mb-2 font-display">50,247</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-display">Active Players</div>
          </Card>
          <Card className="glass-card premium-card text-center p-6 border-2 border-secondary/20">
            <div className="text-4xl font-bold neon-text-magenta mb-2 font-display">1.2M</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-display">Matches Played</div>
          </Card>
          <Card className="glass-card premium-card text-center p-6 border-2 border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2 font-display neon-text-purple">$250K</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-display">Prize Pool</div>
          </Card>
          <Card className="glass-card premium-card text-center p-6 border-2 border-primary/20">
            <div className="text-4xl font-bold neon-text mb-2 font-display">24/7</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-display">Tournaments</div>
          </Card>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="global" className="font-display">Global</TabsTrigger>
            <TabsTrigger value="weekly" className="font-display">Weekly</TabsTrigger>
            <TabsTrigger value="friends" className="font-display">Friends</TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            {/* Top 3 Podium */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {players.slice(0, 3).map((player, index) => {
                const tier = getTierByLevel(player.level);
                return (
                  <Card 
                    key={player.id}
                    className={`gradient-border ${index === 0 ? 'md:order-2 transform md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'}`}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="mb-4 flex justify-center">{getRankIcon(index + 1)}</div>
                      {player.avatar_url && (
                        <div className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-primary overflow-hidden">
                          <img src={player.avatar_url} alt={player.player_name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <h3 className={`text-2xl font-bold mb-2 font-display ${index === 0 ? 'neon-text' : 'text-foreground'}`}>
                        {player.player_name}
                      </h3>
                      <div className="text-3xl font-bold text-primary mb-2 font-display">{player.score.toLocaleString()}</div>
                      <Badge className={`${getTierColor(tier)} font-display`}>{tier}</Badge>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div>
                          <div className="font-display font-bold text-foreground">{player.wins}</div>
                          <div>Wins</div>
                        </div>
                        <div>
                          <div className="font-display font-bold text-foreground">{player.kills}</div>
                          <div>Kills</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Remaining Rankings */}
            <div className="space-y-3">
              {players.slice(3).map((player, index) => {
                const tier = getTierByLevel(player.level);
                const rank = index + 4;
                return (
                  <Card key={player.id} className="glass-card premium-card border border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 flex-1">
                          <div className="w-12 flex justify-center">{getRankIcon(rank)}</div>
                          {player.avatar_url && (
                            <div className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                              <img src={player.avatar_url} alt={player.player_name} className="w-full h-full object-cover" />
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold mb-1 font-display">{player.player_name}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="font-mono">{player.wins} Wins</span>
                              <span className="font-mono">{player.kills} Kills</span>
                              <Badge variant="outline" className={`${getTierColor(tier)} border-0 shadow-lg font-display`}>
                                {tier}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary font-mono" style={{ textShadow: '0 0 20px hsl(var(--neon-cyan) / 0.5)' }}>
                            {player.score.toLocaleString()}
                          </div>
                          <div className="flex items-center justify-end text-sm text-green-500 font-mono">
                            <TrendingUp className="w-4 h-4 mr-1" />
                            +{Math.floor(Math.random() * 200) + 50}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="text-center py-20">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 font-display">Weekly Competition Resets in 3 Days</h3>
              <p className="text-muted-foreground">Compete for exclusive rewards and bragging rights</p>
            </div>
          </TabsContent>

          <TabsContent value="friends">
            <div className="text-center py-20">
              <Award className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 font-display">Connect Your Account</h3>
              <p className="text-muted-foreground">Sign in to view your friends' rankings and compete together</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Leaderboard;
