import { AiOutlineFacebook } from "react-icons/ai"; 
import { AiOutlineYoutube } from "react-icons/ai"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import icon from '../assets/icon.png';

const Footer = () => {
    return (
        <footer class="bg-[#58595B] lg:h-[60vh] w-full m-0 flex flex-col lg:flex-row justify-evenly items-center">
            <div class = "">
                <img src={icon} size={20} />
            </div>
            <ul class="flex lg:flex-row flex-col">
                <li class="transition-transform duration-300 hover:motion-preset-expand"><a href="https://www.instagram.com/zvdrones/"><AiOutlineInstagram size={70} color="#07C0EA" /></a></li>
                <li><a href="https://www.instagram.com/zvdrones/"><AiOutlineFacebook size={70} color="#07C0EA" /></a></li>
                <li><a href="youtube.com"><AiOutlineYoutube size={70} color="#07C0EA"/></a></li>
            </ul>
            <div class="flex flex-col justify-between gap-4">
                <h2 class="text-[49px] text-[#07C0EA]">Contact</h2>
                <p class="text-[#07C0EA]">gabriel@zvdrones.com</p>
            </div>
        </footer>
    )
}

export default Footer;