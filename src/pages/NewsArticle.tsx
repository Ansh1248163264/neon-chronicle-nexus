import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface NewsArticle {
  id: string;
  title: string;
  subtitle: string | null;
  category: string;
  excerpt: string;
  content: string;
  featured: boolean;
  image_url: string | null;
  published_at: string;
}

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data, error } = await supabase
          .from('news_articles')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
        toast({
          title: "Error",
          description: "Failed to load article",
          variant: "destructive",
        });
        navigate('/news');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!article) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="ghost"
          onClick={() => navigate('/news')}
          className="mb-8 text-primary hover:text-secondary"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to News
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-secondary text-secondary-foreground">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(article.published_at).toLocaleDateString()}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-text font-display">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {article.subtitle}
              </p>
            )}
          </div>

          {article.image_url && (
            <div className="mb-12 rounded-lg overflow-hidden gradient-border">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="glass-card p-8 rounded-lg">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default NewsArticle;
