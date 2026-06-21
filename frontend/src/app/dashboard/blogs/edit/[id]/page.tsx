"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { api } from "./../../../../../lib/axios";

export default function EditBlogPage() {
  const params = useParams();
  const router = useRouter();

  const [title, setTitle] =
    useState("");

  const [content, setContent] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response =
          await api.get(
            `/blogs/${params.id}`
          );

        setTitle(
          response.data.title
        );

        setContent(
          response.data.content
        );

      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load blog"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  const handleSave = async () => {
    try {
      const token =
        localStorage.getItem("token");

      if (!token) return;

      setSaving(true);

      await api.put(
        `/blogs/${params.id}`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      toast.success(
        "Blog updated successfully"
      );

      router.push(
        "/dashboard/blogs"
      );

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to update blog"
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl md:text-5xl font-bold mb-8">
          Edit Blog
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full bg-black border border-white/10 p-4"
          />

          <textarea
            rows={12}
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="w-full bg-black border border-white/10 p-4"
          />

          <button
            onClick={handleSave}
            disabled={saving}
            className="border border-white px-8 py-4 hover:bg-white hover:text-black transition"
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>

        </div>

      </div>

    </main>
  );
}