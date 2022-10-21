import Layout from "../components/Layout";
import Image from "next/image";
import { motion } from "framer-motion";

export default function about() {
  return (
    <Layout>
      <div className="w-full bg-[#eff1f3] dark:bg-[#0F172A] backdrop-blur-sm pt-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-[800px] text-gray-500 mx-auto px-8 relative">
            <div>
              <h1 className="text-2xl text-center font-bold mt-8">
                Hi, adit`s here !
              </h1>

              <p className="mt-4">
                I am Aditya Argadinata, a bachelor of computer sience student.
              </p>
              <p className="mt-4">
                a little story I am a mechanical engineering graduate but I am
                more interested in the realm of coding, and I decided to
                continue studying at one of the universities in Kudus Indonesia
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
        </motion.div>
      </div>
    </Layout>
  );
}
