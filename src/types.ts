export interface MenuItem {
  id: string;
  name: string;
  arabicName: string;
  price: number;
  description: string;
  category: 'special' | 'rice-pudding' | 'cake' | 'kunafa' | 'beverages';
  image: string;
  badge?: string;
  popular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedToppings?: string[];
}

export interface TableBooking {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  zone: 'indoor' | 'terrace' | 'lounge';
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  hours: string;
}
