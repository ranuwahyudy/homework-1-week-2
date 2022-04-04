import { useState } from "react";
import axios from "axios";

const Playlist = ({token, selectedTrack}) => {
    const [user, setUser] = useState({
        name: '',
        description: '',
        public: true
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const uris = selectedTrack.map(item => item.uri);
        
        const playlistRequest ={
            title: user.title,
            description: user.description,
            public: false,
        }

        axios.get("https://api.spotify.com/v1/me", 
        {headers: {Authorization: `Bearer ${token}`,}})
        .then((response) =>{
            axios.post(`https://api.spotify.com/v1/users/${response.data.id}/playlists`, playlistRequest,
            {headers: {Authorization: `Bearer ${token}`,}} )
            .then((response) =>{
                        axios.post(`https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
                        { uris: uris }, {headers: {Authorization: `Bearer ${token}`,}})
            })
        })
    }

    return (
        <form className="form-playlist container" onSubmit={handleFormSubmit}>
            <h1>Create Playlist</h1>
            <div>
                <label className="label-title" htmlFor="title">Playlist Title</label>
                <input className="input-title" type="text" placeholder="Playlist Title" id="name" name="name" onChange={handleFormChange} value={user.name} required minLength="10"/>
            </div>
            <div>
                <label className="label-desc" htmlFor="descInput">Playlist Description</label>
                <input className="input-desc" type="text" placeholder="Playlist Description" id="description" name="description" onChange={handleFormChange} value={user.description} required />
            </div>
            <div>
                <input className="btn-create" value="CREATE" type="submit" />
            </div>
        </form>
    )
}

export default Playlist;