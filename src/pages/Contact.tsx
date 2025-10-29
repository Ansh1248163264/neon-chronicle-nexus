import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <Hero 
        title="Get In Touch"
        subtitle="Have questions? We're here to help you navigate the digital frontier"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="glass-card premium-card">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.3)' }}>
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Email Us</CardTitle>
              <CardDescription>Get a response within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground font-mono text-sm">contact@aestheticmadegames.com</p>
            </CardContent>
          </Card>

          <Card className="glass-card premium-card">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px hsl(var(--neon-magenta) / 0.3)' }}>
                <MessageSquare className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Live Chat</CardTitle>
              <CardDescription>Available 24/7 for urgent matters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Coming soon via Discord</p>
            </CardContent>
          </Card>

          <Card className="glass-card premium-card">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4" style={{ boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.3)' }}>
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Location</CardTitle>
              <CardDescription>Remote-first studio</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground">Global presence, local support</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="gradient-border">
            <CardHeader>
              <CardTitle className="text-2xl neon-text">Send us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll respond promptly</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-input border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-input border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-input border-primary/30 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-input border-primary/30 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)] hover:shadow-[0_0_30px_hsl(189_100%_50%_/_0.8)]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
