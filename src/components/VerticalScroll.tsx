import { useState, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import elderberry from "../assets/image/elderberries.png";
import orange from "../assets/image/orange.png";
import zinc from "../assets/image/zinc.png";

const VerticalScroll = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);
  const [image6, setImage6] = useState(false);
  const [image7, setImage7] = useState(false);
  const [image8, setImage8] = useState(false);
  const [image9, setImage9] = useState(false);
  const [image10, setImage10] = useState(false);
  const [image11, setImage11] = useState(false);
  const [image12, setImage12] = useState(false);

  const imageRef1 = useRef(null);

  const changeImage1Background = () => {
    if (window.scrollY >= 1850 && window.scrollY <= 8000) {
      setImage1(true);
      console.log("image1 ", image1);
    } else {
      setImage1(false);
    }

    if (window.scrollY >= 2700 && window.scrollY <= 3550) {
      setImage2(true);
      console.log("image2 ", image2);
    } else {
      setImage2(false);
    }

    if (window.scrollY >= 3250 && window.scrollY <= 4400) {
      setImage3(true);
      console.log("image3 ", image3);
    } else {
      setImage3(false);
    }

    if (window.scrollY >= 4100 && window.scrollY <= 5250) {
      setImage4(true);
      console.log("image4 ", image4);
    } else {
      setImage4(false);
    }

    if (window.scrollY >= 4950 && window.scrollY <= 6100) {
      setImage5(true);
      console.log("image5 ", image5);
    } else {
      setImage5(false);
    }

    if (window.scrollY >= 5800 && window.scrollY <= 6950) {
      setImage6(true);
      console.log("image6 ", image6);
    } else {
      setImage6(false);
    }

    if (window.scrollY >= 6650 && window.scrollY <= 7800) {
      setImage7(true);
      console.log("image7 ", image7);
    } else {
      setImage7(false);
    }

    if (window.scrollY >= 7500 && window.scrollY <= 8650) {
      setImage8(true);
      console.log("image8 ", image8);
    } else {
      setImage8(false);
    }

    if (window.scrollY >= 8350 && window.scrollY <= 9500) {
      setImage9(true);
      console.log("image9 ", image9);
    } else {
      setImage9(false);
    }

    if (window.scrollY >= 9200 && window.scrollY <= 10350) {
      setImage10(true);
      console.log("image10 ", image10);
    } else {
      setImage10(false);
    }

    if (window.scrollY >= 10050 && window.scrollY <= 11200) {
      setImage11(true);
      console.log("image11 ", image11);
    } else {
      setImage11(false);
    }

    if (window.scrollY >= 10900 && window.scrollY <= 12050) {
      setImage12(true);
      console.log("image12 ", image12);
    } else {
      setImage12(false);
    }
  };

  // window.addEventListener(
  //   "scroll",
  //   () => {
  //     imageRef1.current.style(
  //       "--scroll",
  //       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  //     );
  //   },
  //   false
  // );

  window.addEventListener("scroll", changeImage1Background);

  return (
    <>
      <Grid className="elderberry_wrapper">
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
          <img
            ref={imageRef1}
            src={elderberry}
            alt="elderberry"
            className={
              image1 === false ? "berries_image_01" : "image_01_active"
            }
          />
          <img
            src={elderberry}
            alt="elderberry"
            className={
              image2 === false ? "berries_image_02" : "image_02_active"
            }
          />
          <img
            src={elderberry}
            alt="elderberry"
            className={
              image3 === false ? "berries_image_03" : "image_03_active"
            }
          />
          <img
            src={elderberry}
            alt="elderberry"
            className={
              image4 === false ? "berries_image_04" : "image_04_active"
            }
          />
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
          <img
            src={orange}
            alt="orange"
            className={image5 === false ? "orange_image_01" : "image_01_active"}
          />
          <img
            src={orange}
            alt="orange"
            className={image6 === false ? "orange_image_02" : "image_02_active"}
          />
          <img
            src={orange}
            alt="orange"
            className={image7 === false ? "orange_image_03" : "image_03_active"}
          />
          <img
            src={orange}
            alt="orange"
            className={image8 === false ? "orange_image_04" : "image_04_active"}
          />
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
          <img
            src={zinc}
            alt=""
            className={image9 === false ? "zink_image_01" : "image_01_active"}
          />
          <img
            src={zinc}
            alt=""
            className={image10 === false ? "zink_image_02" : "image_02_active"}
          />
          <img
            src={zinc}
            alt=""
            className={image11 === false ? "zink_image_03" : "image_03_active"}
          />
          <img
            src={zinc}
            alt=""
            className={image12 === false ? "zink_image_04" : "image_04_active"}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default VerticalScroll;
