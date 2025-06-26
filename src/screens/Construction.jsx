import { Wrench, ClipboardList, Camera } from "lucide-react";

const features = [
  {
    icon: <Wrench className="w-14 h-14 text-logo-blue mb-4" />,
    title: "Equipment Tracking",
    description:
      "Monitor the movement and usage of heavy equipment to reduce downtime and maximize efficiency.",
  },
  {
    icon: <ClipboardList className="w-14 h-14 text-logo-blue mb-4" />,
    title: "Automated Progress Reports",
    description:
      "Get accurate and timely updates with AI-powered analysis to track site development.",
  },
  {
    icon: <Camera className="w-14 h-14 text-logo-blue mb-4" />,
    title: "High-Resolution Aerial Imaging",
    description:
      "Capture crisp aerial visuals for inspections, planning, and stakeholder presentations.",
  },
];

export default function Construction() {
  return (
    <div className="relative bg-gray-50 min-h-screen px-6 py-16 lg:px-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue mb-4">
          Drone-Powered Construction Oversight
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Gain real-time insight into construction progress with aerial data, intelligent reporting, and safer operations.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {feature.icon}
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>


    </div>
  );
}
