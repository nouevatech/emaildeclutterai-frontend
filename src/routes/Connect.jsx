import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import redenvelope from "/redenvelope.png";

export default function Connect() {
  const [consentGiven, setConsentGiven] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Connect Gmail – EmailDeclutterAI";
  }, []);

  const handleContinue = () => {
    if (!consentGiven) return;
    navigate("/dashboard");
  };

  return (
    <main className="wrapper">
      <div className="max-w-xl mx-auto my-40 md:p-10 p-5  bg-gray-900 rounded-lg shadow-lg">
        <div className="bg-gray-700/20 px-10 py-10 rounded-lg text-center border border-gray-600 shadow">
          <div className="flex justify-center mx-auto w-8 h-auto">
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
            We’ll scan your inbox to declutter it intelligently. No information
            is stored by us. You remain in control of your data.
          </p>

          <div className="flex items-start gap-1 text-center text-sm text-gray-300 mb-4">
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
            className={`px-6 py-3 w-80 rounded-lg font-medium transition ${
              consentGiven
                ? "bg-white text-gray-900 hover:bg-gray-200"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Inbox
          </button>
        </div>
      </div>
    </main>
  );
}
