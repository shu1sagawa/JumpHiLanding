import { CheckIcon, TimerIcon, Flame } from "lucide-react";

export default function AppPreview() {
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
          <div className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Complete Training System In Your Pocket
              </h2>
              
              <div className="space-y-6">
                {checkItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-accent rounded-full p-1 mt-1">
                      <CheckIcon className="text-white h-4 w-4" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-heading font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="#download" 
                className="inline-block mt-8 bg-gradient-to-r from-[#DC60EC] to-[#3b82f6] hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105"
              >
                Start Training Now
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 md:w-72 rounded-3xl shadow-xl border-8 border-accent/30 h-[450px] bg-gray-800 flex items-center justify-center overflow-hidden">
                <video 
                  src="/videos/app-preview.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg z-10">
                <div className="flex items-center">
                  <Flame className="text-red-500 h-5 w-5" />
                  <div className="ml-3">
                    <p className="text-dark font-bold text-sm">7-day streak!</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-lg z-10">
                <div className="flex items-center">
                  <TimerIcon className="text-primary h-5 w-5" />
                  <div className="ml-3">
                    <p className="text-dark font-bold text-sm">35 min workout</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
