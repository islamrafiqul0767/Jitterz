// Business Configuration — Jitterz Coffee & Cafe
// All editable business details in one place.

export const business = {
  name: "Jitterz Coffee & Cafe",
  address: "1073 Main St, Dubuque, IA 52001, United States",
  phone: "+1 563-557-3838",
  phoneTel: "+15635573838",
  facebook: "https://www.facebook.com/JitterzDBQ",
  googleMaps: "https://www.google.com/maps?q=42.502984,-90.6684948",
  tagline: "A Little Main Street Coffee Break.",
  description:
    "Coffee, espresso drinks, and café favorites in downtown Dubuque.",
} as const;

// Draft hours — NOT confirmed. Must be verified with the owner before launch.
export const draftHoursNotice =
  "Draft hours — please confirm with the owner before launch.";

export const hours: { day: string; time: string }[] = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday", time: "7:00 AM – 1:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 1:00 PM" },
  { day: "Thursday", time: "7:00 AM – 1:00 PM" },
  { day: "Friday", time: "7:00 AM – 1:00 PM" },
  { day: "Saturday", time: "7:00 AM – 12:00 PM" },
  { day: "Sunday", time: "Closed" },
];

// Menu — only items supported by public listings. No prices, no invented items.
export const menuCategories = [
  {
    id: "coffee-espresso",
    name: "Coffee & Espresso",
    items: ["Coffee", "Espresso", "Latte", "Cappuccino", "Americano", "Mocha"],
  },
  {
    id: "tea-chai",
    name: "Tea & Chai",
    items: ["Tea", "Chai Latte", "Hot Chocolate"],
  },
  {
    id: "cold-blended",
    name: "Cold & Blended Drinks",
    items: ["Frappes", "Smoothies", "Iced Coffee"],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    items: ["Breakfast Bagel Sandwiches"],
  },
  {
    id: "bakery",
    name: "Bakery",
    items: [
      "Scones",
      "Muffins",
      "Croissants",
      "Cinnamon Rolls",
      "Cookies",
      "Danish Pastries",
    ],
  },
  {
    id: "cafe-favorites",
    name: "Café Favorites",
    items: ["Paninis", "Soup"],
  },
] as const;

export const menuNote =
  "Menu details and daily availability should be confirmed with the café.";

// Highlights
export const highlights = [
  {
    icon: "coffee",
    title: "Coffee & Espresso",
    description: "Freshly brewed coffee and espresso drinks to start your day.",
  },
  {
    icon: "leaf",
    title: "Tea & Chai",
    description: "A selection of teas and warm chai lattes.",
  },
  {
    icon: "croissant",
    title: "Breakfast & Bakery",
    description: "Bagel sandwiches, scones, muffins, croissants, and more.",
  },
  {
    icon: "glass",
    title: "Smoothies & Frappes",
    description: "Cold blended drinks for a refreshing treat.",
  },
] as const;
