import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface NewsArticle {
  id: string;
  title: string;
  subtitle: string | null;
  excerpt: string;
  category: string;
  featured: boolean;
  published_at: string;
  image_url: string | null;
}

const News = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('featured', { ascending: false })
        .order('published_at', { ascending: false });

      if (error) throw error;
      setNewsArticles(data || []);
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

  const handleArticleClick = (id: string) => {
    navigate(`/news/${id}`);
  };

  if (loading) {
    return (
      <Layout>
        <Hero title="Latest News" subtitle="Loading..." compact />
      </Layout>
    );
  }

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <Layout>
      <Hero 
        title="Latest News"
        subtitle="Stay updated with the latest announcements, updates, and events from the frontlines"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Featured Article */}
        {featuredArticle && (
          <Card 
            onClick={() => handleArticleClick(featuredArticle.id)}
            className="gradient-border mb-12 hover:animate-glow-pulse transition-all cursor-pointer group overflow-hidden"
          >
            {featuredArticle.image_url && (
              <div className="w-full h-96 overflow-hidden">
                <img 
                  src={featuredArticle.image_url} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-secondary font-display">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
                <Badge className="bg-primary font-display">{featuredArticle.category}</Badge>
                <div className="flex items-center text-sm text-muted-foreground ml-auto">
                  <Clock className="w-4 h-4 mr-2" />
                  {new Date(featuredArticle.published_at).toLocaleDateString()}
                </div>
              </div>
              <CardTitle className="text-4xl neon-text font-display group-hover:text-secondary transition-colors">
                {featuredArticle.title}
              </CardTitle>
              {featuredArticle.subtitle && (
                <p className="text-xl text-primary">{featuredArticle.subtitle}</p>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription className="text-lg">
                {featuredArticle.excerpt}
              </CardDescription>
            </CardContent>
          </Card>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Card 
              key={article.id}
              onClick={() => handleArticleClick(article.id)}
              className="glass-card hover:animate-glow-pulse transition-all cursor-pointer group overflow-hidden"
            >
              {article.image_url && (
                <div className="w-full h-48 overflow-hidden">
                  <img 
                    src={article.image_url} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-primary/80 font-display">{article.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground ml-auto">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(article.published_at).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors font-display">
                  {article.title}
                </CardTitle>
                {article.subtitle && (
                  <p className="text-sm text-muted-foreground">{article.subtitle}</p>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
