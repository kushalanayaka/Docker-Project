import { api } from "../lib/axios";
import { Blog } from "../types/blog";

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await api.get("/blogs");
  return response.data;
};

export const getBlogById = async (
  id: string
): Promise<Blog> => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};