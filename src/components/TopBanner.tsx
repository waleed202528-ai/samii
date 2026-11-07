import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageCircle, Clock, ToggleLeft, ToggleRight, Globe } from 'lucide-react';
import { STORE_PHONE, WHATSAPP_NUMBER } from '../data/productData';

interface TopBannerProps {
  isSaleActive: boolean;
  onToggleSale: (active: boolean) => void;
  langUrdu: boolean;
  onToggleLang: () => void;
}

export const TopBanner: React.FC<TopBannerProps> = ({
  isSaleActive,
  onToggleSale,
  langUrdu,
  onToggleLang,
}) => {
  // Countdown to November 30 end of month
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      // Target: End of current month
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const diff = endOfMonth.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-emerald-900 text-white text-xs py-2 px-3 sm:px-6 relative z-30 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Sale Status & Countdown */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {isSaleActive ? (
            <div className="flex items-center gap-1.5 bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded font-black tracking-wide uppercase text-[11px] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-slate-950 shrink-0" />
              <span>11.11 MEGA SALE · RS. 1,050 ONLY</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-white/20 text-white px-2 py-0.5 rounded text-[11px] font-semibold">
              <span>Official Store Price · Rs. 1,200</span>
            </div>
          )}

          {isSaleActive && (
            <div className="hidden md:flex items-center gap-1.5 text-emerald-100 font-mono tabular-nums text-[11px]">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Offer Ends In:</span>
              <span className="text-amber-300 font-bold">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          )}
        </div>

        {/* Contact Hotline & Controls */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto">
          {/* Direct WhatsApp Call link */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-300 hover:text-white font-bold transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp Order:</span>
            <span className="font-mono tabular-nums">{STORE_PHONE}</span>
          </a>

          {/* Quick Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 text-white hover:text-amber-300 transition-colors text-[11px] font-semibold bg-white/10 hover:bg-white/20 border border-white/20 rounded px-2 py-0.5"
            title="Toggle Urdu / English"
          >
            <Globe className="w-3 h-3 text-amber-300" />
            <span>{langUrdu ? 'English' : 'اردو'}</span>
          </button>

          {/* 11.11 Promo Switcher */}
          <button
            onClick={() => onToggleSale(!isSaleActive)}
            className="flex items-center gap-1 text-[11px] text-emerald-200 hover:text-white transition-colors"
            title="Switch between 11.11 Promotional Discount and Standard Price"
          >
            <span className="hidden lg:inline text-emerald-300">11.11 Sale:</span>
            {isSaleActive ? (
              <span className="flex items-center gap-1 text-amber-300 font-bold">
                ON <ToggleRight className="w-4 h-4 text-amber-300 inline" />
              </span>
            ) : (
              <span className="flex items-center gap-1 text-slate-300">
                OFF <ToggleLeft className="w-4 h-4 inline" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
