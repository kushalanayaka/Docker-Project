"use client";

import { use, useEffect, useState } from "react";
import { Blog } from "../../../types/blog";
import { getBlogById } from "../../../services/blog.service";
import MessageArtistModal from "../../../components/layout/MessageArtistModal";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogDetailsPage({ params }: Props) {
  const { id } = use(params);

  const [blog, setBlog] = useState<Blog | null>(null);
  const [showMessageModal, setShowMessageModal] =
    useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {blog.imageUrl && (
        <div className="h-[60vh] overflow-hidden">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="max-w-4xl mx-auto px-6 py-20">

        <p className="text-white/40 uppercase tracking-[0.3em] text-sm">
          {new Date(blog.createdAt).toDateString()}
        </p>

        <h1 className="text-6xl font-bold mt-6 leading-tight">
          {blog.title}
        </h1>

        <div className="mt-12 text-white/70 leading-loose text-xl whitespace-pre-line">
          {blog.content}
        </div>

        <div className="mt-16">

          <button
            onClick={() =>
              setShowMessageModal(true)
            }
            className="border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Message the Artist
          </button>

        </div>

      </article>
      {showMessageModal && (
        <MessageArtistModal
          onClose={() =>
            setShowMessageModal(false)
          }
        />
      )}

    </main>
  );
}