import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/Styles";

const Playlist = ({addPlaylist, handleAddPlaylistChange, handleAddPlaylistSubmit, getUserData}) => {
    return (
        <form className="form-playlist container" onChange={getUserData} onSubmit={handleAddPlaylistSubmit}>
            <h1>Create Playlist</h1>
            <div>
                <label className="label-title" htmlFor="title">Playlist Title</label>
                <input className="input-title" type="text" placeholder="Playlist Title" id="name" name="name" onChange={handleAddPlaylistChange} value={addPlaylist.name} required minLength={10}/>
            </div>
            <div>
                <label className="label-desc" htmlFor="descInput">Playlist Description</label>
                <input className="input-desc" type="text" placeholder="Playlist Description" id="description" name="description" onChange={handleAddPlaylistChange} value={addPlaylist.description} required />
            </div>
            <div>
                <ThemeProvider theme={theme}>
                    <Button type="submit" variant="contained" size="large" color="secondary" sx={{fontWeight: "bold"}}>CREATE</Button>
                </ThemeProvider>
            </div>
        </form>
    )
}

Playlist.propTypes = {
    addPlaylist: PropTypes.object,
    handleAddPlaylistChange: PropTypes.func,
    handleAddPlaylistSubmit: PropTypes.func,
    getUserData: PropTypes.func
}

export default Playlist;