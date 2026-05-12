import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import "./ProductDetail.css";
import ProductReviews from "../../components/product/ProductReviews/ProductReviews";
import ProductInfo from "../../components/product/ProductInfo/ProductInfo";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

  const [mainImage, setMainImage] = useState("");

  const { id } = useParams();

  // FETCH PRODUCT
  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await res.json();
      setProduct(json);
      setMainImage(json.thumbnail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!product) {
    return <div className="product-loading">Loading...</div>;
  }

  return (
    <section className="product-detail">
      <div className="product-detail-container">
        <div className="product-gallery">
          <div className="product-main-image">
            <img src={mainImage} alt={product.title} />
          </div>

          {/* THUMBNAILS */}
          <div className="product-thumbnails">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`thumbnail-btn ${
                  mainImage === image ? "active-thumbnail" : ""
                }`}
              >
                <img src={image} alt="product-thumbnail" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <ProductInfo product={product} />
      </div>

      {/* REVIEWS */}
      <ProductReviews product={product} />
    </section>
  );
};

export default ProductDetail;
