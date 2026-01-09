import axios from "axios";
import { useAuth } from "@clerk/nextjs";

export interface Todo {
  id: number;
  title: string;
  description?: string;
  due_date?: string;
  status: "pending" | "completed";
  is_completed: boolean;
  user_id: string;
}

// Helper to get authenticated Axios instance
export const useApi = () => {
  const { getToken } = useAuth();

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return api;
};
