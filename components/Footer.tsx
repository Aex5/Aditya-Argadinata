import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#fbfcfd] text-gray-500 py-10">
      <div className="w-full max-w-[900px] mx-auto px-8 ">
        <div className="w-full max-w-[900px] border-t-[1px] border-gray-400 pb-8"></div>
        <div className="flex flex-col md:flex-row justify-start gap-3">
          {/* navigation footer */}
          <div className="w-full">
            <ul className="flex flex-col gap-3 text-md">
              <Link href="/">
                <a>Home</a>
              </Link>

              <Link href="/about">
                <a>About</a>
              </Link>

              <Link href="/portfolio">
                <a>Porfolio</a>
              </Link>
            </ul>
          </div>
          {/* social link */}
          <div className="w-full">
            <ul className="flex flex-col gap-3 text-md">
              <li>
                <a
                  href="https://github.com/Sujaruu"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/aditya_arga1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/adityaargadinata12"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/channels/@me/902026180033654794"
                  target="_blank"
                  rel="noreferrer"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* build with */}
        <div className=" text-sm pt-10">
          <p>© 2022 Under MIT Licensed</p>
          <p className="pt-1">
            Build with <span className="text-pink-700">❤</span> by Aditya
            Argadinata
          </p>
        </div>
      </div>
    </div>
  );
}
