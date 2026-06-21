"use client";
import toast from "react-hot-toast";
import { useState } from "react";
import { registerUser } from "../../services/auth.service";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const data = await registerUser(formData);

      localStorage.setItem(
        "token",
        data.token
      );

      toast.success("Account created successfully");

      router.push("/");

    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-lg border border-white/10 bg-white/5 p-10 rounded-2xl">

        <h1 className="text-5xl font-bold mb-10">
          Register
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full bg-black border border-white/10 p-4 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full border border-white py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Create Account
          </button>

        </div>

      </div>

    </main>
  );
}