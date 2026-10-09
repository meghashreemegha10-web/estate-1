import { createFileRoute } from "@tanstack/react-router";
import { email } from "@/data/copy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({ meta: [{ title: "Privacy Policy | Global Mahanshi Builders" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="bg-sage text-paper">
      <article className="mx-auto max-w-3xl px-5 py-20 lg:py-28">
        <h1 className="font-display text-6xl leading-display tracking-display">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          <p>
            Global Mahanshi Builders respects your privacy. When you submit an enquiry through this
            website, we collect the details you provide — such as your name, mobile number and message
            — solely to respond to your enquiry, arrange site visits and share information about our
            projects and services.
          </p>
          <p>
            We do not sell your personal information. Your details are shared only with our internal
            sales and support team and the systems we use to manage enquiries.
          </p>
          <p>
            To request correction or deletion of your information, write to{" "}
            <a href={`mailto:${email}`} className="border-b border-paper">
              {email}
            </a>
            .
          </p>
          <p>
            This policy may be updated periodically. Continued use of the website constitutes
            acceptance of the current policy.
          </p>
        </div>
      </article>
    </main>
  );
}
