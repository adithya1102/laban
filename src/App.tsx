import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Clock, 
  AlertCircle, 
  Check, 
  Info, 
  Plus, 
  Star, 
  Heart, 
  ArrowRight,
  Maximize2,
  Sliders,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  X
} from 'lucide-react';

import { MENU_ITEMS, BRANCHES, TOPPINGS } from './data';
import { CartItem, MenuItem } from './types';
import { LabanLogo } from './components/LabanLogo';
import { MainHeader } from './components/MainHeader';
import { ReservationModal } from './components/ReservationModal';
import { DessertSelector } from './components/DessertSelector';
import { OrderProgress } from './components/OrderProgress';
import { AboutUs } from './components/AboutUs';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isReservationsOpen, setIsReservationsOpen] = useState(false);
  
  // Detail Modal State
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [productDetailToppings, setProductDetailToppings] = useState<string[]>([]);

  // Simulation State
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [activeOrderId, setActiveOrderId] = useState('');
  const [activeOrderTotal, setActiveOrderTotal] = useState(0);

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  // Cart Management
  const handleAddToCart = (menuItem: MenuItem, toppings: string[] = []) => {
    setCart((prevCart) => {
      // For general items, check if already in cart
      const existingIndex = prevCart.findIndex(
        (item) => item.menuItem.id === menuItem.id && JSON.stringify(item.selectedToppings) === JSON.stringify(toppings)
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }

      return [...prevCart, { menuItem, quantity: 1, selectedToppings: toppings }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.menuItem.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: Math.max(newQty, 1) };
        }
        return item;
      });
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.menuItem.id !== id));
  };

  // Add Custom Bowl directly
  const handleAddNewCustomBowl = (customCartItem: CartItem) => {
    setCart((prevCart) => [...prevCart, customCartItem]);
  };

  // Place Order Action
  const handleCheckout = () => {
    if (cart.length === 0) return;
    const subtotal = cart.reduce((acc, curr) => acc + (curr.menuItem.price * curr.quantity), 0);
    
    // Generate an experimental tracking order code
    const code = `LABAN-CHEM-${Math.floor(Math.random() * 900000) + 100000}`;
    setActiveOrderId(code);
    setActiveOrderTotal(subtotal);
    setIsOrderTrackerOpen(true);
    
    // Reset Cart Tray after order synthesis begins
    setCart([]);
  };

  // Toggle detail toppings
  const handleDetailToppingToggle = (id: string) => {
    if (productDetailToppings.includes(id)) {
      setProductDetailToppings(productDetailToppings.filter(t => t !== id));
    } else {
      setProductDetailToppings([...productDetailToppings, id]);
    }
  };

  // Add from Detail Modal
  const handleAddFromDetailModal = () => {
    if (!selectedProduct) return;
    
    // Calculate final price with selected extras
    const extrasCost = productDetailToppings.reduce((total, id) => {
      const topping = TOPPINGS.find(t => t.id === id);
      return total + (topping ? topping.price : 0);
    }, 0);

    const extraNames = productDetailToppings
      .map(id => TOPPINGS.find(t => t.id === id)?.name)
      .join(', ');

    const finalItem: MenuItem = {
      ...selectedProduct,
      price: selectedProduct.price + extrasCost,
      description: extrasCost > 0 
        ? `${selectedProduct.description} (Extras: ${extraNames})`
        : selectedProduct.description
    };

    handleAddToCart(finalItem, productDetailToppings);
    setSelectedProduct(null);
    setProductDetailToppings([]);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans relative overflow-x-hidden" id="laban-app-viewport">
      
      {/* ----------------- ARTISANAL MARGIN DOODLES (MATCHING SCREENSHOT) ----------------- */}
      {/* Absolute floating vectors on large screens to capture the magical hand-drawn dessert feel */}
      
      {/* Left Column Doodles */}
      <div className="hidden xl:block fixed left-4 top-1/4 space-y-24 z-0 pointer-events-none opacity-40">
        {/* Blue squiggle wave */}
        <div className="text-laban-blue animate-bounce" style={{ animationDuration: '4s' }}>
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <path d="M 10 50 C 30 20, 40 80, 60 50 C 80 20, 90 80, 100 50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
        {/* Gold spiral swirl */}
        <div className="text-laban-yellow animate-spin-slow">
          <svg className="w-20 h-20" viewBox="0 0 100 100">
            <path d="M 50,50 A 10,10 0 0,0 40,40 A 20,20 0 0,0 60,60 A 30,30 0 0,0 30,30 A 40,40 0 0,0 70,70" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Light blue rings */}
        <div className="text-sky-300">
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="10 5" />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Right Column Doodles */}
      <div className="hidden xl:block fixed right-4 top-1/4 space-y-24 z-0 pointer-events-none opacity-40 text-right">
        {/* Gold spiral swirl */}
        <div className="text-laban-yellow animate-spin-slow" style={{ animationDirection: 'reverse' }}>
          <svg className="w-20 h-20 ml-auto" viewBox="0 0 100 100">
            <path d="M 50,50 A 10,10 0 0,0 40,40 A 20,20 0 0,0 60,60 A 30,30 0 0,0 30,30 A 40,40 0 0,0 70,70" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Blue loop wave */}
        <div className="text-laban-blue animate-bounce" style={{ animationDuration: '6s' }}>
          <svg className="w-16 h-16 ml-auto" viewBox="0 0 100 100">
            <path d="M 10 50 Q 30 90, 50 10 T 90 50" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
        {/* Gold double arcs */}
        <div className="text-amber-300">
          <svg className="w-16 h-16 ml-auto" viewBox="0 0 100 100">
            <path d="M 20,80 A 40,40 0 0,1 80,80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            <path d="M 30,80 A 25,25 0 0,1 70,80" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
      </div>

      {/* ----------------- CORE HEADER NAVIGATION ----------------- */}
      <MainHeader 
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onOpenReservations={() => setIsReservationsOpen(true)}
      />

      {/* ----------------- MAIN HERO BANNER (MATCHING SCREENSHOT INJECTS) ----------------- */}
      <section id="hero-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 z-10">
        <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white lg:border-8 md:aspect-[21/9] bg-slate-900 flex items-center justify-center text-center">
          
          {/* Main stunning photo of signature plate banner */}
          <img 
            src="https://images.unsplash.com/photo-1558961313-00f62986d8fc?w=1600&auto=format&fit=crop&q=80" 
            alt="11:11 Laban Indulgence" 
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-75 object-center animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

          {/* Floating halo SVG in hero center */}
          <div className="absolute top-10 self-center opacity-30 animate-pulse">
            <svg viewBox="0 0 200 80" className="w-40 h-20">
              <ellipse cx="100" cy="40" rx="80" ry="20" fill="none" stroke="#fccf3a" strokeWidth="6" />
            </svg>
          </div>

          <div className="relative p-8 md:p-12 lg:p-20 max-w-4xl space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none drop-shadow-md">
              INDULGE IN PERFECTIONS
            </h2>
            <p className="font-display tracking-wide text-white/95 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto">
              Discover the art of curated desserts at <span className="text-laban-yellow font-bold uppercase underline decoration-2 decoration-laban-blue">11:11 Laban</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <button 
                onClick={() => setIsReservationsOpen(true)}
                className="w-full sm:w-auto bg-laban-yellow hover:bg-amber-400 text-slate-900 font-display text-base font-bold uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                BOOK A TABLE
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('customizer-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm font-display text-base font-bold uppercase tracking-wider px-8 py-4 rounded-2xl transition-all active:scale-95 cursor-pointer"
              >
                InVENT BOWL
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- CORE MENU GRID CONTAINER ----------------- */}
      <section id="menu-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 pb-6 border-b border-dashed border-slate-200">
          <div>
            <h2 className="font-display text-3xl font-black text-slate-900 leading-none">THE CRAVE FORMULAS</h2>
            <p className="text-slate-500 text-xs font-sans mt-1">Select from our peerless clotted cream recipes shown in the original lab register</p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', name: 'ALL LAB FLAVORS' },
              { id: 'special', name: 'SPECIALS' },
              { id: 'cake', name: 'CAKES' },
              { id: 'kunafa', name: 'KUNAFAS' },
              { id: 'rice-pudding', name: 'RICE PUDDING' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-display tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-laban-blue text-white shadow-md shadow-blue-500/20 transform scale-[1.03]'
                    : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Recipe Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            return (
              <div 
                key={item.id} 
                className="bg-white rounded-[32px] overflow-hidden border-2 border-slate-100 hover:border-laban-blue hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
                id={`recipe-card-${item.id}`}
              >
                {/* Product visual area */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Absolute tags */}
                  {item.badge && (
                    <span className="absolute top-4 left-4 bg-laban-yellow text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white shadow-sm font-sans">
                      {item.badge}
                    </span>
                  )}
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-white/95 text-laban-blue p-2 rounded-full border border-slate-100 shadow-sm">
                      <Heart className="w-4 h-4 fill-laban-blue text-laban-blue" />
                    </div>
                  )}

                  {/* Hover Quick Action Indicator Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => {
                        setSelectedProduct(item);
                        setProductDetailToppings([]);
                      }}
                      className="bg-white text-slate-950 px-5 py-3 rounded-2xl font-display text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4 text-laban-blue" />
                      VIEW FORMULA DETAILS
                    </button>
                  </div>
                </div>

                {/* Info and price context */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-display text-xl font-bold tracking-tight text-slate-950 group-hover:text-laban-blue transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-xl font-black text-slate-800 leading-none">₹{item.price}</span>
                    </div>
                    
                    {/* Arabic literal badge */}
                    <p className="text-xs text-slate-400 font-sans mt-0.5">{item.arabicName}</p>
                    
                    <p className="text-slate-500 text-xs font-sans mt-3 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Quick tray trigger */}
                  <div className="flex gap-2 pt-2 border-t border-dashed border-slate-100">
                    <button
                      onClick={() => {
                        setSelectedProduct(item);
                        setProductDetailToppings([]);
                      }}
                      className="flex-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-display text-xs font-bold p-3 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      DETAILS
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-laban-blue hover:bg-blue-600 active:scale-[0.98] text-white font-display text-xs font-bold p-3 rounded-xl shadow-md shadow-blue-500/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 stroke-[3]" />
                      ADD TO TRAY
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* ----------------- INTERACTIVE SWEET CUSTOMIZER SECTION ----------------- */}
      <section id="customizer-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <DessertSelector onAddCustomBowl={handleAddNewCustomBowl} />
      </section>

      {/* ----------------- INTUITIVE OUR STORY BRAND PILLARS ----------------- */}
      <AboutUs />

      {/* ----------------- FIND LAB / BRANCHES ADDRESS GRID ----------------- */}
      <section id="find-lab-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="bg-slate-900 rounded-[40px] text-white p-8 md:p-12 lg:p-16 border-4 border-slate-800 relative overflow-hidden shadow-2xl">
          
          {/* Sparkly grid layout backdrop */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-laban-blue/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-12 w-96 h-96 bg-laban-yellow/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header block */}
          <div className="max-w-xl mb-12 relative z-10">
            <span className="text-[10px] text-laban-yellow font-bold uppercase tracking-widest font-sans">Locate the Chemists</span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Our Active Dessert Laboratories
            </h2>
            <p className="text-slate-400 text-xs mt-3 font-sans leading-relaxed">
              We operate three premium high-density milk laboratories. Every branch follows rigorous clotted cream formula restrictions and locks daily at 16:00 PM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {BRANCHES.map((branch, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/60 backdrop-blur-sm border-2 border-slate-800 hover:border-laban-blue rounded-3xl p-6 shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 text-laban-yellow flex items-center justify-center mb-4 shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                
                <h4 className="font-display text-lg font-bold text-white tracking-tight">{branch.name}</h4>
                <p className="text-slate-400 text-xs font-sans mt-2 first-letter:uppercase leading-snug">
                  {branch.address}
                </p>

                <div className="border-t border-slate-800 pt-4 mt-5 space-y-2">
                  <a 
                    href={`tel:${branch.phone}`}
                    className="text-xs font-mono font-bold text-laban-blue hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    {branch.phone}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>

                  <p className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {branch.hours} LOCKS
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call out table booking direct in finder footer */}
          <div className="mt-12 p-6 bg-slate-950 border border-slate-800 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            <div className="text-center md:text-left flex items-center gap-3">
              <div className="hidden sm:block p-2 bg-laban-yellow/10 rounded-xl">
                <AlertCircle className="w-5 h-5 text-laban-yellow" />
              </div>
              <div>
                <h4 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Cravings safety reminder</h4>
                <p className="text-slate-400 text-xs mt-0.5 font-sans">Ensure you book prior to your visit to secure rare daily clotted trays.</p>
              </div>
            </div>

            <button
              onClick={() => setIsReservationsOpen(true)}
              className="bg-laban-yellow hover:bg-amber-400 text-slate-900 font-display text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-2xl transition-all cursor-pointer shadow-lg shadow-amber-300/5 active:scale-95 whitespace-nowrap"
            >
              SECURE TABLE NOW
            </button>
          </div>

        </div>
      </section>

      {/* ----------------- PREMIUM FOOTER (MATCHING PICTURE THEME) ----------------- */}
      <footer className="bg-slate-950 text-white pt-10 border-t border-slate-900" id="lab-footer-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-900">
            
            {/* Left side brand brief */}
            <div className="flex items-center gap-3">
              <div className="bg-laban-blue rounded-full p-2">
                <svg viewBox="0 0 200 200" className="w-8 h-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="95" fill="currentColor" />
                  <ellipse cx="100" cy="50" rx="40" ry="12" fill="none" stroke="#fccf3a" strokeWidth="10" />
                  <path d="M50,110 L150,110" stroke="white" strokeWidth="20" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-xl font-bold leading-none text-white">11:11 Laban</h4>
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-0.5">Heavy Milks Chemical Kitchen</p>
              </div>
            </div>

            {/* Middle Hour limit badge - EXTREMELY VISUAL IN SCREENSHOT FOOTER */}
            <div className="bg-blue-950/50 border border-blue-900 text-laban-yellow px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              Hours: 10:00 AM - 16:00 PM LIMITS
            </div>

            {/* Social platforms icons links matching footer line */}
            <div className="flex space-x-3">
              {[
                { icon: Twitter, url: '#' },
                { icon: Facebook, url: '#' },
                { icon: Instagram, url: '#' },
                { icon: Linkedin, url: '#' },
              ].map((soc, idx) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-laban-blue text-slate-400 hover:text-white flex items-center justify-center transition-all duration-150 border border-slate-800"
                    aria-label="Social Link"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Copyright notice disclaimer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-mono mt-8 uppercase tracking-wider">
            <p>&copy; 2026 11:11 Laban original labs. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Made under license
              <span className="text-laban-yellow">AMBALYH</span>
            </p>
          </div>

        </div>
      </footer>


      {/* ----------------- DESSERT DETAIL FORMULA MODAL ----------------- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" id="detail-formula-modal">
          <div 
            className="relative w-full max-w-2xl overflow-hidden bg-white rounded-[32px] shadow-2xl border-4 border-laban-blue text-slate-800 animate-in fade-in zoom-in-95 duration-200"
            id="detail-formula-content"
          >
            {/* Header banner area */}
            <div className="relative aspect-[16/9] w-full bg-slate-100">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setProductDetailToppings([]);
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 text-white text-left">
                <span className="text-[10px] bg-laban-yellow text-slate-900 border border-white px-3 py-1 rounded-full font-bold uppercase tracking-widest font-sans inline-block">
                  {selectedProduct.category.toUpperCase()}
                </span>
                <h3 className="font-display text-3xl font-black mt-2 leading-none drop-shadow">
                  {selectedProduct.name}
                </h3>
                <p className="text-white/80 text-xs font-sans mt-0.5">{selectedProduct.arabicName}</p>
              </div>
            </div>

            <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Product description */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                  Chemical sweet profile
                </label>
                <p className="text-sm font-sans leading-relaxed text-slate-600">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Dynamic ingredient slider sliders mapping chemical stats */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3.5 flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5 text-laban-blue" />
                  Sensory Density sliders
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                  {[
                    { label: 'Heavy Milk Density', value: '95', style: 'bg-blue-400' },
                    { label: 'Pistachio Crunch Ratio', value: selectedProduct.id.includes('kunafa') || selectedProduct.id.includes('salankatya') ? '88' : '20', style: 'bg-emerald-400' },
                    { label: 'Double Cream Thickness', value: '90', style: 'bg-amber-400' },
                    { label: 'Gooey Cheese Bounciness', value: selectedProduct.id.includes('cheese') || selectedProduct.id.includes('kunafa') ? '92' : '10', style: 'bg-yellow-400' },
                  ].map((sl, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600">
                        <span>{sl.label}</span>
                        <span className="font-mono">{sl.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full ${sl.style} rounded-full`} style={{ width: `${sl.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extras checkbox */}
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex justify-between">
                  <span>Upgrade formula with extra layers</span>
                  <span className="text-laban-orange">Optional selection</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TOPPINGS.slice(0, 4).map((top) => {
                    const isChecked = productDetailToppings.includes(top.id);
                    return (
                      <button
                        key={top.id}
                        type="button"
                        onClick={() => handleDetailToppingToggle(top.id)}
                        className={`flex items-center justify-between p-3 rounded-2xl border-2 transition-all ${
                          isChecked 
                            ? 'border-laban-blue bg-blue-50/20 text-slate-900' 
                            : 'border-slate-100 bg-white text-slate-600'
                        }`}
                      >
                        <div className="flex items-center space-x-2.5">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-laban-blue border-laban-blue text-white' : 'border-slate-300'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-bold">{top.name}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          +₹{top.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Price tag summary and main CTA button */}
            <div className="p-6 border-t border-dashed border-slate-200 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Formula Cost</span>
                <span className="text-3xl font-mono font-black text-laban-blue">
                  ₹{selectedProduct.price + productDetailToppings.reduce((acc, t_id) => acc + (TOPPINGS.find(t => t.id === t_id)?.price || 0), 0)}
                </span>
              </div>

              <button
                onClick={handleAddFromDetailModal}
                className="w-full sm:w-auto bg-laban-yellow hover:bg-amber-400 text-slate-900 font-display text-base font-bold px-8 py-3.5 rounded-2xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                COMPILE AND TRANSFER TO TRAY
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ----------------- GLOBAL ACTIONS EXPANSION MODALS ----------------- */}
      <ReservationModal 
        isOpen={isReservationsOpen} 
        onClose={() => setIsReservationsOpen(false)} 
      />

      <OrderProgress 
        isOpen={isOrderTrackerOpen} 
        onClose={() => setIsOrderTrackerOpen(false)} 
        orderId={activeOrderId}
        totalCost={activeOrderTotal}
      />

    </div>
  );
}
