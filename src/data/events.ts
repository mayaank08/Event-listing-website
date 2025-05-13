
export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  price: string;
  ticketUrl: string;
}

// Sample data to simulate scraped events
export const events: Event[] = [
  {
    id: '1',
    title: 'Sydney Harbour Festival',
    date: '2025-06-15',
    time: '18:00',
    location: 'Sydney Opera House',
    description: 'A spectacular celebration of art, music and culture at the iconic Sydney Opera House with performances from leading Australian artists.',
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1000&auto=format&fit=crop',
    category: 'Festival',
    price: '$49.99',
    ticketUrl: 'https://example.com/tickets/sydney-harbour-festival'
  },
  {
    id: '2',
    title: 'Australian Food & Wine Expo',
    date: '2025-06-20',
    time: '10:00',
    location: 'International Convention Centre',
    description: 'Experience the best of Australian cuisine and wines from across the country. Meet top chefs and winemakers in this premier gastronomic event.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop',
    category: 'Food & Drink',
    price: '$35.00',
    ticketUrl: 'https://example.com/tickets/food-wine-expo'
  },
  {
    id: '3',
    title: 'Sydney Marathon',
    date: '2025-07-02',
    time: '06:30',
    location: 'Sydney Harbour Bridge',
    description: 'Join thousands of runners in Australia\'s largest marathon. Experience Sydney\'s iconic landmarks as you race through the heart of the city.',
    image: 'https://images.unsplash.com/photo-1576019644535-0c7bad5313fa?q=80&w=1000&auto=format&fit=crop',
    category: 'Sports',
    price: '$89.00',
    ticketUrl: 'https://example.com/tickets/sydney-marathon'
  },
  {
    id: '4',
    title: 'Vivid Sydney Light Festival',
    date: '2025-07-10',
    time: '19:30',
    location: 'Circular Quay',
    description: 'Australia\'s largest light festival transforms Sydney into a wonderland of light art sculptures, grand light projections and cutting-edge music performances.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
    category: 'Arts & Culture',
    price: 'Free',
    ticketUrl: 'https://example.com/tickets/vivid-sydney'
  },
  {
    id: '5',
    title: 'Sydney Tech Conference',
    date: '2025-07-15',
    time: '09:00',
    location: 'Sydney Technology Park',
    description: 'Connect with industry leaders, startups, and innovators at Australia\'s premier technology conference focusing on AI, blockchain, and future tech.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop',
    category: 'Technology',
    price: '$125.00',
    ticketUrl: 'https://example.com/tickets/tech-conference'
  },
  {
    id: '6',
    title: 'Bondi Beach Music Festival',
    date: '2025-07-25',
    time: '14:00',
    location: 'Bondi Beach',
    description: 'A day of live music performances at Sydney\'s most famous beach. Featuring top Australian bands and international guest artists.',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1000&auto=format&fit=crop',
    category: 'Music',
    price: '$65.50',
    ticketUrl: 'https://example.com/tickets/bondi-music-festival'
  },
  {
    id: '7',
    title: 'Sydney Film Festival',
    date: '2025-08-05',
    time: '19:00',
    location: 'State Theatre',
    description: 'Australia\'s leading international film festival, presenting the best in cinema from around the world, including feature films, documentaries, and short films.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1000&auto=format&fit=crop',
    category: 'Film',
    price: '$22.00',
    ticketUrl: 'https://example.com/tickets/film-festival'
  },
  {
    id: '8',
    title: 'Sydney Home & Garden Show',
    date: '2025-08-12',
    time: '10:00',
    location: 'Royal Exhibition Building',
    description: 'Discover the latest trends in home design, decoration, landscaping and sustainable living with hundreds of exhibitors and expert demonstrations.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1000&auto=format&fit=crop',
    category: 'Lifestyle',
    price: '$18.50',
    ticketUrl: 'https://example.com/tickets/home-garden-show'
  },
  {
    id: '9',
    title: 'Sydney Comedy Festival',
    date: '2025-08-20',
    time: '20:00',
    location: 'Enmore Theatre',
    description: 'Laugh until you cry with performances from the best local and international comedians across various venues in Sydney.',
    image: 'https://images.unsplash.com/photo-1527224538127-2104bb71c51c?q=80&w=1000&auto=format&fit=crop',
    category: 'Comedy',
    price: '$45.00',
    ticketUrl: 'https://example.com/tickets/comedy-festival'
  },
  {
    id: '10',
    title: 'Sydney Craft Beer Festival',
    date: '2025-08-25',
    time: '12:00',
    location: 'Australian Technology Park',
    description: 'Sample innovative craft beers from over 60 independent breweries from Australia and around the world, paired with gourmet street food.',
    image: 'https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?q=80&w=1000&auto=format&fit=crop',
    category: 'Food & Drink',
    price: '$42.00',
    ticketUrl: 'https://example.com/tickets/craft-beer-festival'
  }
];

// Get unique categories from events
export const getCategories = (): string[] => {
  const categories = events.map(event => event.category);
  return ['All', ...Array.from(new Set(categories))];
};
