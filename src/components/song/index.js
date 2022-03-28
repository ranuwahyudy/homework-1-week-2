import React from "react";
import data from "../../Data";
import SongInfo from "./SongInfo";

export default function Song() {
    return (
        <SongInfo key={data.id} image={data.album.images[0].url} title={data.album.name} album={data.artists[0].name} />
    );
}