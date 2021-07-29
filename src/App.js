import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
