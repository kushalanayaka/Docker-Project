"use client";

import toast from "react-hot-toast";

export default function TestToast() {
  return (
    <button
      onClick={() =>
        toast.success("Toast working!")
      }
      className="border border-white px-4 py-2"
    >
      Test Toast
    </button>
  );
}