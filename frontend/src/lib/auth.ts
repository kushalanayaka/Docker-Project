import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  id: string;
  role: string;
  exp: number;
}

export const getUser = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    return jwtDecode<DecodedToken>(token);
  } catch {
    return null;
  }
};

export const isAdmin = () => {
  const user = getUser();

  return user?.role === "ADMIN";
};
