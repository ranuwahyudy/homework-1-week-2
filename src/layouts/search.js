import { useState} from "react";
import axios from "axios";
import Login from "./Login";

const Search = ({token}) => {
    const [searchKey, setSearchKey] = useState("")
    const [searchData, setSearchData] = useState([])
    const [selectedTrack, setSelectedTrack] = useState([])

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

    const handleSelectTrack = (uri)=>{
        const alreadySelected = selectedTrack.find(t => t.uri === uri)
        if (alreadySelected){
            setSelectedTrack(selectedTrack.filter(t => t.uri === uri))
        }
        else {
            setSelectedTrack([...selectedTrack,uri])
        }
        console.log(selectedTrack);
    };

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
                        <button className="btn-select" onClick={() => handleSelectTrack(data)}> Select </button>
                    </div>
                </div>
            </>
        ))
    }

    return (
        <>
            {token ?
                <form onSubmit={searchTrack}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>

                : <Login />
            }

            {renderTrackData()}
        </>
    );
}

export default Search;