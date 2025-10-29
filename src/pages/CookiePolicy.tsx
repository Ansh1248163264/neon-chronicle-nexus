import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";

const CookiePolicy = () => {
  return (
    <Layout>
      <Hero 
        title="Cookie Policy"
        subtitle="Understanding how we use cookies to enhance your experience"
        compact
      />

      <section className="py-20 container mx-auto px-4 max-w-4xl">
        <Card className="glass-card">
          <CardContent className="p-8 space-y-6 text-foreground">
            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. 
                They help us provide you with a better browsing experience by remembering your preferences 
                and understanding how you interact with our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    Required for core website functionality including authentication, security, and session management. 
                    These cannot be disabled without affecting site operation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Performance Cookies</h3>
                  <p className="text-muted-foreground">
                    Help us understand how visitors use our site by collecting anonymous analytics data. 
                    This allows us to improve performance and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    Remember your preferences such as language settings, region, and display options 
                    to provide a personalized experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    Track your activity across websites to deliver relevant advertisements. 
                    You can opt out of these through your browser settings.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control cookie preferences through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>View and delete existing cookies</li>
                <li>Block third-party cookies</li>
                <li>Block all cookies (may affect site functionality)</li>
                <li>Clear cookies when you close your browser</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use trusted third-party services (Google Analytics, social media platforms) that may 
                set their own cookies. These services have their own privacy policies governing cookie usage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 neon-text">Cookie Duration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Session cookies expire when you close your browser. Persistent cookies remain on your device 
                for a set period (typically 1-12 months) to remember your preferences across visits.
              </p>
            </div>

            <div className="pt-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025. We may update this policy periodically to reflect changes 
                in our practices or applicable laws.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
