import SearchIcon from '@mui/icons-material/Search';
import { Button, createMuiTheme, Tab, Tabs, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/system';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import CustomPagination from '../../components/Pagination/CustomPagination';


const Search = () => {
    const [type, setType] = useState(0)
    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#1b1b1b',
            },
            secondary: {
                main: '#edf2ff',
            },
        },
    });

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
            setContent(data.results)
            setNumOfPages(data.total_pages)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [type, page]);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div style={{ display: "flex", width: '100%', marginTop: '70px' }}>
                    <TextField
                        style={{ flex: 1, marginRight: '10px' }}
                        className="searchBox"
                        label="Search Here"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        onClick={fetchSearch}> <SearchIcon /> </Button>
                </div>
                <Tabs
                    centered
                    value={type}
                    indicatorColor="primary"
                    textColor="primary"
                    style={{ marginTop: '10px', paddingBottom: '10px' }}
                    onChange={(e, newValue) => {
                        setType(newValue);
                        setPage(1);
                    }}
                >
                    <Tab style={{ width: '50%' }} label="Search Movies" /> <br />
                    <Tab style={{ width: '50%' }} label="Search Series" />
                </Tabs>
            </ThemeProvider>
            <div className="movie-card" style={{ marginTop: '10px' }}>
                {
                    content && content.map((item) => <MovieCard movie={item}></MovieCard>)
                }
                {
                    searchText &&
                    !content &&
                    (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)
                }
            </div>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numberOfPages={numOfPages} />
            )}
        </div>
    );
};

export default Search;