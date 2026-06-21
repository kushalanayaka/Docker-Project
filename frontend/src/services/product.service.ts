import { api } from "../lib/axios";
import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductById = async (
  id: string
): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export interface CreateProductPayload {
  title: string;
  description: string;
  story: string;
  imageUrl: string;
  price: number;
  stock: number;
}

export const createProduct = async (
  data: CreateProductPayload,
  token: string
): Promise<Product> => {
  try {
    console.log("Sending Product Data:", data);

    const response = await api.post(
      "/products",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error(
      "PRODUCT ERROR:",
      error.response?.data
    );

    throw error;
  }
};