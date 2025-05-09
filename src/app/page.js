// import Image from "next/image";
const categories = [
  { name: "Technology", slug: "technology" },
  { name: "Health", slug: "health" },
  { name: "Travel", slug: "travel" },
  { name: "Finance", slug: "finance" },
];
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {" "}
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Blogatna</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="flex justify-center items-center bg-teal-700 text-white rounded-xl w-full h-40 shadow-lg duration-300 hover:scale-105 text-xl font-semibold"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
