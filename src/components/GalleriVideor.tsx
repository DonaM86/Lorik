import React, { useState, useRef, useEffect } from "react";
import { Video } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface GalleriVideo {
  src: string;
  titel: string;
  beskrivning?: string;
  längd: string;
  utvald: boolean;
}

interface Props {
  videor: GalleriVideo[];
  öppnaModal?: (typ: "video", src: string, titel: string) => void;
}

const GalleriVideor: React.FC<Props> = ({ videor, öppnaModal }) => {
  const { t } = useTranslation();
  const initialIndex = videor.findIndex((v) => v.utvald);
  const [storVideoIndex, setStorVideoIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [storVideoIndex]);

  if (videor.length === 0) return null;

  const storVideo = videor[storVideoIndex];
  const andraVideor = videor.filter((_, idx) => idx !== storVideoIndex);

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
          <Video className="h-6 w-6 mr-2 text-blue-600" />
          {t("gallery.videos.title", "Videor")}
        </h3>
      </div>

      <div className="mb-8">
        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
          <video
            ref={videoRef}
            controls
            className="w-full h-full object-cover"
            src={storVideo.src}
            aria-label={storVideo.titel}
            onClick={() =>
              öppnaModal && öppnaModal("video", storVideo.src, storVideo.titel)
            }
          />
          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
            {storVideo.längd}
          </div>
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="text-base sm:text-2xl font-bold mb-1 sm:mb-2">
              {storVideo.titel}
            </h4>
            {storVideo.beskrivning && (
              <p className="text-sm sm:text-lg opacity-90">
                {storVideo.beskrivning}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {andraVideor.map((video) => {
          const originalIndex = videor.findIndex((v) => v === video);

          return (
            <div
              key={originalIndex}
              className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              onClick={() => setStorVideoIndex(originalIndex)}
              aria-label={`${t("gallery.videos.playVideo", "Spela video")} ${
                video.titel
              }`}
            >
              <video
                className="w-full h-full object-cover"
                src={video.src}
                muted
                playsInline
                preload="metadata"
              />
              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/80 text-white px-2 py-1 rounded text-[10px] sm:text-xs">
                {video.längd}
              </div>
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 bg-black/70 p-1 rounded text-white">
                <h5 className="font-bold text-[10px] sm:text-sm mb-0.5 sm:mb-1">
                  {video.titel}
                </h5>
                {video.beskrivning && (
                  <p className="text-[9px] sm:text-xs opacity-90">
                    {video.beskrivning}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleriVideor;
