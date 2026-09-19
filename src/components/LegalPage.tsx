import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Shared chrome for the legal pages. The rest of the site repeats its layout
// per page, but privacy, terms and data deletion are identical in structure
// and only differ in prose, so they share one shell.
const LegalPage = ({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}) => (
  <div className="min-h-screen">
    <Header />
    <main>
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground">{intro}</p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: {updated}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-10">{children}</div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export const Section = ({ heading, children }: { heading: string; children: ReactNode }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">{heading}</h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

export default LegalPage;
