import React from "react";

function Track ({ image, title, album }) {
    return (
        <div className="music-list">
            <img src={image} alt="Album" />
            <div>
                <h3>{title}</h3>
                <p>{album}</p>
            </div>
        </div>
    );
}

export default Track;