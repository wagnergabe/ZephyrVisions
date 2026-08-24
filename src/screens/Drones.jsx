import { useEffect, useState } from "react";

const drones = [
  {
    id: "mavic4pro",
    tab: "FLAGSHIP",
    name: "Mavic 4 Pro",
    tagline: "Flagship aerial imaging",
    image:
      "https://se-cdn.djiits.com/tpc/uploads/carousel/image/0ca84df1c0d68677e852ce314c9602d6@ultra.webp",
    leftFeatures: [
      {
        title: "100MP Super Resolution",
        text: "Industry-leading clarity for mapping, real estate, and commercial-grade photography.",
      },
      {
        title: "Dual Native ISO & Hasselblad Color",
        text: "Ultra-dynamic range and cinematic tones even in low-light conditions.",
      },
    ],
    rightFeatures: [
      {
        title: "Flagship-Level Precision",
        text: "Engineered for demanding aerial projects, from cinematic shoots to detailed inspections.",
      },
      {
        title: "360° Gimbal Rotation",
        text: "Freely rotate the camera in any direction without shifting the drone's position.",
      },
    ],
  },

  {
    id: "indoor",
    tab: "INDOOR",
    name: "Avata 2",
    tagline: "Immersive indoor FPV",
    image:
      "https://se-cdn.djiits.com/tpc/uploads/carousel/image/0dad80f805dabc4da255f268f20c605b@ultra.jpg",
    leftFeatures: [
      {
        title: "Cinematic Indoor Flythroughs",
        text: "Navigate tight spaces with smooth, stabilized FPV control—perfect for walkthroughs of homes, showrooms, and event venues.",
      },
      {
        title: "Precision Hover & Acro Mode",
        text: "From slow, steady glides to advanced acro moves, each flight can be tailored to the environment and creative vision.",
      },
    ],
    rightFeatures: [
      {
        title: "Immersive FPV Control",
        text: "FPV goggles and precise camera control allow smooth navigation and creative capture through complex indoor spaces.",
      },
      {
        title: "4K Ultra-Stabilized Video",
        text: "Crystal-clear 4K footage with stabilization for marketing, real estate, venues, and branded content.",
      },
    ],
  },

  {
    id: "avata360",
    tab: "360°",
    name: "Avata 360",
    tagline: "Immersive 360° aerial capture",
    image:
      "https://www-cdn.djiits.com/cms/uploads/19c15ba39f4574808ca6b0380b7d44dc@374*374.png",
    leftFeatures: [
      {
        title: "Immersive 360° Capture",
        text: "Create interactive aerial footage that lets viewers explore the scene from every angle.",
      },
      {
        title: "Dynamic FPV Movement",
        text: "Smooth, close-range flight paths add energy and motion to real estate, events, venues, and promotional content.",
      },
    ],
    rightFeatures: [
      {
        title: "Interactive Viewing",
        text: "Give viewers the freedom to pan, drag, and explore an environment beyond a traditional video frame.",
      },
      {
        title: "Built for Showcases",
        text: "Ideal for immersive property tours, event spaces, construction sites, resorts, and branded content.",
      },
    ],
  },

  {
    id: "picVid",
    tab: "COMPACT",
    name: "Mini 5 Pro",
    tagline: "Compact aerial photography",
    image:
      "https://www-cdn.djiits.com/cms/uploads/3462d29fa23cf5d29fce9171fb2b6b9d@374*374.png",
    leftFeatures: [
      {
        title: "Next-Generation 4K HDR Imaging",
        text: "Sharp, color-accurate imagery with strong dynamic range for real estate, marketing, and aerial visuals.",
      },
      {
        title: "Omnidirectional Obstacle Sensing",
        text: "Multi-directional sensing supports confident flight in tight or complex environments.",
      },
    ],
    rightFeatures: [
      {
        title: "True Vertical Capture",
        text: "Native vertical shooting produces social-media-ready content for Reels, Shorts, and other vertical platforms.",
      },
      {
        title: "Extended Flight Endurance",
        text: "Efficient flight performance allows longer coverage per battery and less downtime between captures.",
      },
    ],
  },

  {
    id: "air3s",
    tab: "VERSATILE",
    name: "Air 3S",
    tagline: "Versatile cinematic aerial video",
    image:
      "https://se-cdn.djiits.com/tpc/uploads/carousel/image/07d27005532c308eaec55c87cdc6f575@ultra.jpg",
    leftFeatures: [
      {
        title: "Compact & Portable",
        text: "A portable airframe makes rapid deployment easy while retaining professional aerial imaging capability.",
      },
      {
        title: "High-Quality Imaging",
        text: "Advanced camera sensors and image processing capture detailed aerial photographs and cinematic footage.",
      },
    ],
    rightFeatures: [
      {
        title: "Advanced Flight Performance",
        text: "Stable and responsive flight characteristics make smooth, dynamic camera movement possible.",
      },
      {
        title: "Intelligent Flight Modes",
        text: "Automated flight tools support repeatable movement and creative aerial capture.",
      },
    ],
  },

  {
    id: "industrial",
    tab: "INDUSTRIAL",
    name: "Matrice 4T",
    tagline: "Enterprise inspection & thermal platform",
    image:
      "https://se-cdn.djiits.com/tpc/uploads/carousel/image/b49fb59abc89fd799b252633ad70618f@origin.jpg?format=webp",
    leftFeatures: [
      {
        title: "Thermal Imaging",
        text: "Radiometric thermal imaging supports roof inspections, heat-loss analysis, solar inspection, and other specialized applications.",
      },
      {
        title: "High-Magnification Zoom",
        text: "Detailed remote visual inspection helps capture difficult-to-reach assets while maintaining distance.",
      },
    ],
    rightFeatures: [
      {
        title: "RTK Precision Positioning",
        text: "High-precision positioning supports repeatable inspection, mapping, and construction workflows.",
      },
      {
        title: "Enterprise Flight Platform",
        text: "Built for demanding commercial missions requiring advanced sensors, reliability, and precise data capture.",
      },
    ],
  },
];

function FeatureColumn({ features, direction }) {
  const animation =
    direction === "left"
      ? "motion-preset-slide-right"
      : "motion-preset-slide-left";

  return (
    <aside
      className={`flex flex-col gap-8 text-center lg:w-1/4 ${animation}`}
    >
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
        >
          <h3 className="text-lg font-bold">
            {feature.title}
          </h3>

          <p className="mt-2 leading-7 text-gray-600">
            {feature.text}
          </p>
        </div>
      ))}
    </aside>
  );
}

function Drones() {
  const [activeDroneId, setActiveDroneId] =
    useState("mavic4pro");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeDrone = drones.find(
    (drone) => drone.id === activeDroneId
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-[92%] max-w-7xl py-10 font-poppins">

        {/* Category selector */}
        <div className="flex flex-wrap justify-center gap-3 border-b border-gray-200 pb-7">
          {drones.map((drone) => {
            const isActive = activeDroneId === drone.id;

            return (
              <button
                key={drone.id}
                type="button"
                onClick={() => setActiveDroneId(drone.id)}
                className={`rounded-full px-5 py-2.5 font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "scale-105 bg-[#07C0EA] text-black shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:-translate-y-1 hover:bg-gray-200"
                }`}
              >
                {drone.tab}
              </button>
            );
          })}
        </div>

        {/*
          The key intentionally changes when a new drone is selected.
          React remounts this section, replaying the entrance animations.
        */}
        <section
          key={activeDrone.id}
          className="mt-10"
        >
          {/* Heading */}
          <header className="motion-preset-slide-down text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
              {activeDrone.tagline}
            </p>

            <h1 className="mt-3 font-space-mono text-4xl font-bold text-[#07C0EA] md:text-6xl lg:text-7xl">
              {activeDrone.name}
            </h1>
          </header>

          {/* Drone showcase */}
          <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">

            <FeatureColumn
              features={activeDrone.leftFeatures}
              direction="left"
            />

            {/* Drone image */}
            <div className="group flex w-full items-center justify-center lg:w-2/5">
              <div className="relative flex min-h-[300px] w-full items-center justify-center md:min-h-[400px]">

                {/* subtle background glow */}
                <div className="absolute h-52 w-52 rounded-full bg-[#07C0EA]/10 blur-3xl transition duration-500 group-hover:scale-125" />

                <img
                  src={activeDrone.image}
                  alt={activeDrone.name}
                  className="relative z-10 max-h-[420px] w-full object-contain motion-scale-in-75 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                />
              </div>
            </div>

            <FeatureColumn
              features={activeDrone.rightFeatures}
              direction="right"
            />
          </div>

          {/* Bottom indicator */}
          <div className="mt-12 flex justify-center gap-2">
            {drones.map((drone) => (
              <button
                key={drone.id}
                type="button"
                aria-label={`View ${drone.name}`}
                onClick={() => setActiveDroneId(drone.id)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeDroneId === drone.id
                    ? "w-8 bg-[#07C0EA]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Drones;