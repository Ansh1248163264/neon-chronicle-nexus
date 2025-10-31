import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, ArrowLeft, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  subtitle: string | null;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  author_avatar: string | null;
  read_time: number;
  image_url: string | null;
  published_at: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
        toast({
          title: "Error",
          description: "Failed to load blog post",
          variant: "destructive",
        });
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id, navigate, toast]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading post...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-8 text-primary hover:text-secondary"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Blog
        </Button>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <Badge className="bg-secondary text-secondary-foreground">
                {post.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.published_at).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                {post.read_time} min read
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 neon-text font-orbitron">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {post.subtitle}
              </p>
            )}

            <div className="flex items-center gap-4 mb-8">
              <Avatar className="w-12 h-12 border-2 border-primary">
                <AvatarImage src={post.author_avatar || undefined} />
                <AvatarFallback className="bg-primary/20 text-primary">
                  {post.author.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>
          </div>

          {post.image_url && (
            <div className="mb-12 rounded-lg overflow-hidden gradient-border">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="glass-card p-8 rounded-lg">
              {post.content.split('\n\n').map((paragraph, index) => (
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

export default BlogPost;
