import { useState, useEffect } from "react";
import { X, PlayCircle } from "lucide-react";
import { FaHardHat, FaRegBuilding } from "react-icons/fa";
import { AiFillPicture } from "react-icons/ai";
import { GiDeliveryDrone } from "react-icons/gi";
import { Link } from "react-router-dom";
import Banner from "../components/Banner.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import three_dee from "../assets/3d.mp4";
import park from "../assets/baseball.jpg";
import avata from "../assets/avata.webp";
import frontImg from "../assets/thermal_front.png";
import backImg from "../assets/thermal_back.png";
import mspNight from "../assets/msp-night.jpg";
import { MdThermostat, MdMap, MdHouse } from "react-icons/md";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Main = () => {
  const [showReel, setShowReel] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="flex flex-col items-center w-full h-full justify-center">
        {/* 🌅 Hero Section with Background Video */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="https://d1yamy9p16k6i5.cloudfront.net/home_vid(1).mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          </div>


        {/* 🏆 Photo Contest Win Banner */}
        <section className="w-full bg-neutral-900 text-white text-center py-10 px-6 shadow-2xl">
          <section className="relative w-full bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 text-white text-center py-12 my-12 shadow-2xl overflow-hidden border-y border-[#07C0EA]/50">
            <div className="animate-fade-in px-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4 flex items-center justify-center gap-2">
                <span role="img" aria-label="trophy">
                  🏆
                </span>
                <span className="text-[#07C0EA] drop-shadow-[0_0_8px_#07C0EA]">
                  Award-Winning Photographer
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                <span className="font-semibold text-white">Zephyr Visions</span> proudly earned the
                <span className="font-semibold text-[#07C0EA]"> People’s Choice Award</span> in the
                <span className="font-semibold text-[#07C0EA]"> New Hope “In Focus” Photo Contest</span> —
                recognized for outstanding creativity and aerial imagery.
              </p>
            </div>

            {/* Subtle glowing background accent */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute w-64 h-64 bg-[#07C0EA] rounded-full blur-3xl top-0 left-1/4 animate-pulse-slow"></div>
              <div className="absolute w-80 h-80 bg-cyan-400 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse-slow"></div>
            </div>
          </section>

          <h2 className="text-4xl md:text-5xl font-bold text-[#07C0EA] mb-4">
            Introducing the Mavic 4 Pro
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-300">
            Now flying with 100MP power and cinematic precision. Next-Level Aerial Imaging — Now Available with Zephyr Visions.
          </p>
          <img
            src="https://www.dpreview.com/files/p/articles/7871034403/Mavic_4_Pro_Product_KV_Close-up_dark.jpeg"
            alt="DJI Mavic 4 Pro"
            className="mx-auto w-full max-w-md mb-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <Link to="/drones">
            <button className="bg-[#07C0EA] text-black font-semibold text-lg px-8 py-3 rounded-full hover:bg-white hover:text-[#07C0EA] transition duration-300">
              Explore the Fleet
            </button>
          </Link>
        </section>

        {/* SERVICES SECTION */}
        <section className="lg:w-[75%] mt-16 px-6">
          <h2 className="text-5xl text-center text-[#07C0EA] font-bold">Services</h2>

          <ul className="flex flex-wrap justify-center gap-10 my-16 mx-3 text-center">
            <li className="flex flex-col items-center max-w-xs">
              <FaRegBuilding size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false" />
              <h3 className="font-bold text-xl mt-3">Commercial & Residential Real Estate</h3>
              <p className="text-sm mt-2">Artistic aerial photography and videos for property listings, brochures, and marketing.</p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <AiFillPicture size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false"/>
              <h3 className="font-bold text-xl mt-3">Aerial Photography / Videography</h3>
              <p className="text-sm mt-2">High-resolution imagery and cinematic video for any purpose.</p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <FaHardHat size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false" />
              <h3 className="font-bold text-xl mt-3">Construction / Engineering</h3>
              <p className="text-sm mt-2">Progress tracking, documentation, and aerial perspectives for job sites.</p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <MdThermostat size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false"/>
              <h3 className="font-bold text-xl mt-3">Thermal Imaging</h3>
              <p className="text-sm mt-2">
                FLIR Level 1 sUAS Certified Thermographer offering infrared inspections for roofs, solar panels, and infrastructure anomalies.
              </p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <MdMap size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false"/>
              <h3 className="font-bold text-xl mt-3">Mapping & 3D Modeling</h3>
              <p className="text-sm mt-2">Orthomosaics, terrain models, and interactive site visualization.</p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <RiFlightTakeoffLine size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false" />
              <h3 className="font-bold text-xl mt-3">Indoor FPV Flythroughs</h3>
              <p className="text-sm mt-2">Immersive indoor videos for businesses, showrooms, and warehouses.</p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <BsFillCameraVideoFill size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false" />
              <h3 className="font-bold text-xl mt-3">Event Coverage</h3>
              <p className="text-sm mt-2">Capture outdoor events from the sky with dynamic aerial shots.</p>
            </li>

            <li className="flex flex-col items-center max-w-xs">
              <MdHouse size={80} className="text-[#07C0EA]" aria-hidden="true" focusable="false" />
              <h3 className="font-bold text-xl mt-3">Roof & Infrastructure Inspections</h3>
              <p className="text-sm mt-2">Close-up aerial inspections for assessments and maintenance planning.</p>
            </li>
          </ul>
        </section>

        {/* ✈️ FPV Section */}
        <div
          className="w-full flex flex-col lg:flex-row items-center justify-center bg-cover bg-center py-12 rounded-xl shadow-lg text-white h-auto min-h-[24rem]"
          style={{ backgroundImage: `url(${mspNight})` }}
        >
          <div className="flex justify-center lg:justify-end w-full max-w-sm px-6">
            <img
              src={avata}
              className="w-full max-w-[250px] h-auto animate-float hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="Drone"
            />
          </div>

          <div className="flex justify-center lg:justify-start w-full max-w-sm px-6 mt-8 lg:mt-0">
            <Link to="/drones">
              <button className="relative bg-neutral-800 text-white text-lg font-bold px-6 py-3 rounded-lg border hover:border-[#07C0EA] transition duration-300">
                See the Drones
              </button>
            </Link>
          </div>
        </div>

        {/* 🌡️ Thermal Section */}
        <div className="flex flex-col items-center justify-center w-full bg-black text-white p-6 my-16">
          <h1 className="text-3xl font-bold mb-4 text-center">Thermal Imaging</h1>
          <p className="text-lg text-gray-300 max-w-3xl text-center mb-6">
            <span className="font-semibold">Certified Thermographer</span> through FLIR, providing advanced aerial infrared imaging to detect heat signatures, locate anomalies, and deliver actionable insights in low-visibility or complex environments.
          </p>

          <div className="relative flex justify-center items-center w-full max-w-4xl bg-gray-800 p-4 rounded-lg shadow-lg">
            <ImageSlider imageFront={frontImg} imageBack={backImg} />
          </div>

          <div className="mt-8 max-w-4xl text-center">
            <h2 className="text-2xl font-semibold mb-3">Key Thermal Capabilities:</h2>
            <ul className="text-gray-300 space-y-2 text-left">
              <li><span className="font-semibold">Heat Signature Detection</span> – Identify hotspots in buildings, electrical grids, and vehicles.</li>
              <li><span className="font-semibold">Structural Inspections</span> – Detect water leaks, insulation gaps, and energy loss.</li>
              <li><span className="font-semibold">Search & Rescue</span> – Locate missing persons in low-visibility conditions.</li>
              <li><span className="font-semibold">Construction & Infrastructure Monitoring</span> – Analyze material stress points and overheating.</li>
              <li><span className="font-semibold">Agriculture & Wildlife Management</span> – Monitor crop health, irrigation, and livestock body temperatures.</li>
            </ul>
          </div>
        </div>

        {/* 🧭 3D Section */}
        <section className="w-full bg-white py-20 px-6 flex flex-col items-center">
          <h2 className="text-5xl font-bold text-[#07C0EA] text-center mb-6">3D Mapping & Graphics</h2>
          <p className="text-lg text-gray-600 max-w-3xl text-center mb-12">
            Capture environments in rich 3D detail — perfect for construction, inspections, land surveys, and marketing visuals.
          </p>

          <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12 items-start">
            <div className="w-full flex flex-col items-center">
              <span className="text-sm font-semibold text-white bg-[#07C0EA] px-4 py-1 rounded-t-md mb-3 shadow-md">
                Taken Image
              </span>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border-4 border-[#07C0EA]">
                <img src={park} alt="Real Aerial" className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <span className="text-sm font-semibold text-white bg-[#07C0EA] px-4 py-1 rounded-t-md mb-3 shadow-md">
                3D Render
              </span>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl border-4 border-[#07C0EA]">
                <video className="object-cover w-full h-full" src={three_dee} autoPlay loop muted playsInline></video>
              </div>
            </div>
          </div>
        </section>

        <Banner />

        {/* 📸 Marketing Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
          <h3 className="text-4xl font-extrabold text-center text-[#07C0EA] mb-8">
            Take Your Marketing to New Heights with Aerial Photography
          </h3>

          <p className="text-lg leading-relaxed mb-6 text-center">
            Aerial photography enhances your sales and marketing efforts by providing fresh perspectives, elevating your brand’s image, and ensuring you stand out both online and offline.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-center">
            Whether you’re looking to generate buzz on social media or close property deals faster, drone photography helps you make a lasting impression.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-disc list-inside text-lg font-medium">
            <li>Boost Your Social Media Presence</li>
            <li>Captivate Your Audience</li>
            <li>Sell Properties Faster</li>
            <li>Showcase Project Milestones</li>
            <li>Strengthen Your Brand Identity</li>
            <li>Share Your Story Like Never Before</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Main;
