import React from "react";
import Header from "./Header";
import Particles from "./Particles";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-background"/>
      <Header />
      <Particles />
    </React.Fragment>
  );
};

export default Home;
