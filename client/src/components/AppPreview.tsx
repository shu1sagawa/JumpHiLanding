import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckIcon, TimerIcon, Flame } from "lucide-react";

export default function AppPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const checkItems = [
    {
      title: "Skill-Based Training",
      description: "Focus on shooting, dribbling, conditioning, agility, defense, or full training programs."
    },
    {
      title: "On-Court Tracking",
      description: "Set timers, count reps, and track your shooting percentages during practice sessions."
    },
    {
      title: "Offline Access",
      description: "Download workouts and videos for practice sessions without internet connection."
    }
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-b from-[#0d1338] to-[#070B34]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0"
            ref={ref}
          >
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Complete Training System In Your Pocket
              </h2>
              
              <div className="space-y-6">
                {checkItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) }}
                    className="flex items-start"
                  >
                    <div className="bg-accent rounded-full p-1 mt-1">
                      <CheckIcon className="text-white h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-heading font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.a 
                href="#download" 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
              >
                Start Training Now
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 md:w-72 rounded-3xl shadow-xl border-8 border-accent/30 h-[450px] bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">App Screenshot</span>
              </div>
              
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg z-10"
              >
                <div className="flex items-center">
                  <Flame className="text-red-500 h-5 w-5" />
                  <div className="ml-3">
                    <p className="text-dark font-bold text-sm">7-day streak!</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ y: 10, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-lg z-10"
              >
                <div className="flex items-center">
                  <TimerIcon className="text-primary h-5 w-5" />
                  <div className="ml-3">
                    <p className="text-dark font-bold text-sm">35 min workout</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
