import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Ellie Jordan Llamas",
    role: "Family User",
    date: "February, 2021",
    title: "Family Friendly!",
    text: "Fantastic app that was created for the entire family. Couldn't have asked for a better exercise app that was made with all family members in mind. Whether it's mom or dad that want to get a workout in while the kids are napping or would like your kids to engage in physical activity during their Distance Learning school schedule. I really appreciate the thought process behind this idea... #family"
  },
  {
    name: "ChrisMatthews_",
    role: "Vertical Jump Training",
    date: "July, 2021",
    title: "Easily 10/10",
    text: "At first I wasn't too sure if it would help me on my vertical but I gave it a try and was surprised by the results. They have workout plans and times to remind you to do it so you actually will do your workout. Also the layout on this app is simple and easy to learn. I never do reviews so when I do I really like the app."
  },
  {
    name: "skylie willis",
    role: "Fitness & Conditioning",
    date: "October, 2024", 
    title: "perfect 10/10",
    text: "I downloaded this app to keep up with conditioning and my overall personal fitness and this app allows me to do just that. The workouts and information on this app is super useful and important information to know. I 100% recommend downloading this app!!"
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
      className="bg-muted rounded-xl p-6"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-white overflow-hidden">
          {testimonial.name[0]}
        </div>
        <div className="ml-4">
          <h3 className="font-heading font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-300">{testimonial.role}</p>
          <p className="text-xs text-gray-400">{testimonial.date}</p>
        </div>
      </div>

      <h4 className="font-semibold text-white mb-2">{testimonial.title}</h4>
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
    <section id="testimonials" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Real User Reviews</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            See what players, families, and athletes are saying about JumpHi.
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
