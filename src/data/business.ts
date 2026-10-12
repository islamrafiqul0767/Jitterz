// Business Configuration — Jitterz Coffee & Cafe
// VERIFIED INFORMATION — Last updated: 2026

export const business = {
  name: "Jitterz Coffee & Cafe",
  address: "1073 Main St, Dubuque, IA 52001, United States",
  addressShort: "1073 Main St, Dubuque, IA",
  phone: "+1 563-557-3838",
  phoneTel: "+15635573838",
  facebook: "https://www.facebook.com/JitterzDBQ",
  googleMaps: "https://www.google.com/maps/search/?api=1&query=Jitterz+Coffee+%26+Cafe%2C+1073+Main+St%2C+Dubuque%2C+IA+52001",
  tagline: "A Little Main Street Coffee Break.",
  description: "Coffee, espresso drinks, and café favorites in downtown Dubuque.",
  // Verified: Opened May 2007, Owner: Tanya Evans (source: Iowa Secretary of State)
  established: "May 2007",
  owner: "Tanya Evans",
} as const;

// VERIFIED HOURS — Consistent across multiple sources (Restaurantji, Yelp, Travel Dubuque)
export const hours: { day: string; time: string; isClosed?: boolean }[] = [
  { day: "Monday", time: "Closed", isClosed: true },
  { day: "Tuesday", time: "7:00 AM – 1:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 1:00 PM" },
  { day: "Thursday", time: "7:00 AM – 1:00 PM" },
  { day: "Friday", time: "7:00 AM – 1:00 PM" },
  { day: "Saturday", time: "7:00 AM – 12:00 PM" },
  { day: "Sunday", time: "Closed", isClosed: true },
];

// VERIFIED MENU ITEMS — From Restaurantji, public listings, and customer reviews
export const menuCategories = [
  {
    id: "coffee-espresso",
    name: "Coffee & Espresso",
    description: "Freshly brewed classics and hand-crafted espresso drinks.",
    items: [
      { name: "Coffee", note: "Freshly brewed, refill available" },
      { name: "Espresso", note: "" },
      { name: "Latte", note: "Hot or iced" },
      { name: "Cappuccino", note: "" },
      { name: "Americano", note: "" },
      { name: "Mocha", note: "" },
    ],
  },
  {
    id: "tea-chai",
    name: "Tea & Chai",
    description: "Warm, comforting teas and spiced chai.",
    items: [
      { name: "Tea", note: "Selection available" },
      { name: "Chai Latte", note: "" },
      { name: "Hot Chocolate", note: "" },
    ],
  },
  {
    id: "cold-blended",
    name: "Cold & Blended Drinks",
    description: "Cool refreshments for warmer days.",
    items: [
      { name: "Iced Coffee", note: "" },
      { name: "Iced Latte", note: "" },
      { name: "Frappes", note: "" },
      { name: "Smoothies", note: "" },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your morning right — served all day.",
    items: [
      { name: "Breakfast Bagel Sandwiches", note: "Served all day" },
      { name: "Belgian-Style Waffles", note: "Made from scratch" },
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Fresh-baked favorites, made daily by the owner.",
    items: [
      { name: "Croissants", note: "Including spinach feta" },
      { name: "Scones", note: "" },
      { name: "Muffins", note: "Including gluten-free options" },
      { name: "Cinnamon Rolls", note: "" },
      { name: "Cookies", note: "" },
      { name: "Danish Pastries", note: "" },
    ],
  },
  {
    id: "cafe-favorites",
    name: "Café Favorites",
    description: "Savory options and sweet treats.",
    items: [
      { name: "Paninis", note: "" },
      { name: "Soup", note: "" },
      { name: "Ice Cream", note: "" },
    ],
  },
] as const;

export const menuNote = "Menu details and daily availability should be confirmed with the café.";

// Highlights
export const highlights = [
  {
    icon: "coffee",
    title: "Coffee & Espresso",
    description: "Freshly brewed coffee and hand-crafted espresso drinks.",
  },
  {
    icon: "leaf",
    title: "Tea & Chai",
    description: "A warming selection of teas and spiced chai lattes.",
  },
  {
    icon: "croissant",
    title: "Fresh Bakery",
    description: "Homemade pastries baked daily, including gluten-free options.",
  },
  {
    icon: "glass",
    title: "Cold Drinks",
    description: "Iced coffee, frappes, and smoothies.",
  },
] as const;

// Reviews — VERIFIED from Restaurantji (4.9/5, 178 reviews) and Yelp (4.5/5, 101 reviews)
export const reviewData = {
  restaurantji: {
    rating: 4.9,
    count: 178,
    url: "https://www.restaurantji.com/ia/dubuque/jitterz-coffee-and-cafe-/",
    subRatings: {
      food: 4.8,
      atmosphere: 4.8,
      service: 4.9,
    },
  },
  yelp: {
    rating: 4.5,
    count: 101,
    url: "https://www.yelp.com/biz/jitterz-coffee-and-cafe-dubuque",
  },
  tripadvisor: {
    rating: 4.2,
    url: "https://www.tripadvisor.com/Restaurant_Review-g37853-d2183399-Reviews-Jitterz_Coffee_Cafe-Dubuque_Iowa.html",
  },
};

// Review themes — Based on actual customer feedback
export const reviewThemes = [
  {
    theme: "Exceptional Coffee",
    description: "Customers consistently praise the quality of coffee and espresso drinks, with many calling it the best in Dubuque.",
    icon: "coffee",
  },
  {
    theme: "Homemade Pastries",
    description: "All pastries are made from scratch by the owner, including the famous spinach feta croissant and gluten-free muffins.",
    icon: "croissant",
  },
  {
    theme: "Friendly Service",
    description: "Staff are described as kind, helpful, and welcoming. Many reviewers mention being greeted with a smile.",
    icon: "heart",
  },
  {
    theme: "Cozy Atmosphere",
    description: "The café features rustic-chic decor with a vintage bicycle, gumball machine, and comfortable seating areas.",
    icon: "home",
  },
  {
    theme: "Great for Working",
    description: "Perfect spot for studying or working with varied seating options, including 1-2 person tables and big windows.",
    icon: "book",
  },
  {
    theme: "Community Favorite",
    description: "A beloved Main Street staple that continues to be a favorite spot in the Dubuque community.",
    icon: "users",
  },
] as const;

// Sample review excerpts — Short, attributed summaries (not full reviews)
export const reviewExcerpts = [
  {
    text: "Great prices, great coffee.",
    source: "Restaurantji",
    date: "September 2026",
  },
  {
    text: "Best cappuccino on the planet. The planet. Love this place.",
    source: "Restaurantji",
    date: "July 2026",
  },
  {
    text: "I was greeted with a smile and a friendly 'good morning' on entering Jitterz. The place is warm and comfortable, and the service is excellent.",
    source: "Restaurantji",
    date: "June 2026",
  },
];

// Image assets — Generated concept imagery with tracking
export const images = {
  hero: "https://image.qwenlm.ai/generated-images/f57237ab-1b27-4acb-a85e-c01c3bd1d261/_result.png",
  interior: "https://image.qwenlm.ai/generated-images/1a35b0e9-8aa1-4339-a436-3c23c64f66cf/_result.png",
  bakery: "https://image.qwenlm.ai/generated-images/1921753f-6040-454a-bffb-2e99301a9572/_result.png",
  espresso: "https://image.qwenlm.ai/generated-images/8969df81-5e74-4ee7-9ca9-2b03b13f00b0/_result.png",
  breakfast: "https://image.qwenlm.ai/generated-images/fa46825a-b7fa-4816-8d51-ced578f6e2e3/_result.png",
  cinnamonRolls: "https://image.qwenlm.ai/generated-images/de8f9560-846b-4b6f-b4ab-8fd60fd33717/_result.png",
  icedCoffee: "https://image.qwenlm.ai/generated-images/df3ba593-2450-4081-9a39-4457e85f0816/_result.png",
  storefront: "https://image.qwenlm.ai/generated-images/b8bbff3c-e67b-44c9-bf5f-813034e2d8a1/_result.png",
  coffeeBeans: "https://image.qwenlm.ai/generated-images/ec4f852a-ce96-46eb-8117-2c831bd4fc09/_result.png",
  atmosphere: "https://image.qwenlm.ai/generated-images/a66b32fa-856e-4065-86a2-18b78f338f16/_result.png",
} as const;

export const imageDisclaimer = "Concept imagery — illustrative café photography, not photographs of the actual Jitterz location.";
