import React, { useState } from 'react';
import { PRODUCT_IMAGES } from '../data/productData';
import { Maximize2, X, Check } from 'lucide-react';

interface ProductGalleryProps {
  langUrdu: boolean;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ langUrdu }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeImage = PRODUCT_IMAGES[selectedIndex];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            {langUrdu ? 'اصلی پراڈکٹ تصاویر' : 'Genuine Authentic Photos'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            {langUrdu ? '100% اصلی ہربل ہیئر ٹانک کی تصاویر' : 'Inspect the Real Product & Packaging'}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {langUrdu ? (
              <span className="font-urdu text-lg block leading-relaxed text-slate-800 font-medium">
                ہم وہی پروڈکٹ ڈلیور کرتے ہیں جو آپ تصویر میں دیکھ رہے ہیں۔ پارسل وصول کرنے کے بعد چیک کر کے ادائیگی کریں۔
              </span>
            ) : (
              'What you see is exactly what arrives at your doorstep. Registered batch seals, pharmaceutical formulation, and authentic botanical extract.'
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Large Display Image */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 overflow-hidden relative group shadow-sm">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center bg-slate-100">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full h-full object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setLightboxOpen(true)}
                referrerPolicy="no-referrer"
              />

              {/* Zoom click button */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 p-2.5 rounded-lg border border-slate-200 shadow-sm backdrop-blur transition-all"
                title="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Title tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-md text-left">
                <span className="text-sm font-bold text-slate-900 block">{activeImage.title}</span>
                <span className="text-xs text-slate-600">{activeImage.subtitle}</span>
              </div>
            </div>
          </div>

          {/* Thumbnails Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="text-xs font-bold uppercase text-slate-600 tracking-wider mb-1 px-1">
              Select Photo to Inspect ({PRODUCT_IMAGES.length})
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {PRODUCT_IMAGES.map((img, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`flex items-center gap-3 p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-sm ring-1 ring-emerald-600/40'
                        : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-bold text-slate-900 block truncate">
                        {img.title}
                      </span>
                      <span className="text-[11px] text-slate-500 block truncate">
                        {img.subtitle}
                      </span>
                    </div>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Guarantee Box */}
            <div className="mt-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1.5 shadow-xs">
              <span className="font-bold text-emerald-800 block">✓ 100% Genuine Parcel Guarantee</span>
              <p className="text-[11px] text-emerald-800/80 leading-relaxed">
                Our riders allow you to open the outer flyer and verify the product before paying cash. If not satisfied, return instantly with zero charges.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full bg-neutral-900 border border-neutral-700"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 text-center text-sm text-neutral-300">
              <span className="font-bold text-white">{activeImage.title}</span> — {activeImage.subtitle}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
