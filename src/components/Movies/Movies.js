import React, {  useEffect } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';
import Grid from "@material-ui/core/Grid";
import Header from '../Header/Header';

//this is the component that will display all of the movies
//we will dispatch to get movies and genres on loading of the component
const Movies = (props) => {
    useEffect(() => { props.dispatch({ type: 'GET_MOVIES' }) }, []);
    useEffect(() => { props.dispatch({ type: 'GET_GENRES' }) }, []);


    console.log('movies props', props.movies);
    return (
        <>
            <div className="App">
                <Header />
            </div>
        <Grid container spacing={4}>
            {props.movies != undefined && props.movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
        </Grid>
        </>
    );

}

const map = (state) => ({ movies: state.movies })

export default connect(map)(Movies);