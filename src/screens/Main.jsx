import { GiDeliveryDrone } from "react-icons/gi"; 
import { FcInspection } from "react-icons/fc"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { BiPhotoAlbum } from "react-icons/bi"; 
import hero from '../assets/hero.png';

const Main = () => {
    return (
        <main class="flex flex-col items-center w-screen h-full justify-center">
            <img class="border-8 border-[#11BBEF] w-full shadow-2xl" src={hero} />
            <section>
            <ul class="flex flex-col lg:flex-row justify-between m-10 items-center">
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><BiPhotoAlbum size={80} color="#11BBEF"/>
                        <h3 class="font-bold">Aerial Photography and videography</h3>
                            <p class="text-center">We offer professional aerial video and/or aerial photography for any occasion. With the combination of the latest in technology and experience, we ensure every shot is the very best quality at an affordable price.</p>
                    </li>
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><AiOutlineHome size={80} color="#11BBEF" />
                    <h3 class="font-bold">Real Estate</h3>
                            <p class="text-center">Using our high-resolution aerial video and photo solutions to market your properties shows prospective sellers that the agent takes advantage of every opportunity to make their property stand out from the competition.</p>
                    </li>
                    <li class="flex flex-col justify-center items-center mx-3 my-3 flex-1"><GiDeliveryDrone size={80} color="#11BBEF" />
                    <h3 class="font-bold">Inspection</h3>
                            <p class="text-center">Drones in industrial and factory settings enhance efficiency and safety by performing tasks like equipment inspections, facility monitoring, and maintenance in hard-to-reach areas. Their ability to collect real-time data, support inventory management.</p>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Main;