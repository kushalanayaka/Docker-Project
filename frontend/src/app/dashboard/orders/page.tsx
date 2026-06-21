"use client";

import { useEffect, useState } from "react";
import EmptyState from "../../../components/ui/EmptyState";
import { api } from "../../../lib/axios";

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  status: string;
  createdAt: string;

  product: {
    title: string;
  };
}

export default function DashboardOrdersPage() {
  const [orders, setOrders] =
    useState<Order[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token =
          localStorage.getItem("token");

        if (!token) return;

        const response = await api.get(
          "/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(response.data);

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (
    status: string
  ) => {
    switch (status) {
      case "PENDING":
        return "bg-yellow-500/20 text-yellow-400";

      case "CONTACTED":
        return "bg-blue-500/20 text-blue-400";

      case "CONFIRMED":
        return "bg-green-500/20 text-green-400";

      case "COMPLETED":
        return "bg-emerald-500/20 text-emerald-400";

      case "CANCELLED":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-white/10";
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">

      <h1 className="text-3xl md:text-5xl font-bold mb-8">
        Artwork Requests
      </h1>

      {loading ? (

        <p className="text-white/60">
          Loading orders...
        </p>

      ) : orders.length === 0 ? (

        <EmptyState
          icon="📦"
          title="No Orders Yet"
          description="Orders from customers will appear here."
        />

      ) : (

        <>
          {/* Desktop Table */}

          <div className="hidden md:block overflow-x-auto">

            <table className="w-full border border-white/10">

              <thead>

                <tr className="border-b border-white/10">

                  <th className="text-left p-4">
                    Customer
                  </th>

                  <th className="text-left p-4">
                    Artwork
                  </th>

                  <th className="text-left p-4">
                    Status
                  </th>

                  <th className="text-left p-4">
                    Date
                  </th>

                </tr>

              </thead>

              <tbody>

                {orders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b border-white/10"
                  >

                    <td className="p-4">
                      {order.customerName ||
                        "Anonymous"}
                    </td>

                    <td className="p-4">
                      {order.product.title}
                    </td>

                    <td className="p-4">

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>

                    </td>

                    <td className="p-4">
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}

          <div className="md:hidden space-y-4">

            {orders.map((order) => (

              <div
                key={order.id}
                className="border border-white/10 p-4"
              >

                <p className="font-semibold">
                  {order.customerName ||
                    "Anonymous"}
                </p>

                <p className="text-white/60 mt-2">
                  {order.product.title}
                </p>

                <span
                  className={`inline-block mt-3 px-3 py-1 rounded-full text-sm ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>

              </div>

            ))}

          </div>

        </>

      )}

    </main>
  );
}