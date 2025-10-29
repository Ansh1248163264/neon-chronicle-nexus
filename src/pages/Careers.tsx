import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Code, Palette, Megaphone } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Game Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Remote",
      icon: <Code className="w-6 h-6" />,
      description: "Lead development of core gameplay systems using modern game engines and real-time rendering",
      skills: ["C++", "Unreal Engine", "Networking", "AI Systems"]
    },
    {
      title: "3D Character Artist",
      department: "Art & Design",
      type: "Full-time",
      location: "Remote / Hybrid",
      icon: <Palette className="w-6 h-6" />,
      description: "Create stunning cyberpunk characters and environments that define our visual identity",
      skills: ["Blender", "ZBrush", "Substance Painter", "PBR Workflow"]
    },
    {
      title: "Community Manager",
      department: "Marketing",
      type: "Full-time",
      location: "Remote",
      icon: <Megaphone className="w-6 h-6" />,
      description: "Engage with our global community across social platforms and foster player relationships",
      skills: ["Social Media", "Content Creation", "Analytics", "Customer Support"]
    },
    {
      title: "Gameplay Engineer",
      department: "Engineering",
      type: "Contract",
      location: "Remote",
      icon: <Code className="w-6 h-6" />,
      description: "Implement and optimize combat mechanics, physics, and player interactions",
      skills: ["Unity", "C#", "Physics Systems", "Performance Optimization"]
    }
  ];

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

  return (
    <Layout>
      <Hero 
        title="Join Our Team"
        subtitle="Build the future of gaming with passionate creators and innovators"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Company Culture */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 neon-text">Why Work With Us</h2>
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
                <p className="text-sm">{perk}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 neon-text-magenta text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="glass-card hover:animate-glow-pulse transition-all">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        {position.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <CardTitle className="text-2xl">{position.title}</CardTitle>
                          <Badge className="bg-primary">{position.department}</Badge>
                        </div>
                        <CardDescription className="text-base mb-4">
                          {position.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="border-primary/30 text-primary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="shadow-[0_0_20px_hsl(189_100%_50%_/_0.5)]">
                      Apply Now
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Posted 2 days ago
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaboration Opportunities */}
        <div className="gradient-border rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 neon-text">Open to Collaborations</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always interested in hearing from talented individuals 
            who share our passion for innovative gaming experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)] text-lg px-8"
            >
              Send General Application
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary hover:bg-primary/20 text-lg px-8"
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
