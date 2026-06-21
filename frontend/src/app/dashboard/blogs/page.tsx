"use client";

import { useEffect, useState } from "react";
import EmptyState from "../../../components/ui/EmptyState";
import { api } from "../../../lib/axios";
import toast from "react-hot-toast";
interface Blog {
  id: string;
  title: string;
  isPublished: boolean;
  createdAt: string;
}

export default function DashboardBlogsPage() {
  const [blogs, setBlogs] =
    useState<Blog[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response =
          await api.get("/blogs");

        setBlogs(response.data);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      await api.delete(`/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs((prev) =>
        prev.filter((blog) => blog.id !== id)
      );

    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <h1 className="text-3xl md:text-5xl font-bold">
          Manage Blogs
        </h1>

        <a
          href="/dashboard/blogs/create"
          className="mt-4 md:mt-0 border border-white px-6 py-3 hover:bg-white hover:text-black transition"
        >
          + Create Blog
        </a>

      </div>

      {loading ? (

        <p className="text-white/60">
          Loading blogs...
        </p>

      ) : blogs.length === 0 ? (

        <EmptyState
          icon="📝"
          title="No Blogs Yet"
          description="Share your first story with your audience."
          actionText="Create Blog"
          actionLink="/dashboard/blogs/create"
        />

      ) : (

        <>
          {/* Desktop Table */}

          <div className="hidden md:block overflow-x-auto">

            <table className="w-full border border-white/10">

              <thead>

                <tr className="border-b border-white/10">

                  <th className="text-left p-4">
                    Title
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Created
                  </th>

                  <th className="text-left p-4">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {blogs.map((blog) => (

                  <tr
                    key={blog.id}
                    className="border-b border-white/10"
                  >

                    <td className="p-4">
                      {blog.title}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${blog.isPublished
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                          }`}
                      >
                        {blog.isPublished
                          ? "Published"
                          : "Draft"}
                      </span>

                    </td>

                    <td className="p-4">
                      {new Date(
                        blog.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">

                      <div className="flex gap-4">

                        <a
                          href={`/dashboard/blogs/edit/${blog.id}`}
                          className="text-blue-400"
                        >
                          Edit
                        </a>

                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="text-red-400"
                        >
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}

          <div className="md:hidden space-y-4">

            {blogs.map((blog) => (

              <div
  key={blog.id}
  className="border border-white/10 p-4"
>

  <h3 className="font-semibold">
    {blog.title}
  </h3>

  <span
    className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${
      blog.isPublished
        ? "bg-green-500/20 text-green-400"
        : "bg-yellow-500/20 text-yellow-400"
    }`}
  >
    {blog.isPublished
      ? "Published"
      : "Draft"}
  </span>

  <div className="flex gap-5 mt-4">

    <a
      href={`/dashboard/blogs/edit/${blog.id}`}
      className="text-blue-400"
    >
      Edit
    </a>

    <button
      onClick={() => handleDelete(blog.id)}
      className="text-red-400"
    >
      Delete
    </button>

  </div>

</div>

            ))}

          </div>

        </>

      )}

    </main>
  );
}