import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    type: { type: String, enum: ['discount', 'festival', 'emi', 'cashback'], required: true },
    discountType: { type: String, enum: ['percentage', 'fixed'], required: true },
    discountValue: { type: Number, required: true },
    applicableCategories: [mongoose.Schema.Types.ObjectId],
    applicableProducts: [mongoose.Schema.Types.ObjectId],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    minPurchaseAmount: { type: Number, default: 0 },
    maxDiscount: Number,
    couponCode: String,
    usageLimit: Number,
    usageCount: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    image: String,
  },
  { timestamps: true }
);

offerSchema.index({ startDate: 1, endDate: 1 });
offerSchema.index({ couponCode: 1 });

export const Offer = mongoose.model('Offer', offerSchema);