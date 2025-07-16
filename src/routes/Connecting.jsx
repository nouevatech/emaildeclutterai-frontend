import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Connecting() {
  const navigate = useNavigate();
  const isLocal = window.location.hostname === "localhost";

  useEffect(() => {
    const goToAuth = () => {
      try {
        // Redirect to Google OAuth
        window.location.href = isLocal
          ? "http://localhost:5000/auth/google"
          : "https://emaildeclutterai-backend.onrender.com/auth/google";
        // window.location.href =
        //   "https://emaildeclutterai-backend.onrender.com/auth/google";
      } catch (err) {
        console.error("Error connecting:", err);
        navigate("/login");
      }
    };

    goToAuth();
  }, [navigate]);

  return (
    <main className="wrapper flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-300 text-sm">Connecting to Google...</p>
      </div>
    </main>
  );
}
