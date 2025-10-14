import React, { useState, useEffect, useCallback } from "react";
import { PlayCircle, ChevronLeft, ChevronRight, X, Image as ImageIcon } from "lucide-react";
import newHope from '../assets/newhopesun.jpg'
import downtown from '../assets/downtown.jpg';
import birdsun from '../assets/birdsun.jpg';
import park from '../assets/Park.jpg';
import osprey from '../assets/osprey.jpg'



const VideoCard = ({ title, videoUrl, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getVideoId = (url) => {
    const regExp =
      /^.*(?:youtu\.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]{11}).*/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  const handlePlay = () => setIsPlaying(true);

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
          onClick={handlePlay}
          className="relative w-full text-left group"
          aria-label={`Play video: ${title}`}
        >
          <div className="relative aspect-video overflow-hidden">
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition grid place-items-center">
              <PlayCircle className="w-16 h-16 text-white drop-shadow" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
        </button>
      )}
    </div>
  );
};


const Lightbox = ({ images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => setIndex(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIndex(i => (i + 1) % images.length), [images.length]);

  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }, [onClose, prev, next]);

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative mx-auto my-6 md:my-10 lg:my-16 max-w-6xl min-h-[60vh] rounded-xl bg-black/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button ABOVE everything */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 p-2 rounded-full bg-black/60 hover:bg-black/70 text-white
                     focus:outline-none focus:ring-2 focus:ring-white/70"
          aria-label="Close"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 grid grid-rows-[1fr_auto]">
          <div className="relative">
            <img
              src={img.src}
              alt={img.alt || ""}
              className="absolute inset-0 m-auto max-h-full max-w-full object-contain z-0"
            />

            {/* nav buttons BELOW the close button */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white z-10"
              aria-label="Previous image"
              type="button"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white z-10"
              aria-label="Next image"
              type="button"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 text-center text-white/90 text-sm z-10">
            <p>{img.caption || img.alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};



const ImageCarousel = ({ images = [] }) => {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState({ open: false, startIndex: 0 });

  if (!images.length) return null;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <>
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative aspect-video">
          <img
            src={images[index].src}
            alt={images[index].alt || ""}
            className="w-full h-full object-cover"
            loading="lazy"
            onClick={() => setLightbox({ open: true, startIndex: index })}
          />
          {/* controls */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>

          {/* top-right badge */}
          <div className="absolute top-3 right-3 flex items-center gap-2 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full">
            <ImageIcon className="w-4 h-4" />
            <span>
              {index + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* caption */}
        {(images[index].caption || images[index].alt) && (
          <div className="px-4 py-3 text-sm text-gray-700">
            {images[index].caption || images[index].alt}
          </div>
        )}

        {/* dots */}
        <div className="flex items-center justify-center gap-2 p-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-logo-blue" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {lightbox.open && (
        <Lightbox
          images={images}
          initialIndex={lightbox.startIndex}
          onClose={() => setLightbox({ open: false, startIndex: 0 })}
        />
      )}
    </>
  );
};


const Gallery = () => {

  const carouselImages = [
    {
      src: newHope,
      alt: "Downtown site overview at golden hour",
      caption: "Downtown overview at golden hour",
    },
    {
      src: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1600&auto=format&fit=crop",
      alt: "Bridge inspection oblique",
      caption: "From Above",
    },
    {
      src: downtown,
      alt: "Minneapolis",
      caption: "Foggy New Hope morning",
    },
    {
      src: birdsun,
      alt: "Bird and sunset",
      caption: "Osprey return home",
    },
    {
      src: park,
      alt: "Park",
      caption: "Plymouth Pavillion Park",
    },
 
  ];

  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50 to-transparent" />
      </div>

      <main className="px-6 lg:px-12 py-14 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue tracking-tight">
            Video & Photo Gallery
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            A quick look at aerial visuals, warehouse demos, and seasonal reels.
          </p>
        </section>

        {/* Image Carousel */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Featured Images
          </h2>
          <div className="max-w-5xl mx-auto">
            <ImageCarousel images={carouselImages} />
          </div>
        </section>

        {/* Videos */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Latest Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <VideoCard
              title="Winter Drone Shots in New Hope, MN"
              videoUrl="https://youtu.be/hlzp04wIJVA"
              thumbnailUrl="https://img.youtube.com/vi/hlzp04wIJVA/maxresdefault.jpg"
            />
            <VideoCard
              title="Warehouse Inventory"
              videoUrl="https://www.youtube.com/watch?v=PGh04Wp5Crg"
              thumbnailUrl="http://i3.ytimg.com/vi/PGh04Wp5Crg/hqdefault.jpg"
            />
            <VideoCard
              title="Spring Drone Cinematography in Duluth, MN"
              videoUrl="https://www.youtube.com/watch?v=RyxSgmNYPlI"
              thumbnailUrl="https://img.youtube.com/vi/RyxSgmNYPlI/maxresdefault.jpg"
            />
          </div>
        </section>

        {/* CTA */}
      
      </main>

      <footer className="mt-6 mb-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Zephyr Visions · All rights reserved
      </footer>
    </div>
  );
};

export default Gallery;
