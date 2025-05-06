import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { DarkModeToggle } from "./DarkModeToggle";

export const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          LuxLine
        </h1>

        <div className="flex items-center space-x-4">
          <DarkModeToggle />

          <div className="relative">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="View your shopping cart"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
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
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Your Cart
                  </h3>

                  {state.cart.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400">
                      Your cart is empty
                    </p>
                  ) : (
                    <>
                      <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200 dark:divide-gray-700">
                        {state.cart.map((item) => (
                          <li key={item.id} className="py-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  ${item.price.toFixed(2)} x {item.quantity}
                                </p>
                              </div>
                              <button
                                onClick={() =>
                                  dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item.id,
                                  })
                                }
                                className="text-red-500 hover:text-red-700 transition-colors"
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
                            </div>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                          <span>Total:</span>
                          <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200">
                          Checkout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
