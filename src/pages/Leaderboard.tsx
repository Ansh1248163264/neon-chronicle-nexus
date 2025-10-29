import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Leaderboard = () => {
  const players = [
    { rank: 1, name: "NeonGhost", score: 15420, wins: 892, tier: "Legendary" },
    { rank: 2, name: "CyberViper", score: 14850, wins: 845, tier: "Legendary" },
    { rank: 3, name: "QuantumShift", score: 14200, wins: 823, tier: "Legendary" },
    { rank: 4, name: "VoltStriker", score: 13900, wins: 801, tier: "Master" },
    { rank: 5, name: "NeonPhantom", score: 13650, wins: 789, tier: "Master" },
    { rank: 6, name: "DataBreach", score: 13400, wins: 776, tier: "Master" },
    { rank: 7, name: "ChromeAssassin", score: 13100, wins: 765, tier: "Master" },
    { rank: 8, name: "PulseRider", score: 12890, wins: 751, tier: "Diamond" },
    { rank: 9, name: "SynthWave", score: 12650, wins: 742, tier: "Diamond" },
    { rank: 10, name: "HoloKnight", score: 12400, wins: 728, tier: "Diamond" },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-600" />;
    return <div className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold">{rank}</div>;
  };

  const getTierColor = (tier: string) => {
    if (tier === "Legendary") return "bg-gradient-to-r from-yellow-500 to-orange-500";
    if (tier === "Master") return "bg-gradient-to-r from-purple-500 to-pink-500";
    if (tier === "Diamond") return "bg-gradient-to-r from-cyan-500 to-blue-500";
    return "bg-muted";
  };

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
            <div className="text-4xl font-bold neon-text mb-2">50,247</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Active Players</div>
          </Card>
          <Card className="glass-card premium-card text-center p-6 border-2 border-secondary/20">
            <div className="text-4xl font-bold neon-text-magenta mb-2">1.2M</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Matches Played</div>
          </Card>
          <Card className="glass-card premium-card text-center p-6 border-2 border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2" style={{ textShadow: '0 0 20px hsl(var(--neon-purple) / 0.6)' }}>$250K</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Prize Pool</div>
          </Card>
          <Card className="glass-card premium-card text-center p-6 border-2 border-primary/20">
            <div className="text-4xl font-bold neon-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Tournaments</div>
          </Card>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            {/* Top 3 Podium */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {players.slice(0, 3).map((player, index) => (
                <Card 
                  key={player.rank}
                  className={`gradient-border ${index === 0 ? 'md:order-2 transform md:scale-110' : index === 1 ? 'md:order-1' : 'md:order-3'}`}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 flex justify-center">{getRankIcon(player.rank)}</div>
                    <h3 className={`text-2xl font-bold mb-2 ${index === 0 ? 'neon-text' : 'text-foreground'}`}>
                      {player.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-2">{player.score.toLocaleString()}</div>
                    <Badge className={getTierColor(player.tier)}>{player.tier}</Badge>
                    <div className="mt-4 text-sm text-muted-foreground">{player.wins} Wins</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Remaining Rankings */}
            <div className="space-y-3">
              {players.slice(3).map((player) => (
                <Card key={player.rank} className="glass-card premium-card border border-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 flex-1">
                        <div className="w-12 flex justify-center">{getRankIcon(player.rank)}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-1">{player.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="font-mono">{player.wins} Wins</span>
                            <Badge variant="outline" className={`${getTierColor(player.tier)} border-0 shadow-lg`}>
                              {player.tier}
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
                          +125
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="text-center py-20">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Weekly Competition Resets in 3 Days</h3>
              <p className="text-muted-foreground">Compete for exclusive rewards and bragging rights</p>
            </div>
          </TabsContent>

          <TabsContent value="friends">
            <div className="text-center py-20">
              <Award className="w-16 h-16 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Connect Your Account</h3>
              <p className="text-muted-foreground">Sign in to view your friends' rankings and compete together</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Leaderboard;
