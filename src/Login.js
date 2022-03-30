import axios from "axios";
import {useEffect, useState} from "react";

function Login() {
    const CLIENT_ID = "e5356e290acc4e98802f6424e77171a9"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")
    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])
    
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const searchArtist = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })

        setArtists(data.artists.items)
    }

    const renderArtists = () => {
        return artists.map(artist => (
            <>
            <div className="container music-list">
                <div key={artist.id} className="music-cover">
                    {artist.images.length ? <img className="cover" src={artist.images[0].url} alt="Album" /> : <div>No Image</div>}
                </div>
                <div className="music-title">
                    <p>{artist.name}</p>
                </div>
                </div>
            </>

            // <div key={artist.id}>
            //     {artist.images.length ? <img src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            //     {artist.name}
            // </div>
        ))
    }

    return (
        <>
            {/* <Main /> */}
            <h1>Spotify Clone App</h1>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
            : <button onClick={logout}>Logout</button>}

            {token ?
                <form onSubmit={searchArtist}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>

                : <h3>Please Login</h3>
            }

            {renderArtists()}

            {/* <button onClick={logout}>Logout</button> */}
        </>
    );
}

export default Login;