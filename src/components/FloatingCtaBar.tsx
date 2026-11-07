import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, STORE_PHONE } from '../data/productData';

interface FloatingCtaBarProps {
  isSaleActive: boolean;
  onOpenOrderModal: () => void;
  langUrdu: boolean;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({
  isSaleActive,
  onOpenOrderModal,
  langUrdu,
}) => {
  return (
    <aside aria-label="Quick order options" className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 sm:hidden shadow-xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Price info */}
        <div className="pl-1">
          <span className="text-[10px] text-slate-500 block font-bold leading-none mb-1">
            {isSaleActive ? '11.11 MEGA DEAL' : 'Cash On Delivery'}
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-black text-emerald-700 font-mono leading-none">
              Rs. {isSaleActive ? '1,050' : '1,200'}
            </span>
            {isSaleActive && (
              <span className="text-xs text-slate-400 line-through leading-none font-mono">
                1,200
              </span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          {/* Direct WhatsApp button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Assalam-o-Alaikum! Mujhe Nutri Herb Herbal Hair Tonic 11.11 offer se order karna hai.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-xs transition-colors flex items-center justify-center shrink-0"
            title={`WhatsApp ${STORE_PHONE}`}
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Primary Order Button */}
          <button
            onClick={onOpenOrderModal}
            className="px-4 py-2.5 bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-xs active:scale-95 flex items-center gap-1.5 shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{langUrdu ? 'آرڈر کریں' : 'Order Now (COD)'}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
