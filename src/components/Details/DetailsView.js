import React from 'react';
import { connect } from 'react-redux';
import './DetailsView.css'






const DetailsView = (props) => {

    const genres = props.genre.filter(movie => props.movie.id === movie.id)
    console.log(genres)


    return (
        <div className="details-view">

        <img src={props.movie.poster} alt={props.movie.title}/>
            <div className="details-of-movie">
                <p> <strong>Description:</strong> <br /><span className="description">{props.movie.description}</span></p>
                <br/>
                <strong>Genres:</strong>
                <ul>{genres[0] != undefined && genres[0].movie_genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
            </div>
        </div>
    );

}

const map = (state) => ({genre: state.genres})
export default connect(map)(DetailsView);