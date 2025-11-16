import { Target, Share2, TrendingUp, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Target,
      title: "Digital Marketing Strategy",
      description: "Custom marketing blueprints designed for growth. Data-driven strategies that deliver measurable results.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Content creation, scheduling, optimization, and analytics. Build authentic connections with your audience.",
    },
    {
      icon: TrendingUp,
      title: "Paid Advertising",
      description: "High-ROI campaigns built for performance across Google, Meta, and TikTok platforms.",
    },
    {
      icon: Palette,
      title: "Branding & Creative",
      description: "Logo design, visuals, and brand identity systems that make your business unforgettable.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-foreground">Our Services</h2>
          <p className="text-lg text-secondary-foreground/80">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover-lift bg-gradient-to-br from-primary to-primary/80 border-accent/30 hover:border-accent hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/40 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-primary-foreground group-hover:text-accent transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-base text-primary-foreground/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
