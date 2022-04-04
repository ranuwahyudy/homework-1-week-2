import { useState, useEffect } from "react";
import axios from "axios";
import Login from "../../layouts/Login";
import Playlist from "../playlist/playlist";

const Search = ({token}) => {
    const [searchKey, setSearchKey] = useState("")
    const [searchData, setSearchData] = useState([])
    const [selectedTracks, setSelectedTracks] = useState([])
    const [mergedTracks, setMergedTracks] = useState([]);
    const [combinedTrack, setCombinedTrack] = useState([])
    const [isSelected, setIsSelected] = useState("")

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

    // const toggleSelect = (track) => {
    //     const uri = track.uri;
    
    //     // delete
    //     if (selectedTrack.includes(uri)) {
    //         setSelectedTrack(selectedTrack.filter((item) => item !== uri))
    //         setIsSelected(false)
    //     } else {
    //         setSelectedTrack([...selectedTrack, uri])
    //         setIsSelected(true)
    //     }
    // }

    // useEffect((e) => {
    //     const combinedTrackWithSelectedTrack = searchData.map((track) => ({
    //         isSelected: selectedTrack.find(t => t.uri === track.uri),
    //         ...track,
    //     }));
    //     setCombinedTrack(combinedTrackWithSelectedTrack);
    // }, [selectedTrack, searchData]);

    // const handleSelectedTrack = (searchData) => {
    //     const alreadySelected = selectedTrack.find(t => t.uri === searchData.uri)
    //     if (alreadySelected) {
    //         setSelectedTrack(selectedTrack.filter(t => t.uri !== searchData.uri))
    //     } else {
    //         setSelectedTrack((selectedTrack) => [...selectedTrack, searchData])
    //     }
    // }

    const handleSelectTrack = (uri)=>{
        const alreadySelected = selectedTracks.find(selectedTrack => selectedTrack === uri)
        if (alreadySelected){
            setSelectedTracks(selectedTracks.filter(selectedTrack => selectedTrack !== uri))
        }
        else {
            setSelectedTracks((selectedTracks)=>[...selectedTracks,searchData])
        }
        console.log(selectedTracks);
    };

    useEffect (() =>{
        const mergedTracksWithSelectedTracks = searchData.map((track) =>({
            ...track,
            isSelected: !!selectedTracks.find((selectedTrack) => selectedTrack === track.uri),
        }));
        setMergedTracks(mergedTracksWithSelectedTracks);
    },[selectedTracks,searchData]);

    const renderTrackData = () => {
        return searchData.map(data => (
            <>
                <div className="container music-list">
                    <div key={data.id} className="music-cover">
                        <img className="cover" src={data.album.images[0].url} alt="Album" />
                    </div>
                    <div className="music-title">
                        <h3>{data.name}</h3>
                        <p>{data.artists[0].name}</p>
                        {/* {selectedTrack.includes(data.uri) ? (
                            <button className="btn-deselect" onClick={() => toggleSelect(data)}>DESELECT</button>
                        ) : (
                            <button className="btn-select" onClick={() => toggleSelect(data)}>SELECT</button>
                        )} */}
                        <button className="btn-select" onClick={() => handleSelectTrack(data.uri)} > {isSelected ? "DESELECT" : "SELECT"} </button>
                    </div>
                </div>
            </>
        ))
    }

    return (
        <>
            {token ?
                <><div className="search-bar">
                    <form onSubmit={searchTrack}>
                        <input type="text" className="input-search" placeholder="Artists, songs, or podcast" onChange={e => setSearchKey(e.target.value)} />
                        <button type={"submit"} className="btn-search">SEARCH</button>
                    </form>
                </div><Playlist token={token} selectedTrack={selectedTracks} /></>

                : <Login />
            }

            {renderTrackData()}
        </>
    );
}

export default Search;