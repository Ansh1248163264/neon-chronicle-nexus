import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string | null;
  excerpt: string;
  category: string;
  author: string;
  author_avatar: string | null;
  published_at: string;
  read_time: number;
  image_url: string | null;
}

const Blog = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePostClick = (id: string) => {
    navigate(`/blog/${id}`);
  };

  if (loading) {
    return (
      <Layout>
        <Hero title="Developer Blog" subtitle="Loading..." compact />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title="Developer Blog"
        subtitle="Behind-the-scenes insights, technical deep dives, and creative stories from our team"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              onClick={() => handlePostClick(post.id)}
              className={`glass-card hover:animate-glow-pulse transition-all cursor-pointer group ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {post.image_url && (
                <div className="w-full h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image_url} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className="bg-primary font-display">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.published_at).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground ml-auto">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.read_time} min read
                  </div>
                </div>
                <CardTitle className={`group-hover:text-primary transition-colors font-display ${
                  index === 0 ? 'text-3xl' : 'text-2xl'
                }`}>
                  {post.title}
                </CardTitle>
                {post.subtitle && (
                  <p className="text-lg text-muted-foreground">{post.subtitle}</p>
                )}
              </CardHeader>
              <CardContent>
                <CardDescription className={index === 0 ? 'text-lg mb-6' : 'mb-4'}>
                  {post.excerpt}
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-secondary font-display">
                  Read full article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
