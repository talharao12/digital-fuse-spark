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
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-secondary-foreground">What Our Clients Say</h2>
          <p className="text-lg text-secondary-foreground/80">
            Don't just take our word for it—hear from businesses we've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-gradient-to-br from-primary to-primary/90 border-accent/30 hover:border-accent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <div className="mb-4">
                  <svg className="w-8 h-8 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-primary-foreground/80 mb-6 text-base leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
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
