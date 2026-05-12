import {
  Heart,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../../store/cartSlice";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  return (
    <>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h1 className="product-title">{product.title}</h1>
        <p className="product-brand">By {product.brand}</p>
        <div className="product-rating">
          <div className="rating-box">
            <Star size={18} fill="#facc15" color="#facc15" />

            <span>{product.rating}</span>
          </div>

          <span className="review-count">
            ({product.reviews.length} Reviews)
          </span>
        </div>

        <div className="product-price-wrapper">
          <h2 className="discount-price">${discountedPrice}</h2>

          <span className="original-price">${product.price}</span>
          <span className="discount-badge">
            {product.discountPercentage.toFixed(0)}% OFF
          </span>
        </div>

        <p className="product-description">{product.description}</p>

        <p
          className={`stock-status ${
            product.stock > 0 ? "in-stock" : "out-stock"
          }`}
        >
          {product.stock > 0 ? "In Stock" : "Out Of Stock"}
        </p>

        <div className="product-actions">
          <button
            onClick={() => dispatch(addCartItem(product))}
            className="add-cart-btn"
          >
            <ShoppingBag size={20} />
            Add To Cart
          </button>

          <button className="wishlist-btn">
            <Heart className="ml-5" size={20} />
          </button>
        </div>

        <div className="extra-info">
          <div className="info-item">
            <Truck size={20} />

            <span>{product.shippingInformation}</span>
          </div>

          <div className="info-item">
            <ShieldCheck size={20} />

            <span>{product.warrantyInformation}</span>
          </div>

          <div className="info-item">
            <RotateCcw size={20} />

            <span>{product.returnPolicy}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
