import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that drive real business growth.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build lasting partnerships.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver exceptional quality in everything we do.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We stay ahead of trends to keep your brand competitive.",
    },
  ];

  const team = [
    {
      name: "Alex Thompson",
      role: "Founder & CEO",
      description: "15+ years in digital marketing with a passion for data-driven strategies.",
    },
    {
      name: "Sarah Martinez",
      role: "Creative Director",
      description: "Award-winning designer specializing in brand identity and visual storytelling.",
    },
    {
      name: "David Kim",
      role: "Head of Strategy",
      description: "Former agency lead with expertise in performance marketing and analytics.",
    },
    {
      name: "Emma Wilson",
      role: "Social Media Lead",
      description: "Social media expert with a track record of viral campaigns and community growth.",
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Digital Fuse</h1>
              <p className="text-lg text-muted-foreground">
                We're a team of passionate digital marketing experts dedicated to helping businesses achieve extraordinary results online.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-center mb-6">
                  Digital Fuse was founded with a simple mission: to help businesses ignite their brand and amplify their digital presence. What started as a small team of marketing enthusiasts has grown into a full-service digital marketing agency serving clients worldwide.
                </p>
                <p className="text-muted-foreground text-center mb-6">
                  We believe in the power of data-driven strategies combined with creative storytelling. Every business has a unique story to tell, and we're here to help you tell it in a way that resonates with your audience and drives real results.
                </p>
                <p className="text-muted-foreground text-center">
                  Today, we're proud to work with startups, small businesses, and established enterprises across various industries, helping them navigate the ever-changing digital landscape and achieve their growth goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  To empower businesses of all sizes with innovative digital marketing strategies that drive growth, engagement, and measurable ROI. We're committed to being more than just a service provider—we're your strategic partner in success.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted digital marketing agency, known for delivering exceptional results and building lasting partnerships. We envision a future where every business has access to world-class marketing expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover-lift border-accent/20">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-accent mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
