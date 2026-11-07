import React, { useState, useEffect } from 'react';
import { PackageOption, CustomerOrder } from '../types';
import { MAJOR_PAKISTAN_CITIES, STORE_PHONE, WHATSAPP_NUMBER } from '../data/productData';
import { generateOrderId, saveOrderToStorage, buildWhatsAppOrderUrl } from '../utils/orderStorage';
import { X, ShoppingBag, Truck, ShieldCheck, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: PackageOption;
  isSaleActive: boolean;
  onOrderSuccess: (order: CustomerOrder) => void;
  langUrdu: boolean;
}

export const OrderFormModal: React.FC<OrderFormModalProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  isSaleActive,
  onOrderSuccess,
  langUrdu,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Karachi');
  const [customCity, setCustomCity] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPrice = isSaleActive ? selectedPackage.salePrice : selectedPackage.originalPrice;
  const delivery = selectedPackage.deliveryFee;
  const grandTotal = currentPrice + delivery;
  const effectiveCity = city === 'Other City / Village' ? (customCity || 'Pakistan') : city;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) {
      setError(langUrdu ? 'براہ کرم اپنا نام درج کریں' : 'Please enter your full name');
      return;
    }

    const cleanPhone = phone.replace(/[\s-]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError(langUrdu ? 'براہ کرم درست موبائل نمبر درج کریں (مثال: 03138622533)' : 'Please enter a valid mobile number (e.g. 03138622533)');
      return;
    }

    if (!address.trim() || address.trim().length < 5) {
      setError(langUrdu ? 'براہ کرم مکمل پتہ (گھر / گلی / علاقہ) درج کریں' : 'Please enter your complete delivery address (House / Street / Area)');
      return;
    }

    setIsSubmitting(true);

    try {
      const orderId = generateOrderId();
      const newOrder: CustomerOrder = {
        id: orderId,
        customerName: name.trim(),
        phone: cleanPhone,
        city: effectiveCity,
        address: address.trim(),
        packageId: selectedPackage.id,
        packageName: selectedPackage.name,
        bottles: selectedPackage.bottles,
        totalPrice: grandTotal,
        deliveryFee: delivery,
        notes: notes.trim(),
        createdAt: new Date().toISOString(),
        status: 'pending',
      };

      // Save to local storage for store owner
      saveOrderToStorage(newOrder);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      // Build WhatsApp URL and open immediately
      const whatsappUrl = buildWhatsAppOrderUrl(newOrder);
      window.open(whatsappUrl, '_blank');

      // Inform parent
      onOrderSuccess(newOrder);
      onClose();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please call us directly at ' + STORE_PHONE);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-teal-900 to-emerald-900 px-5 py-4 border-b border-emerald-900 flex items-center justify-between text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                {langUrdu ? 'کیش آن ڈلیوری آرڈر فارم' : 'Cash On Delivery Checkout'}
              </h3>
              <p className="text-xs text-emerald-100">
                {langUrdu ? 'پارسل وصول کرتے وقت ادائیگی کریں' : 'Pay in cash when parcel arrives at your doorstep'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Package Summary Box */}
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-slate-500 block text-[11px] font-semibold">Selected Item:</span>
            <span className="font-bold text-slate-900 text-sm">
              {langUrdu ? selectedPackage.nameUrdu : selectedPackage.name}
            </span>
            <span className="text-emerald-700 block font-bold">
              {selectedPackage.bottles}x Sealed Bottles (Herbal Hair Tonic)
            </span>
          </div>

          <div className="text-right">
            <span className="text-slate-500 block text-[11px] font-semibold">Grand Total:</span>
            <span className="text-xl font-black text-emerald-800 font-mono tabular-nums">
              Rs. {grandTotal.toLocaleString()}
            </span>
            <span className="text-[11px] text-slate-500 block font-medium">
              {delivery === 0 ? 'Free Shipping' : `+ Rs. ${delivery} Shipping`}
            </span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-300 text-red-800 text-xs flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {langUrdu ? 'آپ کا مکمل نام *' : 'Full Name *'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Muhammad Ali"
              className="w-full bg-slate-50/60 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          {/* Phone Number */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-slate-700">
                {langUrdu ? 'موبائل نمبر (واٹس ایپ والا) *' : 'Mobile / WhatsApp Number *'}
              </label>
              <span className="text-[11px] text-slate-500 font-medium">Order confirmation via WhatsApp</span>
            </div>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03138622533"
              className="w-full bg-slate-50/60 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 font-mono focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          {/* City Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {langUrdu ? 'شہر منتخب کریں *' : 'City *'}
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-50/60 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600 font-medium"
              >
                {MAJOR_PAKISTAN_CITIES.map((c) => (
                  <option key={c} value={c} className="bg-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {city === 'Other City / Village' ? (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {langUrdu ? 'اپنے شہر کا نام لکھیں *' : 'Specify City/Town *'}
                </label>
                <input
                  type="text"
                  required
                  value={customCity}
                  onChange={(e) => setCustomCity(e.target.value)}
                  placeholder="e.g. Dera Ghazi Khan"
                  className="w-full bg-slate-50/60 border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
            ) : (
              <div className="text-xs text-slate-600 flex items-center p-2 rounded bg-slate-50 border border-slate-200">
                <Truck className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                <span className="font-medium">Rider delivery in 2 to 3 days to {city}</span>
              </div>
            )}
          </div>

          {/* Complete Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {langUrdu ? 'مکمل پتہ (گھر کا پتہ، گلی یا قریبی مشہور جگہ) *' : 'Complete Delivery Address *'}
            </label>
            <textarea
              required
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. House # 12, Street 4, Sector G-11/2, Near City Park"
              className="w-full bg-slate-50/60 border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
          </div>

          {/* Optional Special Instructions */}
          <div>
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              {langUrdu ? 'کوئی خاص ہدایت (اختیاری)' : 'Special Delivery Note (Optional)'}
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Call before delivery, deliver in afternoon"
              className="w-full bg-slate-50/60 border border-slate-200 rounded-lg px-3.5 py-2 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
            />
          </div>

          {/* Trust Guarantees */}
          <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-emerald-800">100% Cash On Delivery — No Advance Needed</span>
              <p className="text-[11px] text-emerald-800/80 font-medium">
                We send parcel through registered courier service (TCS/Trax/Leopards). Inspect the package at doorstep before paying.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-base shadow-md shadow-amber-400/20 transition-all flex items-center justify-center gap-2 transform active:scale-98"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>
              {isSubmitting
                ? 'Processing Order...'
                : langUrdu
                ? `آرڈر کنفرم کریں — Rs. ${grandTotal.toLocaleString()}`
                : `Confirm Order Now — Rs. ${grandTotal.toLocaleString()} (COD)`}
            </span>
          </button>

          {/* Direct WhatsApp Call link */}
          <div className="text-center pt-1">
            <span className="text-xs text-slate-500 block mb-1">Order also directly sends to seller phone:</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>03138622533 (Direct WhatsApp Order Desk)</span>
            </a>
          </div>
        </form>

      </div>
    </div>
  );
};
