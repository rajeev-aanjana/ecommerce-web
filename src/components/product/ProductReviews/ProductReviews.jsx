import { Star } from "lucide-react";
import React from "react";

const ProductReviews = ({product}) => {
  return (
    <div className="reviews-section">
      <h2 className="reviews-heading">Customer Reviews</h2>

      <div className="reviews-grid">
        {product.reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-top">
              <h3>{review.reviewerName}</h3>

              <div className="review-rating">
                <Star size={16} fill="#facc15" color="#facc15" />

                <span>{review.rating}</span>
              </div>
            </div>

            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;
