import React from 'react';
import { img_300, unavailable } from '../../config/config';
import './MovieCard.css'


const MovieCard = (props) => {
    const { original_title, original_name, poster_path, vote_average, media_type } = props.movie;
    console.log(props);

    return (
        <div className="movie">
            <div className="movie-thumb shadow-sm p-2 mb-3">
                <img src={poster_path ? `${img_300}/${poster_path}` : unavailable} alt="" srcset="" />
                <h5 className="text-center">{original_title ? original_title : original_name}</h5>
                <div className="movie-buttom mt-3">
                    <span>Categories: {media_type === 'tv' ? "Tv Series" : "Movie"}</span> <br />
                    <span>Rating: {vote_average}</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;

