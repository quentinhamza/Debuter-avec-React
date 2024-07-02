import React from 'react';
import '../styles/Header.css';

function Header({ cartValue }) {
    return (
        <header className={cartValue > 0 ? 'header-full' : 'header-empty'}>
            <h1>La maison jungle</h1>
            <p>Nombre d'articles dans le panier : {cartValue}</p>
        </header>
    );
}

export default Header;