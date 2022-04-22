import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Login from "../../layouts/Login";
// import Card from "../card/card";
import CreatePlaylist from "../playlist/CreatePlaylist";
import { useSelector } from "react-redux";
import Search from "./search";

const SearchSong = ({url}) => {
    const token = useSelector((state) => state.user.token);

    const [searchKey, setSearchKey] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [selectedSongs, setSelectedSongs] = useState([]);
    const [combineSongs, setCombineSongs] = useState([]);

    const searchTrack = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track"
            }
        })

        setSearchData(data.tracks.items)
    }

    useEffect(() => {
        const handleCombineTracks = searchData.map((song) => ({
            ...song,
                isSelected: selectedSongs.find((data) => data === song.uri),
        }));
        setCombineSongs(handleCombineTracks);
    }, [searchData, selectedSongs]);

    const handleSelect = (uri) => {
        const selected = selectedSongs.find((song) => song === uri);
        selected
            ? setSelectedSongs(selectedSongs.filter((song) => song !== uri))
            : setSelectedSongs([...selectedSongs, uri]);
    };

    // const renderTrackData = () => {
    //     return combineSongs.map((data) => {
    //         const { uri, name, artists, album, isSelected } = data;
    //         return (
    //             <Card 
    //                 key={uri}
    //                 uri={uri}
    //                 image={album.images[0]?.url}
    //                 title={name}
    //                 album={artists[0]?.name}
    //                 selectState={handleSelect}
    //                 isSelected={isSelected}
    //                 isSelectedSongs={selectedSongs}
    //             />
    //         )
    //     })
    // }

    return (
        <>
            {token ?
                <>
                    <div className="search-bar">
                        <form onSubmit={searchTrack}>
                            <input type="text" className="input-search" placeholder="Artists, songs, or podcast" onChange={e => setSearchKey(e.target.value)} />
                            <button type={"submit"} className="btn-search">SEARCH</button>
                        </form>
                    </div>
                    <CreatePlaylist url={url} selectedSongs={selectedSongs} />
                </>

                : <Login />
            }

            <div className="music container">
                <Search
                    combineSongs={combineSongs}
                    handleSelect={handleSelect}
                    selectedSongs={selectedSongs}
                />
            </div>
        </>
    );
}

SearchSong.propTypes = {
    url: PropTypes.string
}

export default SearchSong;