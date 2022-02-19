/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Images
import fly from "assets/images/fly-app.png";
import hd from "assets/images/hd-white.png";
import humans from "assets/images/humans.png";
import defy from "assets/images/defy.png";
import zodiac from "assets/images/zh-logo-white.png";
import trap from "assets/images/trap-baby-2.jpg";
import hwolf from "assets/images/hemp-wolf.jpg";

function LogoAreaThree() {
  return (
    <MKBox pt={2} pb={6}>
      <Container>
        <Grid
          container
          item
          spacing={3}
          xs={8}
          md={10}
          lg={10}
          sx={({ breakpoints }) => ({
            [breakpoints.up("lg")]: {
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            },
            [breakpoints.down("md")]: {
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            },
          })}
        >
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <a href="https://jetapp.com/" target="_blank" rel="noreferrer">
              <MKBox component="img" src={fly} alt="Fly App" width="80%" opacity={0.9} />
            </a>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <MKBox component="img" src={hd} alt="HunterDAO" width="80%" opacity={0.9} />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <a href="https://nftree.org/" target="_blank" rel="noreferrer">
              <MKBox component="img" src={humans} alt="Humans I Trust" width="80%" opacity={0.9} />
            </a>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <a href="https://zodiachause.com/" target="_blank" rel="noreferrer">
              <MKBox component="img" src={zodiac} alt="Zodiac Hause" width="80%" opacity={0.9} />
            </a>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <MKBox component="img" src={trap} alt="Trap Baby" width="80%" opacity={0.9} />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <a href="https://https://hempwolf.com/" target="_blank" rel="noreferrer">
              <MKBox component="img" src={hwolf} alt="Hemp Wolf" width="80%" opacity={0.9} />
            </a>
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            lg
            sx={({ breakpoints }) => ({
              my: "auto",
              [breakpoints.down("md")]: {
                ml: "6.5em",
              },
            })}
          >
            <a href="https://defydevelopmentcorp.com/" target="_blank" rel="noreferrer">
              <MKBox component="img" src={defy} alt="DeFy Dev Corp" width="80%" opacity={0.9} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LogoAreaThree;
