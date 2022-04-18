import React from "react";
import PropTypes from 'prop-types';
// import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/Styles";

function Header({logout}: any) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "#711a75", padding: "5px 0px"}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Spotify Clone
                </Typography>
                    <ThemeProvider theme={theme}>
                        <Button onClick={logout} variant="contained" size="large" color="secondary" sx={{boxShadow: "none", fontWeight: "bold"}}>LOGOUT</Button>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

Header.propTypes = {
    logout: PropTypes.func
}

export default Header;