import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Data-driven strategies that deliver results",
    "Creative storytelling that resonates",
    "Transparent reporting and analytics",
    "Dedicated account management",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Results-Driven Digital Marketing Agency
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Digital Fuse is a results-driven digital marketing agency focused on data, creativity, and measurable outcomes. Our team blends strategy with storytelling to help brands stand out online.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just run campaigns—we build partnerships. From startups to established enterprises, we craft custom digital strategies that drive growth, engagement, and ROI.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/30 backdrop-blur-sm flex items-center justify-center border border-accent/20">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-accent mb-4">5+</div>
                <p className="text-xl font-semibold text-foreground">Years of Excellence</p>
                <p className="text-muted-foreground mt-2">
                  Delivering outstanding results for businesses worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
