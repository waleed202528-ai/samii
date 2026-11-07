import { PackageOption, ReviewItem } from '../types';

export const STORE_PHONE = '03138622533';
export const WHATSAPP_NUMBER = '923138622533'; // International format without +
export const STORE_NAME = 'Nutri Herb Herbal Hair Care';
export const BRAND_TAGLINE = 'Healthy Hair... Confident You!';
export const REGISTERED_LAB = 'The Remedies Herbal Pharmaceuticals Registered';
export const LAB_ADDRESS = 'Plot # 51, F.B. Commercial Area, Karachi-Pakistan';

export const SALE_PACKAGES: PackageOption[] = [
  {
    id: 'single',
    name: 'Single Bottle (Starter Pack)',
    nameUrdu: 'ایک بوتل (اسٹارٹر پیک)',
    bottles: 1,
    originalPrice: 1200,
    salePrice: 1050,
    savings: 150,
    tag: '11.11 Deal',
    tagUrdu: '11.11 آفر',
    popular: false,
    deliveryFee: 150,
  },
  {
    id: 'double',
    name: '2 Bottles (Growth Pack)',
    nameUrdu: '2 بوتلیں (گروتھ پیک)',
    bottles: 2,
    originalPrice: 2400,
    salePrice: 2000,
    savings: 400,
    tag: 'Free Delivery',
    tagUrdu: 'فری ڈلیوری',
    popular: true,
    deliveryFee: 0,
  },
  {
    id: 'triple',
    name: '3 Bottles (Family / Complete Course)',
    nameUrdu: '3 بوتلیں (مکمل کورس - میگا سیور)',
    bottles: 3,
    originalPrice: 3600,
    salePrice: 3000,
    savings: 600,
    tag: 'Best Value Deal',
    tagUrdu: 'سب سے زیادہ بچت',
    popular: false,
    deliveryFee: 0,
  },
];

export const REGULAR_PACKAGES: PackageOption[] = [
  {
    id: 'single',
    name: 'Single Bottle',
    nameUrdu: 'ایک بوتل',
    bottles: 1,
    originalPrice: 1200,
    salePrice: 1200,
    savings: 0,
    deliveryFee: 150,
  },
  {
    id: 'double',
    name: '2 Bottles Pack',
    nameUrdu: '2 بوتلیں پیک',
    bottles: 2,
    originalPrice: 2400,
    salePrice: 2300,
    savings: 100,
    tag: 'Free Delivery',
    tagUrdu: 'فری ڈلیوری',
    popular: true,
    deliveryFee: 0,
  },
  {
    id: 'triple',
    name: '3 Bottles Course',
    nameUrdu: '3 بوتلیں مکمل کورس',
    bottles: 3,
    originalPrice: 3600,
    salePrice: 3300,
    savings: 300,
    tag: 'Mega Savings',
    tagUrdu: 'بچت پیک',
    deliveryFee: 0,
  },
];

export const PRODUCT_IMAGES = [
  {
    src: '/assets/aistudio/oil3.jpg_c28e64e0.jpeg',
    title: '11.11 Mega Sale Banner',
    subtitle: 'Limited Time 11% Off Promotional Banner',
  },
  {
    src: '/assets/aistudio/WhatsApp_Image_2026-11-08_at_12.54.02_AM_c28e64e0.jpeg',
    title: 'Special 11.11 Mega Offer',
    subtitle: 'Original Formula with Registered Trademark',
  },
  {
    src: '/assets/aistudio/oil.jpg_76e913a5.jpeg',
    title: 'Herbal Hair Tonic with Box & Fresh Amla',
    subtitle: '100% Herbal Natural Botanical Extracts',
  },
  {
    src: '/assets/aistudio/oil2.jpg_0a14186f.jpeg',
    title: 'Original Bottle & Packaging Shot',
    subtitle: 'Laboratory Tested & Pharmaceutical Registered',
  },
];

export const KEY_BENEFITS = [
  {
    title: 'Stop Hair Fall Instantly',
    titleUrdu: 'بال گرنا فوری بند کرے',
    description: 'Nourishes the hair roots with pure botanical herbs to halt severe breakage and falling hair in 10-14 days.',
    descriptionUrdu: 'جڑوں کو مضبوط کر کے بالوں کا گرنا چند ہی دنوں میں روکتا ہے۔',
    icon: 'ShieldCheck',
  },
  {
    title: 'Promote Fast Hair Growth',
    titleUrdu: 'نئے بالوں کی قدرتی گروتھ',
    description: 'Awakens dormant follicles, activating new baby hairs and restoring thin, sparse areas on scalp.',
    descriptionUrdu: 'سوئے ہوئے مساموں کو بیدار کر کے نئے گھنے بال اگاتا ہے۔',
    icon: 'TrendingUp',
  },
  {
    title: 'Thicker, Healthier & Shinier Hair',
    titleUrdu: 'گھنے، چمکدار اور نرم بال',
    description: 'Restores keratin protein balance, eliminating dry frizzy ends, split ends, and dullness naturally.',
    descriptionUrdu: 'روکھے پن اور 2 منہ والے بالوں کا خاتمہ کر کے قدرتی چمک دیتا ہے۔',
    icon: 'Sparkles',
  },
  {
    title: 'Eradicate Dandruff & Scalp Itch',
    titleUrdu: 'خشکی، سکری اور خارش سے نجات',
    description: 'Natural antiseptic herbal compounds eradicate dry flakes, fungal irritation, and soothe sensitive scalps.',
    descriptionUrdu: 'سر کی جلد کو خشکی اور فنگس سے صاف اور تروتازہ رکھتا ہے۔',
    icon: 'Feather',
  },
];

export const HERBAL_INGREDIENTS = [
  {
    name: 'Fresh Amla (Indian Gooseberry)',
    nameUrdu: 'تازہ آملہ',
    role: 'Rich in Vitamin C & antioxidants; strengthens roots and stops premature graying.',
  },
  {
    name: 'Pure Shikakai',
    nameUrdu: 'خالص شیکاکائی',
    role: 'Natural cleanser that clarifies scalp sebum without stripping essential natural oils.',
  },
  {
    name: 'Reetha (Soapnut)',
    nameUrdu: 'ریٹھہ',
    role: 'Protects follicles against dandruff flakes and imparts natural volume and bounce.',
  },
  {
    name: 'Bhringraj (King of Herbs)',
    nameUrdu: 'بھرنگ راج',
    role: 'Stimulates micro-circulation in scalp capillaries to revive thin patches.',
  },
  {
    name: 'Pure Sweet Almond Oil',
    nameUrdu: 'بادام کا تیل',
    role: 'Deeply conditions shaft, seals split ends, and eliminates frizziness.',
  },
  {
    name: 'Kalonji (Black Seed Extract)',
    nameUrdu: 'کلونجی عرق',
    role: 'Rich in thymoquinone; heals weakened scalp barriers and stops hair shedding.',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Muhammad Farhan',
    city: 'Karachi (Gulshan-e-Iqbal)',
    rating: 5,
    date: '3 days ago',
    comment: 'Alhamdulillah zabardast result mila hai! Sirf 12 din me hair fall 80% kam hogaya hai. Delivery bhi 2 din me Karachi me mil gayi Cash on Delivery pr.',
    commentUrdu: 'الحمد للہ زبردست رزلٹ ملا ہے۔ صرف 12 دن میں بال گرنا کافی حد تک رک گئے۔ 11.11 آفر میں 1050 کا لیا تھا، بالکل اوریجنل ہے!',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Ayesha Malik',
    city: 'Lahore (DHA)',
    rating: 5,
    date: '5 days ago',
    comment: 'I was skeptical first, but the herbal scent is genuine and non-sticky. My hair feels so soft and I can see tiny baby hair growing on my temples!',
    commentUrdu: 'بہت بہترین آئل ہے۔ نہ زیادہ چپکتا ہے اور بال بہت نرم اور شائنی ہو گئے ہیں۔ 2 بوٹلز والا پیک آرڈر کیا تھا۔',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Tariq Mehmood',
    city: 'Islamabad (G-11)',
    rating: 5,
    date: '1 week ago',
    comment: 'Original product by The Remedies Pharmaceuticals. Received parcel in Islamabad, opened and checked before paying cash. Highly recommended seller!',
    commentUrdu: 'پیکنگ بہت محفوظ تھی اور اصل کمپنی کی رجسٹریشن والی ہے۔ واٹس ایپ پر آرڈر دیا تھا، فورا کنفرم ہو گیا۔',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Zainab Bibi',
    city: 'Rawalpindi',
    rating: 5,
    date: '1 week ago',
    comment: 'Mera post-covid hair loss bht ziada tha. Is oil ne sach me bacha liya. 3 bottles wala course use kr rahi hu.',
    commentUrdu: 'بالوں کے گرنے کے لیے بہترین ٹانک ہے۔ بال گہرے اور گھنے ہو رہے ہیں۔ شکریہ!',
    verified: true,
  },
  {
    id: 'rev-5',
    name: 'Kashif Ali',
    city: 'Faisalabad',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Number 03138622533 pr baat hui thi, bhai ne bohot achay se guide kiya. 1050 Rs me bilkul worth it product hai.',
    commentUrdu: 'ڈلیوری بروقت اور بھائی نے واٹس ایپ پر بہت اچھے سے طریقہ استعمال سمجھایا۔ زبردست کوالٹی۔',
    verified: true,
  },
];

export const MAJOR_PAKISTAN_CITIES = [
  'Karachi',
  'Lahore',
  'Islamabad',
  'Rawalpindi',
  'Faisalabad',
  'Multan',
  'Peshawar',
  'Quetta',
  'Sialkot',
  'Gujranwala',
  'Hyderabad',
  'Abbottabad',
  'Bahawalpur',
  'Sargodha',
  'Sukkur',
  'Larkana',
  'Mirpur (AJK)',
  'Muzaffarabad',
  'Other City / Village',
];
