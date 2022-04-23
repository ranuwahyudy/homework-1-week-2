import React from "react";
import PropTypes from 'prop-types';
import { Button, Container, FormControl, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/Styles";

const Playlist = ({addPlaylist, handleAddPlaylistChange, handleAddPlaylistSubmit, getUserData}) => {
    return (
        <>
            <Container maxWidth='xs' sx={{marginTop: "30px", marginBottom: "50px"}}>
                <form onChange={getUserData} onSubmit={handleAddPlaylistSubmit}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                            <Typography variant="h4" gutterBottom component="div" fontWeight="bold" textAlign="center">
                                Create Playlist
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Playlist Title
                            </Typography>
                            <TextField variant="outlined" placeholder="Playlist Title" sx={{borderRadius:"5px", backgroundColor: "white", marginBottom:"20px"}} id="name" name="name" onChange={handleAddPlaylistChange} value={addPlaylist.name} required minLength={10}/>
                                <Typography variant="subtitle1" gutterBottom component="div">
                                    Playlist Description
                                </Typography>
                            <TextField variant="outlined" placeholder="Playlist Description" sx={{borderRadius:"5px", backgroundColor: "white", marginBottom:"20px"}} id="description" name="description" onChange={handleAddPlaylistChange} value={addPlaylist.description} required />
                            <ThemeProvider theme={theme}>
                                <Button type="submit" variant="contained" size="large" color="primary" sx={{fontWeight: "bold", width: "100px"}}>CREATE</Button>
                            </ThemeProvider>
                    </FormControl>
                </form>
            </Container>
        </>
    )
}

Playlist.propTypes = {
    addPlaylist: PropTypes.object,
    handleAddPlaylistChange: PropTypes.func,
    handleAddPlaylistSubmit: PropTypes.func,
    getUserData: PropTypes.func
}

export default Playlist;