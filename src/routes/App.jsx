import { Outlet } from "react-router";
import "../App.css";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
