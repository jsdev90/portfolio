import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import Zoom from 'react-reveal/Zoom';

import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 300,
    height: 300,
    margin: theme.spacing(1),
  },
  title: {
    color: "#fafafa",
  },
  subtitle: {
    color: "#e0e0e0",
    textTransform: "uppercase",
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
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Johann Villalvir" />
      </Grid>
      <Typography className={classes.title} variant="h2">
        <Zoom top cascade duration={2000}>
          Johann Villalvir
        </Zoom>
      </Typography>
      <Typography className={classes.subtitle} variant="h4">
        <Typed
          strings={[
            "Senior Frontend Developer",
            "Software Engineer",
            "Assistant Instructor",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
