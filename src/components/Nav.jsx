import logo from '../assets/logo_official.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import {useState} from 'react';

const ROUTES = ["Home", "About", "Services", "Contact", "Drones"];

function Nav() {
const [mobileMenu, setMobileMenu] = useState(true)
    return (
        <nav className="flex lg:flex-row sm:flex-col flex-wrap justify-between items-center bg-black  border-[#07C0EA]">
            <a href="#" class="p-3">
           <img className="lg:w-[400px] lg:h-[300px] lg:mx-9" src={logo} />
           </a>

           <button className=" p-2 m-5 text-white bg-[#07C0EA] hover:bg-black focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden" onClick={() => {setMobileMenu(!mobileMenu)}}>
            <RxHamburgerMenu size={25} />
           </button>

           {/* Menu Items */}
           <div className={`${!mobileMenu ? "" : 'hidden'} w-full lg:w-auto lg:block`}>
            <ul className=" lg:space-x-8 flex flex-col lg:flex-row  bg-gray-200 lg:bg-transparent lg:border-none p-4 text-lg border rounded border-grey-100 border-grey-lg">
                {ROUTES.map((item, index) => { 
                   return <li className={`p-2 px-3 text-black cursor-pointer ${index === 0 ? "bg-[#07C0EA] text-white rounded-md lg:bg-transparent lg:text-[#11BBEB] lg:text-2xl"  : "lg:text-white lg:text-2xl hover:bg-gray-400"}`} key={item}>{item}</li>
                })}
            </ul>

           </div>
        </nav>
    )
}

export default Nav;