import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false); // stäng menyn när språk ändras
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Knappen som öppnar/stänger meny */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label="Växla språk"
      >
        {i18n.language === "sv" ? "🇸🇪" : "🇺🇸"}
      </button>

      {/* Språkmenyn */}
      {open && (
        <div className="mt-2 flex flex-col bg-white rounded-lg shadow-lg py-2 w-32">
          <button
            onClick={() => changeLanguage("sv")}
            className={`flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 rounded ${
              i18n.language === "sv"
                ? "font-bold text-blue-600"
                : "text-gray-700"
            }`}
          >
            <span className="text-xl">🇸🇪</span>
            <span>Svenska</span>
          </button>
          <button
            onClick={() => changeLanguage("en")}
            className={`flex items-center space-x-2 px-4 py-2 hover:bg-blue-100 rounded ${
              i18n.language === "en"
                ? "font-bold text-blue-600"
                : "text-gray-700"
            }`}
          >
            <span className="text-xl">🇺🇸</span>
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
}
