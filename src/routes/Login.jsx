import { useEffect, useState } from "react";
import googlecoloricon from "/googlecoloricon.png";
import { useNavigate } from "react-router";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login – EmailDeclutterAI";
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    navigate("/connecting");
  };

  return (
    <>
      <main className="min-h-screen flex flex-col">
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 md:p-10">
            <div className="bg-gray-700/20 px-6 py-8 md:px-10 md:py-10 rounded-lg text-center border border-gray-600 shadow">
              <div className="flex justify-center mx-auto w-8 h-auto mb-4">
                <img
                  src={googlecoloricon}
                  alt="Google icon"
                  className="w-full h-full"
                />
              </div>

              <div className="mb-4">
                <h1 className="text-xl mb-1 text-gray-200">
                  Login with Google
                </h1>
                <p className="text-xs text-gray-400">
                  Please sign in to start decluttering.
                </p>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className={`bg-white text-gray-900 font-medium w-full px-6 py-3 rounded-lg transition ${
                  loading ? "opacity-50 cursor-wait" : "hover:bg-gray-200"
                }`}
              >
                {loading ? "Loading..." : "Continue with Google"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
