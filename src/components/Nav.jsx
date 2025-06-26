import logo from '../assets/logo_official.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ROUTES = ["About", "Gallery", "Contact", "Drones"];

function Nav() {
    const location = useLocation();
    const path = location.pathname.split("/").filter(Boolean); 
    
    useEffect(() => {
      setMobileMenu(true); 
    }, [location]);

    useEffect(() => {
      if (!location.pathname.startsWith("/services")) {
          setServicesDropdown(false);
      }
  }, [location.pathname]);


    const [mobileMenu, setMobileMenu] = useState(true);
    const [servicesDropdown, setServicesDropdown] = useState(false); 

    return (
        <nav className="flex flex-wrap lg:flex-row flex-col items-center justify-between bg-black px-3 relative z-10">
         

          {/* Logo */}
          <Link to="/">
            <img className="h-80 w-80" src={logo} alt="Logo" />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 m-5 text-white bg-[#07C0EA] hover:bg-black focus:ring-2 focus:ring-gray-200 rounded-lg lg:hidden" 
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <RxHamburgerMenu size={25} />
          </button>

          {/* Menu Items */}
          <div className={`${!mobileMenu ? "" : 'hidden'} w-full lg:w-auto lg:block motion-preset-slide-down-sm`}>
            <ul className="lg:space-x-8 flex flex-col lg:flex-row w-full bg-gray-200 lg:bg-transparent lg:border-none p-4 text-lg border rounded border-grey-100 border-grey-lg">
              
              {/* Regular Menu Items */}
              {ROUTES.map((item) => ( 
                <li
                  className={`p-2 px-3 text-black cursor-pointer ${
                    item === path[0] ? 
                    "bg-[#07C0EA] text-white rounded-md lg:bg-transparent lg:text-[#11BBEB] lg:text-2xl w-full h-full" :
                    "lg:text-white lg:text-2xl hover:bg-gray-400 w-full h-full"
                  }`}
                  key={item}
                >
                  <Link to={`/${item === "Home" ? "" : item}`}>{item}</Link>
                  
                </li>
              ))}

              {/* Services Dropdown */}
              <li 
                className="relative lg:text-white lg:text-2xl hover:bg-gray-400 w-full h-full p-2 px-3 text-black cursor-pointer"
                onClick={() => setServicesDropdown(!servicesDropdown)}
                
              >
                <button className="w-full text-left" >Services</button>
                

                {/* Dropdown Menu */}
                {servicesDropdown && (
                  <ul className="absolute lg:right-0 lg:left-null mt-4 w-56 bg-black text-[#07C0EA] shadow-lg rounded-md">
                    <li className="px-4 py-2 hover:bg-gray-100" ><Link to="/services/real-estate">Real Estate Photography</Link></li>
                    {/* <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services/videography">Cinematic Videography</Link></li> */}
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services/construction">Construction Monitoring</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services/inspections">Roof & Structural Inspections</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services/mapping">Aerial Mapping & 3D Modeling</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services/infared">Thermal Imaging</Link></li>
                    <li className="px-4 py-2 hover:bg-gray-100"><Link to="/services/events">Event Coverage</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
    );
}

export default Nav;
