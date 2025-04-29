import { InstagramIcon, FacebookIcon, YoutubeIcon } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import jumphiLogo from "../assets/jumphi-logo.png";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <a href="#" className="flex items-center">
              <img src={jumphiLogo} alt="JumpHi Logo" className="h-60 md:h-72" />
            </a>
            <p className="mt-4">
              The ultimate basketball training app designed to help players of all levels improve their skills and elevate their game.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/jumphi_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTiktok className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/jump.hi.90?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Training</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} JumpHi Basketball App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
