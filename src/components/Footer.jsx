import icon from "../assets/icon.png";

import { Link } from 'react-router-dom'

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#58595B]  text-white py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-6 lg:mb-0">
          <Link to ='/'><img className="w-40 h-40" src={icon} /></Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-6 lg:mb-0">
          {/* <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#07C0EA] hover:scale-125 transition"
            aria-label="Facebook"
          >
            <FaFacebook size={40} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#07C0EA] hover:scale-125 transition"
            aria-label="Twitter"
          >
            <FaTwitter size={40} />
          </a> */}
          <a
            href="https://www.instagram.com/zvdrones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#07C0EA] hover:scale-125 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={40} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-right">
          <p className="flex items-center justify-center lg:justify-end space-x-2">
            <FaEnvelope className="text-gray-400" />
            <a
              href="mailto:gabriel@zvdrones.com"
              className="text-gray-400 hover:text-[#07C0EA] transition"
            >
              gabriel@zvdrones.com
            </a>
          </p>
          <p className="flex items-center justify-center lg:justify-end space-x-2 mt-2">
            <FaPhone className="text-gray-400" />
            <span>+1 (320) 237-1703</span>
          </p>
          <p className="text-sm">REACT⚛️ website made by Gabriel</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
