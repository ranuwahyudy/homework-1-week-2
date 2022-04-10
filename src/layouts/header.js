import React from "react";
import PropTypes from 'prop-types';

function Header({logout}) {
    return (
        <div className="header">
            <nav className="container navbar">
                <a className="navbar-brand" href="https://www.spotify.com/" target="_blank" rel="noreferrer">Spotify Clone</a>
                <button className="btn-logout" onClick={logout}>LOGOUT</button>
            </nav>
        </div>
    );
}

Header.propTypes = {
    logout: PropTypes.func
}

export default Header;