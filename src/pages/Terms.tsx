import LegalPage, { Section } from "@/components/LegalPage";

const Terms = () => (
  <LegalPage
    title="Terms of Service"
    intro="The terms on which Digital Fuse provides its marketing services and the Lead Signal Bridge platform."
    updated="19 September 2026"
  >
    <Section heading="Agreement">
      <p>
        These terms govern your use of thedigitalfuse.com and of Lead Signal Bridge at
        app.thedigitalfuse.com. By using either, you agree to them. If you are accepting on behalf
        of a business, you confirm you are authorised to bind that business.
      </p>
    </Section>

    <Section heading="What we provide">
      <p>
        Digital Fuse provides digital marketing services. Lead Signal Bridge is a platform we
        operate for client businesses that connects Click to WhatsApp advertising to the enquiries
        it produces, and reports qualified and converted outcomes back to Meta so advertising
        performance can be measured accurately.
      </p>
    </Section>

    <Section heading="Accounts">
      <p>
        Platform accounts are created by Digital Fuse for businesses we have engaged with. There is
        no public sign-up. You are responsible for keeping your credentials confidential and for
        activity carried out under your account. Tell us immediately if you believe an account has
        been compromised.
      </p>
    </Section>

    <Section heading="Your responsibilities as a client">
      <p>
        You are responsible for obtaining any consent your own customers must give before you
        message them or process their information, and for complying with the laws that apply to
        your business.
      </p>
      <p>
        Your use of the platform is also subject to Meta's terms, including the WhatsApp Business
        Messaging Policy and the Meta Platform Terms. Connecting your WhatsApp Business Account to
        the platform grants us the access needed to receive your message webhooks and report
        conversion events on your behalf, and nothing beyond that.
      </p>
      <p>
        Conversion events reported to Meta are derived from how your team marks enquiries in the
        dashboard. You are responsible for marking them accurately. Once an event has been sent to
        Meta it cannot be withdrawn.
      </p>
    </Section>

    <Section heading="Acceptable use">
      <p>
        You may not use the platform to send unsolicited messages, to harass or deceive anyone, to
        process information you have no right to process, to attempt to gain unauthorised access to
        any part of the system or to another client's data, or to interfere with its operation.
      </p>
    </Section>

    <Section heading="Third party platforms">
      <p>
        The platform depends on services operated by Meta. We do not control those services and are
        not responsible for their availability, for changes Meta makes to them, or for decisions
        Meta takes about your accounts. Interruption caused by a third party is not a breach of
        these terms.
      </p>
    </Section>

    <Section heading="Intellectual property">
      <p>
        The platform, this website, and their underlying software remain the property of Digital
        Fuse. Your data remains yours, and we claim no ownership of the enquiries, conversations or
        business information processed on your behalf.
      </p>
    </Section>

    <Section heading="Fees">
      <p>
        Fees, billing periods and the scope of services are set out in the separate agreement
        between Digital Fuse and your business. Where these terms and that agreement conflict, that
        agreement governs.
      </p>
    </Section>

    <Section heading="Disclaimers and liability">
      <p>
        The platform is provided as is. We do not warrant that attribution will be complete or
        uninterrupted; conversations that do not originate from an advertisement carry no click
        identifier and cannot be attributed, and Meta may reject or delay events for reasons
        outside our control.
      </p>
      <p>
        To the extent permitted by law, Digital Fuse is not liable for indirect or consequential
        loss, including lost profits or lost advertising spend, and our total liability arising out
        of these terms is limited to the fees paid by you in the three months before the claim
        arose.
      </p>
    </Section>

    <Section heading="Termination">
      <p>
        Either party may end the engagement on written notice. On termination we disconnect your
        WhatsApp Business Account from the platform and delete the access tokens we hold. Data
        retention after termination follows our{" "}
        <a className="text-accent underline" href="/privacy">privacy policy</a>. We may suspend
        access immediately where use breaches these terms or puts the platform or other clients at
        risk.
      </p>
    </Section>

    <Section heading="Changes">
      <p>
        We may revise these terms. The date at the top of this page reflects the most recent
        revision, and we will notify clients of material changes.
      </p>
    </Section>

    <Section heading="Governing law">
      <p>
        These terms are governed by the laws of the Islamic Republic of Pakistan, and the courts of
        Pakistan have exclusive jurisdiction over any dispute arising from them.
      </p>
    </Section>

    <Section heading="Contact">
      <p>
        Questions about these terms can be sent to{" "}
        <a className="text-accent underline" href="mailto:info@thedigitalfuse.com">info@thedigitalfuse.com</a>.
      </p>
    </Section>
  </LegalPage>
);

export default Terms;
