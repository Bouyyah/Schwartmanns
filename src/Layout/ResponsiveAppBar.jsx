import { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button,Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link, useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const location = useLocation();
  const [menuRoute,setMenuRoute] = useState();
  const [menuAnchor, setMenuAnchor] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  }

  useEffect(()=>{
    setMenuRoute(location.pathname === '/dashboard' ? (<Link to='users'>Manage users</Link>):(<Link to='dashboard'>Dashboard</Link>))
  },[location])

  return (
    <div>
      <AppBar sx={{ backgroundColor: "white", color: "#4F85C4",  }}>
        <Toolbar>
          <Typography variant='h5' fontWeight={"bold"} sx={{ flexGrow: 1 }}>
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
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>{menuRoute}</MenuItem>
            <MenuItem onClick={()=>{handleMenuClose(); handleLogout();}}>Logout</MenuItem>
          </Menu>
          <Box
            flexDirection={"row"}
            gap={5}
            sx={{ display: { xs: "none", sm: "flex" } }}
            justifyContent={'center'}
            alignItems='center'
            >
            <Typography>{menuRoute}</Typography>
            <Button onClick={handleLogout}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ResponsiveAppBar;
