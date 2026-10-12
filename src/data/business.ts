// Business Configuration — Jitterz Coffee & Cafe
// All editable business details in one place.

export const business = {
  name: "Jitterz Coffee & Cafe",
  address: "1073 Main St, Dubuque, IA 52001, United States",
  addressShort: "1073 Main St, Dubuque, IA",
  phone: "+1 563-557-3838",
  phoneTel: "+15635573838",
  facebook: "https://www.facebook.com/JitterzDBQ",
  googleMaps: "https://www.google.com/maps?q=42.502984,-90.6684948",
  tagline: "A Little Main Street Coffee Break.",
  description: "Coffee, espresso drinks, and café favorites in downtown Dubuque.",
} as const;

// Draft hours — NOT confirmed. Must be verified with the owner before launch.
export const draftHoursNotice = "Draft hours — please confirm with the owner before launch.";

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
    description: "Freshly brewed classics and espresso-based drinks.",
    items: [
      { name: "Coffee", note: "Freshly brewed" },
      { name: "Espresso", note: "" },
      { name: "Latte", note: "" },
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
      { name: "Frappes", note: "" },
      { name: "Smoothies", note: "" },
      { name: "Iced Coffee", note: "" },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your morning right.",
    items: [
      { name: "Breakfast Bagel Sandwiches", note: "" },
    ],
  },
  {
    id: "bakery",
    name: "Bakery",
    description: "Fresh-baked favorites, made daily.",
    items: [
      { name: "Scones", note: "" },
      { name: "Muffins", note: "" },
      { name: "Croissants", note: "" },
      { name: "Cinnamon Rolls", note: "" },
      { name: "Cookies", note: "" },
      { name: "Danish Pastries", note: "" },
    ],
  },
  {
    id: "cafe-favorites",
    name: "Café Favorites",
    description: "Savory options for midday.",
    items: [
      { name: "Paninis", note: "" },
      { name: "Soup", note: "" },
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
    title: "Breakfast & Bakery",
    description: "Bagel sandwiches, scones, muffins, croissants, and more.",
  },
  {
    icon: "glass",
    title: "Smoothies & Frappes",
    description: "Cold blended drinks for a refreshing treat.",
  },
] as const;

// Image assets — concept imagery, NOT photographs of the actual business
export const images = {
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&h=900&fit=crop&q=80",
  heroFallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1400&h=900&fit=crop&q=80",
  espresso: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&h=600&fit=crop&q=80",
  icedCoffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop&q=80",
  bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop&q=80",
  cinnamonRolls: "https://images.unsplash.com/photo-1509365465985-25d11c17a829?w=800&h=600&fit=crop&q=80",
  breakfast: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800&h=600&fit=crop&q=80",
  interior: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop&q=80",
  interiorAlt: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=1000&fit=crop&q=80",
  storefront: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop&q=80",
  coffeeBeans: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop&q=80",
  latteArt: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&h=600&fit=crop&q=80",
  gallery1: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop&q=80",
  gallery2: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&q=80",
  gallery3: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=600&fit=crop&q=80",
  gallery4: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=800&fit=crop&q=80",
  gallery5: "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=400&fit=crop&q=80",
  gallery6: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=600&fit=crop&q=80",
} as const;

export const imageDisclaimer = "Concept imagery — illustrative café photography, not photographs of the actual Jitterz location.";
