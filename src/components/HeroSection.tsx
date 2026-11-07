import React from 'react';
import { ShoppingCart, MessageCircle, CheckCircle2, ShieldCheck, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER, STORE_PHONE, REGISTERED_LAB, LAB_ADDRESS } from '../data/productData';

interface HeroSectionProps {
  isSaleActive: boolean;
  onOpenOrderModal: () => void;
  langUrdu: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isSaleActive,
  onOpenOrderModal,
  langUrdu,
}) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20 border-b border-slate-200 bg-gradient-to-b from-emerald-50/80 via-slate-50/40 to-white">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Registered Lab & Trust Marker */}
            <div className="flex items-center gap-2 text-xs text-slate-700 border border-emerald-200/80 bg-white/90 backdrop-blur px-3 py-1.5 rounded-md shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-bold text-slate-900">{REGISTERED_LAB}</span>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <span className="text-slate-600 hidden sm:inline">{LAB_ADDRESS}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-bold uppercase tracking-wider text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>100% Pure Botanical Formulation</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-display tracking-tight leading-[1.1] text-balance">
                Herbal Hair Tonic
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-600">
                  {langUrdu ? 'بالوں کی قدرتی حفاظت کیلئے' : 'Stop Hair Fall & Revive Hair Growth'}
                </span>
              </h1>
            </div>

            {/* Sub-headline / Pitch */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl">
              {langUrdu ? (
                <span className="font-urdu text-xl block leading-loose text-slate-900 font-medium">
                  قدرتی جڑی بوٹیوں سے تیار کردہ نوتری ہرب ہیئر ٹانک۔ بال گرنا فوری بند کرے، خشکی سکری ختم اور نئے گھنے بال اگائے۔ پورے پاکستان میں کیش آن ڈلیوری دستیاب ہے۔
                </span>
              ) : (
                'Formulated with organic Amla, Shikakai, Reetha & Bhringraj. Clinically trusted herbal tonic to deeply nourish follicles, eliminate stubborn dandruff, and stimulate thick, shiny, damage-free hair.'
              )}
            </p>

            {/* Price Highlight Module */}
            <div className="w-full sm:w-auto p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-6">
              <div>
                <span className="text-xs text-slate-500 block uppercase tracking-wide font-bold">
                  {isSaleActive ? '11.11 Mega Sale Price' : 'Standard Store Price'}
                </span>
                <div className="flex items-baseline gap-3 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-700 font-mono tabular-nums">
                    Rs. {isSaleActive ? '1,050' : '1,200'}
                  </span>
                  {isSaleActive && (
                    <span className="text-lg text-slate-400 line-through font-mono tabular-nums">
                      Rs. 1,200
                    </span>
                  )}
                  {isSaleActive && (
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                      SAVE RS. 150
                    </span>
                  )}
                </div>
              </div>

              <div className="h-10 w-px bg-slate-200 hidden sm:block" />

              <div className="hidden sm:block text-xs text-slate-700">
                <span className="font-bold text-emerald-700 block">Cash On Delivery</span>
                <span>Payment after parcel inspection</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-2">
              <button
                onClick={onOpenOrderModal}
                className="flex items-center justify-center gap-2.5 px-6 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-lg text-base shadow-md shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{langUrdu ? 'کیش آن ڈلیوری آرڈر کریں' : 'Order Now (Cash On Delivery)'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  'Assalam-o-Alaikum! Mujhe Nutri Herb Herbal Hair Tonic 11.11 offer ke sath order karna hai. Details share karein.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-base shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp ({STORE_PHONE})</span>
              </a>
            </div>

            {/* Bullet Proof Points */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Herbal (No Side Effects)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Visible Results in 14 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Cash On Delivery All Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Safe for Men & Women</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Anchor with User's Authentic Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group">
              {/* Image banner display */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src="/assets/aistudio/oil3.jpg_c28e64e0.jpeg"
                  alt="Nutri Herb Herbal Hair Tonic 11.11 Mega Sale Banner"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Floating Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-amber-300 text-slate-900 text-xs font-black px-3 py-1 rounded-md shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Verified 11.11 Mega Discount</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-emerald-800/95 backdrop-blur-md border border-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                  Original Pack & Bottle
                </div>
              </div>

              {/* Secondary thumbnail preview bar */}
              <div className="p-4 bg-slate-50 flex items-center justify-between gap-3 border-t border-slate-200 text-xs">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/aistudio/oil2.jpg_0a14186f.jpeg"
                    alt="Packaging preview"
                    className="w-12 h-12 rounded object-cover border border-slate-200 shadow-xs"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block">Traditional Herbal Formula</span>
                    <span className="text-slate-600 text-[11px]">Laboratory Quality Guaranteed</span>
                  </div>
                </div>

                <a
                  href="#deals"
                  className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1 shrink-0"
                >
                  <span>View All Deals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Feature Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-slate-700">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <Truck className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Cash on Delivery</span>
              <span className="text-[11px] text-slate-500">All cities across Pakistan</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Govt. Registered</span>
              <span className="text-[11px] text-slate-500">Remedies Herbal Pharma</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">100% Pure Botanical</span>
              <span className="text-[11px] text-slate-500">Zero harmful chemicals</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
            <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-900 block">Instant Support</span>
              <span className="text-[11px] text-slate-500">{STORE_PHONE} (WhatsApp)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
