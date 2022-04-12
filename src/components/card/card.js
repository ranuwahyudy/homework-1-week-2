import React from "react";
import PropTypes from 'prop-types';

const Card = ({ uri, image, title, album, selectState, isSelectedSongs }) => {
    return (
        <>
            <div className="container music-list">
                <div key={uri} className="music-cover">
                    <img className="cover" src={image} alt="Album" />
                </div>
                <div className="music-title">
                    <h3>{title}</h3>
                    <p>{album}</p>
                    {/* <button className={`btn-select`} onClick={() => selectState(uri)} > {isSelected ? "DESELECT" : "SELECT"} </button> */}
                    {isSelectedSongs.includes(uri) ? (
                        <button className="btn-deselect" onClick={() => selectState(uri)}>DESELECT</button>
                    ) : (
                        <button className="btn-select" onClick={() => selectState(uri)}>SELECT</button>
                    )}
                </div>
            </div>
        </>
    );
}

Card.propTypes = {
    uri: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    album: PropTypes.string,
    selectState: PropTypes.func,
    isSelectedSongs: PropTypes.array
}

export default Card;