import { createTheme } from "@mui/material";


const theme = createTheme({
    typography:{
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components:{
        MuiButton:{
            variants:[
                {
                    props:{variant: 'gradiantOrangeButton'},
                    style:{
                        color:'white',  
                        backgroundImage: 'linear-gradient(to right, #FF3702, #FF600D)', 
                        borderRadius:'25px',
                        fontWeight: 'bold', 
                        padding: '5px 14px'
                    }
                },
            
            ]
        },
    }
})

export default theme;