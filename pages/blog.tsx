import { useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full bg-[#fbfcfd] pt-20">
          <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8">
            <h1>Blog</h1>
            <div className="mt-10 md:flex flex-wrap justify-between items-center gap-2">
              {posts.map((post: any) => (
                <a className="hover:-translate-y-1 duration-200" key={post.id}>
                  <div className="mt-4 border-2 border-[#0c8c96] p-4 md:w-[400px] md:h-[200px] md:relative">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: limit(post.content),
                      }}
                      className="text-gray-400 text-sm"
                    ></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}