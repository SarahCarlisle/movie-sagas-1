import React, {useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


// in this component we will be editing the title, description, and genres of the movie  with id that 
//is passed in from the EditMovie component.
const EditMovieView = (props) => {
    const [movieUpdate, setMovie]= useState({title: props.movie.title, description: props.movie.description})

    //filter the genre reducer state to make genres include only the movie id we are editing
    const genres = props.genre.filter(movie => props.movie.id === movie.id)
    console.log('genres array in edit movie view', genres)


const changeHandler = (event) => {
    setMovie({
        ...movieUpdate,
        [event.target.name]: event.target.value
    });
    console.log(movieUpdate);
}

const submitEdit = () => {
    props.dispatch({type:'UPDATE_MOVIE', payload:{id:props.movie.id, title:movieUpdate.title, description:movieUpdate.description}});
    props.history.push(`/details/${props.movie.id}`)
}

const backToDetails = () => {
    props.history.push(`/details/${props.movie.id}`)
}


const addGenre = (event) => {
    console.log(event.target.value,"was clicked");
    props.dispatch({type:'ADD_GENRE_TO_MOVIE', payload:{movie_id: props.movie.id, genre_id: Number(event.target.value)}});
}

const removeGenre = (event) => {
    props.dispatch({type:'REMOVE_GENRE_FROM_MOVIE',
        payload:{movie_id: props.movie.id,
        genre_id: Number(event.target.value)}
    });
}

    return (
        <div >
            <img src={props.movie.poster} alt={props.movie.title} />
            <div className="edit-info">
                
               <strong>Description:</strong> <br /><textarea rows="15" cols="40" onChange={changeHandler} name="description" value={movieUpdate.description}> </textarea>
                <br />
                <label>Movie Title:  </label>
                <input value={movieUpdate.title} name="title" onChange={changeHandler} />
                <br/>
                <button onClick={submitEdit}>Save</button>
                <button onClick={backToDetails}>Cancel</button>
                <br/>
                <label>Add Genre:</label>
                {genres[0] != undefined ? (<select onChange={addGenre} >
                    <option value=""></option>
                    {/* filter the genreList from the database so it removes the genres
                    already associated with this movie... this way only genres that 
                    are not already on the movie title will be shown in the drop down menu */}
                    {genres[0].movie_genres != undefined && props.genreList.filter(genre => genres[0].movie_genres.indexOf(genre.name) == -1).map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                </select>) : (<select onChange={addGenre} >
                        <option value=""></option>
                        {props.genreList.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </select>) }
                <ul>
                    {/* filter through and pull out the genres associated with this movie
                    i did this so i have access to both the id of the genre and the name of the
                    genre.   */}
                    {genres[0] != undefined && 
                    props.genreList.filter(genre => genres[0].movie_genres.indexOf(genre.name) != -1)
                    .map(genre => <li key={genre.id}>{genre.name}  
                    <button value={genre.id} onClick={removeGenre}>Remove Genre</button>
                    </li>)}
                </ul>

            </div>
        </div>
    );

}

const map = (state) => ({ genre: state.genres, genreList: state.genreList })
export default connect(map)(withRouter(EditMovieView));