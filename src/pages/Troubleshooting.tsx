import { useState } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const Troubleshooting = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIssues, setFilteredIssues] = useState<any[]>([]);
  
  const commonIssues = [
    {
      category: "Performance",
      icon: <AlertCircle className="w-6 h-6 text-primary" />,
      problems: [
        {
          q: "Game runs with low FPS or stuttering",
          a: "Update graphics drivers, lower quality settings, close background apps. Enable performance mode in game settings and ensure your system meets minimum requirements."
        },
        {
          q: "Connection latency or lag spikes",
          a: "Use wired connection instead of WiFi, close bandwidth-heavy applications, select closest server region. Check firewall settings to ensure game traffic is allowed."
        }
      ]
    },
    {
      category: "Technical",
      icon: <HelpCircle className="w-6 h-6 text-secondary" />,
      problems: [
        {
          q: "Game won't launch or crashes at startup",
          a: "Verify game files, update DirectX and Visual C++ redistributables, disable overlays (Discord, GeForce Experience). Run as administrator if needed."
        },
        {
          q: "Audio not working or distorted",
          a: "Check default audio device in Windows, update audio drivers, verify in-game audio settings. Disable audio enhancements in Windows sound properties."
        }
      ]
    },
    {
      category: "Account",
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      problems: [
        {
          q: "Cannot login or forgot password",
          a: "Use password reset option on login screen, check email spam folder. Ensure account email is verified. Contact support if issues persist."
        },
        {
          q: "Missing items or progress not saving",
          a: "Ensure stable internet connection during play, wait for cloud sync icon confirmation. Clear cache and restart if progress isn't updating."
        }
      ]
    }
  ];

  const quickFixes = [
    { title: "Verify Game Files", description: "Fixes corrupted installation" },
    { title: "Update Graphics Drivers", description: "Resolves visual issues" },
    { title: "Clear Cache", description: "Fixes loading problems" },
    { title: "Restart Router", description: "Fixes connection issues" }
  ];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value.trim() === "") {
      setFilteredIssues([]);
      return;
    }

    const filtered = commonIssues.map(section => ({
      ...section,
      problems: section.problems.filter(problem =>
        problem.q.toLowerCase().includes(value.toLowerCase()) ||
        problem.a.toLowerCase().includes(value.toLowerCase())
      )
    })).filter(section => section.problems.length > 0);

    setFilteredIssues(filtered);
  };

  return (
    <Layout>
      <Hero 
        title="Support & Troubleshooting"
        subtitle="Find solutions to common issues and get back to gaming faster"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search for solutions..." 
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-12 py-6 text-lg bg-input border-primary/30 focus:border-primary"
            />
          </div>
          {searchQuery && filteredIssues.length === 0 && (
            <p className="text-center text-muted-foreground mt-4">No results found. Try different keywords.</p>
          )}
        </div>

        {/* Quick Fixes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 neon-text text-center">Quick Fixes</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {quickFixes.map((fix, index) => (
              <Card key={index} className="glass-card hover:animate-glow-pulse transition-all cursor-pointer text-center">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{fix.title}</h3>
                  <p className="text-sm text-muted-foreground">{fix.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {(searchQuery ? filteredIssues : commonIssues).map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <div className="flex items-center gap-3 mb-6">
                {section.icon}
                <h2 className="text-2xl font-bold neon-text-magenta">{section.category} Issues</h2>
              </div>
              
              <Card className="gradient-border">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {section.problems.map((problem, problemIndex) => (
                      <AccordionItem key={problemIndex} value={`item-${sectionIndex}-${problemIndex}`}>
                        <AccordionTrigger className="text-left hover:text-primary transition-colors">
                          {problem.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {problem.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 neon-text text-center">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary">Minimum Specs</CardTitle>
                <CardDescription>Entry-level gaming at 1080p 60fps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">OS:</span> Windows 10 64-bit</div>
                <div><span className="text-muted-foreground">CPU:</span> Intel i5-8400 / AMD Ryzen 5 2600</div>
                <div><span className="text-muted-foreground">RAM:</span> 8 GB</div>
                <div><span className="text-muted-foreground">GPU:</span> GTX 1060 6GB / RX 580 8GB</div>
                <div><span className="text-muted-foreground">Storage:</span> 50 GB SSD</div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-secondary">Recommended Specs</CardTitle>
                <CardDescription>Optimal experience at 1440p 120fps</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div><span className="text-muted-foreground">OS:</span> Windows 11 64-bit</div>
                <div><span className="text-muted-foreground">CPU:</span> Intel i7-12700K / AMD Ryzen 7 5800X</div>
                <div><span className="text-muted-foreground">RAM:</span> 16 GB</div>
                <div><span className="text-muted-foreground">GPU:</span> RTX 3070 / RX 6800 XT</div>
                <div><span className="text-muted-foreground">Storage:</span> 50 GB NVMe SSD</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Still Need Help */}
        <div className="mt-16 gradient-border rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 neon-text">Still Need Help?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the solution? Our support team is here 24/7 to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)] text-lg px-8 font-display"
              onClick={() => navigate('/contact')}
            >
              Contact Support
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary hover:bg-primary/20 text-lg px-8 font-display"
              onClick={() => window.open('https://discord.gg/gaming', '_blank')}
            >
              Join Discord Community
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Troubleshooting;
