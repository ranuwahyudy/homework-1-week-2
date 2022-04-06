const Playlist = ({addPlaylist, handleAddPlaylistChange, handleAddPlaylistSubmit, getUserData}) => {
    return (
        <form className="form-playlist container" onChange={getUserData} onSubmit={handleAddPlaylistSubmit}>
            <h1>Create Playlist</h1>
            <div>
                <label className="label-title" htmlFor="title">Playlist Title</label>
                <input className="input-title" type="text" placeholder="Playlist Title" id="name" name="name" onChange={handleAddPlaylistChange} value={addPlaylist.name} required minLength="10"/>
            </div>
            <div>
                <label className="label-desc" htmlFor="descInput">Playlist Description</label>
                <input className="input-desc" type="text" placeholder="Playlist Description" id="description" name="description" onChange={handleAddPlaylistChange} value={addPlaylist.description} required />
            </div>
            <div>
                <input className="btn-create" value="CREATE" type="submit" />
            </div>
        </form>
    )
}

export default Playlist;