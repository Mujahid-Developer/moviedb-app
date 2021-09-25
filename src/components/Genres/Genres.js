import { Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';

const Genres = ({ type, selectedGenres, setSelectedGenres, genres, setGenres, setPage }) => {



    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleRemove = (genre) => {
        setSelectedGenres(
            selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
    };

    const url = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

    const fetchGenres = async () => {
        const { data } = await axios.get(url);
        setGenres(data.genres)
    };
    useEffect(() => {
        fetchGenres();

        return () => {
            setGenres({});
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ padding: "6px , 0", marginTop: "10px", textAlign: "center" }} >
            {
                selectedGenres && selectedGenres.map(genre =>
                    <Chip
                        color='primary'
                        label={genre.name}
                        key={genre.id}
                        style={{ margin: 5 }}
                        clickable
                        size="small"
                        onDelete={() => handleRemove(genre)}
                    />)
            }
            {
                genres && genres.map(genre =>
                    <Chip
                        label={genre.name}
                        key={genre.id}
                        style={{ margin: 5 }}
                        clickable
                        size="small"
                        onClick={() => handleAdd(genre)}
                    />)
            }
        </div>
    );
};

export default Genres;