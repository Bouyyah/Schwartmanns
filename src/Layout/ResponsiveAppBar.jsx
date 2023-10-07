import { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, Link } from "react-router-dom";

const ResponsiveAppBar = () => {
  const location = useLocation();

  const [menuRoute,setMenuRoute] = useState();

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  useEffect(()=>{
    setMenuRoute(location === 'dashboard' ? (<Link to='users'>Manage users</Link>):(<Link to='dashboard'>Dashboard</Link>))
  },[location])

  return (
    <div>
      <AppBar sx={{ backgroundColor: "white", color: "#4F85C4" }}>
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

          <Box
            flexDirection={"row"}
            gap={2}
            sx={{ display: { xs: "none", sm: "flex" } }}>
            <Typography>{menuRoute}</Typography>
            <Typography>Logout</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ResponsiveAppBar;
