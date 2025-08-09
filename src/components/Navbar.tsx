import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";

type NavigationProps = {
  scrollToSection: (id: string) => void;
};

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const links = [
    { id: "home", label: "Hem" },
    { id: "about", label: "Om Mig" },
    { id: "Meriter", label: "Meriter" },
    { id: "highlights", label: "Karriär" },

    { id: "gallery", label: "Galleri" },
  ];

  const handleClick = (id: string) => {
    setActiveId(id);
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer select-none"
            onClick={() => handleClick("home")}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mr-4 shadow-lg">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-extrabold text-gray-900 drop-shadow-md tracking-wide">
              Lorik
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`relative px-4 py-2 rounded-lg font-semibold transition-colors duration-300
                  ${
                    activeId === id
                      ? "text-blue-700 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:rounded-full after:bg-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:shadow-md"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Visa meny"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-4 pt-4 pb-6 space-y-3">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleClick(id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors duration-300
                  ${
                    activeId === id
                      ? "bg-blue-100 text-blue-700 shadow-inner"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
