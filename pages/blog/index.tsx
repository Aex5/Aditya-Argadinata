import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// fetch data
export async function getStaticProps() {
  const posts = await prisma.post.findMany();

  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
}

// limit string
function limit(string = "", limit = 40) {
  return string.substring(0, limit) + "...";
}

export default function blog({ posts }: any) {
  return (
    <Layout>
      <div className="w-full bg-[#eff1f3] dark:bg-[#0F172A] backdrop-blur-sm pt-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-[800px] text-gray-500 mx-auto px-8 relative">
            <div className="">
              <div className="flex flex-col items-center justify-center gap-10">
                <div className="flex flex-col gap-2">
                  <Image
                    src="/ginta.jpg"
                    alt=""
                    width="150px"
                    height="150px"
                    className="object-cover md:h-[150px] md:w-[150px] rounded-full"
                  />
                  <button className="flex items-center gap-2 mx-auto py-1 px-5 rounded-md backdrop-blur-xl shadow-md">
                    <FaGithub />
                    <span>Github</span>
                  </button>
                </div>

                <div className="text-center">
                  <p>
                    I will share about web development, design and other relate
                    topics
                  </p>

                  <div className="flex gap-2 items-center justify-center mt-5">
                    <button className="py-2 px-5 bg-amber-200 dark:bg-amber-600 dark:text-gray-100 text-lg font-semibold rounded-lg">
                      Javascript
                    </button>
                    <button className="py-2 px-5 bg-indigo-200 dark:bg-indigo-600 dark:text-gray-100 text-lg font-semibold rounded-lg">
                      Design
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 md:flex flex-wrap justify-between items-center gap-2">
              {posts.map((post: any) => (
                <Link
                  key={post.id}
                  href={`/blog/detail/${post.endpoint}`}
                  className="cursor-pointer"
                >
                  <a>
                    <div className="hover:-translate-y-1 duration-200">
                      <div className="mt-4 dark:bg-[#172546] shadow-lg p-4 rounded-xl md:w-[350px] h-[100px] md:h-[200px] md:relative">
                        <h2 className="text-lg font-semibold capitalize">
                          {post.title}
                        </h2>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: limit(post.content),
                          }}
                          className="text-gray-400 text-sm"
                        ></div>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
