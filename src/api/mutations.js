import axiosInstance from './axiosInstance';
import { useMutation,useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';



export const useLoginMutation = () => {
    const navigate = useNavigate();
  
    return useMutation({mutationFn: async ({ email, password }) => {
      const response = await axiosInstance.post('/users/login', { email, password });
      return response.data;
    },
    onSuccess: (data)=>{
      
      localStorage.setItem('token',data?.token);
      navigate('/users');
    }}
   );
  };


export const useChangePasswordMutation = () => {

    return useMutation({mutationFn: async ({ userId, newPassword }) => {
        const response = await axiosInstance.put(`/users/updatePassword/${userId}`, newPassword);
        return response.data;
      }})
}

export const useAddUser = () => {
    const queryClient = useQueryClient();

    return useMutation(async (data)=>{
      
      return await axiosInstance.post(`/users`,data);  
    },{
      onSuccess: ()=> {queryClient.invalidateQueries('users');}
    });
  }


export const useDeleteUserMutation = () => {

    return useMutation({mutationFn: async ( userId) => {
        const response = await axiosInstance.delete(`/users/${userId}`);
        return response;
      }})
}