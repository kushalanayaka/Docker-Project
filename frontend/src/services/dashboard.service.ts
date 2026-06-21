import { api } from "../lib/axios";

export interface DashboardStats {
  products: number;
  blogs: number;
  orders: number;
  messages: number;
}

export interface RecentOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  createdAt: string;

  product: {
    title: string;
  };
}

export interface RecentMessage {
  id: string;
  content: string;
  createdAt: string;

  sender: {
    id: string;
    name: string;
    email: string;
  };
}

export const getDashboardStats =
  async (
    token: string
  ): Promise<DashboardStats> => {

    const response = await api.get(
      "/dashboard/stats",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };

export const getRecentOrders =
  async (
    token: string
  ): Promise<RecentOrder[]> => {

    const response = await api.get(
      "/dashboard/recent-orders",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };

export const getRecentMessages =
  async (
    token: string
  ): Promise<RecentMessage[]> => {

    const response = await api.get(
      "/dashboard/recent-messages",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  };