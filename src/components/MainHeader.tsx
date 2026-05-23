import React, { useState } from 'react';
import { ShoppingBag, ChevronRight, Trash2, Plus, Minus, CreditCard, Clock, MapPin, Sparkles } from 'lucide-react';
import { LabanLogo } from './LabanLogo';
import { CartItem } from '../types';

interface MainHeaderProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onOpenReservations: () => void;
}

export function MainHeader({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onOpenReservations
}: MainHeaderProps) {
  const [isTrayOpen, setIsTrayOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce(
    (total, item) => total + item.menuItem.price * item.quantity,
    0
  );

  const handleSmoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-100 shadow-sm" id="lab-main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          
          {/* Brand Logo and Title */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleSmoothScroll('hero-section')}>
            <LabanLogo size="md" className="transition-transform group-hover:rotate-[11deg] duration-300" />
            <div>
              <h1 className="font-display text-2xl font-black text-laban-blue leading-none tracking-tight flex items-center gap-1.5">
                11:11 Laban
                <Sparkles className="w-4 h-4 text-laban-yellow animate-bounce" />
              </h1>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest font-sans mt-0.5">Original Dessert Labs</p>
            </div>
          </div>

          {/* Core Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => handleSmoothScroll('menu-section')}
              className="font-display font-medium text-sm tracking-wide text-slate-600 hover:text-laban-blue hover:scale-105 transition-all focus:outline-none"
            >
              MENU
            </button>
            <button
              onClick={onOpenReservations}
              className="font-display font-semibold text-sm tracking-wide text-laban-orange hover:text-orange-600 hover:scale-105 transition-all focus:outline-none flex items-center gap-1"
            >
              RESERVATIONS
              <span className="w-1.5 h-1.5 bg-laban-orange rounded-full animate-ping" />
            </button>
            <button
              onClick={() => handleSmoothScroll('customizer-section')}
              className="font-display font-medium text-sm tracking-wide text-slate-600 hover:text-laban-blue hover:scale-105 transition-all focus:outline-none"
            >
              SWEET LAB
            </button>
            <button
              onClick={() => handleSmoothScroll('about-section')}
              className="font-display font-medium text-sm tracking-wide text-slate-600 hover:text-laban-blue hover:scale-105 transition-all focus:outline-none"
            >
              OUR CRAFT
            </button>
            <button
              onClick={() => handleSmoothScroll('find-lab-section')}
              className="font-display font-medium text-sm tracking-wide text-slate-600 hover:text-laban-blue hover:scale-105 transition-all focus:outline-none"
            >
              FIND BRANCH
            </button>
          </nav>

          {/* Drawer Tray Trigger & Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenReservations}
              className="hidden sm:flex bg-gradient-to-r from-laban-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-display text-xs font-semibold uppercase tracking-wider px-4 py-2.5 rounded-2xl transition-all hover:shadow-md active:scale-95 cursor-pointer"
            >
              Book Table
            </button>

            {/* Tray Cart Button */}
            <button
              onClick={() => setIsTrayOpen(true)}
              className="relative p-3 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 hover:bg-laban-blue/10 hover:text-laban-blue transition-all duration-200 cursor-pointer focus:outline-none"
              id="header-cart-trigger"
              aria-label="Toggle Tray Basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-laban-yellow border-2 border-white text-slate-900 font-mono text-[10px] font-black flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Order Tray Sidebar */}
      {isTrayOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" id="tray-cart-drawer">
          {/* Backdrop layer */}
          <div 
            onClick={() => setIsTrayOpen(false)} 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
          />

          {/* Drawer Panel content */}
          <div className="relative w-full max-w-md h-full bg-white shadow-2xl border-l-4 border-laban-blue flex flex-col justify-between animate-in slide-in-from-right duration-250 text-slate-800">
            
            {/* Drawer Header */}
            <div className="p-5 bg-gradient-to-r from-laban-blue to-blue-700 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-laban-yellow animate-bounce" />
                <div>
                  <h3 className="font-display text-xl">My Lab Tray Basket</h3>
                  <p className="text-white/80 text-[10px] font-sans">Checkout formulas prepared for consumption</p>
                </div>
              </div>
              <button 
                onClick={() => setIsTrayOpen(false)}
                className="p-1 px-3 text-sm font-bold bg-white/20 hover:bg-white/30 rounded-xl text-white transition-all"
              >
                Close
              </button>
            </div>

            {/* Drawer body - Cart Items list */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-8">
                  <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-300">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display text-base text-slate-700 font-bold">Your Tray is Empty</h4>
                    <p className="text-xs text-slate-400 max-w-[200px] mx-auto mt-1 font-sans">
                      Add ready-made creations or invent custom bowls from our Sweet Lab!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsTrayOpen(false);
                      handleSmoothScroll('menu-section');
                    }}
                    className="bg-laban-blue text-white font-display text-xs px-4 py-2.5 rounded-xl hover:bg-blue-600 transition-all cursor-pointer"
                  >
                    EXPLORE DESSERTS MENU
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div 
                    key={item.menuItem.id} 
                    className="flex gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all"
                  >
                    <img 
                      src={item.menuItem.image} 
                      alt={item.menuItem.name} 
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-xl object-cover border border-slate-200 shadow-sm"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xs font-bold text-slate-900 truncate tracking-tight">{item.menuItem.name}</h4>
                        <span className="text-xs font-mono font-black text-laban-blue">₹{item.menuItem.price * item.quantity}</span>
                      </div>
                      
                      {/* Arabic/sub-title */}
                      <p className="text-[10px] text-slate-400 font-sans mt-0.5">{item.menuItem.arabicName}</p>

                      {/* Configured Details description */}
                      {item.menuItem.description.includes('Base:') && (
                        <p className="text-[9px] text-slate-500 bg-amber-50 rounded p-1 mt-1 border border-amber-100 italic">
                          {item.menuItem.description}
                        </p>
                      )}

                      {/* Quantity tools and Delete button */}
                      <div className="flex items-center justify-between mt-3.5">
                        <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, -1)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-600"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-black px-2.5 text-slate-800">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.menuItem.id, 1)}
                            className="p-1 hover:bg-slate-100 rounded text-slate-600"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.menuItem.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 transition-all focus:outline-none"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer summary checkout */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-dashed border-slate-200 bg-slate-50 rounded-t-3xl space-y-4">
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Tray Subtotal</span>
                    <span className="font-mono font-bold text-slate-800">₹{cartSubtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chemical Delivery Tax</span>
                    <span className="font-mono text-emerald-600 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-slate-900 border-t border-slate-200 pt-2">
                    <span className="font-display">Traced Total</span>
                    <span className="font-mono text-laban-blue text-lg font-black">₹{cartSubtotal}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setIsTrayOpen(false);
                      onOpenReservations();
                    }}
                    className="border-2 border-slate-300 hover:border-slate-400 font-display text-xs font-bold p-3 rounded-2xl transition-all cursor-pointer"
                  >
                    RESERVE A SEAT
                  </button>
                  <button
                    onClick={() => {
                      setIsTrayOpen(false);
                      onCheckout();
                    }}
                    className="bg-laban-yellow hover:bg-amber-400 text-slate-900 font-display text-xs font-bold p-3 rounded-2xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    PLACE LAB ORDER
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center justify-center gap-1 text-[9px] text-slate-400 font-mono">
                  <Clock className="w-3 w-3" />
                  Synthesis locked until 16:00 PM LIMITS
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
