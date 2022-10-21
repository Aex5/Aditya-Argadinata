import Link from "next/link";
import { useState } from "react";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";

import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  function handlerDark() {
    setTheme(theme === "light" ? "dark" : "light");
    setIsDark(!isDark);
  }

  function handlerToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="w-full h-16 flex justify-start items-center px-8 fixed bg-[#eff1f3] dark:bg-[#0F172A] bg-opacity-80 backdrop-blur-md border-t-2 z-50 -translate-y-1">
        <div className="w-full h-10 flex justify-between items-center max-w-[900px] mx-auto md:px-8">
          <ul className="flex gap-5 text-md md:text-lg text-gray-500">
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/portfolio">
              <a>Porfolio</a>
            </Link>

            <Link href="/blog">
              <a>Blog</a>
            </Link>

            <Link href="/about">
              <a>About</a>
            </Link>
          </ul>
          <button
            onClick={handlerDark}
            className="p-2 rounded-lg text-indigo-500 dark:text-orange-400 bg-[#ced9e2] dark:bg-[#1e2e52]"
          >
            <span className="text-lg">
              {isDark ? <MdNightlightRound /> : <MdWbSunny />}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
