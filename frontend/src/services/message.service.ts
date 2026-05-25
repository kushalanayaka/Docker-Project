import { api } from "../lib/axios";

export interface MessagePayload {
  content: string;
}

export const sendMessage = async (
  data: MessagePayload,
  token: string
) => {
  const response = await api.post(
    "/messages",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};