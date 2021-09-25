import React, { useEffect, useState } from 'react';
import './ButtomNav.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useHistory } from 'react-router';

export default function SimpleBottomNavigation() {
    const [value, setValue] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) {
            history.push('/trending');
        }
        else if (value === 1) {
            history.push('/movies');
        }
        else if (value === 2) {
            history.push('/series');
        }
        else if (value === 3) {
            history.push('/search');
        }

    }, [value, history]);

    return (
        <Box sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            boxShadow: 5
        }} >
            <BottomNavigation

                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}
