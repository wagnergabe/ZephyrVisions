import { Link } from "react-router-dom";
import front from '../assets/winter_front.jpg'
import above from '../assets/summer_above.jpg'
import summer_front from '../assets/summer_front.jpg'
import duran from '../assets/duran.png'

export default function Photography() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold text-[#07C0EA]">Real Estate Photography</h1>
        <p className="text-lg text-gray-600 mt-2">
          High-quality aerial photography and videography to showcase properties at their best.
        </p>
      </header>

      {/* Service Description */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Drone Photography?</h2>
        <p className="text-gray-700 mt-2">
          Aerial real estate photography offers stunning perspectives that traditional photography can't achieve. 
          With high-resolution imagery, cinematic videos, and detailed property views, potential buyers get a 
          complete picture of the property before stepping inside.
        </p>
      </section>

      {/* Service Benefits */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Offering:</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          <li>HD & 4K Aerial Photography</li>
          <li>Cinematic Video Tours</li>
          <li>360° Property Views</li>
          <li>Roof & Structural Inspections</li>
          <li>High-Resolution Still Images</li>
        </ul>
      </section>

      {/* Sample Images (Replace with actual property images later) */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <img className="rounded-lg shadow-lg bg-auto w-auto h-full" src={duran} alt="Aerial view of property" />
        <img className="rounded-lg shadow-lg w-full h-full" src={front} alt="Front view of property" />
        <img className="rounded-lg shadow-lg" src= {summer_front} alt="Cinematic drone shot" />
      </section>

      {/* Call to Action */}
      <section className="mt-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Enhance Your Listings with Aerial Photography!</h2>
<p className="text-gray-700 mt-2">Reach out to schedule a professional real estate drone photography session.</p>

        <Link to="/contact">
          <button className="mt-4 bg-[#07C0EA] text-white px-6 py-3 rounded-lg hover:bg-[#055C80] transition">
            Contact 
          </button>
        </Link>
      </section>
    </div>
  );
}
