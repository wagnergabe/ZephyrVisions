import { useState, useEffect } from 'react';

const Drones = () => {
  const [activeButton, setActiveButton] = useState("indoor");

  const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  };

  return (
    <>
      {useScrollToTop()}
      <section className="flex flex-col items-center justify-center md:justify-between w-[80%] h-auto mx-auto mt-5 font-poppins">
        <div className="flex flex-col justify-around my-3 md:flex-row">
          <button
            className={`font-bold md:border-b-4 my-2 mx-10 border-black lg:text-2xl ${
              activeButton === "indoor" ? "py-2 px-4 bg-gray-300 border rounded" : ""
            }`}
            onClick={() => setActiveButton("indoor")}
            disabled={activeButton === "indoor"}
          >
            INDOOR
          </button>

          <button
            className={`my-2 font-bold md:border-b-4 mx-10 border-black lg:text-2xl ${
              activeButton === "picVid" ? "py-2 px-4 bg-gray-300 border rounded" : ""
            }`}
            onClick={() => setActiveButton("picVid")}
            disabled={activeButton === "picVid"}
          >
            PICTURE
          </button>

          <button
            className={`my-2 font-bold md:border-b-4 mx-10 border-black lg:text-2xl ${
              activeButton === "air3s" ? "py-2 px-4 bg-gray-300 border rounded" : ""
            }`}
            onClick={() => setActiveButton("air3s")}
            disabled={activeButton === "air3s"}
          >
            VIDEO
          </button>

          <button
            className={`font-bold md:border-b-4 mx-10 my-2 border-black lg:text-2xl ${
              activeButton === "industrial" ? "py-2 px-4 bg-gray-300 border rounded" : ""
            }`}
            onClick={() => setActiveButton("industrial")}
            disabled={activeButton === "industrial"}
          >
            INDUSTRIAL
          </button>
        </div>

        {/* Avata 2 Section */}
        <h2
          className={`${
            activeButton === "indoor"
              ? "text-7xl text-center px-20 mt-8 motion-preset-slide-down text-[#07C0EA] font-space-mono"
              : "hidden"
          }`}
        >
          Avata 2
        </h2>
        <main
          className={`${
            activeButton === "indoor"
              ? "flex lg:flex-row flex-col h-[90%] w-[80%] items-center justify-evenly"
              : ""
          }`}
        >
          {activeButton === "indoor" && (
            <>
              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-right">
                <div className="my-[20px] max-h-64">
                  <p className="font-bold">Indoor Maneuverability</p>
                  <p>
                    Easily maneuver indoors and capture unique living spaces and rooms of your home.
                  </p>
                </div>
                <div className="max-h-64">
                  <p className="font-bold">Still Photography Mode</p>
                  <p>
                    Still photography is perfect for capturing aerial shots and custom home and property portraits.
                  </p>
                </div>
              </aside>

              <div className="flex flex-col items-center justify-center lg:max-w-[40%] lg:max-h-[40%]">
                <img
                  src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/0dad80f805dabc4da255f268f20c605b@ultra.jpg"
                  className="motion-scale-in-75"
                  alt="Indoor drone"
                />
              </div>

              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-left">
                <div className="my-[20px] max-h-64">
                  <p className="font-bold">Focus Mode / Goggles</p>
                  <p>
                    Easily maneuver in and out of tight spaces with precision goggles and superior focus mode.
                  </p>
                </div>
                <div className="max-h-64">
                  <p className="font-bold">4K Stabilized Video</p>
                  <p>
                    Stabilized 4K video allows for precision videos with minimal movements.
                  </p>
                </div>
              </aside>
            </>
          )}
        </main>

        {/* Mini 4 Pro Section */}
        <h2
          className={`${
            activeButton === "picVid"
              ? "text-7xl px-20 text-center mt-8 text-[#07C0EA] font-space-mono motion-preset-slide-down"
              : "hidden"
          }`}
        >
          Mini 4 Pro
        </h2>
        <main
          className={`${
            activeButton === "picVid"
              ? "flex lg:flex-row w-full flex-col h-[90%] lg:w-[80%] items-center justify-evenly"
              : ""
          }`}
        >
          {activeButton === "picVid" && (
            <>
              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-right">
                <div className="my-[20px]">
                  <p className="font-bold">4K HDR Video Recording</p>
                  <p>
                    Ideal for professional real estate, event photography, and high-quality promotional content.
                  </p>
                </div>
                <div>
                  <p className="font-bold">360-degree Obstacle Avoidance System</p>
                  <p>
                    Ensures safe and precise flights, even in complex environments, allowing for creative shots in tight spaces.
                  </p>
                </div>
              </aside>

              <div className="flex flex-col items-center justify-center lg:max-w-[50%] lg:max-h-[50%]">
                <img
                  src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/f96def8770cb7529d7a98731fa2117dd@ultra.jpg"
                  className="motion-scale-in-75"
                  alt="Drone Image"
                />
              </div>

              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-left">
                <div className="my-[20px]">
                  <p className="font-bold">Vertical Shooting Capabilities</p>
                  <p>
                    Delivers social-media-ready content for platforms like Instagram and Meta without requiring post-editing adjustments.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Extended Flight Time</p>
                  <p>
                    Ensures efficiency during shoots, allowing coverage across large areas or multiple perspectives in a single flight.
                  </p>
                </div>
              </aside>
            </>
          )}
        </main>

        {/* Air 3S Section */}
        <h2
          className={`${
            activeButton === "air3s"
              ? "text-7xl px-20 text-center mt-8 text-[#07C0EA] font-space-mono motion-preset-slide-down"
              : "hidden"
          }`}
        >
          Air 3S
        </h2>
        <main
          className={`${
            activeButton === "air3s"
              ? "flex lg:flex-row w-full flex-col h-[90%] lg:w-[80%] items-center justify-evenly"
              : ""
          }`}
        >
          {activeButton === "air3s" && (
            <>
              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-right">
                <div className="my-[20px]">
                  <p className="font-bold">Compact Design & Portability</p>
                  <p>
                    The Air 3S features a sleek, compact design that makes it easy to transport and set up for spontaneous aerial shots.
                  </p>
                </div>
                <div>
                  <p className="font-bold">High-Quality Imaging</p>
                  <p>
                    Capture stunning visuals with advanced camera sensors and optimized image processing.
                  </p>
                </div>
              </aside>

              <div className="flex flex-col items-center justify-center lg:max-w-[50%] lg:max-h-[50%]">
                <img
                  src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/07d27005532c308eaec55c87cdc6f575@ultra.jpg"
                  className="motion-scale-in-75"
                  alt="Air 3S Drone"
                />
              </div>

              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-left">
                <div className="my-[20px]">
                  <p className="font-bold">Advanced Flight Performance</p>
                  <p>
                    Enjoy improved stability and agile maneuverability for capturing smooth, dynamic footage.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Intelligent Flight Modes</p>
                  <p>
                    Features like Follow Me, Waypoints, and Gesture Control enhance your aerial creativity.
                  </p>
                </div>
              </aside>
            </>
          )}
        </main>

        {/* Matrice 4T Section */}
        <h2
          className={`${
            activeButton === "industrial"
              ? "text-7xl px-20 text-center mt-8 text-[#07C0EA] motion-preset-slide-down font-space-mono"
              : "hidden"
          }`}
        >
          Matrice 4T
          <p className="text-center text-3xl text-black">Coming March 15</p>
        </h2>
        <main
          className={`${
            activeButton === "industrial"
              ? "flex lg:flex-row w-full flex-col h-[90%] lg:w-[80%] items-center justify-evenly"
              : ""
          }`}
        >
          {activeButton === "industrial" && (
            <>
              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-right">
                <div className="my-[20px]">
                  <p className="font-bold">Thermal Imaging</p>
                  <p>
                    Perfect for inspections, search-and-rescue missions, and heat monitoring.
                  </p>
                </div>
                <div>
                  <p className="font-bold">56x Magnification Zoom</p>
                  <p>
                    Captures detailed visuals, ideal for industrial inspections and mapping.
                  </p>
                </div>
              </aside>

              <div className="flex flex-col items-center justify-center sm:max-w-[40%] sm:max-h-[40%]">
                <img
                  src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/b49fb59abc89fd799b252633ad70618f@origin.jpg?format=webp"
                  className="motion-scale-in-75"
                  alt="Matrice 4T Drone"
                />
              </div>

              <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-left">
                <div className="my-[20px]">
                  <p className="font-bold">RTK Precision Positioning</p>
                  <p>
                    Ensures centimeter-level accuracy, making it a top choice for surveying and construction projects.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Weather Resistant</p>
                  <p>
                    Performs reliably in harsh conditions like rain or strong winds, ensuring uninterrupted operations.
                  </p>
                </div>
              </aside>
            </>
          )}
        </main>
      </section>
    </>
  );
};

export default Drones;
