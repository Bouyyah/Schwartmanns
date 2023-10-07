import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export function useSnackbar() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info'); // 'error', 'warning', 'info', 'success', or any custom CSS class

  const handleClose = () => {
    setOpen(false);
  };

  const showSnackbar = (message, severity = 'info') => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  return {
    showSnackbar,
    SnackbarComponent: (
      <Snackbar
        open={open}
        autoHideDuration={2000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key={severity}
        
      >
        <Alert severity={severity}>{message}</Alert>
      </Snackbar>
    ),
  };
}
