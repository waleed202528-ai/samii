import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { STORE_PHONE, WHATSAPP_NUMBER } from '../data/productData';

interface FaqSectionProps {
  langUrdu: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ langUrdu }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'کیش آن ڈلیوری کا طریقہ کیا ہے؟ (How does Cash on Delivery work?)',
      a: 'آپ ویب سائٹ یا واٹس ایپ کے ذریعے آرڈر بک کروائیں۔ رائڈر آپ کے دیے گئے پتے پر پارسل لائے گا۔ آپ پارسل کھول کر چیک کریں اور پھر رقم ادا کریں۔ کوئی ایڈوانس پیمنٹ دینے کی ضرورت نہیں۔',
    },
    {
      q: 'ڈلیوری کتنے دنوں میں مل جائے گی؟ (How many days for delivery?)',
      a: 'کراچی میں 1 سے 2 دن، لاہور، اسلام آباد اور راولپنڈی میں 2 سے 3 دن جبکہ پاکستان کے دیگر تمام شہروں اور دیہات میں 3 سے 4 دن کے اندر پارسل مل جاتا ہے۔',
    },
    {
      q: 'کیا اس کے کوئی سائیڈ ایفیکٹس ہیں؟ (Are there any side effects?)',
      a: 'بالکل نہیں! یہ 100% قدرتی جڑی بوٹیوں (آملہ، شیکاکائی، ریٹھہ، بادام روغن اور بھرنگ راج) سے تیار کردہ رجسٹرڈ فارمولا ہے۔ اس میں کوئی کیمیکل، پارابین یا نقصان دہ اجزاء شامل نہیں ہیں۔',
    },
    {
      q: 'کیا یہ مرد اور خواتین دونوں کے لیے موزوں ہے؟ (Suitable for both men & women?)',
      a: 'جی ہاں، یہ مردوں اور خواتین دونوں کے لیے یکساں مفید ہے۔ مردوں میں بالوں کا پتلا پن اور گنج پن جبکہ خواتین میں روکھا پن، دو منہ والے بال اور ہیئر فال فوری کنٹرول کرتا ہے۔',
    },
    {
      q: '11.11 سیل کی قیمت کتنی ہے؟ (What is the 11.11 Sale Price?)',
      a: '11.11 میگا سیل کے دوران ایک بوتل صرف 1,050 روپے میں (عام قیمت 1,200 روپے)، 2 بوتلیں پیک 2,000 روپے (فری ڈلیوری) اور 3 بوتلیں میگا سیور پیک صرف 3,000 روپے (فری ڈلیوری) میں دستیاب ہے۔',
    },
    {
      q: 'اگر کوئی سوال ہو یا آرڈر تبدیل کرنا ہو تو کس سے رابطہ کریں؟',
      a: `آپ براہ راست ہمارے نمبر ${STORE_PHONE} پر کال کر سکتے ہیں یا واٹس ایپ پر 24/7 میسج کر سکتے ہیں۔ ہماری کسٹمر سپورٹ فورا رہنمائی کرے گی۔`,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>{langUrdu ? 'اکثر پوچھے جانے والے سوالات' : 'Frequently Asked Questions'}</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
            {langUrdu ? 'آپ کے سوالات اور ہمارے جوابات' : 'Everything You Need to Know'}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200 bg-white font-medium">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-slate-50 to-amber-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <span className="font-bold text-slate-900 text-sm block">Still have questions?</span>
            <span className="text-xs text-slate-600">Speak directly with our hair care specialist</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Desk</span>
            </a>
            <a
              href={`tel:${STORE_PHONE}`}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors border border-slate-300 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{STORE_PHONE}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
