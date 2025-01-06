import logo from '../assets/drone_logo.jpg'
import { RxHamburgerMenu } from 'react-icons/rx';

const ROUTES = ["Home", "About", "Services", "Contact"];

function Nav() {

    return (
        <nav className="flex flex-wrap justify-between items-center">
            <a href="#">
           <img className="w-24" src={logo} />
           </a>

           <button className=" p-2 hover:bg-slate-600 focus:ring-2 focus:ring-gray-200 rounded-lg ">
            <RxHamburgerMenu size={25} />
           </button>

           {/* Menu Items */}
           <div className="w-full">
            <ul className="bg-gray-50  p-4 text-lg border rounded border-grey-100 border-grey-lg">
                {ROUTES.map((item, index) => { 
                   return <li className={`p-2 px-3 cursor-pointer ${index === 0 ? "bg-blue-500 text-white rounded-md"  : "hover:bg-gray-100"}`} key={item}>{item}</li>
                })}
            </ul>

           </div>
        </nav>
    )
}

export default Nav;