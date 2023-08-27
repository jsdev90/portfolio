import React from "react";
import { Route, Switch } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    background: '#424242',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Box component={'div'} className={classes.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Box>
    </React.Fragment>
  );
}

export default App;
