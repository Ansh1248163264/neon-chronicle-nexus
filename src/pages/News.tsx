import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [
    {
      date: "2025-01-15",
      category: "Update",
      title: "Season 3 Battle Pass Unleashed",
      excerpt: "New cyberpunk-themed skins, weapons, and exclusive rewards await. The digital battlefield has never looked this good.",
      featured: true
    },
    {
      date: "2025-01-10",
      category: "Event",
      title: "Winter Championship Tournament",
      excerpt: "Join elite players competing for $50,000 prize pool. Registration opens next week for qualified players.",
      featured: false
    },
    {
      date: "2025-01-05",
      category: "Patch",
      title: "Performance Update v2.4.0",
      excerpt: "Major optimization improvements bring 30% better frame rates across all platforms. Ray tracing enhancements included.",
      featured: false
    },
    {
      date: "2024-12-28",
      category: "Announcement",
      title: "New Game Mode: Neon Assault",
      excerpt: "Experience fast-paced 5v5 combat in neon-lit arenas. Strategic teamplay meets explosive action.",
      featured: false
    },
    {
      date: "2024-12-20",
      category: "Community",
      title: "Player Spotlight: Top Ranked Warriors",
      excerpt: "Meet the legends dominating our leaderboards and learn their strategies for success.",
      featured: false
    },
    {
      date: "2024-12-15",
      category: "Update",
      title: "Cross-Platform Play Goes Live",
      excerpt: "Play with friends regardless of platform. Full cross-progression support enabled for all game modes.",
      featured: false
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Latest News"
        subtitle="Stay updated with the latest announcements and updates from the digital frontier"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Featured Article */}
        {newsItems[0] && (
          <Card className="gradient-border mb-12 overflow-hidden group cursor-pointer hover:animate-glow-pulse">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                <div className="text-6xl font-bold neon-text">FEATURED</div>
              </div>
              <CardHeader className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    {newsItems[0].category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {newsItems[0].date}
                  </div>
                </div>
                <CardTitle className="text-3xl mb-4 group-hover:text-primary transition-colors">
                  {newsItems[0].title}
                </CardTitle>
                <CardDescription className="text-lg mb-6">
                  {newsItems[0].excerpt}
                </CardDescription>
                <Button className="shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardHeader>
            </div>
          </Card>
        )}

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.slice(1).map((item, index) => (
            <Card 
              key={index} 
              className="glass-card hover:animate-glow-pulse transition-all cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.excerpt}</CardDescription>
                <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-secondary">
                  Read more <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
