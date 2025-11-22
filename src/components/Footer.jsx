import icon from "../assets/icon.png";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2F3031] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex justify-center md:justify-start w-full">
            <img
              className="w-32 h-32 mb-3 drop-shadow-lg hover:scale-105 transition"
              src={icon}
              alt="Zephyr Visions logo"
            />
          </Link>

          <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
            Professional Drone Services · Photography · Mapping · Thermal
            Imaging
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold tracking-wide mb-3">
            Follow Me
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/zvdrones"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#07C0EA] hover:scale-125 transition"
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://www.youtube.com/@zvdrones"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-400 hover:text-[#07C0EA] hover:scale-125 transition"
            >
              <FaYoutube size={32} />
            </a>

            <a
              href="https://www.linkedin.com/company/zephyr-visions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#07C0EA] hover:scale-125 transition"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-end text-gray-300">
          <h3 className="text-lg font-semibold tracking-wide mb-3">Contact</h3>

          <p className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-[#07C0EA]" />
            <a
              href="mailto:gabriel@zvdrones.com"
              className="hover:text-[#07C0EA] transition"
            >
              gabriel@zvdrones.com
            </a>
          </p>

          <p className="flex items-center gap-2">
            <FaPhone className="text-[#07C0EA]" />
            <span>+1 (320) 237-1703</span>
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-gray-400">
        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-2">
          <span>© {new Date().getFullYear()} Zephyr Visions</span>
          <span className="hidden sm:inline">·</span>
          <Link to="/privacy" className="hover:text-[#07C0EA] transition">
            Privacy Policy
          </Link>
        </div>
        <p className="text-[10px] tracking-wide text-gray-500">
          Website designed & built in React ⚛️ by Gabriel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
