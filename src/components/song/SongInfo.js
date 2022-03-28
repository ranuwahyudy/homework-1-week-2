import React from "react";

function SongInfo ({ image, title, album }) {
    return (
        <div className="song">
            <img src={image} alt='Song Cover'/>
            <h1 className='song-title'>{title}</h1>
            <h2 className='song-artist'>{album}</h2>
        </div>
    );
}

export default SongInfo;