// import Image from "next/image";
// const categories = [
//   { name: "Technology", slug: "technology" },
//   { name: "Health", slug: "health" },
//   { name: "Travel", slug: "travel" },
//   { name: "Finance", slug: "finance" },
// ];

import axios from "axios";
import Link from "next/link";

export default async function Home() {
  let userIds = [];
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const ids = response.data.map((post) => post.userId);
    const uniqueUserIds = [...new Set(ids)];
    userIds = uniqueUserIds;
  } catch (error) {
    console.log("err fetching user posts: ", error);
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {" "}
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Blogatna</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {userIds.map((userId) => (
            <Link
              key={userId}
              href={`/users/${userId}`}
              className="flex justify-center items-center bg-teal-700 text-white rounded-xl w-full h-40 shadow-lg duration-300 hover:scale-105 text-xl font-semibold"
            >
              User: {userId}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
