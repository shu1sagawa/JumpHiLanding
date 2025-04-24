import { motion } from "framer-motion";
import { 
  AppleIcon, 
  PlayIcon
} from "lucide-react";
import jumpHiPreview from "@assets/Your paragraph text.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-muted text-white py-6 md:py-8">
      <div className="absolute inset-0 ball-pattern"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-1">
              Level Up Your <span className="text-primary">Basketball</span> Game
            </h1>
            <p className="text-lg md:text-xl mb-1 text-gray-100 max-w-lg mx-auto">
              Professional training programs, drills, and tracking tools in your pocket. Elevate your skills with JumpHi.
            </p>
            
            <div className="flex flex-row justify-center space-x-4">
              <motion.a 
                href="https://apps.apple.com" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-white text-primary px-6 py-1 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <AppleIcon className="mr-2 h-5 w-5" />
                App Store
              </motion.a>
              <motion.a 
                href="https://play.google.com"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-white text-primary px-6 py-1 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                Google Play
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full -mt-4"
          >
            <div className="relative z-10 overflow-hidden shadow-2xl">
              <img 
                src={jumpHiPreview} 
                alt="Jump Hi - High is the limit" 
                className="w-full max-w-5xl h-auto mx-auto"
              />
            </div>
          </motion.div>
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
