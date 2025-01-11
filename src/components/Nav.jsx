import logo from '../assets/logo_official.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import {useState} from 'react';

const ROUTES = ["Home", "About", "Services", "Contact"];

function Nav() {
const [mobileMenu, setMobileMenu] = useState(true)
    return (
        <nav className="flex flex-wrap justify-between items-center bg-black p-3 border-[#11BBEF]">
            <a href="#">
           <img className="w-38 h-24" src={logo} />
           </a>

           <button className=" p-2 text-white bg-[#11BBEF] hover:bg-black focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden" onClick={() => {setMobileMenu(!mobileMenu)}}>
            <RxHamburgerMenu size={25} />
           </button>

           {/* Menu Items */}
           <div className={`${!mobileMenu ? "" : 'hidden'} w-full lg:w-auto lg:block`}>
            <ul className=" lg:space-x-8 flex flex-col lg:flex-row  bg-gray-200 lg:bg-transparent lg:border-none p-4 text-lg border rounded border-grey-100 border-grey-lg">
                {ROUTES.map((item, index) => { 
                   return <li className={`p-2 px-3 text-black cursor-pointer ${index === 0 ? "bg-[#11BBEF] text-white rounded-md lg:bg-transparent lg:text-[#11BBEB]"  : "lg:text-white hover:bg-gray-400"}`} key={item}>{item}</li>
                })}
            </ul>

           </div>
        </nav>
    )
}

export default Nav;