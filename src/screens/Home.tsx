import React from "react";
import { Grid } from "@mui/material";
import Header from "../components/Header";
import HeroHeading from "../components/HeroHeading";
import VerticalScroll from "../components/VerticalScroll";
import CardsScroll from "../components/CardsScroll";
import Footer from "../components/Footer";
import Cursor from "../components/cursor/Cursor";
// import Slider from "../components/bottel/Slider";

const Home = () => {
  return (
    <>
      <Grid className="home-wrapper">
        <Grid className="hero-section">
          <Header />
          <Cursor />
          <HeroHeading />
          <VerticalScroll />
          <CardsScroll />
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
