import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    title: String,
    comment: String,
    pros: [String],
    cons: [String],
    images: [String],
    isVerified: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    helpfulCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

reviewSchema.index({ productId: 1 });
reviewSchema.index({ isApproved: 1 });

export const Review = mongoose.model('Review', reviewSchema);