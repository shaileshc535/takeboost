import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import star from "../assets/image/2cd43b_66affcabc77f42108dd1a4b4c02ed7aa_mv2.png";
import halfstar from "../assets/image/2cd43b_bb470dcff5274ddd80fd199577e13352_mv2.png";
import user from "../assets/image/764d59d32f61f0f91dec8c442ab052c5.jpg";
import { useIntersection } from "../useIntersection";

const CardsScroll = () => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inViewport = useIntersection(ref, "-200px");

  if (inViewport) {
    // console.log("in viewport:", ref.current);
  }

  return (
    <>
      <Grid className="card-scroll-container">
        <Grid container item className="card-scroll-heading-wrapper">
          <Typography variant="h1" className="card-scroll-heading">
               Vegan
            <br />
            non gmo
            <br />
            nut free
            <br />
              gluten free <br /> made in usa
          </Typography>
          <Typography variant="subtitle1" className="card-scroll-subtitle">
            A catalyst in promoting
            <br />a health-conscious
            <br />
            lifestyle.
          </Typography>
        </Grid>

        <Grid container className="card-scroll-wrapper" ref={ref}>
          <Grid item className="card-scroll-left">
            <Typography className="border-heading-black">
              Let the
              <br />
              💪BOOST
              <br />
              💪flow
              <br />
              thru <br />
               you⚡️
            </Typography>

            <Grid container className="scroll-wrapper">
              <Grid
                item
                className={inViewport ? "scrolled_card" : "unscrolled_card "}
              >
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  I haven’t sneezed since I took
                  <br />
                  BOOST
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">@superman</Typography>
                </Grid>
              </Grid>

              <Grid item className="left-scroll-card-2">
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  It’s the perfect pick-me-up
                  <br />
                  BOOST
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">
                    @Karenfromyouroffice
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item className="card-scroll-right">
            <Grid container className="card-scroll-right-content">
              <Typography className="card-heading-05">
                WORD ON
                <br />
                THE STREET
              </Typography>
              <Typography className="card-paragraph-content">
                Trust us with your immunity
              </Typography>
            </Grid>

            <Grid container className="scroll-wrapper">
              <Grid item className="right-scroll-card-01">
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  It’s like a refreshing cold <br />
                  shower
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">
                    @JesseClemente
                  </Typography>
                </Grid>
              </Grid>

              <Grid item className="right-scroll-card-02">
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                  <img src={star} alt="star" className="star-rating" />
                </Grid>
                <Typography className="heading-04">
                  The only [best] way to rise <br />
                  and shine
                </Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">
                    @TheentireKUWTKcast
                  </Typography>
                </Grid>
              </Grid>

              <Grid item className="right-scroll-card-03">
                <Grid className="star-image-wrapper">
                  <img src={star} alt="star" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                  <img src={halfstar} alt="halfstar" className="star-rating" />
                </Grid>
                <Typography className="heading-04">I hate it</Typography>
                <Grid className="user-info">
                  <img src={user} alt="user" className="user-png" />
                  <Typography className="heading-04-user">@Yourex</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CardsScroll;
