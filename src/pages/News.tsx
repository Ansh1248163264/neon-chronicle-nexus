import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  featured: boolean;
  published_at: string;
}

const News = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newsItems, setNewsItems] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('news_articles')
          .select('*')
          .order('published_at', { ascending: false });

        if (error) throw error;
        setNewsItems(data || []);
      } catch (error) {
        console.error('Error fetching news:', error);
        toast({
          title: "Error",
          description: "Failed to load news articles",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [toast]);

  return (
    <Layout>
      <Hero 
        title="Latest News"
        subtitle="Stay updated with the latest announcements and updates from the digital frontier"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading news...</p>
          </div>
        ) : newsItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No news articles available yet.</p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {newsItems.find(item => item.featured) && (
              <Card 
                className="gradient-border mb-12 overflow-hidden group cursor-pointer hover:animate-glow-pulse"
                onClick={() => navigate(`/news/${newsItems.find(item => item.featured)?.id}`)}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-12 flex items-center justify-center">
                    <div className="text-6xl font-bold neon-text font-orbitron">FEATURED</div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-secondary text-secondary-foreground">
                        {newsItems.find(item => item.featured)?.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(newsItems.find(item => item.featured)?.published_at || '').toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-3xl mb-4 group-hover:text-primary transition-colors">
                      {newsItems.find(item => item.featured)?.title}
                    </CardTitle>
                    <CardDescription className="text-lg mb-6">
                      {newsItems.find(item => item.featured)?.excerpt}
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
              {newsItems.filter(item => !item.featured).map((item) => (
                <Card 
                  key={item.id} 
                  className="glass-card premium-card cursor-pointer group border border-primary/10"
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="border-primary text-primary shadow-lg">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground font-mono">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(item.published_at).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{item.excerpt}</CardDescription>
                    <Button variant="ghost" className="mt-4 p-0 h-auto text-primary hover:text-secondary transition-all">
                      Read more <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default News;
