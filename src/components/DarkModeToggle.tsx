import React from "react";
import { useApp } from "../context/AppContext";

export const DarkModeToggle: React.FC = () => {
  const { state, dispatch } = useApp();

  return (
    <button
      onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-300 transform hover:scale-110"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun icon */}
        <svg
          className={`w-6 h-6 text-yellow-500 absolute top-0 left-0 transition-transform duration-500 ${
            state.isDarkMode ? "rotate-0 scale-0" : "rotate-90 scale-100"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon icon */}
        <svg
          className={`w-6 h-6 text-blue-400 absolute top-0 left-0 transition-transform duration-500 ${
            state.isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </button>
  );
};
