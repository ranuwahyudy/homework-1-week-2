import {useEffect, useState} from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { dataAccessToken } from "./redux/dataAction";
import Login from "../layouts/Login";

function Auth() {
    const [token, setToken] = useState("")
    
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

    return (
        <>
            <Login token={token} setToken={setToken} />
        </>
    )
}

export default Auth;