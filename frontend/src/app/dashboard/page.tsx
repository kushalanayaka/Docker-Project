"use client";
import StatsSkeleton from "../../components/dashboard/StatsSkeleton";
import { useEffect, useState } from "react";

import {
  DashboardStats,
  getDashboardStats,
  getRecentOrders,
  getRecentMessages,
  RecentOrder,
  RecentMessage,
} from "../../services/dashboard.service";
import ProtectedAdminRoute from "../../components/auth/ProtectedAdminRoute";

export default function DashboardPage() {

  const [stats, setStats] =
    useState<DashboardStats>({
      products: 0,
      blogs: 0,
      orders: 0,
      messages: 0,
    });

  const [loading, setLoading] =
    useState(true);

  const [recentOrders, setRecentOrders] =
    useState<RecentOrder[]>([]);

  const [recentMessages, setRecentMessages] =
    useState<RecentMessage[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token =
          localStorage.getItem("token");

        if (!token) return;

        const data =
          await getDashboardStats(token);

        setStats(data);

        const orders =
          await getRecentOrders(token);

        setRecentOrders(orders);

        const messages =
          await getRecentMessages(token);

        setRecentMessages(messages);

      } catch (error: any) {
        console.error("DASHBOARD ERROR:", error);

        if (error.response) {
          console.log("STATUS:", error.response.status);
          console.log("DATA:", error.response.data);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);
  return (
    <ProtectedAdminRoute>
      <main className="min-h-screen bg-black text-white">

        <div className="flex min-h-screen">

          {/* Sidebar */}

          <aside className="w-72 border-r border-white/10 p-8 hidden md:block">

            <h2 className="text-3xl font-bold mb-12">
              Dashboard
            </h2>

            <nav className="flex flex-col gap-6">

              <a
                href="/dashboard/products"
                className="text-white/70 hover:text-white transition"
              >
                🛍 Products
              </a>

              <a
                href="/dashboard/blogs"
                className="text-white/70 hover:text-white transition"
              >
                📝 Blogs
              </a>

              <a
                href="/dashboard/orders"
                className="text-white/70 hover:text-white transition"
              >
                📦 Orders
              </a>

              <a
                href="/dashboard/messages"
                className="text-white/70 hover:text-white transition"
              >
                💬 Messages
              </a>

            </nav>

          </aside>

          {/* Main Content */}

          <section className="flex-1 p-4 md:p-10">

            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Welcome Back 👋
            </h1>

            <p className="text-white/60 mb-12">
              Manage your artwork platform from one place.
            </p>

            {
              loading ? (
                <StatsSkeleton />
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">

                  <div className="bg-white/5 border border-white/10 p-6">
                    <p className="text-white/60 text-sm">
                      Products
                    </p>

                    <h2 className="text-2xl md:text-4xl font-bold mt-2">
                      {stats.products}
                    </h2>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6">
                    <p className="text-white/60 text-sm">
                      Blogs
                    </p>

                    <h2 className="text-2xl md:text-4xl font-bold mt-2">
                      {stats.blogs}
                    </h2>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6">
                    <p className="text-white/60 text-sm">
                      Orders
                    </p>

                    <h2 className="text-2xl md:text-4xl font-bold mt-2">
                      {stats.orders}
                    </h2>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-6">
                    <p className="text-white/60 text-sm">
                      Messages
                    </p>

                    <h2 className="text-2xl md:text-4xl font-bold mt-2">
                      {stats.messages}
                    </h2>
                  </div>

                </div>
              )
            }
            <div className="mb-12">

              <h2 className="text-3xl font-bold mb-6">
                Quick Actions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <a
                  href="/dashboard/products/create"
                  className="bg-white/5 border border-white/10 p-6 hover:border-white/30 transition-all"
                >
                  <h3 className="text-xl font-semibold">
                    ➕ Create Artwork
                  </h3>

                  <p className="text-white/60 mt-2">
                    Add a new artwork to your gallery
                  </p>
                </a>

                <a
                  href="/dashboard/blogs"
                  className="bg-white/5 border border-white/10 p-6 hover:border-white/30 transition-all"
                >
                  <h3 className="text-xl font-semibold">
                    📝 Create Blog
                  </h3>

                  <p className="text-white/60 mt-2">
                    Share your latest story
                  </p>
                </a>

                <a
                  href="/dashboard/orders"
                  className="bg-white/5 border border-white/10 p-6 hover:border-white/30 transition-all"
                >
                  <h3 className="text-xl font-semibold">
                    📦 View Orders
                  </h3>

                  <p className="text-white/60 mt-2">
                    Check incoming artwork requests
                  </p>
                </a>

              </div>

            </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

              <div className="bg-white/5 border border-white/10 p-6">

                <h2 className="text-2xl font-bold mb-4">
                  Recent Orders
                </h2>

                <div className="space-y-4">

                  {recentOrders.length === 0 ? (

                    <p className="text-white/60">
                      No orders yet
                    </p>

                  ) : (

                    recentOrders.map((order) => (

                      <div
                        key={order.id}
                        className="border-b border-white/10 pb-3"
                      >

                        <p className="font-medium">
                          {order.customerName || "Anonymous Customer"}
                        </p>

                        <p className="text-white/60 text-sm">
                          {order.product.title}
                        </p>

                      </div>

                    ))

                  )}

                </div>

              </div>

              <div className="bg-white/5 border border-white/10 p-6">

                <h2 className="text-2xl font-bold mb-4">
                  Recent Messages
                </h2>

                <div className="space-y-4">

                  {recentMessages.length === 0 ? (

                    <p className="text-white/60">
                      No messages yet
                    </p>

                  ) : (

                    recentMessages.map((message) => (

                      <div
                        key={message.id}
                        className="border-b border-white/10 pb-3"
                      >

                        <p className="font-medium">
                          {message.sender?.name ||
                            "Anonymous User"}
                        </p>

                        <p className="text-white/60 text-sm truncate">
                          {message.content}
                        </p>

                      </div>

                    ))

                  )}

                </div>

              </div>

            </div>

            {/* Existing Cards */}

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

              {/* Products */}
              {/* Blogs */}
              {/* Orders */}
              {/* Messages */}

            </div>

          </section>

        </div>

      </main>
    </ProtectedAdminRoute>
  );
}