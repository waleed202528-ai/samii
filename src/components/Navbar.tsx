import React from 'react';
import { ShoppingBag, ClipboardList } from 'lucide-react';

interface NavbarProps {
  onOpenOrderModal: () => void;
  onOpenAdminModal: () => void;
  savedOrdersCount: number;
  langUrdu: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrderModal,
  onOpenAdminModal,
  savedOrdersCount,
  langUrdu,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand Zone */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-3 h-3 rounded-full bg-emerald-600 inline-block shadow-xs"></span>
          <span>Nutri Herb™</span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a
            href="#benefits"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-emerald-600/40"
          >
            {langUrdu ? 'فوائد و رزلٹس' : 'Key Benefits'}
          </a>
          <a
            href="#gallery"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-emerald-600/40"
          >
            {langUrdu ? 'تصاویر و کوالٹی' : 'Product Photos'}
          </a>
          <a
            href="#deals"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-emerald-600/40"
          >
            {langUrdu ? '11.11 ڈیلز' : '11.11 Deals'}
          </a>
          <a
            href="#how-to-use"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-emerald-600/40"
          >
            {langUrdu ? 'طریقہ استعمال' : 'How to Use'}
          </a>
          <a
            href="#reviews"
            className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-4 decoration-emerald-600/40"
          >
            {langUrdu ? 'کسٹمر ریویوز' : 'Reviews'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Discreet Orders Log button for the store manager */}
          <button
            onClick={onOpenAdminModal}
            className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1.5 border border-slate-200"
            title="View Received Customer Orders"
          >
            <ClipboardList className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline text-xs font-semibold">Orders</span>
            {savedOrdersCount > 0 && (
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full font-mono">
                {savedOrdersCount}
              </span>
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenOrderModal}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>{langUrdu ? 'آرڈر کریں (کیش آن ڈلیوری)' : 'Order Now (COD)'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
