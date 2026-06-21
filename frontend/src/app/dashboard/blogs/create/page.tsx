"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../../../lib/axios";

export default function CreateBlogPage() {
  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async () => {
    try {
      const token =
        localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      setLoading(true);

      await api.post(
        "/blogs",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(
        "Blog created successfully"
      );

      setTitle("");
      setContent("");

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to create blog"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Create Blog
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full bg-black border border-white/10 p-4"
          />

          <textarea
            placeholder="Write your story..."
            rows={12}
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="w-full bg-black border border-white/10 p-4"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="border border-white px-8 py-4 hover:bg-white hover:text-black transition"
          >
            {loading
              ? "Creating..."
              : "Publish Blog"}
          </button>

        </div>

      </div>

    </main>
  );
}