"use client";

import { useState } from "react";
import { sendMessage } from "../../services/message.service";

interface Props {
  onClose: () => void;
}

export default function MessageArtistModal({
  onClose,
}: Props) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        return;
      }

      setLoading(true);

      await sendMessage(
        {
          content,
        },
        token
      );

      alert("Message sent!");

      onClose();

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-6">

      <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-2xl p-8">

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-bold">
            Contact Artist
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

        <p className="text-white/60 mb-8 leading-relaxed">
          Share your thoughts, commission ideas,
          feedback, or questions about the artwork.
        </p>

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          rows={8}
          placeholder="Write your message..."
          className="w-full bg-black border border-white/10 p-5 outline-none resize-none"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 border border-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          {loading
            ? "Sending..."
            : "Send Message"}
        </button>

      </div>

    </div>
  );
}