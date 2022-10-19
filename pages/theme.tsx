import type { NextPage } from "next";
import Head from "next/head";

import { useTheme } from "next-themes";

const Theme: NextPage = () => {
  const { theme, setTheme } = useTheme();

  // toggle responsible for changing the theme
  const renderThemeToggle = () => {
    return (
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="px-4 py-2 rounded-md bg-[#fbfcfd] backdrop-blur-sm shadow-md dark:text-black"
      >
        on
      </button>
    );
  };

  return (
    <div>
      <Head>
        <title>Next.js and Tailwind starter</title>
        <meta name="description" content="Next.js and Tailwind starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline mb-4">
          Next.js + Tailwind Starter
        </h1>

        {renderThemeToggle()}

        <div className="m-3 pt-8">
          <h3 className="text-blue-400 dark:text-white">hai coba</h3>
        </div>
      </main>
    </div>
  );
};

export default Theme;
