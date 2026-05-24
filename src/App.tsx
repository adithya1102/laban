import React from 'react';
import { MapPin, Phone, Clock, ArrowRight, Instagram } from 'lucide-react';

import { BRANCHES, MENU_CATEGORIES } from './data';
import { MainHeader } from './components/MainHeader';
import { AboutUs } from './components/AboutUs';

const FOOD_IMAGE =
  'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80';

const INSTAGRAM_URL =
  'https://www.instagram.com/11.11.laban?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
const PHONE_NUMBER = '+91 91769 17659';

const DIETARY_STYLES: Record<string, string> = {
  Vegetarian: 'bg-green-50 text-green-700 border border-green-200',
  Vegan: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  'Gluten-Free': 'bg-sky-50 text-sky-700 border border-sky-200',
  'Contains Nuts': 'bg-amber-50 text-amber-700 border border-amber-200',
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#faf9f6] text-slate-800 font-sans relative overflow-x-hidden"
      id="laban-app-viewport"
    >
      {/* Margin doodles (xl screens) */}
      <div className="hidden xl:block fixed left-4 top-1/4 space-y-24 z-0 pointer-events-none opacity-40">
        <div className="text-laban-blue animate-bounce" style={{ animationDuration: '4s' }}>
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <path
              d="M 10 50 C 30 20, 40 80, 60 50 C 80 20, 90 80, 100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-laban-yellow animate-spin-slow">
          <svg className="w-20 h-20" viewBox="0 0 100 100">
            <path
              d="M 50,50 A 10,10 0 0,0 40,40 A 20,20 0 0,0 60,60 A 30,30 0 0,0 30,30 A 40,40 0 0,0 70,70"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-sky-300">
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray="10 5"
            />
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="hidden xl:block fixed right-4 top-1/4 space-y-24 z-0 pointer-events-none opacity-40 text-right">
        <div
          className="text-laban-yellow animate-spin-slow"
          style={{ animationDirection: 'reverse' }}
        >
          <svg className="w-20 h-20 ml-auto" viewBox="0 0 100 100">
            <path
              d="M 50,50 A 10,10 0 0,0 40,40 A 20,20 0 0,0 60,60 A 30,30 0 0,0 30,30 A 40,40 0 0,0 70,70"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-laban-blue animate-bounce" style={{ animationDuration: '6s' }}>
          <svg className="w-16 h-16 ml-auto" viewBox="0 0 100 100">
            <path
              d="M 10 50 Q 30 90, 50 10 T 90 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="text-amber-300">
          <svg className="w-16 h-16 ml-auto" viewBox="0 0 100 100">
            <path
              d="M 20,80 A 40,40 0 0,1 80,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 30,80 A 25,25 0 0,1 70,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>

      {/* Header */}
      <MainHeader />

      {/* Hero — Split Layout */}
      <section
        id="hero-section"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + CTAs */}
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="text-xs bg-[#10358A]/10 text-[#10358A] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest font-sans inline-block">
                Chennai's Finest Dessert Lab
              </span>
              <h2 className="font-display text-5xl lg:text-7xl font-black text-[#10358A] tracking-tight leading-none">
                INDULGE IN
                <br />
                <span className="text-[#FFD100]">PERFECTIONS</span>
              </h2>
              <p className="text-slate-500 text-lg font-sans max-w-md leading-relaxed">
                Discover the art of curated desserts at{' '}
                <span className="text-[#10358A] font-bold">11:11 Laban</span> — where every formula
                is engineered to perfection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('menu-section')}
                className="w-full sm:w-auto bg-[#FFD100] text-black font-display text-base font-bold uppercase tracking-wider px-8 py-4 rounded-2xl shadow-lg hover:scale-105 hover:bg-amber-400 transition-all active:scale-95 cursor-pointer"
              >
                EXPLORE MENU
              </button>
              <button
                onClick={() => scrollTo('find-lab-section')}
                className="w-full sm:w-auto bg-[#10358A] text-white font-display text-base font-bold uppercase tracking-wider px-8 py-4 rounded-2xl hover:bg-[#07387d] hover:scale-105 transition-all active:scale-95 cursor-pointer"
              >
                FIND OUR LAB
              </button>
            </div>
          </div>

          {/* Right: Food Image */}
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
            <img
              src={`${import.meta.env.BASE_URL}images/combo.jpeg`}
              alt="11:11 Laban Indulgence"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-display text-lg font-bold drop-shadow">Premium Dessert Experience</p>
              <p className="text-white/80 text-sm drop-shadow">Chennai, Tamil Nadu</p>
            </div>
            <div className="absolute top-5 right-5 bg-[#FFD100] text-slate-900 text-xs font-mono font-black px-4 py-1.5 rounded-full shadow-lg">
              EST. 11:11
            </div>
          </div>
        </div>
      </section>

      {/* ── Menu ── */}
      <section
        id="menu-section"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
      >
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs bg-[#10358A]/10 text-[#10358A] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest font-sans inline-block mb-4">
            The Lab Collection
          </span>
          <h2 className="font-display text-4xl font-extrabold text-[#10358A] leading-none tracking-tight">
            OUR FULL MENU
          </h2>
          <p className="text-slate-500 text-sm mt-3 font-sans">
            Authentic &amp; modern Laban beverages and bites — crafted from the finest ingredients,
            served fresh daily.
          </p>
        </div>

        {/* Category blocks */}
        {MENU_CATEGORIES.map((cat, catIdx) => (
          <div key={cat.category}>
            {catIdx > 0 && <div className="border-t border-dashed border-slate-200 my-16" />}

            {/* Category header */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
              <div>
                <h3 className="font-display text-3xl font-extrabold text-[#10358A] leading-none tracking-tight">
                  {cat.category}
                </h3>
                <p className="text-slate-500 text-sm font-sans mt-1.5">{cat.description}</p>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
                {cat.items.length} item{cat.items.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Item cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                    <img
                      src={item.image ?? FOOD_IMAGE}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10358A]/80 via-transparent to-transparent" />
                    {/* Price badge */}
                    <span className="absolute top-4 right-4 bg-[#FFD100] text-slate-900 font-mono font-black text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                      {item.price_small !== undefined
                        ? `From ₹${item.price_small}`
                        : `₹${item.price}`}
                    </span>
                    {/* Item ID chip */}
                    <span className="absolute bottom-4 left-4 text-[10px] font-mono font-bold text-white/60 tracking-widest">
                      {item.id}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h4 className="font-display text-xl font-extrabold text-[#10358A] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-slate-500 text-sm font-sans leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Full pricing */}
                    <p className="font-mono font-bold text-[#10358A] text-sm">
                      {item.price_small !== undefined
                        ? `₹${item.price_small} (S) / ₹${item.price_large} (L)`
                        : `₹${item.price}`}
                    </p>

                    {/* Dietary badges */}
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.dietary.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              DIETARY_STYLES[tag] ?? 'bg-gray-50 text-gray-600 border border-gray-200'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* About Us */}
      <AboutUs />

      {/* Find Branch */}
      <section
        id="find-lab-section"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative"
      >
        <div className="bg-slate-900 rounded-[40px] text-white p-8 md:p-12 lg:p-16 border-4 border-slate-800 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-[#10358A]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-20 -translate-x-12 w-96 h-96 bg-[#FFD100]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-xl mb-12 relative z-10">
            <span className="text-[10px] text-[#FFD100] font-bold uppercase tracking-widest font-sans">
              Locate the Chemists
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mt-2">
              Our Active Dessert Laboratory
            </h2>
            <p className="text-slate-400 text-xs mt-3 font-sans leading-relaxed">
              Chennai's premier high-density milk laboratory. Every visit follows rigorous clotted
              cream formula restrictions and locks daily at 16:00 PM.
            </p>
          </div>

          <div className="relative z-10 max-w-md">
            {BRANCHES.map((branch, idx) => (
              <div
                key={idx}
                className="bg-slate-950/60 backdrop-blur-sm border-2 border-slate-800 hover:border-[#10358A] rounded-3xl p-8 shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-[#FFD100] flex items-center justify-center mb-5 shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>

                <h4 className="font-display text-xl font-bold text-white tracking-tight">
                  {branch.name}
                </h4>
                <p className="text-slate-400 text-sm font-sans mt-2 leading-snug">
                  {branch.address}
                </p>

                <div className="border-t border-slate-800 pt-5 mt-5 space-y-3">
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-sm font-mono font-bold text-[#00AEEF] hover:text-sky-300 transition-colors flex items-center gap-2 group"
                  >
                    <Phone className="w-4 h-4 text-slate-500" />
                    {branch.phone}
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>

                  <p className="text-xs font-mono text-slate-500 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    {branch.hours} — LOCKS
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 mb-3">
            <MapPin className="w-6 h-6 text-[#10358A] flex-shrink-0" />
            <h2 className="font-display text-3xl md:text-4xl font-black text-[#10358A] tracking-tight leading-none">
              Visit Us
            </h2>
          </div>
          <p className="text-slate-500 text-base font-sans mt-1 mb-8 max-w-sm leading-relaxed">
            11:11 Laban, Nanganallur, Chennai, Tamil Nadu
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=11:11+Laban+Nanganallur+Chennai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-display font-bold text-sm uppercase tracking-wider shadow-md"
          >
            <MapPin className="w-4 h-4" />
            View on Google Maps
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-slate-950 text-white pt-12 border-t border-slate-900"
        id="lab-footer-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-10 border-b border-slate-800">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="bg-[#10358A] rounded-full p-2">
                <svg
                  viewBox="0 0 200 200"
                  className="w-8 h-8 text-white"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="95" fill="currentColor" />
                  <ellipse
                    cx="100"
                    cy="50"
                    rx="40"
                    ry="12"
                    fill="none"
                    stroke="#FFD100"
                    strokeWidth="10"
                  />
                  <path
                    d="M50,110 L150,110"
                    stroke="white"
                    strokeWidth="20"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-display text-xl font-bold leading-none text-white">
                  11:11 Laban
                </h4>
                <p className="text-[10px] text-slate-500 uppercase font-mono tracking-widest mt-0.5">
                  Heavy Milks Chemical Kitchen
                </p>
              </div>
            </div>

            {/* Contact + Hours */}
            <div className="flex flex-col items-center gap-3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-mono font-bold"
              >
                <Phone className="w-4 h-4 text-[#FFD100]" />
                {PHONE_NUMBER}
              </a>
              <div className="bg-blue-950/50 border border-blue-900 text-[#FFD100] px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                Hours: 10:00 AM - 16:00 PM
              </div>
            </div>

            {/* Instagram — prominent */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-display text-sm uppercase tracking-wider">
                Follow on Instagram
              </span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-mono mt-8 uppercase tracking-wider">
            <p>&copy; 2026 11:11 Laban original labs. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Made under license <span className="text-[#FFD100]">AMBALYH</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919176917659?text=Hi%2C%20i%20would%20like%20to%20know%20more%20about%2011%3A11%20Laban"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.855L.057 23.57a.75.75 0 0 0 .919.912l5.86-1.519A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.953-1.355l-.355-.213-3.68.954.983-3.589-.232-.368A9.699 9.699 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
      </a>
    </div>
  );
}
