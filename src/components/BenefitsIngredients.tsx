import React from 'react';
import { KEY_BENEFITS, HERBAL_INGREDIENTS, REGISTERED_LAB, LAB_ADDRESS } from '../data/productData';
import { ShieldCheck, TrendingUp, Sparkles, Feather, Leaf, CheckCircle2 } from 'lucide-react';

interface BenefitsIngredientsProps {
  langUrdu: boolean;
}

export const BenefitsIngredients: React.FC<BenefitsIngredientsProps> = ({ langUrdu }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Feather':
      default:
        return <Feather className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>{langUrdu ? 'قدرتی جڑی بوٹیوں کے کمالات' : 'Clinically Proven Botanical Formula'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-display tracking-tight">
            {langUrdu ? 'بالوں کے تمام مسائل کا پکا علاج' : 'Targeted Natural Restoration for Every Hair Problem'}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {langUrdu ? (
              <span className="font-urdu text-lg block leading-relaxed text-slate-800 font-medium">
                کیمیکل فری خالص روایتی ہربل فارمولا جو بالوں کی جڑوں کو خوراک فراہم کرتا ہے اور چند ہفتوں میں گنج پن اور کمزوری کو دور کرتا ہے۔
              </span>
            ) : (
              'Packed with essential amino acids, cold-pressed nutrients, and traditional Ayurvedic extracts to revitalize damaged hair follicles from root to tip.'
            )}
          </p>
        </div>

        {/* 4 Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {KEY_BENEFITS.map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(b.icon)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display mb-1.5">
                    {langUrdu ? b.titleUrdu : b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {langUrdu ? b.descriptionUrdu : b.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Tested Result</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pure Ingredients Spotlight */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
              Active Botanical Extracts
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              {langUrdu ? 'خالص اجزاء جن سے یہ تیل تیار کیا گیا ہے' : 'Nature’s Most Potent Hair Care Herbs'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              No mineral oils, no silicones, no artificial perfumes, and zero parabens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HERBAL_INGREDIENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-emerald-400 transition-all flex items-start gap-3 shadow-xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    {item.name}
                  </h4>
                  <span className="text-xs text-emerald-700 font-bold block mb-1">
                    {item.nameUrdu}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pharmaceutical Certification Marker */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Certified & Registered: <strong className="text-slate-900">{REGISTERED_LAB}</strong></span>
            </div>
            <span>Manufacturing Facility: <strong className="text-slate-900">{LAB_ADDRESS}</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
