import { Instagram, Shield, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center mr-3">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">{t("footer.name")}</span>
              <div className="text-sm text-gray-400">{t("footer.title")}</div>
            </div>
          </div>

          {/* Sociala ikoner */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/lor1k_myftari"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 cursor-pointer"
            >
              <Instagram className="h-8 w-8" />
            </a>

            <a
              href="mailto:lorikmyftari680@gmail.com"
              aria-label={t("footer.emailLabel")}
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 cursor-pointer"
            >
              <Mail className="h-8 w-8" />
            </a>

            <a
              href="https://www.tiktok.com/@lorikm104"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lorik Myftari.{" "}
            {t("footer.rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
