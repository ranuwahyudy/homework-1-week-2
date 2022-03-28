import React from "react";
import data from "../../Data";
import Track from "./TrackInfo";

function MusicList() {
    return (
        <div>
            {data.map((v) => {
                return (
                    <Track
                        key={v.id}
                        image={v.album.images[0]?.url}
                        title={v.album.name}
                        album={v.artists[0]?.name}
                    />
                );
            })}
        </div>
    )
}

export default MusicList;