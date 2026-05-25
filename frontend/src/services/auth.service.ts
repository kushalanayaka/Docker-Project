import { api } from "../lib/axios";

export interface AuthPayload {
  name?: string;
  email: string;
  password: string;
}

export const registerUser = async (
  data: AuthPayload
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (
  data: AuthPayload
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  return response.data;
};