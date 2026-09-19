import LegalPage, { Section } from "@/components/LegalPage";

const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    intro="How Digital Fuse collects, uses and protects information across our website and our lead attribution platform."
    updated="19 September 2026"
  >
    <Section heading="Who we are">
      <p>
        Digital Fuse is a digital marketing agency. This policy covers our website at
        thedigitalfuse.com and Lead Signal Bridge, our lead attribution platform at
        app.thedigitalfuse.com.
      </p>
      <p>
        You can reach us at <a className="text-accent underline" href="mailto:info@thedigitalfuse.com">info@thedigitalfuse.com</a> with
        any question about this policy or about data we hold.
      </p>
    </Section>

    <Section heading="Our role">
      <p>
        We act in two different capacities, and your rights differ depending on which applies.
      </p>
      <p>
        For our own website and for the accounts of businesses who engage us, we decide how
        information is used. For WhatsApp conversations processed through Lead Signal Bridge, we
        act as a service provider to the business you messaged. That business decides what is
        collected and how long it is kept; we process it on their instructions. If you messaged a
        business through WhatsApp and want your information removed, you may contact either that
        business or us, and we will act on it.
      </p>
    </Section>

    <Section heading="What we collect">
      <p>
        <strong className="text-foreground">Website visitors.</strong> If you submit our contact
        form we receive the name, email address, and message you provide. We use it to respond to
        your enquiry.
      </p>
      <p>
        <strong className="text-foreground">WhatsApp conversations.</strong> When you message a
        business that uses Lead Signal Bridge, we receive from Meta the sender phone number, the
        WhatsApp display name, message content and timestamps, and the type of any attached media.
        Where the conversation began from a Click to WhatsApp advertisement, we also receive the
        click identifier Meta attaches to it. We do not download or store media files themselves.
      </p>
      <p>
        <strong className="text-foreground">Business clients.</strong> For each business using the
        platform we store the WhatsApp Business Account identifier, phone number identifier,
        advertising account and dataset identifiers, and an access token issued by Meta. Access
        tokens are encrypted at rest with AES-256-GCM and are never displayed in the dashboard or
        written to logs.
      </p>
      <p>
        <strong className="text-foreground">Dashboard users.</strong> Email address, a hashed
        password, an assigned role, and a record of actions taken in the dashboard. Accounts are
        created by us; there is no public sign-up.
      </p>
    </Section>

    <Section heading="Why we process it">
      <p>
        Lead Signal Bridge exists to connect an advertisement to its outcome. When someone responds
        to a Click to WhatsApp advertisement, we hold the click identifier alongside the resulting
        enquiry until a person at the business marks that enquiry qualified or converted. We then
        report that outcome to Meta through the Conversions API so the advertiser can measure which
        advertisements produced real business.
      </p>
      <p>
        We do not use WhatsApp conversation content for advertising, profiling, training machine
        learning models, or any purpose beyond the attribution described here, and we do not sell
        personal information.
      </p>
    </Section>

    <Section heading="Who we share it with">
      <p>
        <strong className="text-foreground">Meta Platforms.</strong> Conversion events are sent to
        Meta and contain the click identifier, the event name and time, and the associated
        advertising account. Conversation content is not sent to Meta.
      </p>
      <p>
        <strong className="text-foreground">The business you messaged.</strong> Enquiries and
        conversation history are visible to that business in the dashboard.
      </p>
      <p>
        <strong className="text-foreground">Our hosting provider.</strong> The platform and its
        database run on Railway, in the United States.
      </p>
      <p>
        We disclose information otherwise only where the law requires it.
      </p>
    </Section>

    <Section heading="How long we keep it">
      <p>
        Conversation records and enquiries are retained while the business remains a client, and
        are deleted within 30 days of that relationship ending unless the business asks us to
        remove them sooner. Conversion event records are kept for up to 24 months for reporting.
        Contact form submissions are kept for up to 24 months.
      </p>
    </Section>

    <Section heading="How we protect it">
      <p>
        All traffic runs over HTTPS. Access tokens are encrypted at rest. Every webhook we accept
        from Meta is cryptographically verified before it is processed, and requests that fail
        verification are rejected. Dashboard access requires a password, and each user sees only
        the business they are assigned to.
      </p>
      <p>
        No system is perfectly secure, and we do not claim otherwise. If a breach affects your
        information we will notify affected parties without undue delay.
      </p>
    </Section>

    <Section heading="Your rights">
      <p>
        You may ask us for a copy of the information we hold about you, ask us to correct it, or
        ask us to delete it. Write to{" "}
        <a className="text-accent underline" href="mailto:info@thedigitalfuse.com">info@thedigitalfuse.com</a> and
        we will respond within 30 days. Instructions specific to deletion are on our{" "}
        <a className="text-accent underline" href="/data-deletion">data deletion page</a>.
      </p>
    </Section>

    <Section heading="Children">
      <p>
        Our services are intended for businesses and are not directed to children under 18. We do
        not knowingly collect information from children.
      </p>
    </Section>

    <Section heading="Changes">
      <p>
        We may update this policy. The date at the top of this page reflects the most recent
        revision, and material changes will be communicated to affected clients directly.
      </p>
    </Section>
  </LegalPage>
);

export default Privacy;
