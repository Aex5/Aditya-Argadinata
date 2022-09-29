import Image from "next/image";
import Layout from "../components/Layout";

export default function portfolio() {
  return (
    <Layout>
      <div className="w-full bg-[#fbfcfd] pt-20">
        <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8">
          <div>
            <h1 className="text-3xl font-semibold mt-8">Portfolio</h1>
            <p className="pt-2">
              This is my current works and project, I have been working on this
              for a year and i am very proud of it.
            </p>
          </div>
          <div className="mt-10 md:flex flex-wrap justify-between items-center gap-2">
            {/* Bugnime */}
            <a
              href="https://bugnime.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 duration-200"
            >
              <div className="mt-4 border-2 border-[#0c8c96] p-4 md:w-[320px] md:h-[200px] md:relative">
                <h2 className="text-lg font-semibold">Bugnime</h2>
                <p className="pt-2">The anime web downloader without ads </p>
                <div className="flex items-center mt-2 gap-2 md:absolute md:bottom-4">
                  <Image src="/react.png" alt="" width="20px" height="20px" />
                  <Image
                    src="/tailwind.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                  <Image src="/vite.png" alt="" width="20px" height="20px" />
                </div>
              </div>
            </a>

            {/* studyku */}
            <a
              href="https://sujaruu.github.io/Studyku/"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 duration-200"
            >
              <div className="mt-4 border-2 border-[#0c8c96] p-4 md:w-[320px] md:h-[200px] md:relative">
                <h2 className="text-lg font-semibold">Studyku</h2>
                <p className="pt-2">
                  The Web course landing page with animation scroll
                </p>
                <div className="flex items-center mt-2 gap-2 md:absolute md:bottom-4">
                  <Image src="/react.png" alt="" width="20px" height="20px" />
                  <Image
                    src="/tailwind.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                  <Image src="/vite.png" alt="" width="20px" height="20px" />
                </div>
              </div>
            </a>

            {/* clean portfolio */}
            <a
              href="https://my-aditya-arga.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:-translate-y-1 duration-200"
            >
              <div className="mt-4 border-2 border-[#0c8c96] p-4 md:w-[320px] md:h-[200px] md:relative">
                <h2 className="text-lg font-semibold">Clean Portfolio</h2>
                <p className="pt-2">
                  The simplel portfolio with a clean design
                </p>
                <div className="flex items-center mt-2 gap-2 md:absolute md:bottom-4">
                  <Image src="/react.png" alt="" width="20px" height="20px" />
                  <Image
                    src="/tailwind.png"
                    alt=""
                    width="20px"
                    height="20px"
                  />
                  <Image src="/vite.png" alt="" width="20px" height="20px" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
