"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
export default function Users() {
  const [userIds, setUserIds] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const ids = response.data.map((post) => post.userId);
        const uniqueUserIds = [...new Set(ids)];
        setUserIds(uniqueUserIds);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {" "}
      <p className="w-full text-center p-2 text-teal-950 text-2xl">Our Users</p>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center p-10">
        {userIds.map((userId) => (
          <Link
            key={userId}
            href={`/users/${userId}`}
            className="flex justify-center items-center bg-teal-700 text-zinc-100 rounded-xl w-30 h-30 shadow-lg shadow-gray-500 duration-300 transition-all hover:scale-110 cursor-pointer text-lg font-bold capitalize"
          >
            User : {userId}
          </Link>
        ))}
      </div>
    </div>
  );
}
