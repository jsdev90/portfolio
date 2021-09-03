import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircleChart from "./CircleChart";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Zoom from 'react-reveal/Zoom';

import { skills } from '../constants';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#424242",
    padding: theme.spacing(8),
    paddingTop: theme.spacing(16)
  },
  heading: {
    color: "#e0e0e0",
    paddingBottom: theme.spacing(2)
  },
  cardContainer: {
    maxWidth: 180,
    margin: "1.5rem auto",
    borderRadius: 10,
    padding: '1rem',
    textAlign: 'center',
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all .5s ease-in-out"
    },
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Skills
      </Typography>
      <Box component="div">
        <Grid container justify="center">
          {skills.map((skill, i) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={i} className="gridItem">
                <Zoom bottom duration={i * 300}>
                  <Card className={classes.cardContainer}>
                      <Typography variant="h5" gutterBottom>
                        {skill.type}
                      </Typography>
                      <CircleChart percent={skill.level} />
                  </Card>
                </Zoom>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
