function TrophyIcon() {
  return (
    <svg
      className="h-24 w-24 mx-auto mb-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M208.3 64L432.3 64C458.8 64 480.4 85.8 479.4 112.2C479.2 117.5 479 122.8 478.7 128L528.3 128C554.4 128 577.4 149.6 575.4 177.8C567.9 281.5 514.9 338.5 457.4 368.3C441.6 376.5 425.5 382.6 410.2 387.1C390 415.7 369 430.8 352.3 438.9L352.3 512L416.3 512C434 512 448.3 526.3 448.3 544C448.3 561.7 434 576 416.3 576L224.3 576C206.6 576 192.3 561.7 192.3 544C192.3 526.3 206.6 512 224.3 512L288.3 512L288.3 438.9C272.3 431.2 252.4 416.9 233 390.6C214.6 385.8 194.6 378.5 175.1 367.5C121 337.2 72.2 280.1 65.2 177.6C63.3 149.5 86.2 127.9 112.3 127.9L161.9 127.9C161.6 122.7 161.4 117.5 161.2 112.1C160.2 85.6 181.8 63.9 208.3 63.9zM165.5 176L113.1 176C119.3 260.7 158.2 303.1 198.3 325.6C183.9 288.3 172 239.6 165.5 176zM444 320.8C484.5 297 521.1 254.7 527.3 176L475 176C468.8 236.9 457.6 284.2 444 320.8z" />
    </svg>
  );
}

export default function Meriter() {
  return (
    <section id="Meriter" className="max-w-6xl mx-auto px-6 py-12">
      {/* Championship Highlight */}
      <div className="mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-8 text-center text-white shadow-2xl">
        <TrophyIcon />
        <h3 className="text-3xl font-bold mb-2">MÄSTARE</h3>
        <p className="text-xl mb-2">
          Startmålvakt i Gothia SEF 2025, som vi vann
        </p>
      </div>

      {/* Merit Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-yellow-600">
              INTERNATIONELLT
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Turnering i Barcelona
          </h3>
          <p className="text-gray-600 mb-2">
            Turnering i Barcelona vid 13 års ålder, vann silver
          </p>
          <div className="text-sm text-gray-500">
            13 år • Internationell erfarenhet
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-orange-600">SERIE</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Svårserie Göteborg 2023
          </h3>
          <p className="text-gray-600 mb-2">3:a i svårserie Göteborg 2023</p>
          <div className="text-sm text-gray-500">
            Bronsmedalj • Regional tävling
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-gray-600">SERIE</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Svårserie Göteborg 2024
          </h3>
          <p className="text-gray-600 mb-2">2:a i svårserie Göteborg 2024</p>
          <div className="text-sm text-gray-500">
            Silvermedalj • Förbättrad prestation
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-blue-600">ELIT</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            P16 Allsvenskan
          </h3>
          <p className="text-gray-600 mb-2">
            Deltagit i 5 P16 Allsvenska matcher vid 14 års ålder 2024
          </p>
          <div className="text-sm text-gray-500">Elit nivå • 14 år</div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-green-600">
              UTTAGNING
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Göteborgs distriktslag
          </h3>
          <p className="text-gray-600 mb-2">Uttagen i Göteborgs distriktslag</p>
          <div className="text-sm text-gray-500">
            Regionalt erkännande • Elitnivå
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
            <span className="text-sm font-semibold text-purple-600">
              AKTUELLT
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">
            Ligacup P17 2025
          </h3>
          <p className="text-gray-600 mb-2">
            Startat 2 Ligacupmatcher i P17 2025
          </p>
          <div className="text-sm text-gray-500">Startmålvakt • 15 år</div>
        </div>
      </div>
    </section>
  );
}
