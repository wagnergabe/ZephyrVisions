import React, { useState, useEffect, useCallback } from "react";
import inspection from "../assets/matrice_mapping.png";
import thermal_front from '../assets/thermal_front.png'
import {
  Thermometer,
  BadgeCheck,
  Award,
  Zap,
  Ruler,
  Map,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";


/** ---------------------------
 *  Simple Lightbox (no libs)
 *  --------------------------- */
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

  const onKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [next, onClose, prev]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onKey]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-4 md:inset-10 lg:inset-16 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 grid grid-rows-[1fr_auto]">
          <div className="relative">
            <img
              src={img.src}
              alt={img.alt || ""}
              className="absolute inset-0 m-auto max-h-full max-w-full object-contain"
            />
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 text-center text-white/90 text-sm">
            <p>{img.caption || img.alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/** ---------------------------
 *  Certification Badge Card
 *  --------------------------- */
const CertificationCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex items-start gap-4">
      <div className="shrink-0">
        <Award className="w-10 h-10 text-logo-blue" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-wide text-gray-500">Certification</p>
        <h3 className="text-lg font-semibold text-gray-900">
          FLIR ITC Level 1 sUAS Thermography
        </h3>
        <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-logo-blue" />
          Verified training in emissivity, reflected apparent temperature, and data interpretation.
        </p>
        {/* Update the link to your actual certificate PDF/image if you have one */}
        <a
          href="/certs"
          rel="noreferrer"
          className="inline-block mt-3 text-sm text-logo-blue hover:underline"
        >
          View certificate
        </a>
      </div>
    </div>
  );
};

/** ---------------------------
 *  Page
 *  --------------------------- */
const Infared = () => {
  // 👉 Replace/add your own sample images (local /public or remote URLs)
  const sampleImages = [
    {
      src: "https://www1.djicdn.com/cms/uploads/6758aba21b42c590757a9e08ec123d40.png",
      alt: "Matrice 4T thermal view",
      caption: "Real-time thermal preview from the Matrice 4T.",
    },
    {
      src: "https://images.ctfassets.net/go54bjdzbrgi/2p8snalLFBb6vrGXLBtFWj/6d5c814a8f49aaebe414d2619a44e84c/An_aerial_map_of_a_farm_through_an_NIR_sensor.jpg",
      alt: "Field thermal/NIR mapping",
      caption: "Field mapping and anomaly detection.",
    },
    {
      src: inspection,
      alt: "Industrial inspection mapping",
      caption: "Industrial site overview and mapping pass.",
    },
      {
        src: thermal_front,
        alt: "solar thermal",
        caption: "Qualitative and Quantitative analysis"
      }

  ];

  const [lightbox, setLightbox] = useState({ open: false, startIndex: 0 });

  return (
    <section className="relative bg-gray-50">
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-14 max-w-7xl">
        {/* Hero */}
        <header className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue tracking-tight">
            Real-Time Thermal Drone Inspections
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Rapid, safe, and precise thermal visuals to spot issues early—powered by the DJI Matrice 4T and a certified workflow.
          </p>


          {/* Certification badge near the top */}
          <div className="mt-6 max-w-2xl mx-auto">
            <CertificationCard />
          </div>
        </header>

        {/* Description + highlight image */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start mb-12">
          {/* Left: description & features */}
          <div className="bg-white rounded-2xl shadow p-6">
            <p className="text-gray-800 text-lg">
              Using the Matrice 4T to capture precise temperature data to quickly locate hotspots,
              heat loss, moisture intrusion indicators, and electrical anomalies. Results are organized
              and easy to share with your team.
            </p>

            <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Hotspot detection</p>
                  <p className="text-sm">Flag heat anomalies across roofs, arrays, and panels.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Map className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Geotagged data</p>
                  <p className="text-sm">RTK-ready workflows for precise location context.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Ruler className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Repeatable routes</p>
                  <p className="text-sm">Consistent capture plans for trending changes over time.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Safe, efficient ops</p>
                  <p className="text-sm">Minimize ladders and downtime around active sites.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: highlight image */}
          <div className="overflow-hidden rounded-2xl shadow">
            <img
              src="https://www.ferntech.co.nz/assets/images/crystal-clear-vision(1).jpg"
              alt="DJI Matrice 4T thermal capture"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Sample Pics (no carousel) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Sample Thermal & Visuals
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sampleImages.map((img, i) => (
              <button
                key={i}
                className="group relative rounded-xl overflow-hidden bg-white shadow hover:shadow-lg transition"
                onClick={() => setLightbox({ open: true, startIndex: i })}
                aria-label={`Open sample ${i + 1}`}
              >
                <img
                  src={img.src}
                  alt={img.alt || ""}
                  className="w-full h-44 object-cover group-hover:scale-105 transition"
                  loading="lazy"
                />
                {img.caption && (
                  <div className="absolute bottom-0 inset-x-0 bg-black/40 text-white text-xs px-2 py-1">
                    {img.caption}
                  </div>
                )}
              </button>
            ))}
          </div>
         
        </section>

        {/* Capabilities cards */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Capabilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-semibold text-gray-800">Instant Temperature Mapping</h4>
              <p className="text-sm text-gray-600 mt-2">
                Live thermal data with accurate spot readings and isotherm overlays.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-semibold text-gray-800">Hotspot Detection</h4>
              <p className="text-sm text-gray-600 mt-2">
                Quickly surface anomalies in roofs, solar arrays, and electrical gear.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h4 className="text-lg font-semibold text-gray-800">RTK-Aligned Outputs</h4>
              <p className="text-sm text-gray-600 mt-2">
                Centimeter-level positioning for repeat surveys and issue tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Use cases + Deliverables */}
        <section className="mb-2 grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="text-xl font-semibold text-gray-900">Common Use Cases</h4>
            <ul className="mt-3 text-sm text-gray-700 grid grid-cols-2 gap-x-6 gap-y-2">
              <li>Solar array checks</li>
              <li>Roof envelope audits</li>
              <li>Electrical cabinets</li>
              <li>Moisture indicators</li>
              <li>HVAC efficiency</li>
              <li>Construction progress</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="text-xl font-semibold text-gray-900">Deliverables & Turnaround</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>Radiometric JPGs/MP4 clips organized in folders</li>
              <li>Annotated stills with callouts (optional)</li>
              <li>Next-day delivery for standard photo sets</li>
              <li>Deeper analysis (isotherms, reports, mapping) adds a few days based on scope</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Lightbox mount */}
      {lightbox.open && (
        <Lightbox
          images={sampleImages}
          initialIndex={lightbox.startIndex}
          onClose={() => setLightbox({ open: false, startIndex: 0 })}
        />
      )}
    </section>
  );
};

export default Infared;
