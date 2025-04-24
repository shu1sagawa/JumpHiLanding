import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael T.",
    role: "High School Player",
    text: "My vertical jump improved by 4 inches after just 8 weeks on the JumpHi program! The video tutorials make it easy to understand proper form."
  },
  {
    name: "Sarah K.",
    role: "College Athlete",
    text: "The shooting analytics have completely changed my game. I can see exactly where I need to improve and the drills help me fix those weaknesses."
  },
  {
    name: "Jason M.",
    role: "Recreational Player",
    text: "As a weekend warrior, this app gives me structured workouts I can do in limited time. My friends have noticed the difference in my game!"
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-secondary-800 bg-opacity-30 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white overflow-hidden">
          {testimonial.name[0]}
        </div>
        <div className="ml-4">
          <h3 className="font-heading font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-300">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-200">
        "{testimonial.text}"
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Players Say</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Join thousands of players who've transformed their game with JumpHi.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
