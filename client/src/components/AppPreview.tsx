import { CheckIcon } from "lucide-react";

export default function AppPreview() {
  const checkItems = [
    {
      title: "Skill-Based Training",
      description: "Focus on shooting, dribbling, conditioning, agility, defense, or full training programs."
    },
    {
      title: "Get Motivated",
      description: "Receive daily motivational quotes to keep you inspired."
    },
    {
      title: "Daily Progress",
      description: "Track your improvement with daily logs and performance insights to see your growth."
    }
  ];

  return (
    <section id="training" className="pt-10 pb-20 bg-gradient-to-b from-[#0d1338] to-[#070B34]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Complete Training System In Your Pocket
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 order-1 lg:order-1 flex justify-center mb-12 lg:mb-0">
            <div className="max-w-md">
              <h3 className="text-2xl font-heading font-bold mb-4 text-white text-center">
                Train Smarter, Not Harder
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                Access professional-grade basketball training plans designed to improve your skills at any level.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0">
            <div className="max-w-lg mx-auto lg:ml-0">
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
        </div>
      </div>
    </section>
  );
}
