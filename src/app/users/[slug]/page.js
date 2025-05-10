"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import axios from "axios";
export default function UserPage({ params }) {
  const { slug } = params;
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUserPosts(res.data.filter((post) => post.userId == slug));
      } catch (error) {
        console.log("err fetching user posts: ", error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="">
      <p className=" text-3xl pl-10 text-teal-800 font-bold text-shadow-teal-600 text-shadow-sm">
        User :{slug}
      </p>
      <div className="flex flex-col justify-center items-center gap-6">
        {userPosts.map((post) => (
          <div
            key={post.id}
            className="p-5 bg-gray-700 text-zinc-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-xl"
          >
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-md text-zinc-300 mb-4">{post.body}</p>
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
