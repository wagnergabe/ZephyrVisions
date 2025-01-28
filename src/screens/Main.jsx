import { FaHardHat } from "react-icons/fa"; 
import { AiFillPicture } from "react-icons/ai"; 
import { FcPicture } from "react-icons/fc"; 
import { AiTwotonePicture } from "react-icons/ai"; 
import { FaRegBuilding } from "react-icons/fa"; 
import { GiDeliveryDrone } from "react-icons/gi"; 
import { FcInspection } from "react-icons/fc"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { BiPhotoAlbum } from "react-icons/bi"; 
import vid from '../assets/home_vid.mp4';
import avata from '../assets/avata.webp';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
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
                    <h3 class="font-bold text-2xl text-center">Aerial Photography/Videography</h3>
                    </li>
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><FaHardHat size={80} color="#07C0EA" />
                    <h3 class="font-bold text-2xl text-center">Architect/ Engineering/ Constuction </h3>
                    </li>
                </ul>
            </section>

            <div className="w-full flex flex-col lg:flex-row justify-between items-center my-20 bg-[#58595B] py-12 rounded-xl shadow-lg">
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
    <button className=" bg-white hover:bg-[#048ba8] text-black w-[200px] h-[60px] lg:h-[80px] rounded-lg lg:rounded-2xl text-xl lg:text-2xl font-bold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">
      See the Drones
    </button>
    </Link>
  </div>
</div>


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
