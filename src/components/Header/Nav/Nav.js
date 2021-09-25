/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css'
import logo from '../../../assets/movie-db.png';

const Nav = () => {
    return (
        <div className=" topbar shadow-sm fixed-top">
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Nav;