/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useTheme } from "next-themes";

export default function theme() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1 className="text-3xl text-pink-500">Welcome to Your App</h1>
      <div className="prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark">
        test test
      </div>

      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        toggle
      </button>
    </div>
  );
}
