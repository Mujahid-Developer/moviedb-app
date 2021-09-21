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
                    <a class="navbar-brand" href="#"><img className='mobile-logo' src={logo} alt="" srcset="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">ক্যাটাগরি</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">টপ ২০</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">টপ রেটিং</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">আপকামিং</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="মুভির নাম লিখুন" aria-label="Search" />
                            <button class="btn btn-outline-danger" type="submit">সার্চ</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;