import React, { Component, useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';

const App = (props) =>  {
  useEffect( () =>
    {props.dispatch({ type: 'GET_MOVIES'})},[]);
  // Renders the entire app on the DOM
  
    console.log('app props',props.movies);
    return (
      <div className="App">
        <Header />
        <Movies />
      </div>
    );

}

const map = (state) => ({movies: state.movies})

export default connect(map)(App);
