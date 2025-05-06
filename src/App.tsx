import React, { useState } from "react";
import type { Product, Review } from "./types/product";
import { mockProducts } from "./data/mockData";
import { Header } from "./components/Header";
import { ProductDetail } from "./components/ProductDetail";
import { RelatedProducts } from "./components/RelatedProducts";
import { AppProvider } from "./context/AppContext";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    mockProducts[0]
  );
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const handleAddReview = (review: Omit<Review, "id" | "date">) => {
    const newReview: Review = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };

    setSelectedProduct({
      ...selectedProduct,
      reviews: [...selectedProduct.reviews, newReview],
    });

    setProducts(
      products.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, reviews: [...product.reviews, newReview] }
          : product
      )
    );
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-12">
            <ProductDetail
              product={selectedProduct}
              onAddReview={handleAddReview}
            />
          </div>

          <RelatedProducts
            currentProduct={selectedProduct}
            allProducts={products}
          />
        </main>
        <footer className="bg-white dark:bg-gray-800 shadow-md mt-12 py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <p>&copy; 2023 LuxLine. All rights reserved.</p>
              <p className="mt-2 text-sm">
                Premium luxury products delivered to your doorstep.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
