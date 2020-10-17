import React, { Component, useEffect } from 'react';
import './App.css';
//redux
import { connect } from 'react-redux';
//material-ui
import Grid from "@material-ui/core/Grid";
//router
import {HashRouter as Router, Route } from 'react-router-dom'

//components
import Details from '../Details/Details';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';


const App = (props) =>  {

  
    console.log('app props',props.movies);
    return (
      <>

     
      <Grid  >
        <Router>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Router>
      </Grid>
     </>
    );

}

const map = (state) => ({movies: state.movies})

export default connect(map)(App);
