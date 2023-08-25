import React from "react";
import Header from "./Header";
import CustomParticles from "./Particles";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-background"/>
      <Header />
      <CustomParticles />
    </React.Fragment>
  );
};

export default Home;
