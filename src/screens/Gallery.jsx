import React, { useState, useEffect, useCallback } from "react";
import {
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
} from "lucide-react";

// Portfolio images
import usbank from "../assets/usbank.png";
import castleRock from "../assets/CastleRock.png";
import osprey from "../assets/Osprey.png";
import msp from "../assets/MSP.jpg";
import mspNight from "../assets/msp-night.jpg";
import cody from "../assets/cody_home.png";
import park from "../assets/Park.jpg";
import newHopeSun from "../assets/newhopesun.jpg";
import downtown from "../assets/downtown.jpg";
import duran from "../assets/duran.png";
import landFront from "../assets/land_front.jpg";
import flag from "../assets/flag.jpg"

const VideoCard = ({ title, videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoId = (url) => {
    const regExp =
      /^.*(?:youtu\.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]{11}).*/;

    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition">
      {isPlaying && videoId ? (
        <div className="relative aspect-video">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="relative w-full text-left group"
          aria-label={`Play video: ${title}`}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition grid place-items-center">
              <PlayCircle className="w-16 h-16 text-white drop-shadow" />
            </div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>
          </div>
        </button>
      )}
    </div>
  );
};

const Lightbox = ({ images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [onClose, prev, next]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);

    // Prevent page scrolling behind the lightbox
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [handleKey]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-7xl h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition"
          aria-label="Close"
          type="button"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative flex-1 min-h-0">
          <img
            src={img.src}
            alt={img.alt || ""}
            className="absolute inset-0 m-auto max-h-full max-w-full object-contain"
          />

          <button
            onClick={prev}
            className="absolute left-2 md:left-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white transition"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-5 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 text-white transition"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        <div className="pt-4 text-center text-white">
          <p className="font-medium">
            {img.caption || img.alt}
          </p>

          <p className="text-white/50 text-xs mt-1">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState({
    open: false,
    startIndex: 0,
  });

  if (!images.length) return null;

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  const currentImage = images[index];

  return (
    <>
      <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative aspect-video bg-gray-900">
          <img
            src={currentImage.src}
            alt={currentImage.alt || ""}
            className="w-full h-full object-cover cursor-zoom-in transition-opacity duration-300"
            loading="lazy"
            onClick={() =>
              setLightbox({
                open: true,
                startIndex: index,
              })
            }
          />

          {/* Subtle image gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/65 text-white backdrop-blur-sm transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 hover:bg-black/65 text-white backdrop-blur-sm transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
            <ImageIcon className="w-4 h-4" />

            <span>
              {index + 1} / {images.length}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <p className="font-semibold text-lg drop-shadow">
              {currentImage.caption || currentImage.alt}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 p-4">
          {images.map((image, i) => (
            <button
              key={`${image.caption}-${i}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-logo-blue"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {lightbox.open && (
        <Lightbox
          images={images}
          initialIndex={lightbox.startIndex}
          onClose={() =>
            setLightbox({
              open: false,
              startIndex: 0,
            })
          }
        />
      )}
    </>
  );
};

const Gallery = () => {
  const carouselImages = [
        {
      src: newHopeSun,
      alt: "Aerial landscape during golden hour",
      caption: "Golden Hour • New Hope, Minnesota",
    },
        {
      src: cody,
      alt: "Aerial real estate photography",
      caption: "Mountain Real Estate",
    },
    {
      src: castleRock,
      alt: "Castle Rock landscape at sunset",
      caption: "Castle Rock • Colorado",
    },
       {
      src: flag,
      alt: "flying flag at sunset",
      caption: "America 250",
    },
    {
      src: osprey,
      alt: "Osprey perched above the surrounding landscape",
      caption: "Osprey From Above",
    },
    {
      src: msp,
      alt: "Aerial view of the Minneapolis skyline",
      caption: "Minneapolis • Minnesota",
    },
    {
      src: mspNight,
      alt: "Minneapolis cityscape at night",
      caption: "Minneapolis After Dark",
    },

    {
      src: park,
      alt: "Aerial view of Plymouth Pavilion Park",
      caption: "Plymouth Pavilion Park",
    },

    {
      src: downtown,
      alt: "Foggy aerial view over New Hope",
      caption: "Foggy Morning • New Hope, Minnesota",
    },
    
        {
      src: usbank,
      alt: "Aerial view of U.S. Bank Stadium in Minneapolis",
      caption: "U.S. Bank Stadium • Minneapolis, Minnesota",
    },
    {
      src: landFront,
      alt: "Commercial aerial property photography",
      caption: "Commercial Property Imaging",
    },

  ];

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50 to-transparent" />
      </div>

      <main className="px-6 lg:px-12 py-14 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue tracking-tight">
            Aerial Portfolio
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
            A selection of aerial photography, commercial imaging,
            thermography, wildlife, and cinematic drone work.
          </p>
        </section>

        {/* Featured Photography */}
        <section className="mb-20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Photography
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Click any image to view full screen
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <ImageCarousel images={carouselImages} />
          </div>
        </section>

        {/* Video */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Featured Video
            </h2>

            <p className="mt-2 text-gray-500">
              Cinematic aerial, FPV, commercial, and inspection work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <VideoCard
              title="Zephyr Visions Showreel"
              videoUrl="https://youtu.be/xKIpesDVI2Q?si=P7sadNl8BwHXI9IT"
              thumbnailUrl="https://img.youtube.com/vi/xKIpesDVI2Q/maxresdefault.jpg"
            />

            <VideoCard
              title="Winter Drone Cinematography"
              videoUrl="https://youtu.be/hlzp04wIJVA"
              thumbnailUrl="https://img.youtube.com/vi/hlzp04wIJVA/maxresdefault.jpg"
            />

            <VideoCard
              title="Warehouse Inventory"
              videoUrl="https://www.youtube.com/watch?v=PGh04Wp5Crg"
              thumbnailUrl="https://i3.ytimg.com/vi/PGh04Wp5Crg/hqdefault.jpg"
            />

            <VideoCard
              title="Duluth Drone Cinematography"
              videoUrl="https://www.youtube.com/watch?v=RyxSgmNYPlI"
              thumbnailUrl="https://img.youtube.com/vi/RyxSgmNYPlI/maxresdefault.jpg"
            />
          </div>
        </section>
      </main>

      <footer className="mt-6 mb-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Zephyr Visions · All rights reserved
      </footer>
    </div>
  );
};

export default Gallery;