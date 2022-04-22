import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Playlist from "./playlist";
import { useSelector } from "react-redux";

const CreatePlaylist = ({selectedSongs, url}) => {
    const token = useSelector((state) => state.user.token);

    const [user, setUser] = useState({
        displayName: '',
        imagesUrl: '',
        user_id: undefined
    })

    const getUserData = async () => {
        try {
            const data = await axios
            .get(
                `https://api.spotify.com/v1/me?access_token=${token}`
            )
            setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
            console.log(data);
        } catch (error) {
            console.log('get user data error');
        }
    }
    
    const [addPlaylist, setAddPlaylist] = useState({
        name: '',
        description: '',
    })
    
    const [playlistID, setPlaylistID] = useState(url);
    const bodyParams = {
        name: addPlaylist.name,
        description: addPlaylist.description,
        collaborative: false,
        public: false
    }
    
    const header = {
        Authorization: `Bearer ${token}`
    }

    const handleAddPlaylistChange = (e) => {
        const { name, value } = e.target;
        setAddPlaylist({ ...addPlaylist, [name]: value })
    }
    
    const handleAddPlaylistSubmit = async (e) => {
        e.preventDefault();
        console.log(addPlaylist);
        await axios
            .post(
                `https://api.spotify.com/v1/users/${user.user_id}/playlists`, bodyParams,
                {
                    headers: header
                }
            )
            .then((response) => (
                handleAddItemToPlaylist(response.data.id)),
                alert("Successfully created playlist!")
            )
            .catch((error) => error)
    }
    
    const itemParams = {
        uris: selectedSongs
    }
    
    const handleAddItemToPlaylist = async (id) => {
        setPlaylistID(id);
        const data = await axios
            .post(
                `https://api.spotify.com/v1/playlists/${id}/tracks`, itemParams,
                {
                    headers: header
                }
            )
            .catch((error) => error)
        console.log(data);
    }

    return (
        <>
            <Playlist
                handleAddPlaylistChange={handleAddPlaylistChange}
                handleAddPlaylistSubmit={handleAddPlaylistSubmit}
                addPlaylist={addPlaylist}
                playlistID={playlistID}
                selectedSongs={selectedSongs}
                getUserData={getUserData}
            />
        </>
    )
}

CreatePlaylist.propTypes = {
    selectedSongs: PropTypes.array,
    url: PropTypes.string
}

export default CreatePlaylist;