import React, { useState } from 'react';
import { CUSTOMER_REVIEWS } from '../data/productData';
import { ReviewItem } from '../types';
import { Star, CheckCircle, MessageSquare, ThumbsUp } from 'lucide-react';

interface ReviewsSectionProps {
  langUrdu: boolean;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ langUrdu }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>(CUSTOMER_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: newName.trim(),
      city: newCity.trim() || 'Pakistan',
      rating: newRating,
      date: 'Just now',
      comment: newComment.trim(),
      commentUrdu: newComment.trim(),
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setNewName('');
    setNewCity('');
    setNewComment('');
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading & Stat Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
              {langUrdu ? 'مطمئن کسٹمرز کی رائے' : 'Real Customer Experiences'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              {langUrdu ? 'کسٹمرز کے ریویوز اور فیڈ بیک' : 'Rated 4.9/5 by 1,200+ Happy Customers'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Verified buyers from Karachi, Lahore, Islamabad, Faisalabad and across Pakistan.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs text-slate-800 font-bold">4.9 Overall Score</span>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs rounded-xl border border-slate-300 shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>{showForm ? 'Close Form' : 'Write a Review'}</span>
            </button>
          </div>
        </div>

        {/* Optional Review Form Drawer */}
        {showForm && (
          <div className="mb-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-md max-w-xl">
            <h3 className="text-base font-bold text-slate-900 mb-3">Share Your Experience with Nutri Herb</h3>
            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Thank you! Your verified review has been published.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Asad Khan"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 font-semibold mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      placeholder="e.g. Karachi"
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Rating</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-emerald-600"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars (Excellent Results)</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                    <option value={3}>⭐⭐⭐ 3 Stars (Satisfied)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Your Feedback / Review</label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tell us about the scent, texture, and hair fall results..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-slate-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg transition-colors text-xs"
                >
                  Publish Review
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Star rating & date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-medium">
                  "{langUrdu ? rev.commentUrdu : rev.comment}"
                </p>
              </div>

              {/* Author & Verification badge */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{rev.name}</span>
                  <span className="text-[11px] text-slate-500">{rev.city}</span>
                </div>

                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3 text-emerald-600" />
                    <span>Verified Buyer</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
