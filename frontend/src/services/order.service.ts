import { api } from "../lib/axios";

export interface OrderPayload {
  customerName: string;
  customerEmail: string;
  address: string;
  quantity: number;
  message?: string;
  productId: string;
}

export const createOrder = async (
  data: OrderPayload
) => {
  const response = await api.post("/orders", data);

  return response.data;
};