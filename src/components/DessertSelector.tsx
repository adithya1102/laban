import React, { useState } from 'react';
import { ChefHat, Info, PlusCircle, Check, HelpCircle } from 'lucide-react';
import { TOPPINGS, BASES } from '../data';
import { CartItem, MenuItem } from '../types';

interface DessertSelectorProps {
  onAddCustomBowl: (cartItem: CartItem) => void;
}

export function DessertSelector({ onAddCustomBowl }: DessertSelectorProps) {
  const [selectedBase, setSelectedBase] = useState(BASES[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [bowlName, setBowlName] = useState('My Sweet Lab Experiment');
  const [addedMessage, setAddedMessage] = useState(false);

  const handleToppingToggle = (id: string) => {
    if (selectedToppings.includes(id)) {
      setSelectedToppings(selectedToppings.filter(t => t !== id));
    } else {
      setSelectedToppings([...selectedToppings, id]);
    }
  };

  const calculateTotal = () => {
    const toppingsCost = selectedToppings.reduce((total, id) => {
      const topping = TOPPINGS.find(t => t.id === id);
      return total + (topping ? topping.price : 0);
    }, 0);
    return selectedBase.price + toppingsCost;
  };

  const handleAddToTray = () => {
    const finalToppings = selectedToppings.map(id => {
      const topping = TOPPINGS.find(t => t.id === id);
      return topping ? `${topping.name} (+₹${topping.price})` : '';
    }).filter(Boolean);

    const customItem: MenuItem = {
      id: `custom-bowl-${Date.now()}`,
      name: bowlName.trim() || 'Custom Dessert Bowl',
      arabicName: 'اختراع حلي مخصص',
      price: calculateTotal(),
      category: 'special',
      description: `Custom Sweet Lab creation. Base: ${selectedBase.name}. Toppings: ${
        finalToppings.length > 0 ? selectedToppings.map(id => TOPPINGS.find(t => t.id === id)?.name).join(', ') : 'Plain Experience'
      }.`,
      image: selectedBase.id === 'rice-pudding'
        ? 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&auto=format&fit=crop&q=80'
        : selectedBase.id === 'soaked-cake'
        ? 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&auto=format&fit=crop&q=80'
        : 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=500&auto=format&fit=crop&q=80'
    };

    onAddCustomBowl({
      menuItem: customItem,
      quantity: 1,
      selectedToppings: selectedToppings
    });

    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 3000);

    // Reset Form
    setSelectedToppings([]);
    setBowlName('My Sweet Lab Experiment');
  };

  return (
    <div className="bg-white rounded-3xl border-4 border-laban-blue text-slate-800 p-6 shadow-xl relative overflow-hidden" id="dessert-customizer-container">
      {/* Sparkly Background elements */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-32 h-32 rounded-full bg-blue-50" />
      <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 w-32 h-32 rounded-full bg-amber-50" />

      {/* Title */}
      <div className="relative flex items-center gap-3 border-b border-dashed border-slate-200 pb-4 mb-6">
        <div className="bg-laban-blue p-2.5 rounded-2xl text-white">
          <ChefHat className="w-6 h-6 animate-bounce" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            The 11:11 Custom Sweet Lab
          </h3>
          <p className="text-slate-500 text-xs font-sans mt-0.5">Mix and match premium bases and gourmet toppings to engineer your custom pleasure</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left column: Visual bowl simulator */}
        <div className="lg:col-span-4 flex flex-col justify-center items-center bg-slate-50 rounded-2xl border-2 border-slate-100 p-5 relative min-h-[290px]">
          <div className="text-center font-display text-sm tracking-wide text-slate-400 mb-4 uppercase">
            LIVE FLUID INGREDIENT MAP
          </div>

          {/* Interactive Dessert Bowl Render */}
          <div className="relative w-40 h-40 flex items-end justify-center">
            {/* Bowl Container lines */}
            <div className="absolute inset-0 border-4 border-slate-800 rounded-b-full bg-white/40 overflow-hidden shadow-inner flex flex-col justify-end">
              
              {/* Layer 3: Toppings Visual representation */}
              {selectedToppings.length > 0 && (
                <div className="w-full bg-amber-300 h-8 text-[9px] font-bold text-amber-900 flex items-center justify-center animate-bounce border-t-2 border-dashed border-white/50">
                  ⚡ TOPPED
                </div>
              )}

              {/* Layer 2: Topping layer thickness based on checks */}
              <div 
                className="w-full bg-amber-100 transition-all duration-300 border-t border-amber-200"
                style={{ height: `${Math.min(selectedToppings.length * 12, 40)}px` }}
              />

              {/* Layer 1: Core Base Liquid layer */}
              <div 
                className={`w-full transition-all duration-300 flex items-center justify-center font-bold text-[10px] text-white ${
                  selectedBase.id === 'rice-pudding' 
                    ? 'bg-blue-100 text-blue-800' 
                    : selectedBase.id === 'soaked-cake'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
                style={{ height: '55px' }}
              >
                {selectedBase.arabic}
              </div>

            </div>

            {/* Float Angel Halo on top of the custom bowl */}
            <div className="absolute -top-4 self-center animate-pulse">
              <svg viewBox="0 0 100 40" className="w-16 h-8">
                <ellipse cx="50" cy="20" rx="30" ry="8" fill="none" stroke="#fccf3a" strokeWidth="4" />
                <ellipse cx="50" cy="20" rx="34" ry="11" fill="none" stroke="rgba(252, 207, 58, 0.3)" strokeWidth="3" />
              </svg>
            </div>
          </div>

          <div className="text-center mt-5">
            <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-bold uppercase font-sans tracking-wide">
              Lab Status: Balanced
            </span>
            <p className="text-xs font-bold text-slate-800 mt-2 font-display">
              {bowlName || 'Unnamed Experiment'}
            </p>
          </div>
        </div>

        {/* Right column: Interactive choices */}
        <div className="lg:col-span-8 space-y-5">
          {/* Custom Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider mb-1.5 uppercase">
              1. LABEL YOUR EXPERIMENT
            </label>
            <input
              type="text"
              value={bowlName}
              maxLength={26}
              onChange={(e) => setBowlName(e.target.value)}
              placeholder="e.g. Dreamy Mango Lab Dust..."
              className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-laban-blue focus:outline-none focus:ring-0 text-slate-800 text-sm font-semibold bg-white"
            />
          </div>

          {/* Core Base Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2 uppercase">
              2. SELECT BASE DESSERT LAYER
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {BASES.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setSelectedBase(b)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    selectedBase.id === b.id
                      ? 'border-laban-blue bg-blue-50/50 text-laban-blue font-bold shadow-sm'
                      : 'border-slate-100 hover:border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  <p className="text-xs font-bold tracking-tight">{b.name}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[10px] font-semibold text-slate-400 font-sans">{b.arabic}</span>
                    <span className="text-xs font-mono text-slate-700 font-bold">₹{b.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Toppings Multi Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2 uppercase flex justify-between">
              <span>3. ADD GOURMET INGREDIENTS SPECIALS</span>
              <span className="text-slate-400 text-[10px]">Multiple selectors allowed</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {TOPPINGS.map((t) => {
                const isChecked = selectedToppings.includes(t.id);
                return (
                  <button
                    key={t.id}
                    onClick={() => handleToppingToggle(t.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border-2 transition-all text-left ${
                      isChecked
                        ? 'border-laban-blue bg-blue-50/30 text-slate-900 shadow-sm'
                        : 'border-slate-100 hover:border-slate-150 bg-white text-slate-600'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                        isChecked ? 'bg-laban-blue border-laban-blue text-white' : 'border-slate-300'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-tight leading-none">{t.name}</p>
                        <span className="text-[9px] text-slate-400 font-sans leading-none">{t.arabic}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">
                      +₹{t.price}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Summary and Action */}
          <div className="border-t border-dashed border-slate-200 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Total Cost</span>
              <span className="text-3xl font-mono font-black text-laban-blue">
                ₹{calculateTotal()}
              </span>
            </div>

            <button
              onClick={handleAddToTray}
              className="w-full sm:w-auto bg-laban-yellow hover:bg-amber-400 text-slate-900 font-display text-base font-semibold px-6 py-3 rounded-2xl transition-all duration-150 active:scale-[0.98] shadow-md shadow-amber-300/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-5 h-5 text-slate-900" />
              ADD EXPERIMENT TO TRAY
            </button>
          </div>

          {/* Success Feed */}
          {addedMessage && (
            <div className="bg-emerald-50 text-emerald-800 text-xs font-bold p-3 rounded-xl border border-emerald-200 text-center animate-in fade-in slide-in-from-top-1">
              🎉 Custom dessert bucket &ldquo;{bowlName}&rdquo; was created and placed inside your Order Tray!
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
