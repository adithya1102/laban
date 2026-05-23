import React, { useState } from 'react';
import { X, Calendar, Clock, Users, ChevronRight, CheckCircle, Ticket, MapPin } from 'lucide-react';
import { TableBooking } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [booking, setBooking] = useState<TableBooking>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    guests: 2,
    zone: 'indoor',
  });

  if (!isOpen) return null;

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '15:30'
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!booking.name || !booking.phone) return;
    setStep(2);
  };

  const getTicketId = () => {
    // Generate an authentic ticket ID
    return `LABAN-TKT-${booking.name.substring(0,3).toUpperCase()}-${Math.floor(Math.random() * 9000) + 1000}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" id="reservation-modal-backdrop">
      <div 
        className="relative w-full max-w-xl overflow-hidden bg-white rounded-3xl shadow-2xl border-4 border-laban-blue text-slate-800 animate-in fade-in zoom-in-95 duration-200"
        id="reservation-modal-content"
      >
        {/* Modal Ribbon Header */}
        <div className="bg-laban-blue text-white p-5 flex justify-between items-center relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-24 h-24 rounded-full bg-white/10" />
          <div className="absolute left-10 bottom-0 translate-y-4 w-12 h-12 rounded-full bg-white/10" />
          
          <div>
            <h3 className="font-display text-2xl tracking-normal text-white flex items-center gap-2">
              <Calendar className="w-6 h-6 animate-pulse" />
              11:11 Laban Reservations
            </h3>
            <p className="text-white/80 text-xs font-sans mt-0.5">Secure your heavenly experimental dessert table</p>
          </div>
          <button 
            onClick={() => {
              onClose();
              setStep(1);
            }} 
            className="p-1.5 rounded-full hover:bg-white/20 transition-all text-white focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close Reservation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 1 ? (
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5 bg-gradient-to-b from-white to-blue-50/50">
            {/* Step Indicator */}
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 border-b border-dashed border-slate-200 pb-3">
              <span className="text-laban-blue font-bold flex items-center gap-1">
                <span className="w-4 h-4 rounded-full bg-laban-blue text-white flex items-center justify-center text-[10px]">1</span>
                EXPERIMENT SETUP
              </span>
              <span>10:00 AM - 16:00 PM LIMITS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wider mb-1.5">YOUR NAME</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-laban-blue focus:outline-none transition-all text-slate-800 text-sm font-medium bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wider mb-1.5">PHONE NUMBER</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +20 114..."
                  value={booking.phone}
                  onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-laban-blue focus:outline-none transition-all text-slate-800 text-sm font-medium bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wider mb-1.5">DATE OF EXPERIENCE</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={booking.date}
                  onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border-2 border-slate-200 focus:border-laban-blue focus:outline-none transition-all text-slate-800 text-sm font-medium bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wider mb-1.5">NUMBER OF SWEET TOOTH GUESTS</label>
                <div className="flex items-center space-x-3 bg-white border-2 border-slate-200 rounded-2xl p-1.5">
                  {[1, 2, 4, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setBooking({ ...booking, guests: num })}
                      className={`flex-1 py-1.5 rounded-xl text-sm font-bold transition-all ${
                        booking.guests === num
                          ? 'bg-laban-blue text-white shadow-md shadow-laban-blue/25'
                          : 'text-slate-500 hover:bg-slate-100'
                      }`}
                    >
                      {num === 8 ? '8+' : num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Select Time slot */}
            <div>
              <label className="block text-xs font-bold text-slate-700 tracking-wider mb-1.5 flex items-center justify-between">
                <span>CHOOSE RESERVATION TIME</span>
                <span className="text-laban-orange text-[10px]">Strictly inside Lab Hours</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setBooking({ ...booking, time })}
                    className={`px-4 py-2.5 rounded-xl border-2 text-xs font-bold tracking-wider transition-all duration-150 flex items-center gap-1.5 ${
                      booking.time === time
                        ? 'bg-laban-yellow border-laban-yellow text-slate-900 shadow-md transform scale-[1.03]'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Lounge Zone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2">EXPERIMENT LAB ZONE</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'indoor', name: 'Ambient Indoor Lab', desc: 'Chill AC' },
                  { id: 'terrace', name: 'Open Air Terrace', desc: 'Sunset view' },
                  { id: 'lounge', name: 'VIP Dessert Lounge', desc: 'Premium luxury' },
                ].map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setBooking({ ...booking, zone: zone.id as any })}
                    className={`p-3 rounded-2xl border-2 text-left transition-all ${
                      booking.zone === zone.id
                        ? 'border-laban-blue bg-blue-50/50 text-laban-blue shadow-sm'
                        : 'border-slate-100 hover:border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <p className="text-xs font-bold tracking-tight">{zone.name}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-sans font-medium">{zone.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-laban-blue text-white font-display text-lg py-4 rounded-2xl hover:bg-laban-blue/90 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              GENERATE LAB RESERVATION TICKET
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        ) : (
          /* DIGITAL BOARDING TICKET STEP 2 */
          <div className="p-6 bg-gradient-to-b from-blue-50/70 to-white text-slate-800 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-emerald-600 animate-bounce" />
            </div>

            <h3 className="font-display text-2xl text-slate-900 font-bold text-center">Your Lab Experiment is Booked!</h3>
            <p className="text-sm text-slate-500 text-center max-w-sm mt-1 mb-6">
              Present this Digital Voucher to the host at the door. Your table has been reserved under heavy sweet-tooth regulations.
            </p>

            {/* Boarding Pass Card */}
            <div className="relative w-full border-4 border-slate-900 rounded-3xl overflow-hidden bg-white shadow-lg shadow-slate-200">
              {/* Top Section */}
              <div className="bg-slate-900 p-4 text-white flex justify-between items-center border-b-2 border-dashed border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-laban-blue flex items-center justify-center p-1 text-white font-display text-[11px] font-bold">11</div>
                  <span className="font-display tracking-wider text-sm">11:11 LABAN</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold block">EXPERIMENT VOUCHER</span>
                  <span className="text-xs font-mono font-bold text-laban-yellow">{getTicketId()}</span>
                </div>
              </div>

              {/* Passenger Info Grid */}
              <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-6 bg-slate-50/50">
                <div>
                  <label className="text-[9px] font-bold text-slate-400 block tracking-widest uppercase">Lead Sweet Tooth</label>
                  <span className="text-sm font-bold text-slate-800">{booking.name}</span>
                </div>
                <div>
                  <label className="text-[9px] font-bold text-slate-400 block tracking-widest uppercase">Contact</label>
                  <span className="text-xs font-bold text-slate-800 font-mono">{booking.phone}</span>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <label className="text-[9px] font-bold text-slate-400 block tracking-widest uppercase">Date & Hours</label>
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-laban-blue" />
                    {booking.date}
                  </span>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <label className="text-[9px] font-bold text-slate-400 block tracking-widest uppercase">Expected Arrival</label>
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-laban-blue" />
                    {booking.time} <span className="text-[9px] bg-sky-100 text-sky-800 px-1 rounded font-bold">LOCK</span>
                  </span>
                </div>

                <div className="border-t border-slate-100 pt-3 col-span-2 flex justify-between items-center text-xs">
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 block tracking-widest uppercase mb-0.5">Sweets Lab Zone</label>
                    <span className="font-bold text-slate-900 border-b-2 border-laban-yellow pb-0.5">
                      {booking.zone === 'indoor' ? '❄️ Ambient Indoor' : booking.zone === 'terrace' ? '🌅 Open Air Terrace' : '👑 VIP Dessert Lounge'}
                    </span>
                  </div>
                  <div className="text-right">
                    <label className="text-[9px] font-bold text-slate-400 block tracking-widest uppercase mb-0.5">Guests Allocation</label>
                    <span className="text-sm font-bold text-slate-900 px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono">
                      {booking.guests} {booking.guests === 1 ? 'PERSON' : 'PEOPLE'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="bg-slate-50 border-t-2 border-dashed border-slate-200 p-4 flex flex-col items-center justify-center relative">
                {/* Simulated punch hole side elements */}
                <div className="absolute left-0 top-0 -translate-x-3 -translate-y-[11px] w-6 h-6 rounded-full bg-slate-100 border-r border-slate-200" />
                <div className="absolute right-0 top-0 translate-x-3 -translate-y-[11px] w-6 h-6 rounded-full bg-slate-100 border-l border-slate-200" />

                <div className="flex space-x-0.5 h-8 w-full max-w-[280px] justify-center items-center overflow-hidden opacity-80 mt-1">
                  {[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9, 3, 2, 3, 8, 4, 6, 2, 6, 4, 3, 3, 5].map((w, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800 h-full"
                      style={{ width: `${w}px` }}
                    />
                  ))}
                </div>
                <div className="text-[9px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-widest">
                  VOID IF SEAL EXPIRES BEFORE VISIT
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 w-full mt-6">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 border-2 border-slate-300 font-bold px-4 py-3 rounded-2xl hover:bg-slate-50 active:scale-95 transition-all text-sm flex items-center justify-center gap-1.5"
              >
                <Ticket className="w-4 h-4 text-slate-600" />
                PRINT TICKET
              </button>
              
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setStep(1);
                }}
                className="flex-1 bg-laban-blue text-white font-display font-medium px-4 py-3 rounded-2xl hover:bg-laban-blue/90 active:scale-95 transition-all text-sm flex items-center justify-center"
              >
                DONE, BACK TO LAB
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
