import { motion } from "framer-motion";
import { 
  AppleIcon, 
  PlayIcon
} from "lucide-react";
import jumpHiPreview from "../assets/jumphi-preview.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-muted text-white py-20 md:py-28">
      <div className="absolute inset-0 ball-pattern"></div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
              Level Up Your <span className="text-primary">Basketball</span> Game
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-md">
              Professional training programs, drills, and tracking tools in your pocket. Elevate your skills with JumpHi.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.a 
                href="https://apps.apple.com" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-white text-primary px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <AppleIcon className="mr-2 h-5 w-5" />
                App Store
              </motion.a>
              <motion.a 
                href="https://play.google.com" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-white text-primary px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                Google Play
              </motion.a>
            </div>
            

          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <div className="relative w-full md:w-auto max-w-md">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={jumpHiPreview} 
                  alt="Jump Hi - High is the limit" 
                  className="w-full h-auto"
                />
              </motion.div>
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
