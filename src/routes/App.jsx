import { Outlet } from "react-router";
import "../App.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function App() {
  return (
    <div className="w-full text-center mt-20">
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
