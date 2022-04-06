import React from "react";
import Header from "./header";
import Search from "../components/search/search";

function Login({token, setToken}) {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_KEY
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "playlist-modify-private"

    const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

    const handleLogout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <>
            {
                !token ?
                    <div className="login-section">
                        <a className="btn-login" href={url} >Login with Spotify</a>
                    </div>
                : <>
                    <Header logout={handleLogout} />
                    <Search token={token} url={url} />
                </>
            }
        </>
    );
}

export default Login;