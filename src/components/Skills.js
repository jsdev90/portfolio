import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CircleChart from "./CircleChart";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import { skills } from '../constants';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2),
    }
  },
  heading: {
    color: "#e0e0e0",
    paddingBottom: theme.spacing(2)
  },
  cardContainer: {
    borderRadius: 10,
    padding: '1rem',
    textAlign: 'center',
    "&:hover": {
      transform: "scale(1.05)",
      transition: "all .5s ease-in-out",

    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: 0,
    }
  },
  cardText: {
    fontSize: '1.5rem',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
  },
  gridItem: {
    padding: theme.spacing(1),
  }
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Skills
      </Typography>
      <Box component="div">
        <Grid container>
          {skills.map((skill, i) => {
            return (
              <Grid item xs={6} sm={4} md={2} key={i} className={classes.gridItem}>
                <Card className={classes.cardContainer}>
                    <Typography variant="h5" gutterBottom className={classes.cardText}>
                      {skill.type}
                    </Typography>
                    <CircleChart percent={skill.level} />
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Skills;
