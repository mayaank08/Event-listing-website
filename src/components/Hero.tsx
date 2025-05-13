
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="mb-4 font-bold text-gray-900">
            Discover Sydney's Best Events
          </h1>
          <p className="mx-auto mb-8 text-xl text-gray-600 max-w-2xl">
            Find and explore the latest events happening in Sydney. From concerts and festivals to workshops and exhibitions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background pattern - decorative dots */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-200"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 hidden lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-200"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
