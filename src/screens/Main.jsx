import { FaHardHat } from "react-icons/fa"; 
import { AiFillPicture } from "react-icons/ai"; 
import { FcPicture } from "react-icons/fc"; 
import { AiTwotonePicture } from "react-icons/ai"; 
import { FaRegBuilding } from "react-icons/fa"; 
import { GiDeliveryDrone } from "react-icons/gi"; 
import { FcInspection } from "react-icons/fc"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { BiPhotoAlbum } from "react-icons/bi"; 
import hero from '../assets/hero.png';
import avata from '../assets/avata.webp';

const Main = () => {
    return (
        <>
        <main class="flex flex-col items-center w-screen h-full justify-center">
            <img class="border-8 border-y-[#07C0EA] w-full shadow-2xl h-auto" src={hero} />
            
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

            <div class="w-full flex flex-col lg:flex-row justify-between my-20">
                <div class="m-auto">
                <img src={avata} class="w-[300px] h-[40vh]  animate-float hover:scale-160 transition-transform" />
                </div>
                <div class="m-auto h-auto">
                <button class="bg-[#58595B] w-[200px] h-[100px] rounded-xl text-white text-2xl font-bold">Drones</button>
                </div>
            </div>

            <section>
                <h3>Take Your Marketing to New Heights with Aerial Photography</h3>
            <p>Aerial photography is an innovative way to enhance your sales and marketing efforts. It provides fresh perspectives, elevates your brand’s image, and ensures you stand out both online and offline.</p>

<p>Whether you’re looking to generate buzz on social media or close property deals faster, drone photography helps you make a lasting impression. Our high-resolution aerial photos can help you:</p>
<ul>
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
    )
}

export default Main;