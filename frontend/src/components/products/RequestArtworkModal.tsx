"use client";

import { useState } from "react";
import { createOrder } from "../../services/order.service";

interface Props {
  productId: string;
  onClose: () => void;
}

export default function RequestArtworkModal({
  productId,
  onClose,
}: Props) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    address: "",
    quantity: 1,
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await createOrder({
        ...formData,
        quantity: Number(formData.quantity),
        productId,
      });

      alert("Artwork request submitted!");

      onClose();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

      <div className="bg-[#111] border border-white/10 w-full max-w-xl p-8 rounded-xl">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            Request Artwork
          </h2>

          <button onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="space-y-5">

          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <input
            type="email"
            name="customerEmail"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <textarea
            name="message"
            placeholder="Additional Message"
            rows={5}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full border border-white py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </button>

        </div>

      </div>

    </div>
  );
}