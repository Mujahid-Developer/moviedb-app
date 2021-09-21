import React from 'react';
import { img_300 } from '../../config/config';
import './MovieCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const MovieCard = (props) => {
    const { original_title, poster_path, vote_average, overview } = props.movie;
    console.log(props);

    return (
        <div className="movie">
            <Card sx={{
                maxWidth: 350,
                margin: '10px'
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="500"
                        image={`${img_300}/${poster_path}`}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {original_title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {overview.slice(0, 200)}
                        </Typography>
                        <Typography variant="body2" color="text.danger">
                            Rating {vote_average}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default MovieCard;

