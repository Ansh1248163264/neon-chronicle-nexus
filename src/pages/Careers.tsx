import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Code, Palette, Megaphone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface JobPosting {
  id: string;
  title: string;
  description: string;
  department: string;
  type: string;
  location: string;
  responsibilities: string[];
  requirements: string[];
  status: string;
  created_at: string;
}

const Careers = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      toast({
        title: "Error",
        description: "Failed to load job postings",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getDepartmentIcon = (department: string) => {
    if (department === 'Engineering') return <Code className="w-6 h-6" />;
    if (department === 'Art & Design') return <Palette className="w-6 h-6" />;
    if (department === 'Marketing') return <Megaphone className="w-6 h-6" />;
    return <Briefcase className="w-6 h-6" />;
  };

  const perks = [
    "Remote-first work culture",
    "Competitive salary & equity",
    "Unlimited PTO policy",
    "Health & wellness benefits",
    "Latest hardware & software",
    "Professional development budget",
    "Flexible working hours",
    "Annual team retreats"
  ];

  if (loading) {
    return (
      <Layout>
        <Hero title="Join Our Team" subtitle="Loading..." compact />
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero 
        title="Join Our Team"
        subtitle="Build the future of gaming with passionate creators and innovators"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 neon-text font-display">Why Work With Us</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We're a remote-first studio passionate about pushing creative boundaries. 
            Our team combines technical excellence with artistic vision to create unforgettable gaming experiences.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4">
            {perks.map((perk, index) => (
              <div 
                key={index} 
                className="glass-card p-4 hover:animate-glow-pulse transition-all"
              >
                <p className="text-sm font-display">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 neon-text-magenta text-center font-display">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="glass-card hover:animate-glow-pulse transition-all">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        {getDepartmentIcon(job.department)}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <CardTitle className="text-2xl font-display">{job.title}</CardTitle>
                          <Badge className="bg-primary font-display">{job.department}</Badge>
                        </div>
                        <CardDescription className="text-base mb-4">
                          {job.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-primary/30 text-primary font-display">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)] font-display">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Posted {new Date(job.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="gradient-border rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 neon-text font-display">Open to Collaborations</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always interested in hearing from talented individuals 
            who share our passion for innovative gaming experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)] text-lg px-8 font-display"
            >
              Send General Application
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary hover:bg-primary/20 text-lg px-8 font-display"
            >
              View Internships
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
