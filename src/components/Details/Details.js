import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import Header from '../Header/Header';
import {useParams, withRouter} from 'react-router';
import DetailsView from './DetailsView';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "left",
        color: "white",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));



const Details = (props) => {
    const classes = useStyles();
    const home = () => {
        props.history.push('/')
    }

    useEffect(() => { props.dispatch({ type: 'GET_MOVIES' }) }, []);
    useEffect(() => { props.dispatch({ type: 'GET_GENRES' }) }, []);

    const {id} = useParams();
    console.log('details id is', id);
    console.log('details props are', props);
  const movie =  props.movies.filter(m => m.id === Number(id));
    console.log('details movie is', movie);


    
    return (

        
        <>   
            <header className="App" >
                <h1>Details</h1>
                <span className="home-button">
                    <Button className={classes.root} onClick={home}>
                        <ArrowBackIcon />Back
                    </Button>
                </span>
            </header>
        <Grid >
           {movie[0] != undefined &&  movie.map(movie => <DetailsView movie={movie} key={movie.id} />)}
        </Grid>
        </>
    );

}

const map = (state) => ({ movies: state.movies })

export default connect(map)(withRouter(Details));