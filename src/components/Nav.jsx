import logo from '../assets/logo_official.png'
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ROUTES = ["About", "Gallery", "Contact", "Drones", "Services"];

function Nav() {

    const location = useLocation();
    const path = location.pathname.split("/").filter(Boolean); 
    
    useEffect(() => {
      setMobileMenu(true); 
    }, [location]);

const [mobileMenu, setMobileMenu] = useState(true)
    return (
        <nav className="flex flex-wrap lg:flex-row flex-col items-center justify-between bg-black px-3">
          <div>
          <p class="text-yellow-300 text-3xl absolute text-center top-0 left-0">UNDER CONSTRUCTION - Thank you for visiting!</p>
          </div>
          <Link to="/">
            <img
              className="h-80 w-80"
              src={logo}
              alt="Logo"
            />
          </Link>
      

           <button className=" p-2 m-5 text-white bg-[#07C0EA] hover:bg-black focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden" onClick={() => {setMobileMenu(!mobileMenu)}}>
            <RxHamburgerMenu size={25} />
           </button>

           {/* Menu Items */}
           <div className={`${!mobileMenu ? "" : 'hidden'} w-full lg:w-auto lg:block motion-preset-slide-down-sm`}>
            <ul className=" lg:space-x-8 flex flex-col lg:flex-row w-full bg-gray-200 lg:bg-transparent lg:border-none p-4 text-lg border rounded border-grey-100 border-grey-lg">
                {ROUTES.map((item, index) => { 
                   return <li
                   className={`p-2 px-3 text-black cursor-pointer ${
                     item === path[0]
                       ? "bg-[#07C0EA] text-white rounded-md lg:bg-transparent lg:text-[#11BBEB] lg:text-2xl w-full h-full"
                       : "lg:text-white lg:text-2xl hover:bg-gray-400 w-full h-full"
                   }`}
                   key={item}
                 >
                   {item === "Home" ? (
                     <Link to="/">{item}</Link>
                   ) : (
                     <Link to={`/${item}`}>{item}</Link>
                   )}
                 </li>
                })}
            </ul>

           </div>
        </nav>
    )
}

export default Nav;