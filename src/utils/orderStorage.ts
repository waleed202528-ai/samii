import { CustomerOrder } from '../types';
import { WHATSAPP_NUMBER } from '../data/productData';

const ORDERS_KEY = 'nutriherb_customer_orders_v1';
const PROMO_KEY = 'nutriherb_11_11_active';

export function getSavedOrders(): CustomerOrder[] {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load orders from localStorage', err);
    return [];
  }
}

export function saveOrderToStorage(order: CustomerOrder): void {
  try {
    const current = getSavedOrders();
    const updated = [order, ...current];
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save order to localStorage', err);
  }
}

export function generateOrderId(): string {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `HT-${randomNum}`;
}

export function buildWhatsAppOrderUrl(order: CustomerOrder): string {
  const message = `🌿 *NEW ORDER: NUTRI HERB HAIR TONIC* 🌿
━━━━━━━━━━━━━━━━━━━━━
📦 *Order ID:* #${order.id}
👤 *Name:* ${order.customerName}
📱 *Phone:* ${order.phone}
📍 *City:* ${order.city}
🏠 *Delivery Address:* ${order.address}
🛍️ *Package:* ${order.packageName} (${order.bottles} Bottle${order.bottles > 1 ? 's' : ''})
💵 *Total Amount:* Rs. ${order.totalPrice.toLocaleString()} (Cash On Delivery)
🚚 *Delivery:* ${order.deliveryFee === 0 ? 'FREE DELIVERY' : `Rs. ${order.deliveryFee}`}
${order.notes ? `📝 *Special Note:* ${order.notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━━
Assalam-o-Alaikum! Please confirm my order and share parcel tracking once dispatched. Shukriya!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildDirectWhatsAppInquiryUrl(customText?: string): string {
  const defaultText = `Assalam-o-Alaikum! Mujhe Nutri Herb Herbal Hair Tonic ke bare me maloomat chahiye aur 11.11 offer se order karna hai.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customText || defaultText)}`;
}

export function is1111PromoActive(): boolean {
  // Check override first
  const stored = localStorage.getItem(PROMO_KEY);
  if (stored !== null) {
    return stored === 'true';
  }
  // Otherwise check if current month is November (month index 10 in JS: Jan=0...Nov=10)
  const now = new Date();
  return now.getMonth() === 10; // November
}

export function set1111PromoActive(active: boolean): void {
  localStorage.setItem(PROMO_KEY, active ? 'true' : 'false');
}
