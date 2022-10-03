import { GetServerSideProps } from "next";
import { NextRequest, NextResponse } from "next/server";

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
    <div>
      {detail.map((blog: any) => {
        return (
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
}
