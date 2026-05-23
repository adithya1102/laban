import { Branch, MenuCategory } from './types';

export const BRANCHES: Branch[] = [
  {
    name: 'Main Lab – Chennai',
    address: 'Chennai, Tamil Nadu, India',
    phone: '+91 91769 17659',
    hours: '10:00 AM - 16:00 PM',
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    category: 'Classic Laban',
    description: 'Traditional chilled, creamy fermented milk drinks.',
    items: [
      {
        id: 'C01',
        name: 'Fresh Plain Laban',
        description: 'Our signature traditional chilled creamy yogurt drink.',
        price_small: 60,
        price_large: 90,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
      {
        id: 'C02',
        name: 'Salty Laban',
        description: 'Classic laban mixed with a pinch of Himalayan pink salt.',
        price_small: 60,
        price_large: 90,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
      {
        id: 'C03',
        name: 'Mint Laban',
        description: 'Refreshing laban blended with fresh mint leaves.',
        price_small: 70,
        price_large: 100,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
    ],
  },
  {
    category: 'Fruit Infused Laban',
    description: 'Sweet and tangy blends of our classic laban and fresh fruit purees.',
    items: [
      {
        id: 'F01',
        name: 'Mango Laban',
        description: 'Laban blended with rich Alphonso mango puree.',
        price_small: 90,
        price_large: 130,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
      {
        id: 'F02',
        name: 'Strawberry Laban',
        description: 'Laban blended with fresh strawberries and a hint of vanilla.',
        price_small: 90,
        price_large: 130,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
      {
        id: 'F03',
        name: 'Pomegranate Laban',
        description: 'Tart and sweet pomegranate juice infused into our creamy laban.',
        price_small: 100,
        price_large: 140,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
      {
        id: 'F04',
        name: 'Rose & Pistachio Laban',
        description:
          'A fragrant blend infused with rose water and topped with crushed pistachios.',
        price_small: 110,
        price_large: 150,
        dietary: ['Vegetarian', 'Gluten-Free', 'Contains Nuts'],
      },
    ],
  },
  {
    category: 'Wellness & Protein Laban',
    description: 'Fortified laban drinks for an extra boost.',
    items: [
      {
        id: 'W01',
        name: '11:11 Energy Laban',
        description: 'Laban blended with dates, oats, and honey.',
        price_small: 120,
        price_large: 160,
        dietary: ['Vegetarian'],
      },
      {
        id: 'W02',
        name: 'Chia Seed Laban',
        description: 'Classic plain laban infused with soaked chia seeds for extra fiber.',
        price_small: 90,
        price_large: 130,
        dietary: ['Vegetarian', 'Gluten-Free'],
      },
    ],
  },
  {
    category: 'Savory Bites & Pastries',
    description: 'Perfect pairings to enjoy with your laban.',
    items: [
      {
        id: 'S01',
        name: "Za'atar Croissant",
        description: 'Flaky, buttery pastry baked with authentic Middle Eastern thyme and sesame.',
        price: 120,
        dietary: ['Vegetarian'],
        image: '/images/combo.jpeg',
      },
      {
        id: 'S02',
        name: 'Cheese Fatayer',
        description: 'Warm, soft savory pastry stuffed with melted Akawi cheese.',
        price: 80,
        dietary: ['Vegetarian'],
      },
      {
        id: 'S03',
        name: 'Spinach Fatayer',
        description: 'Tangy spinach, onion, and sumac filling folded into a soft dough triangle.',
        price: 80,
        dietary: ['Vegan'],
      },
    ],
  },
  {
    category: 'Sweet Treats',
    description: 'A little sweetness to finish.',
    items: [
      {
        id: 'D01',
        name: 'Stuffed Medjool Dates',
        description:
          'Three premium dates stuffed with roasted almonds and coated in dark chocolate.',
        price: 150,
        dietary: ['Vegetarian', 'Gluten-Free', 'Contains Nuts'],
      },
      {
        id: 'D02',
        name: 'Baklava Bites (3 pcs)',
        description: 'Crispy phyllo dough layered with honey and walnuts.',
        price: 130,
        dietary: ['Vegetarian', 'Contains Nuts'],
      },
    ],
  },
];
