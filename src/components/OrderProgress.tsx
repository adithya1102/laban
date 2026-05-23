import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Truck, Package, RotateCcw, Activity, Droplets } from 'lucide-react';

interface OrderProgressProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  totalCost: number;
}

export function OrderProgress({ isOpen, onClose, orderId, totalCost }: OrderProgressProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [percent, setPercent] = useState<number>(10);

  const steps = [
    { name: 'Tray Registered', desc: 'Secure recipe logged in Lab database', icon: Package },
    { name: 'Laban Assembly', desc: 'Sourcing heavy clotted cream and cold bases', icon: Droplets },
    { name: 'Deep Freezer Lab', desc: 'Flash temperature locks for maximum syrup goodness', icon: Activity },
    { name: 'Angel Delivery', desc: 'Sprinting directly to your provided sweet tooth', icon: Truck },
    { name: 'Delivered', desc: 'Enjoy the perfect 11:11 sweet texture!', icon: CheckCircle },
  ];

  // Tick the progress every seconds for simulation
  useEffect(() => {
    if (!isOpen) return;
    
    // Set periodic status steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          const nextStep = prev + 1;
          setPercent(nextStep * 25);
          return nextStep;
        } else {
          setPercent(100);
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 4000);

    // Smooth increment percent
    const percentInterval = setInterval(() => {
      setPercent((prev) => {
        if (prev < 100) {
          return Math.min(prev + 1, 100);
        }
        return prev;
      });
    }, 150);

    return () => {
      clearInterval(stepInterval);
      clearInterval(percentInterval);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" id="order-progress-backdrop">
      <div 
        className="relative w-full max-w-lg overflow-hidden bg-white rounded-3xl shadow-2xl border-4 border-laban-blue text-slate-800 animate-in fade-in zoom-in-95 duration-200"
        id="order-progress-content"
      >
        {/* Ribbon Header */}
        <div className="bg-laban-blue text-white p-5 flex justify-between items-center relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-24 h-24 rounded-full bg-white/10" />
          
          <div>
            <h3 className="font-display text-2xl tracking-normal text-white flex items-center gap-2">
              <Activity className="w-6 h-6 animate-pulse" />
              Laban Sweet Tracker
            </h3>
            <p className="text-white/80 text-xs font-sans mt-0.5">Live chemical sweet-synthesis trace</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-full hover:bg-white/20 transition-all text-white focus:outline-none"
            aria-label="Close Tracker"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Area */}
        <div className="p-6 bg-gradient-to-b from-white to-blue-50/50 space-y-6">
          
          {/* Top brief */}
          <div className="flex justify-between items-center bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider">Experimental Code</span>
              <span className="text-sm font-mono font-bold text-laban-blue">{orderId}</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-bold uppercase block tracking-wider font-sans">Synthesis Cost</span>
              <span className="text-lg font-mono font-black text-slate-800">₹{totalCost}</span>
            </div>
          </div>

          {/* Central progress visual bar */}
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-bold inline-block py-1 px-2.5 uppercase rounded-full bg-laban-yellow text-slate-900 border border-amber-300">
                  {steps[currentStep].name}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-black text-laban-blue">
                  {percent}% completed
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-3 text-xs flex rounded-full bg-slate-100 border border-slate-200">
              <div 
                style={{ width: `${percent}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-laban-blue transition-all duration-300 rounded-full"
              />
            </div>
          </div>

          {/* Vertical Steps */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isCompleted = idx < currentStep;
              const isActive = idx === currentStep;
              
              return (
                <div 
                  key={idx} 
                  className={`flex items-start gap-4 transition-all duration-300 ${
                    isCompleted ? 'opacity-50' : isActive ? 'opacity-100 scale-[1.01]' : 'opacity-30'
                  }`}
                >
                  {/* Left Circle Indicator */}
                  <div className="relative flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      isCompleted 
                        ? 'bg-emerald-100 border-emerald-500 text-emerald-600'
                        : isActive
                        ? 'bg-laban-blue border-laban-blue text-white shadow-md shadow-blue-500/20'
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}>
                      <StepIcon className="w-5 h-5" />
                    </div>
                    {/* Connection Line */}
                    {idx < steps.length - 1 && (
                      <div className={`w-0.5 h-10 mt-1 ${
                        isCompleted ? 'bg-emerald-400' : 'bg-slate-200'
                      }`} />
                    )}
                  </div>

                  {/* Step texts */}
                  <div className="pt-0.5 flex-1">
                    <h4 className={`text-sm font-bold tracking-tight ${
                      isActive ? 'text-laban-blue font-black' : 'text-slate-800'
                    }`}>
                      {step.name} {isActive && <span className="animate-pulse text-[9px] bg-red-100 text-red-700 px-1 py-0.5 rounded ml-1 tracking-tight">LIVE TRACE</span>}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-sans leading-tight">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom check prompt */}
          {currentStep === steps.length - 1 ? (
            <div className="bg-emerald-50 text-emerald-800 text-xs font-bold p-3 rounded-2xl border border-emerald-200 text-center animate-in fade-in slide-in-from-bottom-2">
              🌟 SWEET BOWL SYNTHESIS COMPLETE. BON APPETIT!
            </div>
          ) : (
            <div className="text-center text-xs text-slate-400 italic">
              Keep this window open to track live temperature/ingredients changes.
            </div>
          )}

          {/* Re-simulate and close buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                setCurrentStep(0);
                setPercent(10);
              }}
              className="flex-1 bg-slate-100 font-bold py-3.5 text-xs rounded-2xl hover:bg-slate-200 transition-all font-sans text-slate-700 flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              RE-RUN SYNTHESIS
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-laban-blue text-white font-display text-sm font-medium py-3.5 rounded-2xl hover:bg-laban-blue/90 transition-all"
            >
              DISMISS AND ORDER MORE
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
