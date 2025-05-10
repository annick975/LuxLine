import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { AppProvider } from "./context/AppContext";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiVisa, SiMastercard, SiApplepay, SiPaypal } from "react-icons/si";

// Add script to apply dark mode initially
// This will run before React hydrates the app
if (typeof document !== "undefined") {
  // Set default to dark mode
  document.documentElement.classList.add("dark");
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          {isLoading ? (
            // Loading spinner
            <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
              <div className="relative">
                {/* Animated logo */}
                <div className="absolute animate-ping w-16 h-16 rounded-full bg-blue-500/10"></div>
 
                
                  <img src="/LuxLine.png" alt="LuxLine Logo" className="w-10 h-10" />
      
              </div>
              <h2 className="absolute mt-24 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                LuxLine
              </h2>
              <p className="absolute mt-36 text-sm text-gray-500 dark:text-gray-400">
                Premium E-commerce Experience
              </p>
            </div>
          ) : (
            <>
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:id" element={<ProductPage />} />
                </Routes>
              </main>
              <footer className="bg-gray-800 dark:bg-gray-900 text-white">
                <div className="container mx-auto px-4 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                        LuxLine
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Premium products for discerning customers. Elevate your
                        lifestyle with our curated selections.
                      </p>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Twitter"
                        >
                          <FaTwitter className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="w-6 h-6" />
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Facebook"
                        >
                          <FaFacebook className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Shop</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <a
                            href="/products"
                            className="hover:text-white transition-colors"
                          >
                            All Products
                          </a>
                        </li>
                        <li>
                          <a
                            href="/products?category=fashion"
                            className="hover:text-white transition-colors"
                          >
                            Fashion
                          </a>
                        </li>
                        <li>
                          <a
                            href="/products?category=tech"
                            className="hover:text-white transition-colors"
                          >
                            Tech
                          </a>
                        </li>
                        <li>
                          <a
                            href="/products?category=home"
                            className="hover:text-white transition-colors"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/products?category=beauty"
                            className="hover:text-white transition-colors"
                          >
                            Beauty
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Customer Service
                      </h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Shipping & Returns
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Order Tracking
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">About Us</h3>
                      <ul className="space-y-2 text-gray-400">
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Our Story
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Careers
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="hover:text-white transition-colors"
                          >
                            Terms & Conditions
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                      &copy; {new Date().getFullYear()} LuxLine. All rights
                      reserved.
                    </p>
                    <div className="flex space-x-4">
                      <SiVisa className="h-8 w-auto text-gray-400" />
                      <SiMastercard className="h-8 w-auto text-gray-400" />
                      <SiApplepay className="h-8 w-auto text-gray-400" />
                      <SiPaypal className="h-8 w-auto text-gray-400" />
                    </div>
                  </div>
                </div>
              </footer>
            </>
          )}
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
