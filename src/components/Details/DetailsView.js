import React from 'react';
import { connect } from 'react-redux';
import './DetailsView.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import { useParams, withRouter } from 'react-router';


const useStyles = makeStyles({
    root: {
        
    },
    media:{
        maxWidth: 300,
    },
    content:{
    },
});



const DetailsView = (props) => {

    const classes = useStyles();
    const { id } = useParams();

    const genres = props.genre.filter(movie => props.movie.id === movie.id)
    console.log(genres)

    const editMovie = () => {
        props.history.push(`/edit/${id}`);
    }

    return (
        <>
        {/* <div className="details-view">

        <img src={props.movie.poster} alt={props.movie.title}/>
            <div className="details-of-movie">
                <p> <strong>Description:</strong> <br /><span className="description">{props.movie.description}</span></p>
                <br/>
                <strong>Genres:</strong>
                <ul>{genres[0] != undefined && genres[0].movie_genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
            </div>
        </div> */}

            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          alt="Contemplative Reptile"
          image={props.movie.poster}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
                {props.movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.movie.description}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                Genres:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <ul>{genres[0] != undefined && genres[0].movie_genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={editMovie}>
            <EditIcon></EditIcon>Edit
        </Button>

      </CardActions>
    </Card>
    </>
    );

}

const map = (state) => ({genre: state.genres})
export default connect(map)(withRouter(DetailsView));