import { NextRequest, NextResponse } from "next/server";
import Image from "next/image";
import Layout from "../../../components/Layout";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getServerSideProps(req: any) {
  const { slug } = req.query;

  const detail = await prisma.post.findMany({
    where: {
      endpoint: slug,
    },
  });

  return {
    props: { detail: JSON.parse(JSON.stringify(detail)) },
  };
}

export default function detail({ detail }: any) {
  return (
    <Layout>
      <div className="w-full bg-[#fbfcfd] dark:bg-[#0F172A] backdrop-blur-sm pt-20">
        <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8 relative">
          {detail.map((blog: any) => {
            return (
              <div key={blog.id}>
                <div className="w-full">
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    width="900px"
                    height="600px"
                    className="object-contain md:h-[600px] md:w-[900px] rounded-md"
                  />
                </div>

                <div className="text-center">
                  <h1 className="capitalize text-lg font-semibold">
                    {blog.title}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.content,
                    }}
                    className="text-gray-400 text-sm"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
