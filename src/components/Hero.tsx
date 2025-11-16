import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      {/* Background decoration with glow effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, hsl(73 22% 64% / 0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-effect px-5 py-2.5 rounded-full mb-6 fade-in backdrop-blur-md border border-accent/30 shadow-lg">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">Digital Marketing Experts</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance mb-6 fade-in text-primary-foreground leading-tight">
            Ignite Your Brand.
            <br />
            <span className="bg-gradient-to-r from-accent via-sage-light to-accent bg-clip-text text-transparent">
              Amplify Your Digital Presence.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 text-balance mb-8 fade-in max-w-2xl mx-auto">
            Digital Fuse helps businesses scale with strategic digital marketing, performance ads, and powerful brand storytelling.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">
                Get a Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 fade-in">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "3M+", label: "Revenue Generated" },
              { number: "50+", label: "Team Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-accent to-sage-light bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                <div className="text-sm text-primary-foreground/70 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
