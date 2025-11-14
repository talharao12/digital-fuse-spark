import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Digital Fuse transformed our online presence. Their strategic approach to digital marketing helped us achieve 300% growth in just 6 months.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      content: "The team at Digital Fuse is exceptional. They truly understand the digital landscape and deliver results that exceed expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StyleHub",
      content: "Working with Digital Fuse was a game-changer for our brand. Their creativity and data-driven approach delivered incredible ROI.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it—hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover-lift border-accent/20">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
