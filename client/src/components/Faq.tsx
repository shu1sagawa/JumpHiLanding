import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is JumpHi suitable for beginners?",
    answer: "Absolutely! JumpHi has training programs for all skill levels. Beginners will find step-by-step tutorials and fundamentals training, while advanced players can access more challenging drills and workouts."
  },
  {
    question: "Do I need special equipment?",
    answer: "Most workouts require just a basketball and court access. Some advanced training programs may suggest additional items like cones or resistance bands, but we provide alternatives if you don't have these items."
  },
  {
    question: "Is there a subscription fee?",
    answer: "JumpHi offers both free and premium content. The basic version includes fundamental drills and tracking, while premium unlocks professional training programs, advanced analytics, and personalized feedback."
  },
  {
    question: "How often are new workouts added?",
    answer: "We add new drills and workouts every month. Premium members get access to seasonal training programs and special workouts developed with professional trainers and athletes."
  },
  {
    question: "Can coaches use JumpHi for team training?",
    answer: "Yes! We offer team packages that allow coaches to assign workouts, track player progress, and analyze team performance. Contact us for special team pricing."
  }
];

function FaqItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-muted hover:bg-muted/80 text-white transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-lg">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-primary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4">
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about the JumpHi basketball training app.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
