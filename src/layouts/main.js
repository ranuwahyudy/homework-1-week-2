import React from "react";
import Header from "./header";
import MusicList from "../components/music-list";

function Main() {
    return (
        <>
            <Header />
            <div className='music-content'>
                <MusicList />
            </div>
        </>
    );
}

export default Main;