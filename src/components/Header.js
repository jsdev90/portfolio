import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typewriter from 'typewriter-effect';

import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 250,
    height: 250,
    margin: theme.spacing(1),
    border: '2px solid #fafafa',
    [theme.breakpoints.down('md')]: {
      '& > img': {
        width: 150,
        height: 150,
        borderRadius: '100%',
      }
    }
  },
  title: {
    color: "#fafafa",
    [theme.breakpoints.down('md')]: {
      fontSize: '2.5rem',
    }
  },
  subtitle: {
    color: "#e0e0e0",
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    }
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar className={classes.avatar} src={avatar} alt="Johann Villalvir" />
      </Grid>
      <Typography className={classes.title} variant="h2">
        Johann Villalvir
      </Typography>
      <Typography className={classes.subtitle} variant="h4">
        <Typewriter
          options={{
            strings: [
              "Senior Frontend Developer",
              "Senior Software Engineer",
              "Full-Stack JavaScript Engineer",
              "Webflow Expert",
            ],
            loop: true,
            autoStart: true,
            pauseFor: 1500,
            delay: 40,
            cursor: ''
          }}
        />
      </Typography>
    </Box>
  );
};

export default Header;
