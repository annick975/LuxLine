import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";
import { ProductCard } from "../components/ProductCard";
import { ReviewList } from "../components/ReviewList";
import { useApp } from "../context/AppContext";
import type { Product, Review } from "../types/product";

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | undefined>(
    state.products.find((p) => p.id === id)
  );
  const [activeTab, setActiveTab] = useState("description");
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get the product
  useEffect(() => {
    // If id changes or product not found, try to find it
    if (!product || product.id !== id) {
      const foundProduct = state.products.find((p) => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        // Product not found, redirect to products page after a delay
        setTimeout(() => {
          navigate("/products");
        }, 2000);
      }
    }

    // Simulate loading
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id, state.products, navigate, product]);

  // Get related products (same category)
  useEffect(() => {
    if (product) {
      const related = state.products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [product, state.products]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handler for adding a review
  const handleAddReview = (review: Omit<Review, "id" | "date">) => {
    if (product) {
      dispatch({
        type: "ADD_REVIEW",
        payload: {
          productId: product.id,
          review,
        },
      });

      // Update the local product state to reflect the new review immediately
      setProduct((prevProduct) => {
        if (!prevProduct) return prevProduct;

        const currentDate = new Date().toISOString().split("T")[0]; // Format as YYYY-MM-DD
        const newReview: Review = {
          id: crypto.randomUUID(), // This is temporary and will be replaced by the server
          ...review,
          date: currentDate,
        };

        return {
          ...prevProduct,
          reviews: [...prevProduct.reviews, newReview],
        };
      });
    }
  };

  if (!product && !isLoading) {
    // Product not found UI
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-gray-400 mb-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link
            to="/"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
          <Link
            to="/products"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Products
          </Link>
          {product && (
            <>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <Link
                to={`/products?category=${product.category.toLowerCase()}`}
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {product.category}
              </Link>
              <span className="mx-2 text-gray-500 dark:text-gray-400">/</span>
              <span className="text-gray-700 dark:text-gray-300">
                {product.name}
              </span>
            </>
          )}
        </nav>

        {isLoading ? (
          // Loading skeleton
          <div className="animate-pulse">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96"></div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            </div>
          </div>
        ) : (
          product && (
            <>
              {/* Product detail section */}
              <ProductDetail product={product} />

              {/* Product tabs (Description, Specs, Reviews) */}
              <div className="mt-16">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab("description")}
                      className={`py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors ${
                        activeTab === "description"
                          ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                          : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      }`}
                    >
                      Description
                    </button>
                    <button
                      onClick={() => setActiveTab("specifications")}
                      className={`py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors ${
                        activeTab === "specifications"
                          ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                          : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      }`}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => setActiveTab("reviews")}
                      className={`py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors ${
                        activeTab === "reviews"
                          ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                          : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                      }`}
                    >
                      Reviews ({product.reviews.length})
                    </button>
                  </nav>
                </div>

                <div className="py-6">
                  {activeTab === "description" && (
                    <div className="prose prose-blue max-w-none dark:prose-invert">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {product.description}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                      </p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                        Product Features
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>
                          Premium quality materials for durability and comfort
                        </li>
                        <li>
                          Designed with attention to detail and modern
                          aesthetics
                        </li>
                        <li>Versatile for various occasions and settings</li>
                        <li>Easy to maintain and care for</li>
                        <li>Backed by our satisfaction guarantee</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === "specifications" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Technical Specifications
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            General
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Brand
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                LuxLine
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Model
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                {product.name}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Released
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                {product.createdAt
                                  ? new Date(product.createdAt).getFullYear()
                                  : "N/A"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Warranty
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                1 Year
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Physical
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Dimensions
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                Varies by size
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Weight
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                0.5 kg
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Materials
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                Premium quality
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">
                                Colors
                              </span>
                              <span className="text-gray-900 dark:text-white font-medium">
                                Multiple options
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          Shipping & Returns
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              Shipping
                            </span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              Worldwide
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              Delivery Time
                            </span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              3-5 Business Days
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              Returns
                            </span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              30 Days
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              Warranty
                            </span>
                            <span className="text-gray-900 dark:text-white font-medium">
                              1 Year Limited
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "reviews" && (
                    <div>
                      <ReviewList
                        reviews={product.reviews}
                        onAddReview={handleAddReview}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Related products */}
              {relatedProducts.length > 0 && (
                <div className="mt-16">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                    You May Also Like
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedProducts.map((relatedProduct) => (
                      <ProductCard
                        key={relatedProduct.id}
                        product={relatedProduct}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Recently viewed */}
              <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Recently Viewed
                  </h2>
                  <Link
                    to="/products"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    View All
                  </Link>
                </div>

                <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4">
                  {state.products.slice(0, 4).map((recentProduct) => (
                    <div key={recentProduct.id} className="flex-none w-64">
                      <Link
                        to={`/products/${recentProduct.id}`}
                        className="block group"
                      >
                        <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                          <img
                            src={recentProduct.image}
                            alt={recentProduct.name}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="mt-2 text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {recentProduct.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          ${recentProduct.price.toFixed(2)}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </main>
  );
};
