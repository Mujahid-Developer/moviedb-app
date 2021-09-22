/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Nav.css'
import logo from '../../../assets/movie-db.png';

const Nav = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
            {/* Navbar Start */}
            <nav class="navbar navbar-expand-lg navbar-light" >
                <div class="container justify-content-center">
                    <form class="d-flex w-100">
                        <input class="form-control me-2" type="search" placeholder="মুভির নাম লিখুন" aria-label="Search" />
                        <button class="btn btn-outline-danger" type="submit">সার্চ</button>
                    </form>
                </div>

            </nav>
        </div>
    );
};

export default Nav;