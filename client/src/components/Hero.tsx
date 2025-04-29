import { 
  AppleIcon, 
  PlayIcon
} from "lucide-react";
import jumpHiPreview from "../assets/Your paragraph text.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-[#070B34] to-[#1A2562] text-white pt-2 pb-0">
      <div className="absolute inset-0 ball-pattern opacity-30"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-thin italic leading-none mb-2">
              <div className="mb-0">
                <span className="font-bold text-white">Level</span><span>Up</span> <span>Your</span>
              </div>
              <div>
                <span className="font-bold text-white">Basketball</span> <span>Game</span>
              </div>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-100 max-w-lg mx-auto">
              Professional training programs, drills, and tracking tools in your pocket. Elevate your skills with JumpHi.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-row justify-center space-x-4 mt-6 mb-14">
              <a 
                href="https://apps.apple.com/us/app/jumphi-basketball-training/id1545204150" 
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-r from-[#DC60EC] to-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-transform hover:scale-105"
              >
                <AppleIcon className="mr-2 h-5 w-5" />
                App Store
              </a>
              <a 
                href="https://play.google.com"
                target="_blank"
                className="flex items-center justify-center bg-gradient-to-r from-[#DC60EC] to-[#3b82f6] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-transform hover:scale-105"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                Google Play
              </a>
            </div>
          </div>
          
          {/* Main image (directly below buttons) */}
          <img 
            src={jumpHiPreview} 
            alt="Jump Hi - High is the limit" 
            className="w-full max-w-5xl h-auto -mt-40 mb-0 md:max-h-[400px] object-contain"
          />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#070B34" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
