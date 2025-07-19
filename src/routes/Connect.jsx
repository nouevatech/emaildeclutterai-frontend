import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import redenvelope from "/redenvelope.png";

export default function Connect() {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [consentGiven, setConsentGiven] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Connect Gmail – EmailDeclutterAI";

    fetch("https://emaildeclutterai-backend.onrender.com/auth/status", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) navigate("/");
        else setCheckingAuth(false);
      })
      .catch(() => navigate("/"));
  }, [navigate]);

  const handleContinue = () => {
    if (!consentGiven) return;
    navigate("/dashboard");
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">Verifying session...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-xl bg-gray-900 rounded-lg shadow-lg p-6 md:p-10">
          <div className="bg-gray-700/20 px-6 py-8 md:px-10 md:py-10 rounded-lg text-center border border-gray-600 shadow">
            <div className="flex justify-center mx-auto w-8 h-auto mb-4">
              <img
                src={redenvelope}
                alt="Google icon"
                className="w-full h-full"
              />
            </div>

            <h2 className="lg:text-xl text-lg font-medium text-gray-200 mb-4">
              Connect your Gmail inbox
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              We access only the necessary email metadata to help you declutter
              your inbox such as subject lines, senders, and labels. We never
              store or read the content of your emails. You stay in full control
              of your data and can disconnect your inbox at any time.
            </p>

            <div className="flex items-start gap-1 text-left text-sm text-gray-300 mb-4">
              <input
                type="checkbox"
                id="consent"
                checked={consentGiven}
                onChange={(e) => setConsentGiven(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-xs">
                I consent to EmailDeclutterAI accessing my inbox metadata and I
                agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="underline text-gray-100 hover:text-white"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              onClick={handleContinue}
              disabled={!consentGiven}
              className={`px-6 py-3 w-full max-w-xs rounded-lg font-medium transition ${
                consentGiven
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Continue to Inbox
            </button>
          </div>
        </div>
      </div>

      <footer className="mt-auto text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} EmailDeclutterAI
      </footer>
    </main>
  );
}
