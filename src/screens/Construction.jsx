import { Wrench, ClipboardList, Camera } from "lucide-react";

export default function Construction() {
  return (
    <div className="relative bg-gray-50 min-h-screen p-12 flex flex-col items-center">
      {/* Header Section */}
      <div className="relative w-full max-w-5xl text-center mb-10">
        <h1 className="text-5xl font-extrabold text-logo-blue mb-4">Drone-Powered Construction Oversight</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Gain real-time insights into your construction projects with aerial imaging, automated progress tracking, and
          enhanced site safety. Optimize efficiency and decision-making like never before.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8">
        <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center w-80">
          <Wrench className="w-14 h-14 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Equipment Tracking</h2>
          <p className="text-gray-600 text-center">
            Monitor the movement and usage of heavy equipment, reducing downtime and improving efficiency.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center w-80">
          <ClipboardList className="w-14 h-14 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Automated Progress Reports</h2>
          <p className="text-gray-600 text-center">
            Generate accurate and timely reports with AI-powered analysis to track site progress.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center w-80">
          <Camera className="w-14 h-14 text-logo-blue mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">High-Resolution Aerial Imaging</h2>
          <p className="text-gray-600 text-center">
            Capture crystal-clear aerial images for inspections, planning, and client presentations.
          </p>
        </div>
      </div>

     
      <div className="mt-10">
        <button className="px-8 py-4 bg-logo-blue text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700">
    Contact
        </button>
      </div>
    </div>
  );
}
