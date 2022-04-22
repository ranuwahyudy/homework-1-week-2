import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Login from "../layouts/Login";
import { setUserToken } from "../redux/slice";

function Auth() {
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();
    
    useEffect(() => {
        let token = window.localStorage.getItem("token")
        const hash = window.location.hash

        if(!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        document.title = "Spotify";

        dispatch(setUserToken (token));

    }, [token, dispatch])

    return (
        <>
            <Login />
        </>
    )
}

export default Auth;