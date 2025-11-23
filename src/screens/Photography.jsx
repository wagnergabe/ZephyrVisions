import { Link } from "react-router-dom";
import { Camera, Video, MapPin, Shield, Clock } from "lucide-react";
import park from '../assets/Park.jpg'

export default function Photography() {
  // Drone real-estate / neighborhood shots (direct CDN links)
  
  const gallery = [
    park,
    "https://cdn.pixabay.com/photo/2018/08/18/22/45/real-estate-3615617_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/08/18/22/45/real-estate-3615615_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/11/02/16/51/drone-6763657_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/15/18/18/rooftops-1258857_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/06/17/01/53/drone-1462463_1280.jpg",
    // these two are smaller but fine for cards; you can replace any time
    "https://cdn.pixabay.com/photo/2017/04/07/16/43/suburbs-2211335_640.jpg",
    "https://cdn.pixabay.com/photo/2022/11/12/20/27/lake-7587855_640.jpg",
  ];

  return (
    <div className="relative bg-gray-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50 to-transparent" />
      </div>

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        {/* Header */}
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue">
            Real Estate Photography
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600">
            High-quality aerial photos and cinematic visuals that help listings stand out and sell faster.
          </p>

        {/* Quick stats */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex items-center justify-center gap-2">
              <Camera className="w-5 h-5 text-logo-blue" />
              <span className="text-gray-700">High-resolution stills</span>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex items-center justify-center gap-2">
              <Video className="w-5 h-5 text-logo-blue" />
              <span className="text-gray-700">Cinematic flythroughs</span>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 shadow flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-logo-blue" />
              <span className="text-gray-700">FAA Part 107 compliant</span>
            </div>
          </div>
        </header>

        {/* Value prop */}
        <section className="mt-12 grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900">Why Drone Imagery?</h2>
            <p className="mt-3 text-gray-700">
              Aerial angles unlock context that street-level shots can’t: lot size,
              proximity to parks, water, schools, and neighborhood flow. Paired with
              polished edits, your listing looks magazine-ready across MLS and social.
            </p>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Location context</p>
                  <p className="text-sm">Top-down and obliques to highlight nearby amenities.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Fast turnaround</p>
                  <p className="text-sm">Standard photo sets delivered next day.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-logo-blue mt-1" />
                <div>
                  <p className="font-semibold">Safe & insured</p>
                  <p className="text-sm">Operations aligned with site rules and airspace.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* What’s included */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900">What’s included</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <div className="rounded-lg border p-3">HD & 4K Aerial Photography</div>
              <div className="rounded-lg border p-3">Cinematic Video Clips</div>
              <div className="rounded-lg border p-3">Top-down & Oblique Angles</div>
              <div className="rounded-lg border p-3">Neighborhood Context Shots</div>
              <div className="rounded-lg border p-3">Roof & Exterior Highlights</div>
              <div className="rounded-lg border p-3">Clean, Organized Delivery</div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-logo-blue text-white px-5 py-3 shadow hover:shadow-md transition"
              >
                Request a shoot
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center rounded-xl border border-logo-blue/30 text-logo-blue px-5 py-3 bg-white hover:bg-blue-50 transition"
              >
                View more samples
              </Link>
            </div>
          </div>
        </section>

        {/* Static gallery (no click-to-view) */}
        <section className="mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden bg-white shadow"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://cdn.pixabay.com/photo/2018/08/18/22/45/real-estate-3615615_1280.jpg";
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <p className="text-sm font-semibold text-logo-blue">Step 1</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">Plan</h4>
              <p className="text-gray-700 text-sm mt-2">
                Confirm address, angles, and any special requests or restrictions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <p className="text-sm font-semibold text-logo-blue">Step 2</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">Capture</h4>
              <p className="text-gray-700 text-sm mt-2">
                On-site flight with a mix of top-down and cinematic obliques.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <p className="text-sm font-semibold text-logo-blue">Step 3</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">Deliver</h4>
              <p className="text-gray-700 text-sm mt-2">
                Next-day standard delivery in organized folders, ready for MLS.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
