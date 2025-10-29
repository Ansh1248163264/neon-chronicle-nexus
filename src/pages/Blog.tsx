import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      date: "2025-01-18",
      author: "Dev Team",
      category: "Development",
      title: "Behind the Code: Building Realistic AI Opponents",
      excerpt: "Deep dive into our machine learning pipeline that creates adaptive enemy behaviors. Learn how we trained neural networks on millions of player matches.",
      readTime: "8 min read"
    },
    {
      date: "2025-01-12",
      author: "Art Director",
      category: "Design",
      title: "Crafting the Cyberpunk Aesthetic",
      excerpt: "Our creative journey from concept art to final renders. Exploring the fusion of neon, chrome, and holographic effects.",
      readTime: "6 min read"
    },
    {
      date: "2025-01-08",
      author: "Community Manager",
      category: "Community",
      title: "Top 10 Pro Player Strategies",
      excerpt: "Exclusive interviews with leaderboard champions reveal their secrets. Master advanced tactics and dominate the competition.",
      readTime: "10 min read"
    },
    {
      date: "2025-01-03",
      author: "Sound Designer",
      category: "Audio",
      title: "The Sonic Landscape of Tomorrow",
      excerpt: "How we created immersive 3D audio that adapts to your environment. From futuristic weapon sounds to ambient city noise.",
      readTime: "7 min read"
    },
    {
      date: "2024-12-29",
      author: "Lead Developer",
      category: "Technical",
      title: "Optimizing for 120 FPS Gaming",
      excerpt: "Our performance engineering approach to deliver buttery-smooth gameplay. Frame pacing, GPU utilization, and rendering tricks.",
      readTime: "12 min read"
    },
    {
      date: "2024-12-22",
      author: "Game Designer",
      category: "Gameplay",
      title: "Balancing Competitive Multiplayer",
      excerpt: "The science behind weapon stats, character abilities, and map design. How we maintain fair yet exciting gameplay.",
      readTime: "9 min read"
    }
  ];

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
              key={index} 
              className={`glass-card hover:animate-glow-pulse transition-all cursor-pointer group ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className={`${
                    post.category === 'Development' ? 'bg-primary' :
                    post.category === 'Design' ? 'bg-secondary' :
                    post.category === 'Technical' ? 'bg-accent' :
                    'bg-muted'
                  }`}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="text-sm text-muted-foreground ml-auto">
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className={`group-hover:text-primary transition-colors ${
                  index === 0 ? 'text-3xl' : 'text-2xl'
                }`}>
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className={index === 0 ? 'text-lg mb-6' : 'mb-4'}>
                  {post.excerpt}
                </CardDescription>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-secondary">
                  Read full article <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 neon-text">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to our developer blog for weekly insights, technical tutorials, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-input border border-primary/30 focus:border-primary focus:outline-none"
            />
            <Button className="shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
