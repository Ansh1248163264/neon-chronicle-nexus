import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Database } from "lucide-react";

const DataProtection = () => {
  return (
    <Layout>
      <Hero 
        title="Data Protection"
        subtitle="Your privacy and security are our top priorities"
        compact
      />

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        {/* Key Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="glass-card">
            <CardContent className="p-6">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Secure Storage</h3>
              <p className="text-muted-foreground text-sm">
                All data encrypted using industry-standard AES-256 encryption
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-6">
              <Lock className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-bold text-xl mb-2">Access Control</h3>
              <p className="text-muted-foreground text-sm">
                Strict authentication and authorization protocols protect your account
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-6">
              <Eye className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-bold text-xl mb-2">Transparency</h3>
              <p className="text-muted-foreground text-sm">
                Clear disclosure of what data we collect and how it's used
              </p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-6">
              <Database className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-xl mb-2">Data Minimization</h3>
              <p className="text-muted-foreground text-sm">
                We only collect data necessary for core functionality
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="glass-card">
          <CardContent className="p-8 space-y-6 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">What Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Account Information</h3>
                  <p className="text-muted-foreground">
                    Email address, username, password (hashed), and profile settings required for account creation and authentication.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Gameplay Data</h3>
                  <p className="text-muted-foreground">
                    Match statistics, player rankings, achievements, and in-game progress to enable leaderboards and personalized experiences.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Technical Information</h3>
                  <p className="text-muted-foreground">
                    Device type, browser version, IP address, and connection data for security, troubleshooting, and service optimization.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide and maintain gaming services and features</li>
                <li>Personalize your gaming experience and recommendations</li>
                <li>Process transactions and deliver purchased content</li>
                <li>Communicate updates, events, and promotional offers</li>
                <li>Detect and prevent fraud, abuse, and security threats</li>
                <li>Analyze usage patterns to improve our platform</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. Data may be shared only in these circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers under strict confidentiality agreements</li>
                <li>For legal compliance or protection of rights</li>
                <li>In anonymous, aggregated form for analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under data protection regulations (GDPR, CCPA), you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your personal data and request a copy</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your account and data</li>
                <li>Object to processing or request restrictions</li>
                <li>Data portability to another service</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data only as long as necessary for service provision and legal obligations. 
                Account data is deleted within 30 days of deletion requests, except where required by law 
                (e.g., tax records, fraud prevention).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed at children under 13. We do not knowingly collect data from 
                children without parental consent. If we discover such data, we delete it immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Security Measures</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security including encryption in transit (TLS) and at rest, 
                regular security audits, access logging, and incident response procedures. While no system 
                is 100% secure, we continuously update our defenses.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For data protection inquiries, requests, or concerns, contact our Data Protection Officer at{" "}
                <span className="text-primary">privacy@aestheticmadegames.com</span>
              </p>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025. This policy may be updated to reflect changes in practices 
                or legal requirements. Continued use constitutes acceptance of updates.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default DataProtection;
