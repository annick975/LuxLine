import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useApp } from "../context/AppContext";

interface ProductCardProps {
  product: Product;
  fullWidth?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  fullWidth = false,
}) => {
  const { dispatch } = useApp();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the add to cart button
    e.stopPropagation(); // Prevent event bubbling
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const renderRating = () => {
    if (product.reviews.length === 0) return null;

    const averageRating =
      product.reviews.reduce((sum, review) => sum + review.rating, 0) /
      product.reviews.length;

    return (
      <div className="flex items-center mt-1 mb-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(averageRating)
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
          ({product.reviews.length})
        </span>
      </div>
    );
  };

  return (
    <Link 
      to={`/products/${product.id}`}
      className={`block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-xl transform -translate-y-1" : ""
      } ${fullWidth ? "w-full" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden group">
        <div className="relative pb-[75%]">
          <img
            src={product.image}
            alt={product.name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Category tag */}
        <div className="absolute top-2 left-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100/80 text-blue-800 dark:bg-blue-900/80 dark:text-blue-300 backdrop-blur-sm">
            {product.category}
          </span>
        </div>

        {/* Quick actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button 
            className="bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button 
            className="bg-white/90 dark:bg-gray-800/90 p-1.5 rounded-full shadow-md hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700 dark:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </button>
        </div>

        {/* Add to cart button that appears on hover */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform ${
            isHovered ? "translate-y-0" : "translate-y-full"
          } transition-transform duration-300`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-white dark:bg-gray-200 hover:bg-blue-50 dark:hover:bg-gray-100 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center text-sm"
          >
            <svg
              className="w-5 h-5 mr-2 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {product.name}
        </h3>

        {renderRating()}

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.price > 100 && (
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
