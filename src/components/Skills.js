import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SkillBar from 'react-skillbars';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#424242",
    padding: theme.spacing(8),
    paddingTop: theme.spacing(16)
  },
  heading: {
    color: "#e0e0e0",
    paddingBottom: theme.spacing(2)
  }
}));

const skills = [
  {type: "JavaScript", level: 98},
  {type: "React.js", level: 95},
  {type: "ReactNative", level: 95},
  {type: "Redux", level: 95},
  {type: "Angular", level: 85},
  {type: "Vue.js", level: 90},
  {type: "ES6", level: 95},
  {type: "TypeScript", level: 95},
  {type: "GraphQL", level: 90},
  {type: "Node.js", level: 80},
  {type: "MongoDB", level: 80},
  {type: "HTML/HTML5", level: 98},
  {type: "CSS/CSS3", level: 98},
  {type: "Firebase", level: 85},
  {type: "AWS", level: 80},
  {type: "Webflow", level: 78},
  {type: "WordPress", level: 65},
];

const colors = {
  bar: '#009688',
  title: {
    text: '#004d40',
    background: '#e0f2f1'
  }
}

const Skills = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Skills
      </Typography>
      <Box component="div">
        <SkillBar skills={skills} colors={colors} height={25} />
      </Box>
    </Box>
  );
};

export default Skills;
