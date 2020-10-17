import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import Grid from "@material-ui/core/Grid";


const Movies = (props) => {
    useEffect(() => { props.dispatch({ type: 'GET_MOVIES' }) }, []);

    console.log('app props', props.movies);
    return (
        <Grid container space={3}>
            {props.movies != undefined && props.movies.map(movie => <MovieItem movie={movie} />)}
        </Grid>
    );

}

const map = (state) => ({ movies: state.movies })

export default connect(map)(Movies);