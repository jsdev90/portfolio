import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#bdbdbd",
      "&:hover": {
        fill: "#757575",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://github.com/jsdev90" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction icon={<GitHub />} className={classes.root}>
        </BottomNavigationAction>
      </a>
    </BottomNavigation>
  );
};
export default Footer;
