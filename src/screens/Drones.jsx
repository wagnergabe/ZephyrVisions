import { useState } from 'react';

const Drones = () => {
  const [activeButton, setActiveButton] = useState("indoor")

  return (
    <>
    <section className="flex flex-col items-center justify-between w-[100%] h-auto mt-5">
    <div className="flex flex-row justify-evenly w-full">
  <button
    className={`font-bold border-b-4 border-black lg:text-2xl ${
      activeButton === "indoor" ? "bg-gray-300" : ""
    }`}
    onClick={() => setActiveButton("indoor")}
    disabled={activeButton === "indoor"}
  >
    INDOOR
  </button>

  <button
    className={`font-bold border-b-4 border-black lg:text-2xl ${
      activeButton === "picVid" ? "bg-gray-300" : ""
    }`}
    onClick={() => setActiveButton("picVid")}
    disabled={activeButton === "picVid"}
  >
    PICTURE/VIDEO
  </button>

  <button
    className={`font-bold border-b-4 border-black lg:text-2xl ${
      activeButton === "industrial" ? "bg-gray-300" : ""
    }`}
    onClick={() => setActiveButton("industrial")}
    disabled={activeButton === "industrial"}
  >
    INDUSTRIAL
  </button>
</div>





{/* Avata 2*/}

<h2 className = {`${
    activeButton === 'indoor' ? 
    "text-7xl px-20 mt-8"
    : "hidden"
}`}>Avata 2</h2>
  
<main
  className={`${
    activeButton === "indoor"
      ? "flex lg:flex-row flex-col h-[90%] w-[80%] items-center justify-evenly"
      : ""
  }`}
>
  {activeButton === "indoor" && (
    <>
      <aside className="flex flex-col  lg:w-[20%] items-center text-center my-[30px]">
        <div className="my-[20px]">
          <p className="font-bold">Indoor Maneuverability</p>
          <p>
            Easily maneuver indoors and capture unique living spaces and rooms
            of your home. Proficient in indoor drone tours for all your real
            estate marketing and personal needs.
          </p>
        </div>
        <div>
          <p className="font-bold">Still Photography Mode</p>
          <p>
            Still photography is perfect for capturing aerial shots and custom
            home and property portraits.
          </p>
        </div>
      </aside>

      <div className="flex flex-col items-center justify-center max-w-[40%] max-h-[40%]">
        <img
          src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/0dad80f805dabc4da255f268f20c605b@ultra.jpg"
          className="motion-scale-in-75"
          alt="Indoor drone"
        />
      </div>

      <aside className="flex flex-col  lg:w-[20%] items-center text-center my-[30px]">
        <div className="my-[20px]">
          <p className="font-bold">Focus Mode / Goggles</p>
          <p>
            Easily maneuver in and out of tight spaces with precision goggles
            and superior focus mode.
          </p>
        </div>
        <div>
          <p className="font-bold">4K Stabilized Video</p>
          <p>
            Stabilized 4K video allows for precision videos with minimal
            movements.
          </p>
        </div>
      </aside>
    </>
  )}
</main>


    {/* Mini 4 Pro */}

<h2 className = {`${
    activeButton === 'picVid' ? 
    "text-7xl px-20 mt-8"
    : "hidden"
}`}>Mini 4 Pro</h2>

<main
   className={`${
    activeButton === "picVid"
      ? "flex lg:flex-row w-full flex-col h-[90%] lg:w-[80%] items-center justify-evenly"
      : ""
  }`}
>
 
  {activeButton === 'picVid' && (
    <>

      <aside className="flex flex-col  lg:w-[20%] items-center text-center my-[30px]">
        <div className="my-[20px]">
          <p className="font-bold">4K HDR Video Recording</p>
          <p>
            Ideal for professional real estate, event photography, and
            high-quality promotional content.
          </p>
        </div>
        <div>
          <p className="font-bold">360-degree Obstacle Avoidance System</p>
          <p>
            Ensures safe and precise flights, even in complex environments,
            allowing for creative shots in tight spaces.
          </p>
        </div>
      </aside>

      <div className="flex flex-col items-center justify-center max-w-[50%] max-h-[50%]">
        <img
          src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/f96def8770cb7529d7a98731fa2117dd@ultra.jpg"
          className="motion-scale-in-75"
          alt="Drone Image"
        />
      </div>

      <aside className="flex flex-col lg:w-[20%] items-center text-center my-[30px]">
        <div className="my-[20px]">
          <p className="font-bold">Vertical Shooting Capabilities</p>
          <p>
            Delivers social-media-ready content for platforms like Instagram and
            Meta without requiring post-editing adjustments.
          </p>
        </div>
        <div>
          <p className="font-bold">Extended Flight Time</p>
          <p>
            Ensures efficiency during shoots, allowing coverage across large
            areas or multiple perspectives in a single flight.
          </p>
        </div>
      </aside>
    </>
  )}
</main>

{/* Matrice 4T */}

<h2 className = {`${
    activeButton === 'industrial' ? 
    "text-7xl px-20 mt-8"
    : "hidden"
}`}>Matrice 4T</h2>

<main
  className={`${
    activeButton === "industrial"
      ? "flex lg:flex-row w-full flex-col h-[90%] lg:w-[80%] items-center justify-evenly"
      : ""
  }`}
>
  {activeButton === "industrial" && (
    <>
      <aside className="flex flex-col  lg:w-[20%] items-center text-center my-[30px]">
        <div className="my-[20px]">
          <p className="font-bold">Thermal Imaging</p>
          <p>
          perfect for inspections, search-and-rescue missions, and heat monitoring.
          </p>
        </div>
        <div>
          <p className="font-bold">56x magnification zoom</p>
          <p>
          captures detailed visuals, ideal for industrial inspections and mapping.
          </p>
        </div>
      </aside>

      <div className="flex flex-col items-center justify-center max-w-[40%] max-h-[40%]">
        <img
          src="https://se-cdn.djiits.com/tpc/uploads/carousel/image/b49fb59abc89fd799b252633ad70618f@origin.jpg?format=webp"
          className="motion-scale-in-75 "
          alt="Indoor drone"
        />
      </div>

      <aside className="flex flex-col  lg:w-[20%] items-center text-center my-[30px]">
        <div className="my-[20px]">
          <p className="font-bold"> RTK precision positioning</p>
          <p>
          ensures centimeter-level accuracy, making it a top choice for surveying and construction projects.
          </p>
        </div>
        <div>
          <p className="font-bold">Weather Resistant</p>
          <p>
          Perform reliably in harsh conditions like rain or strong winds, ensuring uninterupped operations.
          </p>
        </div>
      </aside>
    </>
  )}
</main>




    </section>
    </>
  )
}

export default Drones;
