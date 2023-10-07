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

const fetchUserDistributionByType = async ()=> {return (await axiosInstance.get('/users/userDistributionByType')).data;};

export const useUserDistributionByType = ()=>{
  return useQuery("userDistributionByType", fetchUserDistributionByType)
}

const fetchCirclesPerSheet = async ()=> {return (await axiosInstance.get('/sheet/totalCircles')).data;};

export const useCirclesPerSheet = ()=>{
  return useQuery("CirclesPerSheet", fetchCirclesPerSheet)
}

const fetchLinesPerSheet = async ()=> {return (await axiosInstance.get('/sheet/totalLines')).data;};

export const useLinesPerSheet = ()=>{
  return useQuery("linesPerSheet", fetchLinesPerSheet)
}

const fetchProjectDistributionByClient = async ()=> {return (await axiosInstance.get('/Projects/projectDistributionByClient')).data;};

export const useProjectDistributionByClient = ()=>{
  return useQuery("ProjectDistributionByClient", fetchProjectDistributionByClient)
}

const fetchProjectDistributionByUser = async ()=> {return (await axiosInstance.get('/Projects/projectDistributionByUser')).data;};

export const useProjectDistributionByUser = ()=>{
  return useQuery("ProjectDistributionByUser", fetchProjectDistributionByUser)
}