import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Trending.css';
import MovieCard from '../../components/MovieCard/MovieCard';

const Trending = () => {

    const [container, setContainer] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
        console.log(data)
        setContainer(data.results)
    };

    useEffect(() => {
        fetchTrending()
    }, []);

    return (
        <div>
            <div className="movie-card">
                {
                    container.map((item) => <MovieCard movie={item}></MovieCard>)
                }

            </div>
        </div>
    );
};



export default Trending;