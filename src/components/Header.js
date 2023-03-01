import React from "react";

import './Header.css';
// Cabecalho do site, 
export default({black}) =>{
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href='/'>
                    <img src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"></img>
                </a>
            </div>
        </header>
    )
}