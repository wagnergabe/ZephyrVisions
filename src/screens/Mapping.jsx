import { useState } from "react";
import { Map, Mountain, Camera, Landmark } from "lucide-react";

export default function AerialMappingServices() {
  return (
    <div className="p-6">
      <div className="mb-10 text-center">
        <h1 className="text-3xl text-logo-blue font-bold mb-2"> Mapping, Modeling & Media</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Offering professional-grade aerial solutions tailored for land surveying, construction, inspection, and visual storytelling. All services are performed with high-resolution drones capable of mapping, modeling, and media production.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <div className="rounded-2xl shadow-md p-6 border border-gray-200 bg-white">
          <div className="flex items-center gap-4 mb-4">
            <Map className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl font-bold">Aerial Mapping</h2>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Precision drone mapping for land development, agriculture, and construction. Capture georeferenced images for accurate 2D orthomosaics and 3D models.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
            <li>High-resolution 2D orthophotos</li>
            <li>RTK-enabled centimeter-level accuracy</li>
            <li>Ideal for surveying, topography, and site monitoring</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-md p-6 border border-gray-200 bg-white">
          <div className="flex items-center gap-4 mb-4">
            <Landmark className="w-8 h-8 text-green-600" />
            <h2 className="text-xl font-bold">3D Modeling</h2>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Generate accurate 3D representations of terrain, buildings, and infrastructure. Perfect for urban planning, insurance, and virtual inspections.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
            <li>Photogrammetry and point cloud processing</li>
            <li>Deliverables in OBJ, PLY, or GLTF formats</li>
            <li>Integrates with GIS and CAD platforms</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-md p-6 border border-gray-200 bg-white">
          <div className="flex items-center gap-4 mb-4">
            <Camera className="w-8 h-8 text-purple-600" />
            <h2 className="text-xl font-bold">Photographic Documentation</h2>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            Document sites and projects with cinematic drone photography and video. Perfect for marketing, progress tracking, or visual storytelling.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
            <li>Up to 4K Ultra HD video and RAW photos</li>
            <li>Indoor & outdoor flythroughs available</li>
            <li>Fast turnaround & editing included</li>
          </ul>
        </div>

      </div>

      {/* <div className="mt-10 text-center">
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition">
          Get a Free Quote
        </button>
      </div> */}
    </div>
  );
}
