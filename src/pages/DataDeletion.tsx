import LegalPage, { Section } from "@/components/LegalPage";

const DataDeletion = () => (
  <LegalPage
    title="Data Deletion"
    intro="How to ask Digital Fuse to delete information we hold about you, and what happens when you do."
    updated="19 September 2026"
  >
    <Section heading="How to make a request">
      <p>
        Email{" "}
        <a className="text-accent underline" href="mailto:info@thedigitalfuse.com?subject=Data%20Deletion%20Request">
          info@thedigitalfuse.com
        </a>{" "}
        with the subject line <strong className="text-foreground">Data Deletion Request</strong>.
      </p>
      <p>
        So we can find your records, please tell us which of the cases below applies and include
        the detail it asks for. We do not need any other personal information, and you should not
        send us passwords or access tokens.
      </p>
    </Section>

    <Section heading="If you messaged a business on WhatsApp">
      <p>
        Include the WhatsApp phone number you messaged from and, if you know it, the name of the
        business you contacted.
      </p>
      <p>
        We will delete the contact record, the conversation history, and the enquiry raised from
        it. Because we process this information on behalf of that business, we will also tell them
        the request was made. Any conversion event already reported to Meta cannot be recalled, but
        those events carry an advertising click identifier and an outcome — not your phone number,
        your name, or anything you wrote.
      </p>
    </Section>

    <Section heading="If your business uses Lead Signal Bridge">
      <p>
        Include the business name and the WhatsApp Business Account identifier. We will disconnect
        the account from the platform, delete the stored access token, and delete the contacts,
        conversations, enquiries and conversion records belonging to it.
      </p>
      <p>
        You can also revoke our access directly from Meta at any time, in Business Settings under
        the business integrations for your WhatsApp Business Account. Doing so stops all further
        processing immediately, though it does not by itself delete what we already hold, so send
        us a request as well.
      </p>
    </Section>

    <Section heading="If you have a dashboard account">
      <p>
        Include the email address the account uses. We will delete the account, its password, and
        the record of actions taken under it.
      </p>
    </Section>

    <Section heading="What happens next">
      <p>
        We acknowledge requests within 5 business days and complete them within 30 days. We will
        write to confirm once the deletion is done.
      </p>
      <p>
        Deletion is permanent and cannot be undone. Backups are rotated on a 30 day cycle, so a
        copy may persist in an encrypted backup for up to that long after the live records are
        removed. We may retain the minimum needed to meet a legal obligation or to resolve a
        dispute, and if that applies to your request we will tell you what was kept and why.
      </p>
    </Section>

    <Section heading="Related">
      <p>
        Our <a className="text-accent underline" href="/privacy">privacy policy</a> explains what we
        collect and why.
      </p>
    </Section>
  </LegalPage>
);

export default DataDeletion;
