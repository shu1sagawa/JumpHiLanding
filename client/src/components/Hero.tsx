import { motion } from "framer-motion";
import { 
  AppleIcon, 
  PlayIcon
} from "lucide-react";
import jumpHiPreview from "@assets/Your paragraph text.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-muted text-white pt-2 pb-0">
      <div className="absolute inset-0 ball-pattern"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center">
          <div className="w-full text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-1">
              Level Up Your <span className="text-primary">Basketball</span> Game
            </h1>
            <p className="text-sm md:text-base mb-0 text-gray-100 max-w-sm mx-auto">
              Professional training programs, drills, and tracking tools in your pocket.
            </p>
            
            <div className="flex flex-row justify-center space-x-3 mt-1 relative z-20">
              <a 
                href="https://apps.apple.com" 
                target="_blank"
                className="flex items-center justify-center bg-white text-primary px-4 py-0.5 rounded-full font-medium hover:shadow-lg"
              >
                <AppleIcon className="mr-1 h-4 w-4" />
                App Store
              </a>
              <a 
                href="https://play.google.com"
                target="_blank"
                className="flex items-center justify-center bg-white text-primary px-4 py-0.5 rounded-full font-medium hover:shadow-lg"
              >
                <PlayIcon className="mr-1 h-4 w-4" />
                Google Play
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full" style={{ marginTop: "-15px" }}>
          <div className="relative z-10">
            <img 
              src={jumpHiPreview} 
              alt="Jump Hi - High is the limit" 
              className="w-full max-w-5xl h-auto mx-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="hsl(0 0% 10%)" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
