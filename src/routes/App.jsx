import { Outlet } from "react-router";
import "../App.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import ScrollToTop from "../utils/ScrollToTop";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <div>
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
