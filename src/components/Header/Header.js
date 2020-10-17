import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import './Header.css';


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


function Header(props) {
    const classes = useStyles();


    console.log('app props', props.movies);
    return (
        <header >
            <h1>DC Movie Gallery</h1>
            <span className="home-button">
            <Button startIcon className={classes.root}>
            <HomeOutlinedIcon />
            </Button>
            </span>
        </header>
    );

}


export default connect()(Header);