import { MapPin, Calendar, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z" />
    </svg>
  );
}

type HeroProps = {
  scrollToSection: (id: string) => void;
};

export default function Hero({ scrollToSection }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 opacity-40 animate-pulse blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-green-400 opacity-30 animate-pulse blur-3xl pointer-events-none"></div>

      <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-lg border-b border-white/20 rounded-b-3xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center gap-10">
          <div className="relative group">
            <div className="w-44 h-44 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 p-1 transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/lorik.jpeg"
                  alt={t("hero.name") + " - Målvakt i IFK Göteborgs U16-lag"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
              {t("hero.active", "AKTIV")}
            </div>
          </div>

          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl font-extrabold mb-3 drop-shadow-lg tracking-wide">
              {t("hero.name")}
            </h1>
            <p className="text-blue-300 text-xl mb-6 font-semibold drop-shadow-md">
              {t("hero.position")}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-base font-medium text-blue-100 drop-shadow-md">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>{t("hero.age")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5" />
                  <span>{t("hero.level")}</span>
                </div>
                <MapPin className="h-5 w-5" />
                <span>{t("hero.location")}</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("about")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                {t("hero.readMore")}
              </button>
              <a
                href="mailto:Dona.1986@hotmail.com"
                className="border border-white/40 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-bold tracking-wide shadow-md inline-block text-center transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {t("hero.contactMe")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-6 text-white drop-shadow-xl tracking-tight">
            {t("hero.forwardPathTitle")}
          </h2>
          <p className="text-xl lg:text-2xl mb-10 text-gray-300 leading-relaxed max-w-lg drop-shadow-md">
            {t("hero.forwardPathDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6"></div>
        </div>

        {/* Pokal-box */}
        <div className="relative w-full max-w-md lg:max-w-none">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-3xl p-8 sm:p-10 shadow-2xl transform hover:scale-[1.03] transition-transform duration-500">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 sm:p-10 text-center">
              <TrophyIcon className="h-28 w-28 mx-auto mb-6 text-white drop-shadow-lg" />
              <h3 className="text-3xl font-extrabold mb-4 drop-shadow-lg">
                {t("hero.trophyTitle")}
              </h3>
              <p className="text-blue-100 text-lg max-w-md mx-auto drop-shadow-md">
                {t("hero.trophyDesc")}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow cursor-default">
                <div className="text-3xl font-extrabold text-white drop-shadow-md">
                  15
                </div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">
                  {t("hero.facts.age")}
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow cursor-default">
                <div className="text-3xl font-extrabold text-white drop-shadow-md">
                  U16
                </div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">
                  {t("hero.facts.level")}
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow cursor-default">
                <div className="text-3xl font-extrabold text-white drop-shadow-md">
                  IFK
                </div>
                <div className="text-sm text-blue-200 uppercase tracking-wide">
                  {t("hero.facts.club")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
