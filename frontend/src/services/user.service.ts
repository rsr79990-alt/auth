import { api } from "@/lib/axios";

export const getMe = async () => {
  const res = await api.get("/users/me", {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  return res.data;
};

export const updateProfile = async (data: {
  name?: string;
  bio?: string;
}) => {
  const res = await api.patch("/users/profile", data);
  return res.data;
};

export const changePassword = async (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  const res = await api.patch("/users/password", data);
  return res.data;
};