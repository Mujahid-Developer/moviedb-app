import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import CustomPagination from '../../components/Pagination/CustomPagination';
import Genres from '../../components/Genres/Genres';
import useGenres from '../../hooks/useGenres';

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([])
    const [numberOfPages, setNumberOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenres(selectedGenres);

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`

    const fetchMovies = async () => {
        const { data } = await axios.get(url)
        setContent(data.results)
        setNumberOfPages(data.total_pages)
    }
    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line
    }, [page, genreforURL])
    return (
        <div>
            <h1 className="text-center headings"> Discover Movies</h1>
            <Genres
                type="movie"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={genres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="movie-card">
                {
                    content.map((item) => <MovieCard movie={item}></MovieCard>)
                }
            </div>
            {numberOfPages > 1 &&
                (<CustomPagination setPage={setPage} numberOfPages={numberOfPages} />)}
        </div>
    );
};

export default Movies;