import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useChangePasswordMutation } from "../api/mutations";
import { useSnackbar } from "../hooks/SnackbarHook";

function ChangePasswordModal({ open, onClose, userName, userId }) {
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: updatePass } = useChangePasswordMutation();

  const { showSnackbar, SnackbarComponent } = useSnackbar();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    setNewPassword("");
    onClose();
  };

  const handleSubmit = () => {
    updatePass(
      { userId, newPassword },
      {
        onSuccess: () => {
          showSnackbar("Password updated successfully", "success");
          handleClose();
        },
        onError: () =>
          showSnackbar(
            "An error has occured the password didn't change",
            "error"
          ),
      }
    );
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth='sm' fullWidth>
        <DialogTitle>Change Password for {userName}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label='New Password'
            type={showPassword ? "text" : "password"}
            variant='outlined'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            margin='normal'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge='end'>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      {SnackbarComponent}
    </>
  );
}

export default ChangePasswordModal;
