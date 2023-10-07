import ResponsiveAppBar from "./ResponsiveAppBar"
import { Paper } from "@mui/material"

const Layout = ({children}) => {
  return (
    <div>
        <ResponsiveAppBar/>
        <Paper>
            {children}
        </Paper>
    </div>
  )
}

export default Layout