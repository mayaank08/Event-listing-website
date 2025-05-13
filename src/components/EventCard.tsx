
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { Event } from "@/data/events";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      
      toast({
        title: "Thank you for your interest!",
        description: "You'll be redirected to the ticket page.",
      });
      
      // Redirect to ticket URL
      window.open(event.ticketUrl, "_blank");
    }, 1000);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-accent text-white text-xs font-medium px-2 py-1 rounded">
          {event.category}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarIcon className="mr-1 h-3 w-3" />
          <span>{formatDate(event.date)} at {event.time}</span>
        </div>
        <h3 className="text-lg font-semibold line-clamp-2 mb-1">{event.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
        <p className="text-sm line-clamp-3 mb-2">{event.description}</p>
        <div className="text-sm font-medium">{event.price}</div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white">
              Get Tickets
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Get Tickets for {event.title}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="consent" 
                  className="w-4 h-4"
                  required
                />
                <Label htmlFor="consent" className="text-sm">
                  I agree to receive updates about upcoming events
                </Label>
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  {isSubmitting ? "Processing..." : "Continue to Tickets"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
