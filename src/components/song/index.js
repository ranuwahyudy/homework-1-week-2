import React from "react";
import data from "../../Data";

export default function Song() {
    return (
        <div className="song">
            <img src={data.album.images[1].url} alt='Song Cover'/>
            <h1 className='song-title'>{data.name}</h1>
            <h2 className='song-artist'>{data.album.artists[0].name}</h2>
        </div>
    );
}