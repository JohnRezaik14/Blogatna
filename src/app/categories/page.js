import Link from "next/link";
import React from "react";
const categories = ["technology", "health", "travel", "finance"];
export default function Categories() {
  return (
    <div>
      {" "}
      <p className="w-full text-center p-2 text-teal-950 text-2xl">
        Browse our categories
      </p>
      <div className="flex flex-row justify-around items-center p-10">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/categories/${category.toLowerCase()}`}
            className="flex justify-center items-center bg-teal-700 text-zinc-100 rounded-xl w-50 h-50 shadow-lg shadow-gray-500 duration-300 transition-all hover:scale-110 cursor-pointer text-lg font-bold capitalize"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
