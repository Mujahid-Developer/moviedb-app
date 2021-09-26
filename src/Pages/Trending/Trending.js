import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Trending.css';
import MovieCard from '../../components/MovieCard/MovieCard';
import CustomPagination from '../../components/Pagination/CustomPagination';
import { LinearProgress } from '@mui/material';

const Trending = () => {

    const [page, setPage] = useState(1)
    const [container, setContainer] = useState([])

    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContainer(data.results)
    };

    useEffect(() => {
        fetchTrending()
        // eslint-disable-next-line
    }, [page]);

    return (
        <div>

            <h1 className="text-center headings">Trendings</h1>

            <div className="movie-card">
                {
                    container.length === 0 ? <LinearProgress /> :
                        container.map((item) => <MovieCard movie={item}></MovieCard>)
                }
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};



export default Trending;