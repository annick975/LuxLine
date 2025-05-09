import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";

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
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg py-2 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent dark:bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-400/10 dark:to-purple-400/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="mr-2 text-blue-600 dark:text-blue-400 relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 transform group-hover:rotate-12 transition-all duration-500"
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
          <div className="relative z-10">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
              LuxLine
            </h1>
            <span className="text-xs tracking-widest uppercase text-gray-500 dark:text-gray-400 absolute -bottom-3 right-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-1 transition-all duration-500">
              Premium
            </span>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 backdrop-blur-lg transition-colors duration-300"
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

        <nav className="hidden md:flex space-x-1">
          <Link
            to="/"
            className="px-4 py-2 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group rounded-full"
          >
            <span className="absolute inset-0 w-0 bg-blue-50 dark:bg-blue-900/20 rounded-full transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">Home</span>
          </Link>
          <Link
            to="/products"
            className="px-4 py-2 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group rounded-full"
          >
            <span className="absolute inset-0 w-0 bg-blue-50 dark:bg-blue-900/20 rounded-full transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">Shop</span>
          </Link>
          <Link
            to="/products?category=fashion"
            className="px-4 py-2 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group rounded-full"
          >
            <span className="absolute inset-0 w-0 bg-blue-50 dark:bg-blue-900/20 rounded-full transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">Fashion</span>
          </Link>
          <Link
            to="/products?category=tech"
            className="px-4 py-2 text-gray-600 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group rounded-full"
          >
            <span className="absolute inset-0 w-0 bg-blue-50 dark:bg-blue-900/20 rounded-full transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">Tech</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 relative group">
            <span className="absolute inset-0 w-full h-full bg-blue-50 dark:bg-blue-900/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 relative z-10"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="relative z-10">Search</span>
          </button>

          <div className="relative group">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 relative focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
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
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg shadow-blue-500/30 dark:shadow-blue-700/30">
                  {totalItems}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white/95 dark:bg-gray-800/95 rounded-xl shadow-2xl z-20 border border-gray-100 dark:border-gray-700 transform transition-all duration-300 origin-top-right backdrop-blur-sm">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3 flex items-center">
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
                        className="mt-4 inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:underline font-medium"
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
                                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-l hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                                <span className="text-xs px-2 py-1 bg-white dark:bg-gray-800">
                                  {item.quantity}
                                </span>
                                <button
                                  className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-r hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
                              className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between text-base font-medium text-gray-900 dark:text-white">
                          <p>Subtotal</p>
                          <p>${totalPrice.toFixed(2)}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-4">
                          <Link
                            to="/checkout"
                            className="w-full flex items-center justify-center px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300"
                          >
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
            className="p-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 relative focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            aria-label="Toggle dark mode"
          >
            {state.isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-2 p-4 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
          <Link
            to="/"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/products?category=fashion"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Fashion
          </Link>
          <Link
            to="/products?category=tech"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Tech
          </Link>
          <Link
            to="/products?category=home"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/products?category=beauty"
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Beauty
          </Link>
          <button className="flex items-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
            Search
          </button>
        </nav>
      </div>
    </header>
  );
};
