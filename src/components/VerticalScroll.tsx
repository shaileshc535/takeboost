import { Grid, Typography } from "@mui/material";
import React from "react";
import elderberry from "../assets/image/elderberries.png";
import orange from "../assets/image/orange.png";
import zinc from "../assets/image/zinc.png";

const VerticalScroll = () => {
  return (
    <>
      <Grid className="elderberry-wrapper">
        <Grid container className="scroll-content1">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              Elderberry <br />
              <span className="outline-span">
                Vitamin c <br />
                Zinc
              </span>
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. Provides Major Cold and Flu Relief
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. Alleviates Sinus Infections
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. Encourages Healthy Skin
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. Reduces Inflammation
                </Typography>
              </Grid>
            </Grid>
            <Typography className="paragraph" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography>
          </Grid>
          <img src={elderberry} alt="elderberry" className="berries-image-01" />
          <img src={elderberry} alt="elderberry" className="berries-image-02" />
          <img src={elderberry} alt="elderberry" className="berries-image-03" />
          <img src={elderberry} alt="elderberry" className="berries-image-04" />
        </Grid>
      </Grid>

      <Grid container className="lemmon-wrapper">
        <Grid container className="scroll-content2">
          <Grid item className="left-block">
            <Typography className="heading-06" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading" variant="h3">
              Elderberry <br />
              <span className="outline-span">
                Vitamin c <br />
              </span>
              Zinc
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  01. Improves Common Cold Symptoms
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  02. Holds Antioxidant Properties
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  03. Promotes Glowing Skin
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05" variant="h5">
                  04. Enhances Brain Function
                </Typography>
              </Grid>
            </Grid>
            <Typography className="paragraph" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography>
          </Grid>
          <img src={orange} alt="orange" className="berries-image-01" />
          <img src={orange} alt="orange" className="berries-image-02" />
          <img src={orange} alt="orange" className="berries-image-03" />
          <img src={orange} alt="orange" className="berries-image-04" />
        </Grid>
      </Grid>

      <Grid container className="diamond-wrapper">
        <Grid container className="scroll-content3">
          <Grid item className="left-block">
            <Typography className="heading-06-black" variant="h6">
              Ingredients
            </Typography>
            <Typography className="elderberry-heading-black" variant="h3">
              <span className="outline-span-black">
                Elderberry <br />
                Vitamin c <br />
              </span>
              Zinc
            </Typography>
          </Grid>

          <Grid item className="right-block">
            <Typography className="heading-06-black" variant="h6">
              Benefits
            </Typography>
            <Grid container className="right-block-content">
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  01. Acts as a Powerful Antioxidant
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  02. Helps Balance Hormones
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  03. Maintains Heart Health
                </Typography>
              </Grid>
              <Grid item className="right-block-bottom-border">
                <Typography className="heading-05-black" variant="h5">
                  04. Aids in Digestion
                </Typography>
              </Grid>
            </Grid>
            <Typography className="paragraph-black" variant="subtitle1">
              BOOST has 150mg of Elderberry Extract per serving
            </Typography>
          </Grid>
          <img src={zinc} alt="" className="berries-image-01" />
          <img src={zinc} alt="" className="berries-image-02" />
          <img src={zinc} alt="" className="berries-image-03" />
          <img src={zinc} alt="" className="berries-image-04" />
        </Grid>
      </Grid>
    </>
  );
};

export default VerticalScroll;
