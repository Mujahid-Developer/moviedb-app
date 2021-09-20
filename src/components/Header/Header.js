import React from 'react';
import Nav from './Nav/Nav';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Nav className='navbar' />
            {/* Slider */}
            <div class="slide-section">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://source.unsplash.com/collection/190727/1600x900" class="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://source.unsplash.com/collection/190728/1600x900" class="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://source.unsplash.com/collection/190627/1600x900" class="d-block w-100 img-fluid" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;