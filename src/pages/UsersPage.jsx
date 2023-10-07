import { useMemo, useState } from "react";
import { Divider, Paper, Typography, Box, Button } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { useUsers } from "../api/queries";
import CreateUserModal from "../components/CreateUserModal";
import { useDeleteUserMutation } from "../api/mutations";
import { useSnackbar } from '../hooks/SnackbarHook';
import ChangePasswordModal from "../components/ChangeUserPasswordModal";


const UsersPage = () => {
  const [openAddUser, setOpenAddUser] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [userNameForPassword, setUserNameForPassword] = useState('');
  const [userIdForPassword, setUserIdForPassword] = useState('');


  const { data, isLoading } = useUsers();
  const { mutate:deleteUser, isLoading: isDeleteUserLoading } = useDeleteUserMutation();

  const { showSnackbar, SnackbarComponent } = useSnackbar();


  const handleOpenAddUser = () => {
    setOpenAddUser(true);
  };

  const handleCloseAddUser = () => {
    setOpenAddUser(false);
  };

  const handleUpdatepass = (userName, userId)=>{
    setUserIdForPassword(userId);
    setUserNameForPassword(userName);
    setIsPasswordModalOpen(true);
  }

  const handleDeleteUser = (userId)=>{
    deleteUser(userId,{
        onSuccess: () => {
            showSnackbar("User deleted successfully","success")
        },
        onError: () => showSnackbar("An error has occured the user is not deleted","error")
    })
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        header: "Actions",
        Cell: ({ row }) => {
          const userId = row.original?.id;
          const userName = row.original?.name;
          return (
            <Box display={'flex'} gap={2}>
              <Button variant="contained" disabled={isDeleteUserLoading} onClick={()=>handleUpdatepass(userName,userId)}>Edit password</Button>
              <Button variant="contained" disabled={isDeleteUserLoading} color='error' onClick={()=>handleDeleteUser(userId)}>Delete</Button>
            </Box>
          );
        },
      },
    ],
    []
  );
  return (
    <div>
      <Paper sx={{ width: "90vw", p: 3 }}>
        <Box
          display='flex'
          justifyContent={"space-between"}
          sx={{ width: "95%" }}>
          <Typography variant='h6' fontWeight={"bold"}>
            Users management
          </Typography>
          <Button onClick={handleOpenAddUser}>Add User</Button>
        </Box>

        <Divider sx={{ mb: 3 }} />
        <MaterialReactTable
          columns={columns}
          data={data ?? []}
          state={{ isLoading: isLoading || isDeleteUserLoading}}
          initialState={{ pagination: { pageSize: 5} }}
        />
      </Paper>
      <CreateUserModal open={openAddUser} onClose={handleCloseAddUser} />
      <ChangePasswordModal
        open={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        userName={userNameForPassword}
        userId={userIdForPassword}
      />
      {SnackbarComponent}
    </div>
  );
};

export default UsersPage;
