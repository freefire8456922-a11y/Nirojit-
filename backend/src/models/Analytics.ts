import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    totalVisits: { type: Number, default: 0 },
    uniqueVisitors: { type: Number, default: 0 },
    pageViews: mongoose.Schema.Types.Mixed,
    productViews: { type: Number, default: 0 },
    cartAdditions: { type: Number, default: 0 },
    inquiries: { type: Number, default: 0 },
    topProducts: [{ productId: mongoose.Schema.Types.ObjectId, views: Number }],
    deviceType: {
      desktop: { type: Number, default: 0 },
      mobile: { type: Number, default: 0 },
      tablet: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

analyticsSchema.index({ date: -1 });

export const Analytics = mongoose.model('Analytics', analyticsSchema);