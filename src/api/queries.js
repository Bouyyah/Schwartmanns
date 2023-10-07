import axiosInstance from "./axiosInstance";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const response = await axiosInstance.get("/users");
  return response.data;
};

export const useUsers = () => {
  return useQuery("users", fetchUsers);
};

const fetchUser = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response.data?.user;
};

export const useUser = (id) => {
  return useQuery(["user", id], () => fetchUser(id));
};
