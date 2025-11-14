import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Share2, TrendingUp, Palette, Mail, Users, BarChart, Edit } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Digital Marketing Strategy",
      description: "Custom marketing blueprints designed for growth",
      features: [
        "Comprehensive market research and analysis",
        "Competitor analysis and positioning",
        "Customer journey mapping",
        "Multi-channel strategy development",
        "KPI setting and performance tracking",
      ],
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation, scheduling, optimization, and analytics",
      features: [
        "Platform-specific content creation",
        "Community management and engagement",
        "Content calendar planning",
        "Influencer collaboration strategies",
        "Performance analytics and reporting",
      ],
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising (PPC)",
      description: "High-ROI campaigns across Google, Meta, and TikTok",
      features: [
        "Google Ads campaign management",
        "Facebook & Instagram advertising",
        "TikTok Ads optimization",
        "Retargeting and remarketing",
        "Conversion tracking and optimization",
      ],
    },
    {
      icon: Palette,
      title: "Branding & Creative",
      description: "Logo design, visuals, and brand identity systems",
      features: [
        "Brand identity development",
        "Logo and visual design",
        "Brand guidelines creation",
        "Marketing collateral design",
        "Creative campaign concepts",
      ],
    },
    {
      icon: Edit,
      title: "Content Marketing",
      description: "Engaging content that drives traffic and conversions",
      features: [
        "Blog writing and SEO optimization",
        "Video content production",
        "Infographic design",
        "E-book and whitepaper creation",
        "Content distribution strategy",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that convert",
      features: [
        "Email list building and segmentation",
        "Campaign design and copywriting",
        "Automation workflows",
        "A/B testing and optimization",
        "Detailed performance analytics",
      ],
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights for better decision making",
      features: [
        "Google Analytics setup and management",
        "Custom dashboard creation",
        "Monthly performance reports",
        "Conversion rate optimization",
        "ROI tracking and analysis",
      ],
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with the right influencers for your brand",
      features: [
        "Influencer identification and outreach",
        "Campaign strategy and management",
        "Content collaboration",
        "Performance tracking",
        "ROI measurement",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive digital marketing solutions designed to help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-lift border-accent/20 hover:border-accent/40">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
