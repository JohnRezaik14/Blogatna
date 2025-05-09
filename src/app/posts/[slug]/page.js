import React from "react";
import { posts } from "../../posts.data";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function pages({ params }) {
  const { slug } = await params;
  const post = posts.find((post) => post.id == slug);
  if (!post) return notFound();
  return (
    <div className="w-6xl m-auto">
      {" "}
      <div
        key={post.id}
        className="p-5 bg-gray-200 text-zinc-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-row">
          {" "}
          <div className="flex flex-col gap-2 mb-4 flex-1">
            {" "}
            <h3 className="text-xl font-bold italic">{post.author}</h3>
            <p className="text-md text-zinc-600 ">
              Published: {post.publishedDate}
            </p>
          </div>
          <Link
            href={`/categories/${post.category}`}
            className="text-teal-800 hover:underline hover:text-teal-600"
          >
            {post.category}
          </Link>
        </div>
        <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
        <p className="text-md text-zinc-800 mb-4">{post.description}</p>
        <p className="text-md text-zinc-800 mb-4">{post.content}</p>
        <div className="flex felx-row gap-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-teal-700">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
