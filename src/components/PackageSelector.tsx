import React from 'react';
import { PackageOption } from '../types';
import { ShoppingCart, MessageCircle, Check, Sparkles, Truck } from 'lucide-react';
import { WHATSAPP_NUMBER, STORE_PHONE } from '../data/productData';

interface PackageSelectorProps {
  packages: PackageOption[];
  isSaleActive: boolean;
  selectedPackageId: string;
  onSelectPackage: (pkg: PackageOption) => void;
  onOpenOrderModal: (pkg: PackageOption) => void;
  langUrdu: boolean;
}

export const PackageSelector: React.FC<PackageSelectorProps> = ({
  packages,
  isSaleActive,
  selectedPackageId,
  onSelectPackage,
  onOpenOrderModal,
  langUrdu,
}) => {
  return (
    <section id="deals" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isSaleActive ? 'Special 11.11 Mega Sale Bundles' : 'Official Store Packages'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight">
            {langUrdu ? 'بہترین بچت پیکجز منتخب کریں' : 'Choose Your Herbal Treatment Plan'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            {langUrdu ? (
              <span className="font-urdu text-lg block leading-relaxed text-slate-800 font-medium">
                ایک بوتل آزمائش کے لیے، 2 بوتلیں گروتھ کے لیے یا 3 بوتلیں مکمل خاندانی کورس کے لیے۔ پورے پاکستان میں کیش آن ڈلیوری۔
              </span>
            ) : (
              'Every bottle contains authentic lab-registered herbal formula. Order single bottle or save more with 2 & 3 bottle bundle packs.'
            )}
          </p>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;
            const price = isSaleActive ? pkg.salePrice : pkg.originalPrice;
            const savings = isSaleActive ? pkg.savings : (pkg.bottles > 1 ? (pkg.originalPrice - pkg.salePrice) : 0);

            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-amber-50/40 via-white to-white border-2 border-amber-400 shadow-xl shadow-amber-400/15 md:-translate-y-2'
                    : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg'
                } p-6 sm:p-8`}
              >
                {/* Popular / Best Deal Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-slate-950" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                {/* Card Content Top */}
                <div className="space-y-4">
                  {/* Title & Tag */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        {langUrdu ? pkg.nameUrdu : pkg.name}
                      </h3>
                      <span className="text-xs text-slate-500">
                        {pkg.bottles === 1 ? '1 Month Supply' : `${pkg.bottles * 30} Days Recommended Course`}
                      </span>
                    </div>

                    {pkg.tag && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-800 shrink-0">
                        {langUrdu ? pkg.tagUrdu : pkg.tag}
                      </span>
                    )}
                  </div>

                  {/* Price display */}
                  <div className="pt-2 pb-4 border-b border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-slate-500 font-bold">PKR</span>
                      <span className="text-4xl font-black text-emerald-700 font-mono tabular-nums">
                        Rs. {price.toLocaleString()}
                      </span>
                      {isSaleActive && pkg.originalPrice > price && (
                        <span className="text-sm text-slate-400 line-through font-mono tabular-nums">
                          Rs. {pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    {savings > 0 && isSaleActive && (
                      <div className="mt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <span>Save Rs. {savings.toLocaleString()} on 11.11 Mega Sale!</span>
                      </div>
                    )}

                    {/* Delivery indicator */}
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
                      <Truck className="w-3.5 h-3.5 text-slate-500" />
                      {pkg.deliveryFee === 0 ? (
                        <span className="text-emerald-700 font-bold">FREE Delivery Included</span>
                      ) : (
                        <span>Standard Delivery: Rs. 150 (Cash on Delivery)</span>
                      )}
                    </div>
                  </div>

                  {/* Included features list */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pt-2 font-medium">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{pkg.bottles}x Sealed Bottle with Original Box</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>The Remedies Pharma Registered Batch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Cash On Delivery at Your Doorstep</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Open Parcel & Check Before Paying</span>
                    </li>
                    {pkg.bottles >= 2 && (
                      <li className="flex items-center gap-2 font-bold text-amber-700">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Zero Delivery Charges (Free Courier)</span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-6 space-y-2.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenOrderModal(pkg);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all ${
                      pkg.popular
                        ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{langUrdu ? 'یہ پیکج آرڈر کریں' : 'Order This Package (COD)'}</span>
                  </button>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Assalam-o-Alaikum! Mujhe Nutri Herb Herbal Hair Tonic ka ${pkg.name} (Rs. ${price}) order karna hai.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 border border-emerald-300 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order via WhatsApp ({STORE_PHONE})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
