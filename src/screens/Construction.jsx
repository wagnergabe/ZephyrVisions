import { Wrench, ClipboardList, Camera, HardHat, Shield, Map, Clock, FileText, Ruler } from "lucide-react";

const features = [
  {
    icon: <Wrench className="w-14 h-14 text-logo-blue mb-4" aria-hidden="true" focusable="false"/>,
    title: "Equipment Tracking",
    description:
      "Monitor movement and usage of heavy equipment to reduce downtime and improve efficiency.",
  },
  {
    icon: <ClipboardList className="w-14 h-14 text-logo-blue mb-4" aria-hidden="true" focusable="false"/>,
    title: "Automated Progress Reports",
    description:
      "AI assisted summaries with key photos and notes so stakeholders get clear updates fast.",
  },
  {
    icon: <Camera className="w-14 h-14 text-logo-blue mb-4"aria-hidden="true" focusable="false" />,
    title: "High Resolution Aerial Imaging",
    description:
      "Crisp overhead and oblique imagery for inspections, planning, and investor decks.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Plan",
    desc: "We define the scope, safety plan, and capture schedule that fits your build cadence.",
    icon: <Map className="w-6 h-6 text-logo-blue" aria-hidden="true" focusable="false"/>,
  },
  {
    step: "02",
    title: "Capture",
    desc: "FAA Part 107 compliant flights with standard, oblique, and optional thermal passes.",
    icon: <HardHat className="w-6 h-6 text-logo-blue" aria-hidden="true" focusable="false" />,
  },
  {
    step: "03",
    title: "Process",
    desc: "Organized folders, filenames, and optional maps or 3D outputs for easy handoff.",
    icon: <Ruler className="w-6 h-6 text-logo-blue" aria-hidden="true" focusable="false" />,
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Next day delivery for photo sets. Deeper analysis adds a short lead time based on scope.",
    icon: <Clock className="w-6 h-6 text-logo-blue" aria-hidden="true" focusable="false"/>,
  },
];

const deliverables = [
  { title: "Progress Photo Set", desc: "Front, sides, roof, site perimeter, obliques, and overhead." },
  { title: "Weekly Progress Report (PDF)", desc: "Curated highlights, changes since prior visit, safety notes." },
  { title: "Orthomosaic (Optional)", desc: "Stitched site overview for planning and as built review." },
  { title: "Thermal Snapshot (Optional)", desc: "Locate heat anomalies for envelope and electrical checks." },
];

export default function Construction() {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full blur-3xl opacity-25 bg-logo-blue/30" />
      </div>

      <main className="px-6 lg:px-12 py-16 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-logo-blue tracking-tight">
            Drone Powered Construction Oversight
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Real time visibility from above, safer documentation on site, and clean deliverables your team will actually use.
          </p>

        

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/70 backdrop-blur rounded-xl p-4 shadow flex items-center gap-3 justify-center">
              <Shield className="w-5 h-5 text-logo-blue" aria-hidden="true" focusable="false"/>
              <p className="text-gray-700"><span className="font-semibold">FAA Part 107</span> compliant</p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-xl p-4 shadow flex items-center gap-3 justify-center">
              <Clock className="w-5 h-5 text-logo-blue"aria-hidden="true" focusable="false" />
              <p className="text-gray-700"><span className="font-semibold">Next day</span> standard delivery</p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-xl p-4 shadow flex items-center gap-3 justify-center">
              <FileText className="w-5 h-5 text-logo-blue" aria-hidden="true" focusable="false"/>
              <p className="text-gray-700">Clear, organized folders</p>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
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
        </section>

        {/* How it works */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">How it works</h3>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
              {workflow.map((item) => (
                <div key={item.step} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-logo-blue">Step {item.step}</span>
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Deliverables you can expect</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {deliverables.map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                  <h5 className="text-lg font-semibold text-gray-800">{d.title}</h5>
                  <p className="mt-1 text-gray-600 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (Removed) Sample gallery section */}

        {/* FAQ */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Common questions</h3>
          <div className="max-w-3xl mx-auto space-y-3">
            <details className="group bg-white rounded-xl p-5 shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-800">What is the usual turnaround?</span>
                <span className="text-logo-blue group-open:rotate-180 transition">˅</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                Standard photo and thermal image packages are delivered the next day. Analysis like isotherm studies or mapping
                can take a few extra days depending on scope.
              </p>
            </details>
            <details className="group bg-white rounded-xl p-5 shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-800">Do you work around active sites?</span>
                <span className="text-logo-blue group-open:rotate-180 transition">˅</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                Yes. Flights are coordinated with site leads and follow safety procedures to avoid interfering with crews.
              </p>
            </details>
            <details className="group bg-white rounded-xl p-5 shadow">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-semibold text-gray-800">Can you provide maps or 3D models?</span>
                <span className="text-logo-blue group-open:rotate-180 transition">˅</span>
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                Yes. Orthomosaics and basic 3D previews are available as add ons when the capture plan supports them.
              </p>
            </details>
          </div>
        </section>

        {/* (Removed) CTA card */}
      </main>

      {/* (Removed) bottom sticky bar */}

      <footer className="mt-10 mb-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Zephyr Visions
      </footer>
    </div>
  );
}
