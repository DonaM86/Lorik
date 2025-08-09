import React, { useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleriBild {
  src: string;
  titel: string;
}

interface Props {
  bilder: GalleriBild[];
  öppnaModal: (typ: "bild", src: string, titel: string) => void;
}

const GalleriBilder: React.FC<Props> = ({ bilder, öppnaModal }) => {
  const [aktivBildIndex, setAktivBildIndex] = useState(0);

  const föregåendeBild = () => {
    setAktivBildIndex((aktivBildIndex - 1 + bilder.length) % bilder.length);
  };

  const nästaBild = () => {
    setAktivBildIndex((aktivBildIndex + 1) % bilder.length);
  };

  if (bilder.length === 0) return null;

  //  zoomar UT
  const zoomaUtTitlar = ["Fokuserad och redo", "Tränarsamtal", "Mot nästa mål"];

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Camera className="h-6 w-6 mr-2 text-blue-600" />
          Bilder
        </h3>
        <div className="text-sm text-gray-500">
          {aktivBildIndex + 1} av {bilder.length}
        </div>
      </div>

      {/* Stor bild */}
      <div className="relative mb-6">
        <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={bilder[aktivBildIndex].src}
            alt={bilder[aktivBildIndex].titel}
            className="w-full h-full cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{
              objectFit: zoomaUtTitlar.includes(bilder[aktivBildIndex].titel)
                ? "contain"
                : "cover",
              objectPosition: "center",
            }}
            onClick={() =>
              öppnaModal(
                "bild",
                bilder[aktivBildIndex].src,
                bilder[aktivBildIndex].titel
              )
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h4 className="text-xl font-bold mb-1">
              {bilder[aktivBildIndex].titel}
            </h4>
          </div>

          {/* Pilar */}
          <button
            onClick={föregåendeBild}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Föregående bild"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nästaBild}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            aria-label="Nästa bild"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Miniatyrbilder */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {bilder.map((bild, index) => (
          <div
            key={index}
            className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
              index === aktivBildIndex
                ? "ring-3 ring-blue-500 shadow-lg"
                : "hover:shadow-md hover:scale-105"
            }`}
            onClick={() => setAktivBildIndex(index)}
            aria-label={`Visa bild ${bild.titel}`}
          >
            <img
              src={bild.src}
              alt={bild.titel}
              className="w-full h-full object-cover"
            />
            {index !== aktivBildIndex && (
              <div className="absolute inset-0 bg-black/20"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleriBilder;
