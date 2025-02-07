import { FaHardHat } from "react-icons/fa"; 
import { AiFillPicture } from "react-icons/ai"; 
import { FcPicture } from "react-icons/fc"; 
import { AiTwotonePicture } from "react-icons/ai"; 
import { FaRegBuilding } from "react-icons/fa"; 
import { GiDeliveryDrone } from "react-icons/gi"; 
import { FcInspection } from "react-icons/fc"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { BiPhotoAlbum } from "react-icons/bi"; 
import Banner from '../components/Banner.jsx';
import vid from '../assets/home_vid.mp4';
import avata from '../assets/avata.webp';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import mspNight from '../assets/msp-night.jpg';


const Main = () => {
  const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []); 
  };
    return (
      <>
      {useScrollToTop()}
        <main class="flex flex-col items-center w-screen h-full justify-center">
        <video
className="border-8 border-y-[#07C0EA] w-full h-[50vh] lg:h-[70vh] shadow-2xl object-cover"

  src={vid} 
  autoPlay
  loop
  muted
  playsInline
></video>
            
            <section class="lg:w-[75%]">
            <h2 class="text-5xl text-center translate-y-16 text-[#07C0EA]">Services</h2>    
            <ul class="flex flex-col lg:flex-row justify-between my-[200px] mx-3 items-center">
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><FaRegBuilding  size={80} color="#07C0EA"/>
                        <h3 class="font-bold text-2xl text-center">Commercial Real Estate Aerial Photography & Videography</h3>
                    </li>
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><AiFillPicture size={80} color="#07C0EA" />
                    <h3 class="font-bold text-2xl text-center">Aerial Photography/ Videography</h3>
                    </li>
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><FaHardHat size={80} color="#07C0EA" />
                    <h3 class="font-bold text-2xl text-center">Architect/ Engineering/ Constuction </h3>
                    </li>
                </ul>
            </section>

          

<div style={{ backgroundImage: `url(${mspNight})` }} className="w-full h-96 flex flex-col lg:flex-row lg:justify-center justify-between items-center mb-64 bg-cover bg-center py-12 rounded-xl shadow-lg">

  {/* Drone Image */}
  <div className="m-auto">
    <img
      src={avata}
      className="w-[300px] h-[40vh] animate-float hover:scale-110 transition-transform duration-300 ease-in-out"
      alt="Drone"
    />
  </div>

  {/* Button Section */}
  <div className="m-auto h-auto">
    <Link to="/drones">
    
   
<button class="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-[#07C0EA] hover:before:[box-shadow:_20px_20px_20px_30px_black] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-[#07C0EA] relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-white before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-[#07C0EA] after:right-8 after:top-3 after:rounded-full after:blur-lg">
  See the Drones
</button>


    </Link>
  </div>
</div>

<Banner />


            <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800">

  <h3 className="text-4xl font-extrabold text-center text-[#07C0EA] mb-8">
    Take Your Marketing to New Heights with Aerial Photography
  </h3>


  <p className="text-lg leading-relaxed mb-6 text-center">
    Aerial photography is an innovative way to enhance your sales and marketing efforts. It provides fresh perspectives, elevates your brand’s image, and ensures you stand out both online and offline.
  </p>

  <p className="text-lg leading-relaxed mb-8 text-center">
    Whether you’re looking to generate buzz on social media or close property deals faster, drone photography helps you make a lasting impression. Our high-resolution aerial photos can help you:
  </p>

  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 list-disc list-inside">
    <li className="text-lg font-medium">Boost Your Social Media Presence</li>
    <li className="text-lg font-medium">Captivate Your Audience</li>
    <li className="text-lg font-medium">Sell Properties Faster</li>
    <li className="text-lg font-medium">Showcase Project Milestones</li>
    <li className="text-lg font-medium">Strengthen Your Brand Identity</li>
    <li className="text-lg font-medium">Share Your Story Like Never Before</li>
  </ul>
</section>

        </main>
        </>
    )
}

export default Main;
