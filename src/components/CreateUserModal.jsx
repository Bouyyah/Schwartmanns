import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

import { useAddUser } from '../api/mutations';

function CreateUserModal({ open, onClose }) {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {mutate} = useAddUser();

  const handleClose = () => {
    setName('');
    setEmail('');
    setPassword('');
    onClose();
  };

  const handleSubmit = () => {
    

    mutate({
        "name": name,
        "email": email,
        "passwordHash": password,
        "type": "user",
    },{
        onSuccess: (data) => {
            console.log(data)
        }
    })

    handleClose(); 
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <strong>Create User</strong>
      </DialogTitle>
      <DialogContent>
        <form>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CreateUserModal;
