import React from "react";
import Header from "./header";
import Search from "../components/search/SearchSong";
import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "../redux/slice";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/Styles";
// import { Token } from "../components/search/search";

function Login() {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    // const redirect = "http://localhost:3000/" || "https://generasi-gigih-homework-ranuwahyudy.vercel.app/" || "https://generasi-gigih-homework-git-main-ranuwahyudy.vercel.app/" || "https://generasi-gigih-homework-h60kpiff4-ranuwahyudy.vercel.app/";

    // eslint-disable-next-line no-undef
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_KEY;
    const REDIRECT_URI = window.location.origin + '/';
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";
    const SCOPE = "playlist-modify-private";

    const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

    const handleLogout = () => {
        dispatch(setUserToken(""))
        window.localStorage.removeItem("token")
        window.location.reload()
    }

    return (
        <>
            {
                !token ?
                    <div className="login-section">
                        <ThemeProvider theme={theme}>
                            <Button href={url} variant="contained" size="large" sx={{fontSize: 20}}>Login with Spotify</Button>
                        </ThemeProvider>
                    </div>
                : <>
                    <Header logout={handleLogout} />
                    <Search url={url} />
                </>
            }
        </>
    );
}

export default Login;