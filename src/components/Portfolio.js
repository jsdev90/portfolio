import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Zoom from 'react-reveal/Zoom';

import { projects } from '../constants'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    background: "#424242",
    paddingTop: theme.spacing(10)
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all .5s ease-in-out"
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={3} key={i}>
            <Zoom duration={i * 300}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={project.name}
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
