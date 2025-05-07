import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useApp } from "../context/AppContext";

export const HomePage: React.FC = () => {
  const { state, dispatch } = useApp();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Get featured products (first 4 products)
  const featuredProducts = state.products.slice(0, 4);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <span className="block">Discover Luxury at</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Your Fingertips
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-10 animate-fade-in animation-delay-200">
              Elevate your lifestyle with premium products curated for the
              discerning customer.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-400">
              <Link
                to="/products"
                className="px-8 py-4 rounded-md bg-white text-blue-900 font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
              >
                Shop Now
              </Link>
              <a
                href="#featured"
                className="px-8 py-4 rounded-md bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Explore Featured
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full h-16">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0 48L48 42.6667C96 37.3333 192 26.6667 288 21.3333C384 16 480 16 576 21.3333C672 26.6667 768 37.3333 864 37.3333C960 37.3333 1056 26.6667 1152 21.3333C1248 16 1344 16 1392 16H1440V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V48Z"
              fill="currentColor"
              className="text-white dark:text-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fashion Category */}
            <Link to="/products?category=fashion" className="group">
              <div className="relative overflow-hidden rounded-lg h-64">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Fashion</h3>
                  <p className="text-white/80 mt-2">
                    Premium apparel and accessories
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    30+ Products
                  </span>
                </div>
              </div>
            </Link>

            {/* Tech Category */}
            <Link to="/products?category=tech" className="group">
              <div className="relative overflow-hidden rounded-lg h-64">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Tech</h3>
                  <p className="text-white/80 mt-2">Cutting-edge electronics</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    25+ Products
                  </span>
                </div>
              </div>
            </Link>

            {/* Home Category */}
            <Link to="/products?category=home" className="group">
              <div className="relative overflow-hidden rounded-lg h-64">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Home</h3>
                  <p className="text-white/80 mt-2">Luxurious home décor</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    20+ Products
                  </span>
                </div>
              </div>
            </Link>

            {/* Beauty Category */}
            <Link to="/products?category=beauty" className="group">
              <div className="relative overflow-hidden rounded-lg h-64">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Beauty</h3>
                  <p className="text-white/80 mt-2">
                    Premium skincare and cosmetics
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    15+ Products
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Products
            </h2>
            <Link
              to="/products"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                  Limited Time Offer
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Spring Collection Sale
                </h3>
                <p className="text-white/80 text-lg mb-6 max-w-md">
                  Enjoy up to 40% off on select items from our newest arrivals
                  and bestsellers.
                </p>
                <Link
                  to="/products?sale=true"
                  className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition-colors duration-300"
                >
                  Shop the Sale
                </Link>
              </div>

              <div className="relative w-full max-w-xs">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-50 filter blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 filter blur-3xl animate-pulse animation-delay-700"></div>
                <img
                  src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Spring Collection"
                  className="relative z-10 rounded-lg shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Sophia Martinez
                  </h4>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    Fashion Enthusiast
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The quality of products at LuxLine is unmatched. I\'ve been a
                loyal customer for years and have never been disappointed. Their
                customer service is also exceptional!"
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Purchased: Leather Handbag
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    James Wilson
                  </h4>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    Tech Enthusiast
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "I recently purchased a smartwatch from LuxLine, and I\'m
                impressed by both the product quality and the fast shipping. The
                website is also very easy to navigate."
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Purchased: Premium Smartwatch
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Customer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Emma Thompson
                  </h4>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    Interior Designer
                  </p>
                </div>
              </div>
              <div className="mb-4 flex">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The home décor items I purchased from LuxLine have completely
                transformed my living space. The attention to detail in their
                products is remarkable, though delivery was a bit slower than
                expected."
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Purchased: Luxury Throw Pillows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <svg
                className="absolute left-0 top-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 900 600"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(450,300)">
                  <path
                    d="M170.3,-106.5C206.9,-50.8,212.2,26.7,180.4,84.6C148.6,142.6,79.8,181,4.4,178.5C-71,176,-148.9,132.7,-183.8,65.1C-218.6,-2.5,-210.4,-94.4,-164.9,-150C-119.4,-205.7,-36.7,-225.1,25.1,-238.1C86.9,-251.1,133.7,-162.2,170.3,-106.5Z"
                    fill="currentColor"
                    className="text-blue-200 dark:text-blue-800 opacity-20"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter for exclusive offers, early access
                to new products, and luxury lifestyle insights.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
