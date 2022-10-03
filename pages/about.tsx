import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

export default function about() {
  return (
    <Layout>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full bg-[#fbfcfd] backdrop-blur-sm pt-20">
          <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8 relative">
            {/* glare effect feels need to clean */}
            <div className="w-[70rem] h-[30rem] bg-glare-ef  bg-no-repeat absolute -top-20 -right-30 bg-contain -z-10"></div>

            <div>
              <h1 className="text-3xl font-bold mt-8">About</h1>
              <p className="text-2xl text-transparent bg-clip-text font-semibold mt-4 bg-gradient-to-l from-[#0c17a8] to-[#4fd8e2]">
                Aditya Argadinata
              </p>
              <p className="mt-4">
                hello, I am Aditya Argadinata, A person who love to code and
                music. Talks about React, Tailwind css, an another web
                development related topic
              </p>
            </div>
            {/* skills and tools */}
            <div className="mt-24">
              <p className="text-2xl font-semibold">Skills & Tools</p>
              <p>This is my current skills and tools that i was worked with</p>
              <div className="mt-4 flex flex-col items-center justify-around gap-2 flex-wrap ">
                <div className="w-full border-2 border-[#0c8c96] p-4 space-y-4">
                  <h4 className="text-lg font-semibold">Markup & Styling</h4>
                  <div className="flex items-center gap-1">
                    <Image src="/html.png" alt="" width="32px" height="32px" />
                    <Image src="/css.png" alt="" width="32px" height="32px" />
                  </div>
                  <p>
                    I am learning this most essential bundle from October 2021
                    till now,
                  </p>
                </div>

                <div className="w-full border-2 border-[#0c8c96] p-4 space-y-4">
                  <h4 className="text-lg font-semibold">
                    Programing Languange
                  </h4>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/javascript.png"
                      alt=""
                      width="32px"
                      height="32px"
                    />
                    <Image src="/ts.png" alt="" width="32px" height="32px" />
                  </div>
                  <p>
                    I Love syntax and other stuff in Javascript, and now i
                    currios about Typescript and I currently learning Typescript
                  </p>
                </div>

                <div className="w-full border-2 border-[#0c8c96] p-4 space-y-4">
                  <h4 className="text-lg font-semibold">Framework</h4>
                  <div className="flex items-center gap-2">
                    <Image src="/react.png" alt="" width="32px" height="32px" />
                    <Image
                      src="/tailwind.png"
                      alt=""
                      width="32px"
                      height="32px"
                    />
                  </div>
                  <p>
                    I start using these framework from January 2021, and i think
                    i am very comfort for use the both of them
                  </p>
                </div>

                <div className="w-full border-2 border-[#0c8c96] p-4 space-y-4">
                  <h4 className="text-lg font-semibold">Backend Environment</h4>
                  <div className="flex items-center gap-2">
                    <Image src="/node.png" alt="" width="32px" height="32px" />
                    <Image src="/mongo.png" alt="" width="32px" height="32px" />
                  </div>
                  <p>
                    i am trying to learn backend environment, and i am very
                    intersted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
