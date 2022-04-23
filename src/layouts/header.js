import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Chip, Container } from "@mui/material";

function Header({logout}) {
    const token = useSelector((state) => state.user.token);
    const [user, setUser] = useState({
        userId: "",
        userName: "",
        userImage: "",
    })

    useEffect(() => {
        const getUserData = async () => {
            const {data} = await axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                }
            });

            const userInfo = {
                ...user,
                userId: data.id,
                userName: data.display_name,
                userImage: data.images[0]?.url,
            };
            setUser(userInfo);
        };

        getUserData();
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor: "#711a75"}}>
                    <Container maxWidth='lg'>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Spotify Clone
                            </Typography>
                            <div>
                                <IconButton
                                    size="medium"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <Chip
                                        sx={{fontWeight: 500, color: "white"}}
                                        avatar={<Avatar alt={user.userName} src={user.userImage} sx={{height: "50px"}} />}
                                        label={user.userName}
                                        clickable 
                                    />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    );
}

Header.propTypes = {
    logout: PropTypes.func
}

export default Header;