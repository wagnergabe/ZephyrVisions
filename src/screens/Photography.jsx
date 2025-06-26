import { Link } from "react-router-dom";
import front from '../assets/land_front.jpg';
import above from '../assets/summer_above.jpg';
import summer_front from '../assets/summer_front.png';
import duran from '../assets/duran.png';

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

      {/* Sample Images */}
      <section className="mt-8 flex flex-wrap justify-center gap-4">
        {[duran, front, summer_front].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Sample ${idx + 1}`}
            className="rounded-lg shadow-lg w-[300px] h-[200px] object-cover"
          />
        ))}
      </section>

      
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-logo-blue">Enhance Your Listings with Aerial Photography!</h2>
        <p className="text-gray-700 mt-2">
          Reach out to schedule a professional real estate drone photography session.
        </p>
      </section>
    </div>
  );
}
