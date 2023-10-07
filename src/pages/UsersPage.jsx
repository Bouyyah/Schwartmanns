import { useMemo, useState } from "react";
import { Divider, Paper, Typography, Box, Button } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { useUsers } from "../api/queries";
import CreateUserModal from "../components/CreateUserModal";

const UsersPage = () => {
  const { data, isLoading } = useUsers();

  const [openAddUser, setOpenAddUser] = useState(false);

  const handleOpenAddUser = () => {
    setOpenAddUser(true);
  };

  const handleCloseAddUser = () => {
    setOpenAddUser(false);
  };

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
          const userId = row.orginal?.Id;
          return (
            <Box>
              <Button>Edit password</Button>
              <Button>Delete</Button>
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
          state={{ isLoading: isLoading }}
          initialState={{ pagination: { pageSize: 5} }}
        />
      </Paper>
      <CreateUserModal open={openAddUser} onClose={handleCloseAddUser} />
    </div>
  );
};

export default UsersPage;
