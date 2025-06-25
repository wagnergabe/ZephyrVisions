import { Video, Film, Aperture } from "lucide-react";

export default function Videography() {
  return (
    <div className="relative bg-gray-50 min-h-screen p-12 flex flex-col items-center">
      {/* Header Section */}
      <div className="relative w-full max-w-5xl text-center mb-10">
        <h1 className="text-5xl font-extrabold text-logo-blue mb-4">Cinematic Drone Videography</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Capture breathtaking aerial footage with precision and creativity. Drones that can deliver stunning cinematic shots
          for film, commercials, real estate, and events.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8">
        <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center w-80">
          <Video className="w-14 h-14 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">4K Ultra HD Footage</h2>
          <p className="text-gray-600 text-center">
            Record stunning 4K videos with smooth cinematic movements to enhance any production.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center w-80">
          <Film className="w-14 h-14 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Professional Editing</h2>
          <p className="text-gray-600 text-center">
            Post-production services, color grading, and seamless video transitions for high-end results.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center w-80">
          <Aperture className="w-14 h-14 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Dynamic Aerial Perspectives</h2>
          <p className="text-gray-600 text-center">
            Get smooth aerial tracking shots, orbit views, and dynamic angles that make your visuals stand out.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <button className="px-8 py-4 bg-logo-blue text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700">
          Contact
        </button>
      </div>
    </div>
  );
}
