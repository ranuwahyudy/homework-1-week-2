import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#711a75',
        },
        secondary: {
            main: '#ffffff',
        },
    },
    shape: {
        borderRadius: 30,
    },
    typography: {
        button: {
            textTransform: "none"
        }
    },
})

export default theme;