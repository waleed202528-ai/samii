/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductGallery } from './components/ProductGallery';
import { PackageSelector } from './components/PackageSelector';
import { BenefitsIngredients } from './components/BenefitsIngredients';
import { UsageGuide } from './components/UsageGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { OrderFormModal } from './components/OrderFormModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { AdminOrdersModal } from './components/AdminOrdersModal';
import { FloatingCtaBar } from './components/FloatingCtaBar';

import { SALE_PACKAGES, REGULAR_PACKAGES } from './data/productData';
import { PackageOption, CustomerOrder } from './types';
import { is1111PromoActive, set1111PromoActive, getSavedOrders } from './utils/orderStorage';

export default function App() {
  // 11.11 Mega Sale state (default: active for November 11.11 as user requested)
  const [isSaleActive, setIsSaleActive] = useState<boolean>(true);
  const [langUrdu, setLangUrdu] = useState<boolean>(false);

  // Package & Order Modals
  const packages = isSaleActive ? SALE_PACKAGES : REGULAR_PACKAGES;
  const [selectedPackage, setSelectedPackage] = useState<PackageOption>(packages[0]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [placedOrder, setPlacedOrder] = useState<CustomerOrder | null>(null);
  const [savedOrders, setSavedOrders] = useState<CustomerOrder[]>([]);

  // Initialize
  useEffect(() => {
    setIsSaleActive(is1111PromoActive());
    setSavedOrders(getSavedOrders());
  }, []);

  // Update selected package when sale state changes
  useEffect(() => {
    const activeList = isSaleActive ? SALE_PACKAGES : REGULAR_PACKAGES;
    const match = activeList.find((p) => p.id === selectedPackage.id) || activeList[0];
    setSelectedPackage(match);
  }, [isSaleActive]);

  const handleToggleSale = (active: boolean) => {
    setIsSaleActive(active);
    set1111PromoActive(active);
  };

  const handleOpenOrderWithPackage = (pkg?: PackageOption) => {
    if (pkg) {
      setSelectedPackage(pkg);
    }
    setIsOrderModalOpen(true);
  };

  const handleOrderSuccess = (order: CustomerOrder) => {
    setPlacedOrder(order);
    setSavedOrders(getSavedOrders());
  };

  const handleClearOrders = () => {
    localStorage.removeItem('nutriherb_customer_orders_v1');
    setSavedOrders([]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 11.11 Promotional Banner with countdown and sale toggle */}
      <TopBanner
        isSaleActive={isSaleActive}
        onToggleSale={handleToggleSale}
        langUrdu={langUrdu}
        onToggleLang={() => setLangUrdu(!langUrdu)}
      />

      {/* Top Bar Contract Navigation */}
      <Navbar
        onOpenOrderModal={() => handleOpenOrderWithPackage()}
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        savedOrdersCount={savedOrders.length}
        langUrdu={langUrdu}
      />

      <main className="flex-1">
        {/* VIP Hero Section with real packaging photos & 11.11 price highlight */}
        <HeroSection
          isSaleActive={isSaleActive}
          onOpenOrderModal={() => handleOpenOrderWithPackage()}
          langUrdu={langUrdu}
        />

        {/* Real Product Photos Gallery (All 4 authentic uploaded images) */}
        <ProductGallery langUrdu={langUrdu} />

        {/* Deal Bundles (1 bottle Rs. 1,050, 2 bottles Rs. 2,000, 3 bottles Rs. 3,000) */}
        <PackageSelector
          packages={packages}
          isSaleActive={isSaleActive}
          selectedPackageId={selectedPackage.id}
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onOpenOrderModal={(pkg) => handleOpenOrderWithPackage(pkg)}
          langUrdu={langUrdu}
        />

        {/* Benefits & Botanical Ingredients (Amla, Sikakai, Reetha, Bhringraj) */}
        <BenefitsIngredients langUrdu={langUrdu} />

        {/* Easy Application Guide (طریقہ استعمال) & Results timeline */}
        <UsageGuide
          langUrdu={langUrdu}
          onOpenOrderModal={() => handleOpenOrderWithPackage()}
        />

        {/* Customer Reviews & Ratings */}
        <ReviewsSection langUrdu={langUrdu} />

        {/* Frequently Asked Questions */}
        <FaqSection langUrdu={langUrdu} />
      </main>

      {/* Footer with Pharmacy details and Customer Support */}
      <Footer
        onOpenAdminModal={() => setIsAdminModalOpen(true)}
        savedOrdersCount={savedOrders.length}
        langUrdu={langUrdu}
      />

      {/* Floating Quick COD & WhatsApp Action Bar for Mobile */}
      <FloatingCtaBar
        isSaleActive={isSaleActive}
        onOpenOrderModal={() => handleOpenOrderWithPackage()}
        langUrdu={langUrdu}
      />

      {/* Fast Cash On Delivery Checkout Modal */}
      <OrderFormModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedPackage={selectedPackage}
        isSaleActive={isSaleActive}
        onOrderSuccess={handleOrderSuccess}
        langUrdu={langUrdu}
      />

      {/* Order Confirmation Receipt Modal */}
      <OrderSuccessModal
        order={placedOrder}
        onClose={() => setPlacedOrder(null)}
        langUrdu={langUrdu}
      />

      {/* Store Owner Orders Management Dashboard */}
      <AdminOrdersModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        orders={savedOrders}
        onClearOrders={handleClearOrders}
      />
    </div>
  );
}
