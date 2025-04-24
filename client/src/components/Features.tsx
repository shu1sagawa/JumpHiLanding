import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  Dumbbell, 
  Video, 
  LineChart,
  Users,
  Calendar,
  Medal
} from "lucide-react";

const features = [
  {
    icon: <Dumbbell className="text-2xl text-secondary h-6 w-6" />,
    title: "Personalized Workouts",
    description: "Custom training plans based on your position, skill level, and specific goals."
  },
  {
    icon: <Video className="text-2xl text-accent h-6 w-6" />,
    title: "HD Video Tutorials",
    description: "Learn from pro trainers with step-by-step video instructions for all drills and exercises."
  },
  {
    icon: <LineChart className="text-2xl text-primary h-6 w-6" />,
    title: "Performance Tracking",
    description: "Track your progress, set new goals, and see your improvement over time with detailed analytics."
  },
  {
    icon: <Users className="text-2xl text-secondary h-6 w-6" />,
    title: "Community Challenges",
    description: "Compete with friends and players worldwide in weekly challenges and leaderboards."
  },
  {
    icon: <Calendar className="text-2xl text-accent h-6 w-6" />,
    title: "Structured Programs",
    description: "Follow 4-12 week programs designed to improve specific skills like shooting, dribbling, or vertical jump."
  },
  {
    icon: <Medal className="text-2xl text-primary h-6 w-6" />,
    title: "Pro Feedback",
    description: "Upload your videos for analysis and get professional feedback on your technique."
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 } 
        }
      }}
      className="bg-gradient-to-br from-[#0d1338] to-[#1c2b68] rounded-xl p-6 border border-indigo-500/10 shadow-lg"
    >
      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3 text-white">{feature.title}</h3>
      <p className="text-gray-300">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="features" className="pt-8 pb-20 -mt-12 bg-gradient-to-b from-[#070B34] to-[#0d1338]">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Hoopers Choose JumpHi</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Designed by professional basketball trainers and sports scientists to help players of all levels improve their game.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
