import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ResponsiveAppBar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <div>
      <AppBar sx={{backgroundColor: 'white', color:'#4F85C4'}}>
        <Toolbar>
          <Typography variant='h5' fontWeight={'bold'} sx={{ flexGrow: 1 }}>
            SCHWARTMANNS
          </Typography>
          <IconButton
            edge='end'
            color='inherit'
            aria-label='menu'
            onClick={handleMenuOpen}
            sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          
          <Box  flexDirection={'row'} gap={2} sx={{ display: { xs: "none", sm: "flex" } }}>
            <Typography>Manage Users</Typography>
            <Typography>Logout</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ResponsiveAppBar;
