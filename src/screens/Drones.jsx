import { useState, useEffect } from 'react';

const Drones = () => {
  const [activeButton, setActiveButton] = useState("mavic4pro");

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
  className={`my-2 font-bold md:border-b-4 mx-10 border-black lg:text-2xl ${
    activeButton === "mavic4pro" ? "py-2 px-4 bg-gray-300 border rounded" : ""
  }`}
  onClick={() => setActiveButton("mavic4pro")}
  disabled={activeButton === "mavic4pro"}
>
  FLAGSHIP
</button>
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
          <p className="font-bold">Cinematic Indoor Flythroughs</p>
          <p>
            Navigate tight spaces with smooth, stabilized FPV control — perfect for
            walkthroughs of homes, showrooms, and event venues.
          </p>
        </div>
        <div className="max-h-64">
          <p className="font-bold">Precision Hover & Acro Mode</p>
          <p>
            From slow, steady glides to advanced acro moves, tailor each flight to
            fit your vision and environment.
          </p>
        </div>
      </aside>

      <div className="flex flex-col items-center justify-center lg:max-w-[40%] lg:max-h-[40%]">
        <img
          src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/0dad80f805dabc4da255f268f20c605b@ultra.jpg"
          className="motion-scale-in-75"
          alt="Indoor drone Avata 2"
        />
      </div>

      <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-left">
        <div className="my-[20px] max-h-64">
          <p className="font-bold">Immersive Goggles & Focus Mode</p>
          <p>
            Using FPV goggles and pinpoint camera
            control to capture every angle indoors.
          </p>
        </div>
        <div className="max-h-64">
          <p className="font-bold">4K Ultra-Stabilized Video</p>
          <p>
            Crystal-clear 4K footage with built-in stabilization — ideal for
            marketing, real estate, or branded content.
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

        {/* Mavic 4 Pro Section */}
<h2
  className={`${
    activeButton === "mavic4pro"
      ? "text-7xl px-20 text-center mt-8 text-[#07C0EA] motion-preset-slide-down font-space-mono"
      : "hidden"
  }`}
>
  Mavic 4 Pro
</h2>

<main
  className={`${
    activeButton === "mavic4pro"
      ? "flex lg:flex-row w-full flex-col h-[90%] lg:w-[80%] items-center justify-evenly"
      : ""
  }`}
>
  {activeButton === "mavic4pro" && (
    <>
      <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-right">
        <div className="my-[20px]">
          <p className="font-bold">100MP Super Resolution</p>
          <p>
            Industry-leading clarity for mapping, real estate, and commercial-grade photography.
          </p>
        </div>
        <div>
          <p className="font-bold">Dual Native ISO & Hasselblad Color</p>
          <p>
            Ultra-dynamic range and cinematic tones even in low light conditions.
          </p>
        </div>
      </aside>

      <div className="flex flex-col items-center justify-center lg:max-w-[50%] lg:max-h-[50%]">
        <img
          src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/0ca84df1c0d68677e852ce314c9602d6@ultra.webp"
          className="motion-scale-in-75"
          alt="Mavic 4 Pro"
        />
      </div>

      <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px] motion-preset-slide-left">
        <div className="my-[20px]">
          <p className="font-bold">Flagship-Level Precision</p>
          <p>
            Engineered for demanding aerial projects, from cinematic shoots to detailed inspections.
          </p>
        </div>
        <div>
          <p className="font-bold">360° Gimbal Rotation</p>
          <p>
            Freely rotate the camera in any direction without shifting the drone’s position.
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
