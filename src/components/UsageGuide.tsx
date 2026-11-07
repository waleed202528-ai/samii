import React from 'react';
import { Calendar, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface UsageGuideProps {
  langUrdu: boolean;
  onOpenOrderModal: () => void;
}

export const UsageGuide: React.FC<UsageGuideProps> = ({ langUrdu, onOpenOrderModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Apply to Scalp & Roots',
      titleUrdu: 'جڑوں میں لگائیں',
      desc: 'Take adequate quantity of Nutri Herb tonic in palm or dropper and apply directly onto dry scalp roots.',
      descUrdu: 'تیل کی مناسب مقدار انگلیوں کی مدد سے بالوں کی جڑوں میں لگائیں۔',
    },
    {
      num: '02',
      title: 'Gentle 5-Minute Massage',
      titleUrdu: '5 منٹ ہلکا مساج',
      desc: 'Massage in circular motions using soft fingertips to stimulate micro-circulation and open dormant follicles.',
      descUrdu: 'ہلکے ہاتھوں سے دائرہ دار مساج کریں تاکہ تیل بالوں کی جڑوں تک جذب ہو۔',
    },
    {
      num: '03',
      title: 'Leave to Absorb',
      titleUrdu: '2 گھنٹے یا رات بھر رکھیں',
      desc: 'Allow the herbal oils to penetrate deeply for at least 2 hours or leave it overnight before sleeping.',
      descUrdu: 'بہترین رزلٹ کے لیے کم از کم 2 گھنٹے یا رات بھر لگا رہنے دیں۔',
    },
    {
      num: '04',
      title: 'Wash with Mild Shampoo',
      titleUrdu: 'ہلکے شیمپو سے دھو لیں',
      desc: 'Rinse with warm or normal water and a chemical-free mild shampoo. Repeat 3 to 4 times a week.',
      descUrdu: 'کسی اچھے شیمپو سے دھو لیں۔ ہفتے میں 3 سے 4 بار استعمال کریں۔',
    },
  ];

  return (
    <section id="how-to-use" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
            {langUrdu ? 'صحیح طریقہ استعمال' : 'Easy 4-Step Application Routine'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            {langUrdu ? 'تیل لگانے کا آسان طریقہ' : 'How to Use for Fastest Results'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            {langUrdu ? (
              <span className="font-urdu text-base block text-slate-800 font-medium">
                بہترین نتائج کے لیے بتائے گئے طریقے کے مطابق باقاعدگی سے استعمال کریں۔
              </span>
            ) : (
              'Simple non-sticky daily ritual suitable for both men and women of all hair types.'
            )}
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {steps.map((st, i) => (
            <div
              key={i}
              className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <span className="text-3xl font-black text-emerald-700 font-mono block mb-3">
                  {st.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {langUrdu ? st.titleUrdu : st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {langUrdu ? st.descUrdu : st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expected Results Timeline */}
        <div className="bg-gradient-to-r from-emerald-50/70 via-slate-50 to-amber-50/40 border border-emerald-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-emerald-200/80">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                Expected Treatment Timeline
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                What Happens When You Use Nutri Herb
              </h3>
            </div>
            <button
              onClick={onOpenOrderModal}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0 shadow-xs"
            >
              <span>Start Your Routine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-xs sm:text-sm">
            <div className="space-y-2">
              <span className="font-mono text-emerald-800 font-black text-sm block">Days 1 to 14</span>
              <h4 className="text-slate-900 font-bold">Immediate Hair Fall Reduction</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Hair breakage drops by up to 75%. Flaky dandruff and scalp itching clear away completely as scalp sebum normalizes.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-emerald-800 font-black text-sm block">Days 15 to 30</span>
              <h4 className="text-slate-900 font-bold">Stronger Roots & Natural Shine</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Roots tighten, split ends repair, and hair strands gain healthy weight, moisture bounce, and silky smoothness.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-emerald-800 font-black text-sm block">Month 2 onwards</span>
              <h4 className="text-slate-900 font-bold">New Follicle Growth & Density</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-medium">
                Noticeable baby hair sprout on temple and crown patches. Hair gains thicker volume and luxurious density.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
