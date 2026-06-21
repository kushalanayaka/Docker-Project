"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { uploadImage } from "../../../../services/upload.service";
import {
  createProduct,
  CreateProductPayload,
} from "../../../../services/product.service";

export default function CreateProductPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const [formData, setFormData] =
    useState<CreateProductPayload>({
      title: "",
      description: "",
      story: "",
      imageUrl: "",
      price: 0,
      stock: 1,
    });

  const handleUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = e.target.files?.[0];

      if (!file) return;

      setUploading(true);

      const url = await uploadImage(file);

      setImageUrl(url);

      setFormData((prev) => ({
        ...prev,
        imageUrl: url,
      }));

      toast.success("Image uploaded successfully");
    } catch (error) {
      console.error(error);

      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "price" ||
        e.target.name === "stock"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token =
        localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      if (!formData.imageUrl) {
        toast.error("Please upload an image");
        return;
      }

      await createProduct(
        formData,
        token
      );

      toast.success(
        "Artwork published successfully!"
      );

      setFormData({
        title: "",
        description: "",
        story: "",
        imageUrl: "",
        price: 0,
        stock: 1,
      });

      setImageUrl("");

    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to create artwork"
      );
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-10 py-12">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold mb-12">
          Create Artwork
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}

          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">

              <h2 className="text-2xl font-bold mb-6">
                Artwork Image
              </h2>

              <label
                className="
                  flex
                  items-center
                  justify-center
                  h-72
                  border-2
                  border-dashed
                  border-white/20
                  rounded-xl
                  cursor-pointer
                  hover:border-white/50
                  transition-all
                "
              >
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUpload}
                />

                <div className="text-center">

                  <div className="text-5xl mb-4">
                    📷
                  </div>

                  <p className="text-white/70">
                    Click to upload artwork
                  </p>

                </div>

              </label>

              {uploading && (
                <p className="mt-4 text-yellow-400">
                  Uploading image...
                </p>
              )}

            </div>

            {imageUrl && (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">

                <img
                  src={imageUrl}
                  alt="preview"
                  className="
                    w-full
                    rounded-xl
                    object-cover
                    max-h-[500px]
                  "
                />

                <p className="text-green-500 mt-4">
                  ✓ Upload successful
                </p>

              </div>
            )}

          </div>

          {/* RIGHT SIDE */}

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Artwork Details
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                name="title"
                placeholder="Artwork Title"
                value={formData.title}
                onChange={handleChange}
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-lg
                  p-4
                  focus:border-white/40
                  outline-none
                  transition-all
                "
              />

              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-lg
                  p-4
                  focus:border-white/40
                  outline-none
                  transition-all
                "
              />

              <input
                type="number"
                name="stock"
                placeholder="Stock"
                value={formData.stock}
                onChange={handleChange}
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-lg
                  p-4
                  focus:border-white/40
                  outline-none
                  transition-all
                "
              />

              <textarea
                name="description"
                placeholder="Description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-lg
                  p-4
                  focus:border-white/40
                  outline-none
                  transition-all
                "
              />

              <textarea
                name="story"
                placeholder="Story Behind Artwork"
                rows={8}
                value={formData.story}
                onChange={handleChange}
                className="
                  w-full
                  bg-black/40
                  border
                  border-white/10
                  rounded-lg
                  p-4
                  focus:border-white/40
                  outline-none
                  transition-all
                "
              />

              <button
                onClick={handleSubmit}
                disabled={uploading}
                className="
                  w-full
                  py-4
                  rounded-lg
                  border
                  border-white
                  font-semibold
                  hover:bg-white
                  hover:text-black
                  transition-all
                  disabled:opacity-50
                "
              >
                🚀 Publish Artwork
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}