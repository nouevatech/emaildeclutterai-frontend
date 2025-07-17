import { useEffect, useState } from "react";
import { fetchEmails, prioritizeEmails } from "../api/api";
import EmailCard from "../components/EmailCard";

export default function Dashboard2() {
  const [emails, setEmails] = useState([]);
  const [prioritized, setPrioritized] = useState([]);

  useEffect(() => {
    const loadEmails = async () => {
      try {
        const res = await fetchEmails();
        setEmails(res.data.emails);

        const priorities = await prioritizeEmails(res.data.emails);
        setPrioritized(priorities.data.prioritized);
      } catch (err) {
        console.error("Failed to load emails:", err);
      }
    };

    loadEmails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Inbox Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {emails.map((email) => (
          <EmailCard key={email.id} email={email} />
        ))}
      </div>

      {prioritized.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Prioritized</h2>
          <ul className="space-y-2">
            {prioritized.map((p, i) => (
              <li key={i} className="bg-white p-3 rounded shadow">
                <strong>[{p.priority}]</strong> {p.subject} — <em>{p.from}</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
