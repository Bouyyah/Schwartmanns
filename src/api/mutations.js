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

    return useMutation( async ( {userId, newPassword} ) => {
      console.log(userId, newPassword)
      return await axiosInstance.put(`/users/updatePassword/${userId}`, `"${newPassword}"`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      });
         
      })
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
    const queryClient = useQueryClient();

    return useMutation(async ( userId) => {
      return  await axiosInstance.delete(`/users/${userId}`);
         
      },{
        onSuccess: ()=> {queryClient.invalidateQueries('users');}
      })
}