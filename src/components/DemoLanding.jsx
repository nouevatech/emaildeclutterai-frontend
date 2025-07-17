import { useNavigate } from "react-router";

export default function DemoLanding() {
  const navigate = useNavigate();
  return (
    <main className="lg:max-w-3xl max-w-2xl mx-auto p-6 wrapper lg:pt-28 pt-24 pb-20">
      <h1 className="lg:text-4xl text-3xl mb-6">
        Welcome to <strong>EmailDeclutterAI ✨</strong> <br />
        Demo
      </h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 mt-4">What this is</h2>
        <p>A live demo of EmailDeclutterAI</p>
        <p className="text-sm">
          The AI-powered email decluttering app built for decision-makers.
          Unsubscribe, delete, and summarize in one click.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">How it works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Sign in with your Gmail.</li>
          <li>
            Consent to access your email metadata (subject, sender, date).
          </li>
          <li>
            We'll analyse your most recent 10 emails in this demo, for
            simplicity and speed.
          </li>
          <li>
            AI groups them into categories like Priority, Newsletters, and more.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">What to know</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Only metadata is used. We never read or store email content.</li>
          <li>No emails will be deleted or unsubscribed without permission.</li>
          <li>Stay tuned for more features coming soon.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          Watch the demo walkthrough
        </h2>
        - YouTube embed inserted here -
      </section>

      {/* Try it now  */}
      <section className="my-10 text-left">
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white font-semibold text-sm py-3 px-6 w-52 rounded-xl hover:bg-gray-900 transition"
        >
          Try it now
        </button>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Got Questions?</h2>
        <p>Feel free to ask after the demo.</p>
        <div className="text-md mt-4">
          <p>Thanks for trying out EmailDeclutterAI! </p>
          <p>We appreciate the love.</p>
        </div>
      </section>
    </main>
  );
}
