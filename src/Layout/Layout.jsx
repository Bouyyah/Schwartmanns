import ResponsiveAppBar from "./ResponsiveAppBar";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainContent = styled("main")(({ theme }) => ({
  
  backgroundColor: "#f5f5f5",
  width: `100vw`,
  height:'100vh',
 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
};

export default Layout;
