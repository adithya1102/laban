export interface Branch {
  name: string;
  address: string;
  phone: string;
  hours: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price_small?: number;
  price_large?: number;
  price?: number;
  dietary?: string[];
  image?: string;
}

export interface MenuCategory {
  category: string;
  description: string;
  items: MenuItem[];
}
