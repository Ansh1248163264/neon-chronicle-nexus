import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Zap, Target, Rocket } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Partner {
  id: string;
  name: string;
  description: string;
  partnership_type: string;
  website_url: string | null;
  logo_url: string | null;
  featured: boolean;
}

const Partners = () => {
  const { toast } = useToast();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPartners(data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
      toast({
        title: "Error",
        description: "Failed to load partners",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Brand Exposure",
      description: "Reach our community of 50,000+ active players and millions of monthly viewers"
    },
    {
      icon: <Target className="w-12 h-12 text-secondary" />,
      title: "Targeted Marketing",
      description: "Direct access to engaged gaming enthusiasts and tech-savvy demographics"
    },
    {
      icon: <Rocket className="w-12 h-12 text-accent" />,
      title: "Growth Opportunities",
      description: "Co-marketing campaigns and joint product launches with proven success"
    }
  ];

  if (loading) {
    return (
      <Layout>
        <Hero title="Our Partners" subtitle="Loading..." compact />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title="Our Partners"
        subtitle="Building the future together with industry leaders and innovators"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 neon-text text-center font-display">Strategic Partnerships</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <Card key={partner.id} className="glass-card hover:animate-glow-pulse transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold font-display overflow-hidden">
                      {partner.logo_url ? (
                        <img src={partner.logo_url} alt={partner.name} className="w-full h-full object-cover" />
                      ) : (
                        partner.name.substring(0, 2).toUpperCase()
                      )}
                    </div>
                    <span className="text-sm text-primary border border-primary px-3 py-1 rounded-full font-display">
                      {partner.partnership_type}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-display">{partner.name}</CardTitle>
                  <CardDescription className="text-base">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4 neon-text-magenta text-center font-display">Why Partner With Us</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join forces with a rapidly growing gaming studio at the forefront of innovation
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card text-center hover:animate-glow-pulse transition-all">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-display">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="gradient-border rounded-2xl p-12 text-center">
          <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4 neon-text font-display">Interested in Partnering?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for innovative collaborations that push the boundaries of gaming. 
            Let's explore opportunities together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)] text-lg px-8 font-display"
            >
              Partnership Inquiry
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary hover:bg-primary/20 text-lg px-8 font-display"
            >
              Download Media Kit
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold neon-text mb-2 font-display">50K+</div>
            <div className="text-muted-foreground">Active Players</div>
          </div>
          <div>
            <div className="text-4xl font-bold neon-text-magenta mb-2 font-display">2M+</div>
            <div className="text-muted-foreground">Monthly Viewers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2 font-display">15+</div>
            <div className="text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold neon-text mb-2 font-display">98%</div>
            <div className="text-muted-foreground">Partner Satisfaction</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
