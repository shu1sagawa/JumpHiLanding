import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  AppleIcon, 
  PlayIcon,
  Users,
  RefreshCwIcon 
} from "lucide-react";

export default function DownloadCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-20 bg-gradient-to-r from-accent to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your Game?</h2>
          <p className="text-xl mb-10">
            Join thousands of players who are taking their basketball skills to the next level with JumpHi.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <motion.a 
              href="https://apps.apple.com" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#DC60EC] text-white px-6 py-3 rounded-xl transition-all hover:shadow-lg border border-white/20"
            >
              <AppleIcon className="h-8 w-8 mr-4" />
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-xl font-heading font-bold">App Store</p>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://play.google.com" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#DC60EC] text-white px-6 py-3 rounded-xl transition-all hover:shadow-lg border border-white/20"
            >
              <PlayIcon className="h-8 w-8 mr-4" />
              <div className="text-left">
                <p className="text-xs">Get it on</p>
                <p className="text-xl font-heading font-bold">Google Play</p>
              </div>
            </motion.a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2" />
              <span className="font-medium">100,000+ Users</span>
            </div>
            <div className="flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                className="h-6 w-6 mr-2 fill-current"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm3.5-11c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm-7 0c0 .8-.7 1.5-1.5 1.5S5.5 9.8 5.5 9s.7-1.5 1.5-1.5S8.5 8.2 8.5 9zm3.5 7c-2.2 0-4-1.8-4-4h8c0 2.2-1.8 4-4 4z" />
              </svg>
              <span className="font-medium">500+ Drills</span>
            </div>
            <div className="flex items-center">
              <RefreshCwIcon className="h-6 w-6 mr-2" />
              <span className="font-medium">Weekly Updates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
