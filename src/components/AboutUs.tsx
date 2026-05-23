import React from 'react';
import { Award, Droplet, Star, Zap } from 'lucide-react';

export function AboutUs() {
  const stats = [
    { label: 'Original Recipes', value: '50+', desc: 'Engineered from scratch', icon: Award },
    { label: 'Heavy Pure Milk', value: '100%', desc: 'Sourced daily from chosen farms', icon: Droplet },
    { label: 'Happy Customers', value: '250K+', desc: 'Registered sweet teeth', icon: Star },
    { label: 'Bounciness Index', value: '9.9/10', desc: 'Maximum clotted cream rating', icon: Zap },
  ];

  return (
    <section id="about-section" className="py-16 bg-gradient-to-b from-blue-50/20 to-white relative overflow-hidden">
      
      {/* Visual doodles background accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-blue-50/50 -z-10 blur-xl" />
      <div className="absolute left-12 top-20 w-32 h-32 rounded-full bg-amber-50/50 -z-10 blur-xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] bg-laban-blue/10 text-laban-blue px-3 py-1 rounded-full font-bold uppercase tracking-widest font-sans inline-block">
            Behind the Formula
          </span>
          <h2 className="font-display text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How 11:11 Laban Redefined Sweet Alchemy
          </h2>
          <p className="text-slate-500 text-sm mt-3 font-sans">
            Born from a simple pursuit of pure, velvety heavy milk (Laban), our secret kitchen labs combined traditional Arabic clotted cream methods with modern visual texture design.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Visual Grid of Brand Pillars */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm flex gap-4 items-start hover:border-laban-blue transition-all duration-300">
              <div className="p-3.5 bg-blue-50 text-laban-blue rounded-2xl">
                <Droplet className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">Original Double-Filtered Heavy Milk</h3>
                <p className="text-slate-500 text-xs font-sans mt-1 leading-relaxed">
                  We don&apos;t compromise on base density. Every drop of Laban used in our sweet rice pudding, traditional Qashtouha cakes, and molten Cheese Bombs passes strict laboratory density locks to ensure maximum cream retention.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm flex gap-4 items-start hover:border-laban-blue transition-all duration-300">
              <div className="p-3.5 bg-amber-50 text-laban-yellow rounded-2xl">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">The 11:11 Wishing Hour Philosophy</h3>
                <p className="text-slate-500 text-xs font-sans mt-1 leading-relaxed">
                  Why 11:11? Since ancient legends claim that 11:11 is the ultimate portal for wishes, we designed our desserts as sensory physical manifestations of pure sweet wishes. Every spoonful makes the hour of cravings perfect.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm flex gap-4 items-start hover:border-laban-blue transition-all duration-300">
              <div className="p-3.5 bg-sky-50 text-sky-500 rounded-2xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">Visual Dessert Innovation</h3>
                <p className="text-slate-500 text-xs font-sans mt-1 leading-relaxed">
                  From the marble swirling glass mirror glazes of AMBALYH to the layered crunch koshary bowl, we engineer sweets that aren&apos;t just eaten — they are experienced, recorded, and celebrated!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Image & stats */}
          <div className="space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-slate-950 aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800&auto=format&fit=crop&q=80" 
                alt="11:11 Laban Craft Kitchen" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-left">
                  <h4 className="font-display text-xl font-bold">11:11 Lab Concept Kitchen</h4>
                  <p className="text-white/80 text-xs mt-1 font-sans">Where clotted cream formulas are perfected daily until 16:00 PM lock.</p>
                </div>
              </div>
              
              {/* Floating SVG halo accent */}
              <div className="absolute top-6 right-6 bg-slate-950/60 backdrop-blur-md p-2 rounded-full border border-white/20">
                <svg viewBox="0 0 100 40" className="w-12 h-6 text-white leading-none">
                  <ellipse cx="50" cy="20" rx="25" ry="6" fill="none" stroke="#fccf3a" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Microstats block */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
              {stats.map((s, idx) => {
                const StatIcon = s.icon;
                return (
                  <div key={idx} className="text-center space-y-1">
                    <div className="mx-auto w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-laban-blue mb-1">
                      <StatIcon className="w-4 h-4" />
                    </div>
                    <p className="text-lg font-mono font-black text-slate-800 leading-none">{s.value}</p>
                    <p className="text-[10px] font-display font-medium text-slate-500 uppercase leading-none">{s.label}</p>
                    <p className="text-[9px] text-slate-400 font-sans leading-tight mt-0.5">{s.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
