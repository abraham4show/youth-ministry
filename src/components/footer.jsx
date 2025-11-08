import { Link } from "react-router-dom";
import {
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <FaUsers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                The Holy Flock Of Christ Youth Ministry
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering young leaders through faith, community, and purpose.
              Join us as we grow together in leadership and service.
            </p>
            <div className="flex space-x-4">
              <button className="flex items-center px-3 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-200 transition">
                <FaEnvelope className="w-4 h-4 mr-2" />
                Newsletter
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/holyflockofchristww?igsh=c3cwMm94ajI4bjhv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors duration-300 transform hover:scale-110"
                  aria-label="TikTok"
                >
                  <SiTiktok className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

        {/* Contact Info */}
<div>
  <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
  <ul className="space-y-2">
    <li className="flex items-center space-x-2 text-gray-600">
      <FaPhone className="w-4 h-4" />
      <span className="w-40">+234 (802) 976-0061</span>
    </li>
    <li className="flex items-center space-x-2 text-gray-600">
      <FaPhone className="w-4 h-4" />
      <span className="w-40">+234 (802) 396-7837</span>
    </li>
    <li className="flex items-center space-x-2 text-gray-600">
      <FaEnvelope className="w-4 h-4" />
      <span>hfcnationalyouths@gmail.com</span>
    </li>
    <li className="flex items-center space-x-2 text-gray-600">
      <FaMapMarkerAlt className="w-4 h-4" />
      <span>45 Okepopo Street, Lagos Island</span>
    </li>
  </ul>
</div>

        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 The Holy Flock of Christ Youth Ministry. All rights reserved. Built with
            faith and purpose.
          </p>
           <div className="flex items-center space-x-2 text-center justify-center mt-2">
            <span className="text-gray-600 text-sm">Website developed by</span>
            <a 
              href="https://www.tiktok.com/@tunde.js?lang=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:underline font-medium"
            >
              <SiTiktok className="w-4 h-4 mr-1" />
              @tunde.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}