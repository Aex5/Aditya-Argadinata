import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Aditya Arga | Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* content */}
      <div className="w-full bg-[#eff1f3] dark:bg-[#0F172A] backdrop-blur-sm pt-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8 relative">
            <div className="flex flex-col items-center md:flex-row-reverse md:justify-between">
              <div className="w-[200px]">
                <Image
                  src="/saya.jpeg"
                  alt=""
                  width="200px"
                  height="200px"
                  className="object-cover md:h-[150px] md:w-[150px] rounded-full"
                />
              </div>
              <div className="w-full">
                <h1 className="text-4xl font-bold mt-8">Aditya Argadinata</h1>
                <p className="text-xl font-bold mt-4 text-cyan-600">
                  Student & Frontend Developer
                </p>
                <p className="mt-4">
                  hello, I am Aditya Argadinata, A person who love to code and
                  music. very intersted in web development, And now i am
                  learning a fullstack of Javascript environtment{" "}
                </p>
              </div>
            </div>

            {/* featured prtfolio*/}
            <div className="mt-28">
              <h3 className="text-3xl font-bold">Featured Portfolio</h3>
              <a
                href="https://weeblog.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full mt-4 border-2 border-[#0c8c96] p-4">
                  <h4 className="text-lg font-semibold">Weeblog</h4>
                  <p className="pt-2">
                    Blog starter with Next.js and Prisma, with a clean design.
                  </p>
                  <div className="flex items-center mt-2 gap-2">
                    <Image src="/react.png" alt="" width="20px" height="20px" />
                    <Image
                      src="/tailwind.png"
                      alt=""
                      width="20px"
                      height="20px"
                    />
                    <Image src="/vite.png" alt="" width="20px" height="20px" />
                    <Image
                      src="/prisma.png"
                      alt=""
                      width="35px"
                      height="35px"
                      className="-translate-x-2"
                    />
                  </div>
                </div>
              </a>

              <a
                href="https://bugnime.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="w-full mt-4 border-2 border-[#0c8c96] p-4">
                  <h4 className="text-lg font-semibold">Bugnime</h4>
                  <p className="pt-2">The anime web downloader without ads</p>
                  <div className="flex items-center mt-2 gap-2">
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

              <Link href="/portfolio">
                <a className="flex items-center gap-2 mt-2">
                  <span>All Portofolios </span> <HiArrowNarrowRight />
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
