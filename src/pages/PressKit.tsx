import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Image, FileText, Award } from "lucide-react";

const PressKit = () => {
  const assets = [
    {
      category: "Logos",
      icon: <Image className="w-8 h-8 text-primary" />,
      items: [
        "Primary Logo (PNG, SVG)",
        "Secondary Logo (PNG, SVG)",
        "Icon Only (PNG, SVG)",
        "Wordmark (PNG, SVG)"
      ]
    },
    {
      category: "Screenshots",
      icon: <Image className="w-8 h-8 text-secondary" />,
      items: [
        "Gameplay Screenshots (4K)",
        "Character Roster",
        "Environment Showcase",
        "UI Interface Examples"
      ]
    },
    {
      category: "Media",
      icon: <FileText className="w-8 h-8 text-accent" />,
      items: [
        "Press Release Templates",
        "Company Fact Sheet",
        "Executive Bios",
        "Brand Guidelines"
      ]
    }
  ];

  const brandColors = [
    { name: "Neon Cyan", hex: "#00D9FF", hsl: "189, 100%, 50%" },
    { name: "Neon Magenta", hex: "#FF00FF", hsl: "320, 100%, 50%" },
    { name: "Neon Purple", hex: "#9D4EDD", hsl: "280, 100%, 60%" },
    { name: "Deep Space", hex: "#0A0E27", hsl: "220, 40%, 5%" }
  ];

  return (
    <Layout>
      <Hero 
        title="Press Kit"
        subtitle="Media resources and brand assets for journalists, content creators, and partners"
        compact
      />

      <section className="py-20 container mx-auto px-4">
        {/* Quick Download */}
        <div className="mb-16 text-center">
          <div className="gradient-border rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4 neon-text">Complete Press Kit</h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Download all logos, screenshots, brand guidelines, and media assets in one package
            </p>
            <Button size="lg" className="shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)]">
              <Download className="mr-2 w-5 h-5" />
              Download Full Kit (25 MB)
            </Button>
          </div>
        </div>

        {/* Asset Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {assets.map((asset, index) => (
            <Card key={index} className="glass-card hover:animate-glow-pulse transition-all">
              <CardHeader>
                <div className="mb-4">{asset.icon}</div>
                <CardTitle className="text-2xl">{asset.category}</CardTitle>
                <CardDescription>High-resolution assets for media use</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {asset.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-primary hover:bg-primary/20">
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Brand Colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 neon-text-magenta text-center">Brand Colors</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {brandColors.map((color, index) => (
              <Card key={index} className="glass-card overflow-hidden group cursor-pointer">
                <div 
                  className="h-32 transition-all group-hover:h-40"
                  style={{ backgroundColor: color.hex }}
                />
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">{color.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div>HEX: {color.hex}</div>
                    <div>HSL: {color.hsl}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl neon-text">Company Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Founded</span>
                <span className="font-semibold">2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Headquarters</span>
                <span className="font-semibold">Remote-First, Global</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Team Size</span>
                <span className="font-semibold">25+ Professionals</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active Players</span>
                <span className="font-semibold">50,000+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Platforms</span>
                <span className="font-semibold">PC, Console (Coming Soon)</span>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl neon-text">Awards & Recognition</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Best Indie Game 2024</div>
                  <div className="text-sm text-muted-foreground">Gaming Excellence Awards</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Outstanding Visual Design</div>
                  <div className="text-sm text-muted-foreground">Digital Arts Festival</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Community Choice Award</div>
                  <div className="text-sm text-muted-foreground">Indie Game Showcase</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Press */}
        <div className="gradient-border rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4 neon-text">Media Inquiries</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            For interviews, preview copies, or additional assets, please reach out to our press team
          </p>
          <div className="space-y-2 text-lg mb-8">
            <div>
              <span className="text-muted-foreground">Email:</span>{" "}
              <span className="text-primary">press@aestheticmadegames.com</span>
            </div>
            <div>
              <span className="text-muted-foreground">Response Time:</span>{" "}
              <span>Within 24 hours</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="shadow-[0_0_30px_hsl(189_100%_50%_/_0.6)] text-lg px-8"
          >
            Contact Press Team
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PressKit;
