import { Link } from "react-router";

export default function PrivacyPolicy() {
  return (
    <main className="lg:max-w-3xl max-w-2xl mx-auto p-6 wrapper lg:pt-28 pt-24 pb-20">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 17, 2025</p>

      <p className="mb-6">
        At EmailDeclutterAI, your privacy is extremely important to us. This
        policy outlines the data we access, how we use it, and your control over
        it.
      </p>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">1. What We Access</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Basic Profile Info</strong>
            <br />
            <span className="text-sm text-gray-700">
              Scope: userinfo.profile
            </span>
            <br />
            Used to display your name and profile photo inside the app.
          </li>
          <li>
            <strong>Email Address</strong>
            <br />
            <span className="text-sm text-gray-700">Scope: userinfo.email</span>
            <br />
            Used to identify your account and personalize your experience.
          </li>
          <li>
            <strong>Email Metadata</strong>
            <br />
            <span className="text-sm text-gray-700">Scope: gmail.metadata</span>
            <br />
            Allows us to read subject lines, senders, timestamps, and headers —
            not the body of your emails.
          </li>
          <li>
            <strong>Email Management</strong>
            <br />
            <span className="text-sm text-gray-700">Scope: gmail.modify</span>
            <br />
            Enables actions like deleting, labeling, archiving, or marking
            emails to help you declutter your inbox.
          </li>
          <li>
            <strong>Gmail Labels</strong>
            <br />
            <span className="text-sm text-gray-700">Scope: gmail.labels</span>
            <br />
            Lets us view and apply labels to help organize your inbox
            effectively.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">2. What We Never Access</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>We do not read or store your email content (body).</li>
          <li>We do not send emails on your behalf.</li>
          <li>We do not access your contacts or calendars.</li>
          <li>We do not share your data with third parties.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Summarize, categorize, and prioritize your emails.</li>
          <li>Help you label, archive, or delete clutter with your consent.</li>
          <li>
            Improve the effectiveness of decluttering based on your existing
            inbox structure.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">4. You're in Control</h2>
        <p>
          You can disconnect your Gmail account at any time. When you do, we
          immediately revoke access and delete any associated data from our
          systems.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="font-semibold text-xl mb-2">5. Security</h2>
        <p>
          We use industry-standard encryption and store only the minimal data
          necessary to power your features. Your access token is securely stored
          and never exposed.
        </p>
      </section>

      <section>
        <h2 className="font-semibold text-xl mb-2">6. Google API Disclosure</h2>
        <p>
          EmailDeclutterAI’s use of Google user data is strictly limited to the
          practices described above and complies with the Google API Services
          User Data Policy, including the Limited Use requirements.
        </p>
      </section>

      <div className="mt-12 border-t pt-8 text-center">
        <p className="mb-4 text-gray-700 font-medium">Got questions?</p>
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-2 w-48 rounded-xl text-sm font-semibold hover:bg-gray-900 transition"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
