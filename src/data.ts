import { MenuItem, Branch } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'salankatya',
    name: 'SALANKATYA',
    arabicName: 'سالانكاتيا',
    price: 350,
    description: 'Crispy pistachio-crust cream cans filled with premium organic clotted cream, resting on a base of pistachio infused cream cake with fresh berry glaze.',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    popular: true
  },
  {
    id: 'ambalyh',
    name: 'AMBALYH',
    arabicName: 'أمباليه',
    price: 290,
    description: 'Signature sphere cake enclosing a cold core of premium slow-churned vanilla cream, layered with rich milk-soaked biscuit sponge and glazed with a majestic blue-marble mirror wrap.',
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&auto=format&fit=crop&q=80',
    badge: 'Signature',
    popular: true
  },
  {
    id: 'kunafa-bowl',
    name: 'KUNAFA BOWL',
    arabicName: 'قنبلة كنافة',
    price: 380,
    description: 'Warm, golden, butter-crisp kunafa strands layered with authentic melting sweetened Akawi and Mozzarella cheese bowl, topped with ground Turkish pistachios and fragrant orange-blossom syrup.',
    category: 'kunafa',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&auto=format&fit=crop&q=80',
    badge: 'Chef Special',
    popular: true
  },
  {
    id: 'cheese-bomb',
    name: 'CHEESE BOMB',
    arabicName: 'تشيز بومب',
    price: 320,
    description: 'A decadent golden puff pastry pocket baked to crisp perfection, loaded with a secret molten sweetened double cheese combination that oozes magnificently upon a cross-section cut.',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=80',
    badge: 'Premium',
    popular: false
  },
  {
    id: 'heba-cake',
    name: 'HEBA CAKE',
    arabicName: 'هبة كيك',
    price: 240,
    description: 'Elegant multilayered gateau featuring clouds of fluffy whipped cream, velvety light chocolate frosting mousse layers, and fine dark cocoa sprinkles.',
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop&q=80',
    badge: 'Trending',
    popular: false
  },
  {
    id: 'scoop-cookies',
    name: 'SCOOP COOKIES',
    arabicName: 'سكوب كوكيز',
    price: 180,
    description: 'Trio of freshly baked, warm, gooey double chocolate chip cookies nested in a hot cup, served with two colossal scoops of vanilla bean ice cream and premium dark chocolate syrup cascade.',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&auto=format&fit=crop&q=80',
    badge: 'Hot & Cold',
    popular: true
  },
  {
    id: 'qashtouha',
    name: 'QASHTOUHA',
    arabicName: 'قشطوحة',
    price: 190,
    description: 'Fluffy vanilla light cake drenched inside sweet organic milk, topped with a thick slab of fresh traditional Egyptian clotted cream (Qashta) and generous hand-crushed whole golden pistachios.',
    category: 'cake',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop&q=80',
    badge: 'Traditional',
    popular: false
  },
  {
    id: 'laban-koshary',
    name: 'SWEET KOSHARY',
    arabicName: 'كشري بلبن',
    price: 220,
    description: 'A playful high-energy dessert mimicking a koshary bowl! Layers of cold sweet rice pudding (the rice), fresh crumbles of crispy toasted kunafa and golden baklawa layers (the noodles & onions), and a rich cream drizzle with sweet heavy chocolate fudge sauce.',
    category: 'rice-pudding',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&auto=format&fit=crop&q=80',
    badge: 'Viral Special',
    popular: true
  },
  {
    id: 'pistachio-konafa',
    name: 'PISTACHIO RICE PUDDING',
    arabicName: 'أرز باللبن فستق',
    price: 150,
    description: 'Velvety slow-cooked sweet milk rice pudding, topped with premium green Sicilian pistachio cream butter, layered with a crisp toasted crunch of golden kunafa nest.',
    category: 'rice-pudding',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=80',
    badge: 'Classic',
    popular: false
  }
];

export const BRANCHES: Branch[] = [
  {
    name: 'Central Lab – Cairo Heliopolis',
    address: '45 El-Nozha Street, Heliopolis, Cairo, Egypt',
    phone: '+20 114 111 1000',
    hours: '10:00 AM - 16:00 PM'
  },
  {
    name: 'Laban Express – New Cairo',
    address: 'Waterway Mall, Ground Level, New Cairo, Egypt',
    phone: '+20 114 111 1001',
    hours: '10:00 AM - 16:00 PM'
  },
  {
    name: 'Coastal Lab – Alexandria',
    address: 'Corniche Road, Stanly, Alexandria, Egypt',
    phone: '+20 114 111 1002',
    hours: '10:00 AM - 16:00 PM'
  }
];

export const TOPPINGS = [
  { id: 'pistachio', name: 'Premium Crushed Pistachio', price: 30, arabic: 'فستق مطحون' },
  { id: 'qashta', name: 'Fresh Egyptian Qashta Cream', price: 40, arabic: 'قشطة بلدي' },
  { id: 'lotus', name: 'Warm Lotus Biscuit Sauce', price: 25, arabic: 'صوص لوتس' },
  { id: 'honey', name: 'Pure Clover Honey Cascade', price: 20, arabic: 'عسل نحل' },
  { id: 'nuts', name: 'Toasted Almonds & Cashews Mix', price: 35, arabic: 'مكسرات محمصة' },
  { id: 'icecream', name: 'Gigantic Vanilla Ice Cream Scoop', price: 30, arabic: 'بوله أيس كريم' }
];

export const BASES = [
  { id: 'rice-pudding', name: 'Rich Dairy Rice Pudding Base', price: 60, arabic: 'أرز باللبن' },
  { id: 'soaked-cake', name: 'Double Soaked Milk Sponge Cake Base', price: 70, arabic: 'كيكة حليب' },
  { id: 'warm-kunafa', name: 'Butter Toasted Golden Kunafa Base', price: 80, arabic: 'كنافة محمصة' }
];
