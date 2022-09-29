import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-16 flex justify-start items-center px-8 fixed bg-[#fbfcfd] opacity-95 border-t-2 z-50">
        <div className="navbar w-full max-w-[900px] mx-auto md:px-8">
          <ul className="flex gap-5 text-md text-gray-500">
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/portfolio">
              <a>Porfolio</a>
            </Link>

            <Link href="/about">
              <a>About</a>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
