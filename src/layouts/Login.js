import React from "react";
import Search from "./search";

function Login({token, setToken}) {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_KEY
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    //     window.location.reload()
    // }

    return (
        <>
            {!token ?
                <div className="login-section">
                    <a className="btn-login" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                </div>
            : ""}

            {token ?
                <Search />

                : ""
            }
        </>
    );
}

export default Login;