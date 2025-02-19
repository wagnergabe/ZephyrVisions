import { CheckCircle, Building, Home } from "lucide-react";

export default function RoofInspection() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 min-h-screen">
      <div className="text-center">
      <div className="w-full max-w-4xl mb-6">
        <img src="https://www-cdn.djiits.com/dps/006d46ea28ab7f0ab76336bca33ed1a8.jpg" alt="Drone Inspection" className="w-full rounded-lg shadow-lg" />
      </div>
        <h1 className="text-4xl font-bold text-logo-blue mb-4">Roof & Structural Inspections</h1>
        <p className="text-lg text-gray-600 mb-6  text-center max-w-2xl m-auto">
          Advanced drone technology provides high-resolution imagery and accurate structural assessments
          for roofs and buildings, ensuring precise evaluations without the risks of traditional inspections.
        </p>
      </div>
      
      <div className="w-full max-w-4xl">
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center mb-6">
          <Home className="w-12 h-12 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Roof Inspections</h2>
          <p className="text-gray-600">
            Detect leaks, missing shingles, and structural weaknesses without climbing dangerous heights.
          </p>
        </div>
        
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 flex flex-col items-center text-center">
          <Building className="w-12 h-12 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Structural Inspections</h2>
          <p className="text-gray-600">
            Identify cracks, corrosion, and foundational issues in buildings with precision drone imaging.
          </p>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="px-6 py-3 bg-logo-blue text-white rounded-2xl shadow-md hover:bg-blue-700">
          Contact
        </button>
      </div>
    </div>
  );
}
