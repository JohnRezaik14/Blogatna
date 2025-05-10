import React from "react";

import Link from "next/link";
import { notFound } from "next/navigation";
import axios from "axios";
import Loader from "@/app/loader";
export default async function pages({ params }) {
  const { slug } = await params;
  const postRes = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${slug}`
  );
  const post = postRes.data;
  const commentsRes = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${slug}/comments`
  );
  const postComments = commentsRes.data;
  if (!post) return notFound();
  return (
    <div className="max-w-6xl mx-auto">
      <div
        key={post.id}
        className="p-5 bg-gray-200 text-zinc-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 mb-4 flex-1">
            <h3 className="text-xl font-bold italic">User: {post.userId}</h3>
            <p className="text-md text-zinc-800 font-semibold">
              Title: {post.title}
            </p>
          </div>
        </div>

        <p className="text-md text-zinc-800 mb-4">{post.body}</p>

        <div className="flex flex-col gap-3">
          {postComments?.map((comment) => (
            <div
              key={comment.id}
              className="text-zinc-100 bg-gray-700 p-1 px-2 rounded-md"
            >
              <p className="text-teal-500">{comment.email}</p>
              <p> {comment.body.substring(0, 100)}....</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
