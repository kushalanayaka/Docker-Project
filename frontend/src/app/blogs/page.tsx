"use client";

import { useEffect, useState } from "react";
import { Blog } from "../../types/blog";
import { getBlogs } from "../../services/blog.service";
import BlogCard from "../../components/blog/BlogCard";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="mb-20">

          <p className="uppercase tracking-[0.3em] text-white/40 text-sm">
            Artist Journal
          </p>

          <h1 className="text-6xl font-bold mt-4">
            Thoughts & Stories
          </h1>

        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}

        </div>

      </div>

    </main>
  );
}