import React, { useState } from 'react';
import { CustomerOrder } from '../types';
import { buildWhatsAppOrderUrl } from '../utils/orderStorage';
import { STORE_PHONE } from '../data/productData';
import { CheckCircle2, MessageCircle, Phone, Copy, Check, X, Truck, Package } from 'lucide-react';

interface OrderSuccessModalProps {
  order: CustomerOrder | null;
  onClose: () => void;
  langUrdu: boolean;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose,
  langUrdu,
}) => {
  const [copied, setCopied] = useState(false);

  if (!order) return null;

  const whatsappUrl = buildWhatsAppOrderUrl(order);

  const handleCopy = () => {
    const text = `Order ID: #${order.id}\nName: ${order.customerName}\nPhone: ${order.phone}\nPackage: ${order.packageName}\nCity: ${order.city}\nAddress: ${order.address}\nTotal: Rs. ${order.totalPrice}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-emerald-300 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-800 px-6 py-6 border-b border-emerald-900 text-center relative text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center mb-3">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-xs uppercase font-black tracking-widest text-emerald-300 block mb-1">
            {langUrdu ? 'آرڈر کامیابی سے درج ہو گیا' : 'Order Placed Successfully!'}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white font-display">
            {langUrdu ? 'آپ کے آرڈر کا بہت بہت شکریہ' : 'Thank You for Choosing Nutri Herb!'}
          </h3>
          <p className="text-xs text-emerald-100 mt-1">
            {langUrdu
              ? 'ہماری ٹیم جلد ہی پارسل ڈسپیچ کرے گی۔'
              : 'Your parcel is being prepared. Cash on Delivery across Pakistan.'}
          </p>
        </div>

        {/* Order Details Receipt Box */}
        <div className="p-6 space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500 font-semibold">Order Tracking Number:</span>
              <span className="font-mono font-bold text-emerald-800 text-sm">#{order.id}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-semibold">Customer Name:</span>
              <span className="text-slate-900 font-bold">{order.customerName}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-semibold">Phone Number:</span>
              <span className="text-slate-900 font-mono font-bold">{order.phone}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-semibold">City / Destination:</span>
              <span className="text-slate-900 font-bold">{order.city}</span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-500 font-semibold shrink-0">Address:</span>
              <span className="text-slate-800 text-right font-medium">{order.address}</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                <Package className="w-3.5 h-3.5 text-emerald-600" />
                <span>{order.packageName}</span>
              </div>
              <span className="font-bold text-slate-900">{order.bottles} Bottle{order.bottles > 1 ? 's' : ''}</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <span className="text-slate-500 font-semibold">Delivery Charges:</span>
              <span className="text-emerald-700 font-bold">
                {order.deliveryFee === 0 ? 'FREE' : `Rs. ${order.deliveryFee}`}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200">
              <span className="text-sm font-bold text-slate-900">Amount Due on Delivery:</span>
              <span className="text-xl font-black text-emerald-800 font-mono">
                Rs. {order.totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Delivery Note */}
          <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 text-xs text-emerald-900 border border-emerald-200">
            <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span className="font-medium">Rider will deliver in 2-3 business days. Open parcel & pay cash on delivery.</span>
          </div>

          {/* WhatsApp Direct Confirm Button */}
          <div className="space-y-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Order Confirmation on WhatsApp ({STORE_PHONE})</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopy}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                <span>{copied ? 'Copied Receipt' : 'Copy Order Details'}</span>
              </button>

              <a
                href={`tel:${STORE_PHONE}`}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" />
                <span>Call {STORE_PHONE}</span>
              </a>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 underline underline-offset-4 font-medium"
            >
              Return to Website
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
