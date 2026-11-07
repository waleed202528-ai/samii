import React, { useState } from 'react';
import { CustomerOrder } from '../types';
import { buildWhatsAppOrderUrl } from '../utils/orderStorage';
import { X, MessageCircle, Phone, Download, Trash2, CheckCircle2, Clock, Search } from 'lucide-react';

interface AdminOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: CustomerOrder[];
  onClearOrders: () => void;
}

export const AdminOrdersModal: React.FC<AdminOrdersModalProps> = ({
  isOpen,
  onClose,
  orders,
  onClearOrders,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const filtered = orders.filter(
    (o) =>
      o.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.phone.includes(searchTerm) ||
      o.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCSV = () => {
    if (orders.length === 0) return;
    const headers = ['Order ID', 'Date', 'Customer Name', 'Phone', 'City', 'Address', 'Package', 'Bottles', 'Total PKR', 'Notes'];
    const rows = orders.map((o) => [
      o.id,
      new Date(o.createdAt).toLocaleString(),
      `"${o.customerName}"`,
      `"${o.phone}"`,
      `"${o.city}"`,
      `"${o.address.replace(/"/g, '""')}"`,
      `"${o.packageName}"`,
      o.bottles,
      o.totalPrice,
      `"${(o.notes || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `nutriherb_orders_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-4 flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-4 text-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Orders Management Portal (Store Owner View)
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              All website checkout orders saved in local memory. Total Orders: {orders.length}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search by name, phone or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={exportCSV}
              disabled={orders.length === 0}
              className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg flex items-center gap-1.5 transition-colors font-bold disabled:opacity-50 shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-amber-500" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear stored orders?')) {
                  onClearOrders();
                }
              }}
              disabled={orders.length === 0}
              className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-300 rounded-lg flex items-center gap-1.5 transition-colors font-bold disabled:opacity-50"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Log</span>
            </button>
          </div>
        </div>

        {/* Orders List Table */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              <Clock className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="font-bold text-slate-700">No orders found yet.</p>
              <p className="text-xs text-slate-500 mt-1">
                When a customer submits the checkout form on this link, it will show up here immediately!
              </p>
            </div>
          ) : (
            filtered.map((order) => {
              const waUrl = buildWhatsAppOrderUrl(order);
              return (
                <div
                  key={order.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-all text-xs space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-emerald-800">#{order.id}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-500 font-mono">
                        {new Date(order.createdAt).toLocaleDateString()} {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-slate-900 text-sm">
                        Rs. {order.totalPrice.toLocaleString()} (COD)
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold">Customer:</span>
                      <span className="font-bold text-slate-900 block">{order.customerName}</span>
                      <span className="text-slate-700 font-mono">{order.phone}</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold">Destination:</span>
                      <span className="font-bold text-emerald-700 block">{order.city}</span>
                      <span className="text-slate-700 line-clamp-2">{order.address}</span>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-[11px] font-semibold">Package:</span>
                      <span className="text-slate-900 block font-bold">{order.packageName}</span>
                      {order.notes && (
                        <span className="text-amber-700 block italic text-[11px] font-medium">
                          Note: {order.notes}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions: Direct WhatsApp & Call buttons */}
                  <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100">
                    <a
                      href={`tel:${order.phone}`}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-lg flex items-center gap-1 font-bold transition-colors"
                    >
                      <Phone className="w-3 h-3 text-amber-500" />
                      <span>Call Customer</span>
                    </a>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center gap-1 font-bold transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Open WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
