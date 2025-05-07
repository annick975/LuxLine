import React, { useState } from "react";
import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
  onSelectProduct?: (product: Product) => void;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProduct,
  allProducts,
  onSelectProduct,
}) => {
  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const [isScrollRight, setIsScrollRight] = useState(true);

  // Get related products (same category, different ID)
  const relatedProducts = allProducts.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id
  );

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    setIsScrollLeft(container.scrollLeft > 0);
    setIsScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const scrollToPosition = (scrollOffset: number) => {
    const container = document.getElementById("related-products-container");
    if (container) {
      container.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white relative inline-block">
          Related Products
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-400 rounded"></span>
        </h2>

        <div className="flex space-x-2">
          <button
            onClick={() => scrollToPosition(-300)}
            className={`p-2 rounded-full ${
              isScrollLeft
                ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
            } 
              transition-all duration-300`}
            disabled={!isScrollLeft}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollToPosition(300)}
            className={`p-2 rounded-full ${
              isScrollRight
                ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900"
                : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed"
            } 
              transition-all duration-300`}
            disabled={!isScrollRight}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="related-products-container"
        className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
        onScroll={handleScroll}
      >
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[260px] md:min-w-[300px] transition-transform duration-300 hover:scale-[1.03]"
            onClick={() => onSelectProduct && onSelectProduct(product)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Scroll shadow indicators */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none transition-opacity duration-300 ${
          isScrollLeft ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none transition-opacity duration-300 ${
          isScrollRight ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};
