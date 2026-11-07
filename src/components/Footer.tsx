import React from 'react';
import { STORE_PHONE, WHATSAPP_NUMBER, REGISTERED_LAB, LAB_ADDRESS } from '../data/productData';
import { ShieldCheck, Phone, MessageCircle, Truck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenAdminModal: () => void;
  savedOrdersCount: number;
  langUrdu: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdminModal,
  savedOrdersCount,
  langUrdu,
}) => {
  return (
    <footer className="bg-slate-100 text-slate-600 text-xs border-t border-slate-200 pb-20 sm:pb-12 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
              <span className="text-xl font-black text-slate-900 font-display tracking-tight">
                Nutri Herb™
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              {langUrdu
                ? 'خالص جڑی بوٹیوں سے تیار کردہ ہربل ہیئر ٹانک۔ بالوں کا گرنا بند کرے اور قدرتی طور پر نئے بال اگائے۔'
                : '100% pure botanical hair tonic formulated with traditional Ayurvedic herbs to nourish follicles, eliminate dandruff, and stimulate thick hair growth.'}
            </p>
            <div className="pt-2 flex items-start gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">{REGISTERED_LAB}</span>
                <span className="text-slate-500 text-[11px]">{LAB_ADDRESS}</span>
              </div>
            </div>
          </div>

          {/* Quick Help & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 font-display">Customer Support Hotline</h4>
            <div className="space-y-2">
              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call: <strong className="text-slate-900 font-mono">{STORE_PHONE}</strong></span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp: <strong className="text-emerald-700 font-mono">{STORE_PHONE}</strong></span>
              </a>
              <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                <Truck className="w-4 h-4 text-slate-400" />
                <span>Cash On Delivery across Pakistan (Karachi, Lahore, Islamabad, etc.)</span>
              </div>
            </div>
          </div>

          {/* Navigation & Portal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 font-display">Store Quick Links</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#deals" className="hover:text-emerald-700 transition-colors">
                  11.11 Mega Sale Bundles
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-emerald-700 transition-colors">
                  Herbal Formula & Ingredients
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-emerald-700 transition-colors">
                  Application Routine (طریقہ استعمال)
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-emerald-700 transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenAdminModal}
                  className="text-emerald-700 hover:text-emerald-800 font-bold underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Orders Log ({savedOrdersCount})</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Nutri Herb Herbal Hair Care. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>The Remedies Herbal Pharmaceuticals Registered Karachi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
