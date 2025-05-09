import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Product, Review } from "../types/product";
import { products } from "../data/mockData";
import { ToastMessage } from "../components/ToastMessage";
import { v4 as uuidv4 } from "uuid";

// Define the Toast type directly here to avoid import issues
type Toast = {
  id: string;
  message: string;
  type: "success" | "error" | "info";
};

interface CartItem extends Product {
  quantity: number;
}

interface AppState {
  cart: CartItem[];
  isDarkMode: boolean;
  products: Product[];
}

type AppAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "TOGGLE_DARK_MODE" }
  | {
      type: "ADD_REVIEW";
      payload: { productId: string; review: Omit<Review, "id" | "date"> };
    };

const initialState: AppState = {
  cart: [],
  isDarkMode: true,
  products: products,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  showToast: (message: string, type: Toast["type"]) => void;
} | null>(null);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "TOGGLE_DARK_MODE":
      const newDarkMode = !state.isDarkMode;
      // Update document class for Tailwind dark mode
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return {
        ...state,
        isDarkMode: newDarkMode,
      };
    case "ADD_REVIEW": {
      const { productId, review } = action.payload;
      const newReview: Review = {
        id: uuidv4(),
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
      };

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === productId
            ? { ...product, reviews: [...product.reviews, newReview] }
            : product
        ),
      };
    }
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Toast management functions
  const showToast = (message: string, type: Toast["type"] = "info") => {
    const newToast = {
      id: uuidv4(),
      message,
      type,
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Add toast notification when cart is updated
  useEffect(() => {
    // We don't want to show a toast on initial load
    // Empty effect for now
  }, []);

  // Apply dark mode on initial load
  useEffect(() => {
    // Make sure dark mode class is added to the document element on initial load
    if (state.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.isDarkMode]);

  // Modified dispatch function that shows toasts for cart actions
  const dispatchWithToast: React.Dispatch<AppAction> = (action) => {
    dispatch(action);

    // Show toasts for cart actions
    if (action.type === "ADD_TO_CART") {
      showToast(`${action.payload.name} added to cart`, "success");
    } else if (action.type === "REMOVE_FROM_CART") {
      const productName =
        state.cart.find((item) => item.id === action.payload)?.name || "Item";
      showToast(`${productName} removed from cart`, "info");
    } else if (action.type === "UPDATE_QUANTITY") {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        showToast(
          `${item.name} quantity updated to ${action.payload.quantity}`,
          "success"
        );
      }
    } else if (action.type === "ADD_REVIEW") {
      const product = state.products.find(
        (p) => p.id === action.payload.productId
      );
      if (product) {
        showToast(`Thank you for reviewing ${product.name}!`, "success");
      }
    }
  };

  return (
    <AppContext.Provider
      value={{ state, dispatch: dispatchWithToast, showToast }}
    >
      {children}

      {/* Toast container */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <ToastMessage
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
