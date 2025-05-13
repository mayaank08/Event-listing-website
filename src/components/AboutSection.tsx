
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Sydney Events</h2>
            <div className="space-y-4">
              <p>
                Sydney Events is your comprehensive guide to what's happening in Australia's most vibrant city. We automatically collect and update events from various sources across Sydney to bring you the most complete listing available.
              </p>
              <p>
                Our platform is designed to help locals and tourists alike discover exciting activities, cultural experiences, and entertainment options throughout the city. From the iconic Sydney Opera House to small neighborhood venues, we cover it all.
              </p>
              <p>
                All events are verified and updated regularly to ensure you have access to accurate information. We partner with event organizers and venues to provide you with exclusive offers and seamless ticket purchasing.
              </p>
              <div className="pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?q=80&w=1000&auto=format&fit=crop" 
                alt="Sydney Harbour" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg bg-accent/80 hidden lg:block"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-lg border-2 border-primary/30 hidden lg:block"></div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-primary text-4xl font-bold mb-2">150+</div>
            <h3 className="text-xl font-medium">Events Listed Monthly</h3>
            <p className="text-gray-600 mt-2">We update our listings daily with new events happening around Sydney.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-primary text-4xl font-bold mb-2">50+</div>
            <h3 className="text-xl font-medium">Venues Partnered</h3>
            <p className="text-gray-600 mt-2">From major arenas to intimate local venues across the city.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-primary text-4xl font-bold mb-2">10k+</div>
            <h3 className="text-xl font-medium">Happy Attendees</h3>
            <p className="text-gray-600 mt-2">Visitors who found and enjoyed events through our platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
