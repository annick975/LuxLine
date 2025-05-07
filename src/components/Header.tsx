import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { DarkModeToggle } from "./DarkModeToggle";

export const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Add scroll event listener for header animation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close cart and mobile menu when route changes
  useEffect(() => {
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
  }, [window.location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-800/90 shadow-lg py-2"
          : "bg-white dark:bg-gray-800 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <div className="mr-2 text-blue-600 dark:text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 transform group-hover:rotate-12 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
              <path d="M10 4a1 1 0 011 1v5a1 1 0 01-1 1 1 1 0 01-1-1V5a1 1 0 011-1z" />
              <path d="M14 10a1 1 0 01-1 1h-3a1 1 0 110-2h3a1 1 0 011 1z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            LuxLine
          </h1>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/products?category=fashion"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Fashion
          </Link>
          <Link
            to="/products?category=tech"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            Tech
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span>Search</span>
          </button>

          <div className="relative group">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300 relative"
              aria-label="View your shopping cart"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
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

              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-20 border border-gray-100 dark:border-gray-700 transform transition-all duration-300 origin-top-right">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    Your Cart
                  </h3>

                  {state.cart.length === 0 ? (
                    <div className="text-center py-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto text-gray-400 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <p className="text-gray-500 dark:text-gray-400">
                        Your cart is empty
                      </p>
                      <Link
                        to="/products"
                        className="mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Browse products
                      </Link>
                    </div>
                  ) : (
                    <>
                      <ul className="max-h-64 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
                        {state.cart.map((item) => (
                          <li key={item.id} className="py-3 flex items-center">
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex-1">
                              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                {item.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                ${item.price.toFixed(2)} x {item.quantity}
                              </p>
                              <div className="flex items-center mt-1">
                                <button
                                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-l"
                                  onClick={() =>
                                    item.quantity > 1 &&
                                    dispatch({
                                      type: "UPDATE_QUANTITY",
                                      payload: {
                                        id: item.id,
                                        quantity: item.quantity - 1,
                                      },
                                    })
                                  }
                                >
                                  -
                                </button>
                                <span className="text-xs mx-2">
                                  {item.quantity}
                                </span>
                                <button
                                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-r"
                                  onClick={() =>
                                    dispatch({
                                      type: "UPDATE_QUANTITY",
                                      payload: {
                                        id: item.id,
                                        quantity: item.quantity + 1,
                                      },
                                    })
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item.id,
                                })
                              }
                              className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between font-medium text-gray-900 dark:text-white mb-2">
                          <span>Subtotal:</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          Shipping and taxes calculated at checkout
                        </p>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white py-2.5 px-4 rounded-md transition-colors duration-200 font-medium">
                          Checkout
                        </button>
                        <button className="w-full mt-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white py-2.5 px-4 rounded-md transition-colors duration-200 font-medium">
                          View Cart
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <DarkModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/products?category=fashion"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fashion
            </Link>
            <Link
              to="/products?category=tech"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tech
            </Link>
            <Link
              to="/products?category=home"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products?category=beauty"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beauty
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
