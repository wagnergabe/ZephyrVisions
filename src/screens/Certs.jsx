import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import cert from "../assets/thermal_cert.jpg";
import badge from "../assets/thermal_badge.jpg";

export default function Certs() {
  return (
    <div className="bg-gray-50 px-6 lg:px-12 py-12">
      <header className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue">
          Certifications
        </h1>
        <p className="mt-3 text-gray-600">
          FLIR ITC Level 1 sUAS Thermography
        </p>
      </header>

      <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={cert}
            alt="FLIR ITC Level 1 sUAS Thermography Certificate"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <img
            src={badge}
            alt="FLIR ITC Level 1 Thermography Badge"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Return link at the bottom of this component */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <Link
          to="/services/infared"
          className="inline-flex items-center gap-2 rounded-full bg-white text-logo-blue px-5 py-3 shadow border border-logo-blue/30 hover:bg-blue-50 transition"
          aria-label="Return to Thermal Services (Infrared)"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Thermal Services
        </Link>
      </div>
    </div>
  );
}
