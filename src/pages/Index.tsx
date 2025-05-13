
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsList from "@/components/EventsList";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <EventsList />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
