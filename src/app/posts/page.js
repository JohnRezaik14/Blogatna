import React from "react";
import { posts } from "../posts.data";
import Link from "next/link";
export default function Posts() {
  return (
    <div className="p-8 grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-5 bg-gray-800 text-zinc-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
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
  );
}
