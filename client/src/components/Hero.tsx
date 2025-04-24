import { motion } from "framer-motion";
import { 
  AppleIcon, 
  PlayIcon, 
  StarIcon, 
  StarHalfIcon,
  TrendingUpIcon
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary/90 text-white py-20 md:py-28">
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
                className="flex items-center justify-center bg-white text-secondary px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <AppleIcon className="mr-2 h-5 w-5" />
                App Store
              </motion.a>
              <motion.a 
                href="https://play.google.com" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center bg-white text-secondary px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
              >
                <PlayIcon className="mr-2 h-5 w-5" />
                Google Play
              </motion.a>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                    <span className="text-xs text-gray-500">User</span>
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                  ))}
                  <StarHalfIcon className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 font-medium">4.8</span>
                </div>
                <p className="text-sm text-gray-200">From 2,000+ reviews</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <div className="relative w-64 md:w-80">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary rounded-3xl transform rotate-6"></div>
              <div className="relative z-10 rounded-3xl shadow-xl border-4 border-white h-[500px] md:h-[600px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">App Preview</span>
              </div>
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg transform rotate-3 z-20"
              >
                <div className="flex items-center">
                  <TrendingUpIcon className="text-accent h-5 w-5" />
                  <div className="ml-3">
                    <p className="text-dark font-medium text-sm">Progress</p>
                    <p className="text-primary font-bold">+27% this month</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
