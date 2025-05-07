import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { Product } from "../types/product";
import { ProductCard } from "../components/ProductCard";
import { useApp } from "../context/AppContext";

export const ProductsPage: React.FC = () => {
  const { state } = useApp();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const saleParam = queryParams.get("sale");

  // State for filters and products
  const [activeCategory, setActiveCategory] = useState<string>(
    categoryParam || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(state.products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all unique categories from products
  const categories = [
    "all",
    ...Array.from(
      new Set(state.products.map((product) => product.category.toLowerCase()))
    ),
  ];

  // Calculate price range from all products
  useEffect(() => {
    const prices = state.products.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    setPriceRange({ min: minPrice, max: maxPrice });
  }, [state.products]);

  // Update active category from URL parameter when it changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam.toLowerCase());
    }
  }, [categoryParam]);

  // Filter products when filters or products change
  useEffect(() => {
    // Start with all products
    let result = [...state.products];

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter(
        (product) => product.category.toLowerCase() === activeCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Filter by sale if saleParam exists
    if (saleParam === "true") {
      result = result.filter((product) => product.discountPercentage > 0);
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
      case "rating":
        result.sort((a, b) => {
          const aRating =
            a.reviews.reduce((sum, review) => sum + review.rating, 0) /
              a.reviews.length || 0;
          const bRating =
            b.reviews.reduce((sum, review) => sum + review.rating, 0) /
              b.reviews.length || 0;
          return bRating - aRating;
        });
        break;
      default: // 'featured'
        // Assume products are already sorted by featured status
        break;
    }

    setFilteredProducts(result);
  }, [activeCategory, searchQuery, sortBy, state.products, saleParam]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero banner */}
      <div className="bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Collection
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Explore our handpicked selection of luxury products, curated for the
            discerning customer.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <Link
                to="/"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 text-gray-400 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-gray-800 dark:text-gray-200">Products</span>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {activeCategory === "all"
                ? "All Products"
                : activeCategory.charAt(0).toUpperCase() +
                  activeCategory.slice(1)}
              {saleParam === "true" && " on Sale"}
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"} available
            </p>
          </div>

          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 mb-4 bg-gray-100 dark:bg-gray-800 rounded"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clipRule="evenodd"
              />
            </svg>
            {isFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside
              className={`md:w-64 flex-shrink-0 ${
                isFilterOpen ? "block" : "hidden md:block"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-20">
                {/* Search */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Search
                  </h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <svg
                      className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <button
                          className={`w-full text-left p-2 rounded-md transition-colors ${
                            activeCategory === category
                              ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                          }`}
                          onClick={() => setActiveCategory(category)}
                        >
                          {category === "all"
                            ? "All Categories"
                            : category.charAt(0).toUpperCase() +
                              category.slice(1)}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>${priceRange.min}</span>
                      <span>${priceRange.max}</span>
                    </div>
                    {/* Price slider could be added here */}
                    <div className="flex space-x-4 mt-2">
                      <button
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setSortBy("price-low")}
                      >
                        Low to High
                      </button>
                      <button
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() => setSortBy("price-high")}
                      >
                        High to Low
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>

                {/* Reset Filters Button */}
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                    setSortBy("featured");
                  }}
                  className="w-full mt-6 py-2 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="py-12 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-gray-400 mb-4"
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
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try changing your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                      setSortBy("featured");
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
