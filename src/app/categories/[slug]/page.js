import React from "react";
import { posts } from "../../posts.data";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const filtered = posts.filter((post) => post.category === slug.toLowerCase());
  if (filtered.length === 0) return notFound();
  return (
    <div className="">
      <p className=" text-3xl pl-10 text-teal-800 font-bold text-shadow-teal-600 text-shadow-sm">
        {slug}
      </p>
      <div className="flex flex-col justify-center items-center gap-6">
        {filtered.map((post) => (
          <div
            key={post.id}
            className="p-5 bg-gray-700 text-zinc-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-xl"
          >
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-md text-zinc-300 mb-4">{post.description}</p>
            <Link
              href={`/posts/${post.id}`}
              className="text-teal-400 hover:underline hover:text-teal-300"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
