export interface PackageOption {
  id: string;
  name: string;
  nameUrdu: string;
  bottles: number;
  originalPrice: number;
  salePrice: number;
  tag?: string;
  tagUrdu?: string;
  popular?: boolean;
  savings: number;
  deliveryFee: number; // 0 for free
}

export interface CustomerOrder {
  id: string;
  customerName: string;
  phone: string;
  city: string;
  address: string;
  packageId: string;
  packageName: string;
  bottles: number;
  totalPrice: number;
  deliveryFee: number;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'dispatched' | 'cancelled';
}

export interface ReviewItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  commentUrdu: string;
  verified: boolean;
}
