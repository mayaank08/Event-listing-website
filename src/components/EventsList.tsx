
import { useState } from "react";
import { events, getCategories } from "@/data/events";
import EventCard from "./EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const EventsList = () => {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  
  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = !selectedDate || event.date === format(selectedDate, "yyyy-MM-dd");
    
    return matchesCategory && matchesSearch && matchesDate;
  });

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events in Sydney</h2>
        
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-8">
          {/* Search input */}
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
          {/* Date picker */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
              />
              {selectedDate && (
                <div className="flex justify-end p-2 border-t">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedDate(undefined)}
                  >
                    Clear
                  </Button>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>
        
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Event cards */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <CalendarIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-xl font-semibold text-gray-900">No events found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter to find events.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsList;
