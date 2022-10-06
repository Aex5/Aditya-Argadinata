import { NextRequest, NextResponse } from "next/server";
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
      <div className="w-full bg-[#fbfcfd] backdrop-blur-sm pt-20">
        <div className="w-full max-w-[900px] text-gray-500 mx-auto px-8 relative">
          {detail.map((blog: any) => {
            return (
              <div key={blog.id}>
                <h1>{blog.title}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.content,
                  }}
                  className="text-gray-400 text-sm"
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
