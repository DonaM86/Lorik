import React, { useState, useRef } from "react";
import { Camera, Trophy, X } from "lucide-react";
import GalleriBilder, { GalleriBild } from "./GalleriBilder";
import GalleriVideor, { GalleriVideo } from "./GalleriVideor";
import { useTranslation } from "react-i18next";

type MediaTyp = "bild" | "video";

const galleriBilder: GalleriBild[] = [
  {
    src: "/images/lor6.jpg",
    titel: "Gothia SEF 2025",
  },
  {
    src: "/images/lor5.jpg",
    titel: "Kritisk räddning",
  },
  {
    src: "/images/lor7.jpg",
    titel: "Fokuserad och redo",
  },
  {
    src: "/images/lor8.JPG",
    titel: "I målets mitt",
  },
  {
    src: "/images/lor9.jpg",
    titel: "Tränarsamtal",
  },
  {
    src: "/images/lor10.jpg",
    titel: "Mot nästa mål",
  },
  {
    src: "/images/lor12.jpg",
    titel: "Efter segern",
  },
];

const galleriVideos: Omit<GalleriVideo, "beskrivning">[] = [
  {
    src: "/videos/lor4.mp4",
    titel: "IFK Göteborg - Kristianstad FC",
    längd: "2:35",
    utvald: true,
  },
  {
    src: "/videos/lor1.mp4",
    titel: "IFK Göteborg - Elfsborg IF",
    längd: "4:12",
    utvald: false,
  },
  {
    src: "/videos/lor2.mp4",
    titel: "IFK Göteborg - Mjällby AIF",
    längd: "3:50",
    utvald: false,
  },
  {
    src: "/videos/lor3.mp4",
    titel: "Gais - IFK Göteborg, 2024",
    längd: "5:10",
    utvald: false,
  },
];

const Galleri: React.FC = () => {
  const { t } = useTranslation();

  const [modalÖppen, setModalÖppen] = useState(false);
  const [modalInnehåll, setModalInnehåll] = useState<{
    typ: MediaTyp;
    src: string;
    titel: string;
  } | null>(null);

  const bilderRef = useRef<HTMLDivElement>(null);
  const videorRef = useRef<HTMLDivElement>(null);

  const scrollTill = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const öppnaModal = (typ: MediaTyp, src: string, titel: string) => {
    setModalInnehåll({ typ, src, titel });
    setModalÖppen(true);
  };

  const stängModal = () => {
    setModalÖppen(false);
    setModalInnehåll(null);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("gallery.title", "Galleri")}
            </h2>
            <p className="text-xl text-gray-600">
              {t(
                "gallery.description",
                "Utforska Loriks fotbollsresa genom bilder och videor"
              )}
            </p>
          </div>

          {/* Klickbara kort för att hoppa till sektioner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              role="button"
              tabIndex={0}
              onClick={() => scrollTill(bilderRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTill(bilderRef)}
              className="cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Camera className="h-16 w-16 mx-auto mb-4 text-blue-600" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {t("gallery.matchPhotos", "Match bilder")}
              </h4>
              <p className="text-gray-600 mb-4">
                {t(
                  "gallery.matchPhotosDesc",
                  "Behind-the-scenes från utveckling och övningar"
                )}
              </p>
              <div className="text-sm text-blue-600 font-medium">
                {galleriBilder.length}+ {t("gallery.photos", "foton")}
              </div>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => scrollTill(videorRef)}
              onKeyDown={(e) => e.key === "Enter" && scrollTill(videorRef)}
              className="cursor-pointer bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-600" />
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                {t("gallery.matchHighlights", "Matchhöjdpunkter")}
              </h4>
              <p className="text-gray-600 mb-4">
                {t(
                  "gallery.matchHighlightsDesc",
                  "Bästa räddningar och viktiga matcher"
                )}
              </p>
              <div className="text-sm text-yellow-600 font-medium">
                {galleriVideos.length}+ {t("gallery.videos", "videor")}
              </div>
            </div>
          </div>

          {/* Galleri */}
          <div ref={bilderRef}>
            <GalleriBilder bilder={galleriBilder} öppnaModal={öppnaModal} />
          </div>
          <div ref={videorRef}>
            <GalleriVideor videor={galleriVideos} öppnaModal={öppnaModal} />
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalÖppen && modalInnehåll && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={stängModal}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div
            className="relative max-w-6xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={stängModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label={t("gallery.closeModal", "Stäng modal")}
            >
              <X className="h-8 w-8" />
            </button>

            {modalInnehåll.typ === "bild" ? (
              <img
                src={modalInnehåll.src}
                alt={modalInnehåll.titel}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            ) : (
              <video
                controls
                autoPlay
                className="max-w-full max-h-full rounded-lg bg-black"
                src={modalInnehåll.src}
                aria-label={modalInnehåll.titel}
              />
            )}

            <div className="absolute -bottom-12 left-0 text-white">
              <h3 className="text-lg font-bold">{modalInnehåll.titel}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Galleri;
