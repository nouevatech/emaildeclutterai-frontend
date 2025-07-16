export default function DemoLanding() {
  return (
    <main className="lg:max-w-2xl max-w-xl mx-auto p-6 wrapper lg:pt-24 pt-20 pb-20">
      <h1 className="text-4xl font-bold mb-6">EmailDeclutterAI — Demo</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
        <p>
          This is a live demo of EmailDeclutterAI — an AI-powered tool that
          helps you declutter and manage your inbox effectively.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How to Use This Demo</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Login with your Google account — only Gmail accounts currently
            supported. More email providers will be considered for future
            versions, based on user feedback - room for improvement.
          </li>
          <li>
            You’ll be asked to grant EmailDeclutterAi permission to view your
            metadata (subject, sender, date). We do not read your full emails so
            your sensitive info remains protected and in your control.
          </li>
          <li>
            After logging in, the app fetches your latest 10 emails for the
            deno, and uses AI to categorize them into useful groupings - like
            Priority levels, Newsletters, Promotions, and more.
          </li>
          <li>
            You’ll see a summary of your inbox based on these AI-generated
            categories.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Important Notes</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            This is a demo; only 10 emails are analyzed, for speed and
            simplicity.
          </li>
          <li>
            The AI uses only email subject and sender data for categorization,
            not full email contents.
          </li>
          <li>
            No emails are deleted or unsubscribed automatically during this
            demo.
          </li>
          <li>
            Your privacy and data security are important; email content is never
            stored or shared beyond AI processing.
          </li>
          <li>
            For full features of the bulk summaries, prioritization, bulk
            unsubscribe automation, stay tuned for upcoming version updates.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Questions?</h2>
        <p>
          Feel free to ask after the demo. Thank you for testing
          EmailDeclutterAI! We appreciate the love.
        </p>
      </section>
    </main>
  );
}
