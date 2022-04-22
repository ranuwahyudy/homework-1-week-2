import React from "react";
import Card from "../card/card";

const Search = ({combineSongs, handleSelect, selectedSongs}) => {
    return combineSongs.map((data) => {
        const { uri, name, artists, album, isSelected } = data;
        return (
            <Card 
                key={uri}
                uri={uri}
                image={album.images[0]?.url}
                title={name}
                album={artists[0]?.name}
                selectState={handleSelect}
                isSelected={isSelected}
                isSelectedSongs={selectedSongs}
            />
        )
    })
}

export default Search;