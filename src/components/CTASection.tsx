import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Let's Grow Your Business <span className="bg-gradient-to-r from-accent to-sage-light bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Ready to take your digital marketing to the next level? Get in touch with our team and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
