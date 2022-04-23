import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Login from "../../layouts/Login";
import CreatePlaylist from "../playlist/CreatePlaylist";
import { useSelector } from "react-redux";
import Search from "./search";
import { Container, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

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

    return (
        <>
            {token ?
                <>
                    <Container maxWidth='xs' sx={{marginTop: "70px"}}>
                            <FormControl sx={{ width: '100%' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    placeholder="Artists, songs, or podcast"
                                    onChange={(e) => {setSearchKey(e.target.value);}}
                                    onKeyUp={searchTrack}
                                    endAdornment={
                                        <InputAdornment position="end" onClick={searchTrack}>
                                                <IconButton edge="end" color="secondary">
                                                    <SearchIcon />
                                                </IconButton>
                                        </InputAdornment>
                                    }
                                    aria-describedby="outlined-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                    sx={{borderRadius:"50px", backgroundColor: "white", marginBottom:"20px"}}
                                />
                            </FormControl>
                    </Container>

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