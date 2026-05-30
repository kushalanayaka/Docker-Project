"use client";

import ProtectedAdminRoute from "../../components/auth/ProtectedAdminRoute";

export default function DashboardPage() {
  return (
    <ProtectedAdminRoute>
      <main className="min-h-screen bg-black text-white px-6 py-24">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-6xl font-bold mb-16">
            Artist Dashboard
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <a
              href="/dashboard/products"
              className="border border-white/10 bg-white/5 p-10 hover:border-white/30 transition-all"
            >
              <h2 className="text-3xl font-bold">
                Products
              </h2>

              <p className="text-white/60 mt-4">
                Manage artworks
              </p>
            </a>

            <a
              href="/dashboard/blogs"
              className="border border-white/10 bg-white/5 p-10 hover:border-white/30 transition-all"
            >
              <h2 className="text-3xl font-bold">
                Blogs
              </h2>

              <p className="text-white/60 mt-4">
                Manage stories
              </p>
            </a>

            <a
              href="/dashboard/orders"
              className="border border-white/10 bg-white/5 p-10 hover:border-white/30 transition-all"
            >
              <h2 className="text-3xl font-bold">
                Orders
              </h2>

              <p className="text-white/60 mt-4">
                View requests
              </p>
            </a>

            <a
              href="/dashboard/messages"
              className="border border-white/10 bg-white/5 p-10 hover:border-white/30 transition-all"
            >
              <h2 className="text-3xl font-bold">
                Messages
              </h2>

              <p className="text-white/60 mt-4">
                Read user messages
              </p>
            </a>

          </div>

        </div>

      </main>
    </ProtectedAdminRoute>
  );
}