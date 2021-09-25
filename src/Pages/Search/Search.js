import SearchIcon from '@mui/icons-material/Search';
import { Button, createMuiTheme, Tab, Tabs, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/system';


const Search = () => {
    const [type, setType] = useState(0)

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

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div style={{ display: "flex", width: '100%', marginTop: '70px' }}>
                    <TextField
                        style={{ flex: 1, marginRight: '10px' }}
                        className="searchBox"
                        label="Search Here"
                        variant="filled"
                    />
                    <Button variant="contained"> <SearchIcon /> </Button>
                </div>
                <Tabs value={type} indicatorColor="primary" textColor="primary" style={{ marginTop: '10px' }} >
                    <Tab style={{ width: '50%' }} label="Search Movies" />
                    <Tab style={{ width: '50%' }} label="Search Series" />
                </Tabs>
            </ThemeProvider>
        </div>
    );
};

export default Search;