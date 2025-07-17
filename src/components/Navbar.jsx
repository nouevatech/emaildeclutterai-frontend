import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const navLinks = [
    { name: "How It Works", type: "section", path: "/#how" },
    { name: "Watch Demo", type: "section", path: "/demo" },
    { name: "Sign In", type: "route", path: "/login" },
  ];

  const renderLink = (link) => {
    if (link.type === "route") {
      return (
        <Link
          key={link.name}
          to={link.path}
          className="hover:text-gray-900"
          onClick={() => setOpen(false)}
        >
          {link.name}
        </Link>
      );
    }
    return (
      <HashLink
        key={link.name}
        smooth
        to={link.path}
        className="hover:text-gray-900"
        onClick={() => setOpen(false)}
      >
        {link.name}
      </HashLink>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm px-6 lg:px-10 py-4 ">
        <div className="relative flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/">
            <span>
              <Logo variant="black" />
            </span>
          </Link>

          {/* Center: How It Works & Watch Demo */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-sm text-gray-700">
            {navLinks
              .filter(
                (link) =>
                  link.name === "How It Works" || link.name === "Watch Demo"
              )
              .map((link) => renderLink(link))}
          </div>

          {/* Right: User Profile or Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-700">
            {user ? (
              <DashboardHeader user={user} onLogout={handleLogout} />
            ) : (
              <>
                {renderLink({ name: "Sign In", type: "route", path: "/login" })}
                <Link
                  to="/login"
                  className="bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 text-xs font-semibold"
                >
                  Try For Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile: Avatar + Menu Icon */}
          <div className="lg:hidden flex items-center space-x-4">
            {user &&
              (safeUser.picture ? (
                <img
                  src={safeUser.picture}
                  alt={safeUser.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-green-900 text-white flex items-center justify-center text-sm font-semibold">
                  {safeUser.name?.charAt(0)?.toUpperCase() || "?"}
                </div>
              ))}
            <button
              className="text-3xl text-gray-700"
              onClick={() => setOpen(true)}
            >
              <BiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 h-16 border-b border-gray-200">
          <span className="font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-gray-700"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-6 text-gray-700">
          {navLinks.map((link) => renderLink(link))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-black text-white text-sm px-4 py-3 rounded-md text-center hover:bg-gray-800"
          >
            Try For Free
          </Link>
        </nav>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 md:hidden"
        />
      )}
    </>
  );
}
