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
// import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";

// Images
import bgImage from "assets/images/green-vector-bg.jpg";
import giani from "assets/images/giani-blu-2.jpeg";
import howl from "assets/images/howl-3.jpg";
import shoebox from "assets/images/shoebox.jpg";

function TeamTwo() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={12}
      sx={({ breakpoints }) => ({
        padding: "2em",
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundPosition: "center",
        borderRadius: "16px",
        [breakpoints.down("md")]: {
          height: "150%",
        },
      })}
    >
      <Container>
        <Grid container sx={{ my: "3em", mx: "auto" }}>
          <MKTypography variant="h3" color="white">
            Lineup
          </MKTypography>
        </Grid>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.down("md")]: {
              direction: "column",
            },
          })}
        >
          <Grid item xs={12} lg={6}>
            <a href="https://solo.to/gianniblu">
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={giani}
                  name="Gianni Blu"
                  position={{ color: "warning", label: "DJ" }}
                  description="International DJ | Producer | Entertainer | Crypto Enthusiast"
                />
              </MKBox>
            </a>
          </Grid>
          <Grid item xs={12} lg={6}>
            <a href="https://www.instagram.com/howl_official_ig/?hl=en">
              <MKBox mb={1}>
                <HorizontalTeamCard
                  image={howl}
                  name="DJ Howl"
                  position={{ color: "warning", label: "DJ" }}
                  description="DJ/Producer | Dancer | Superfood + Live Water Entrepreneur"
                />
              </MKBox>
            </a>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ mx: "auto" }}>
            <a href="https://www.shoeboxmoses.com/">
              <MKBox mb={{ xs: 1, lg: 0 }}>
                <HorizontalTeamCard
                  image={shoebox}
                  name="Shoebox Moses"
                  position={{ color: "warning", label: "DJ" }}
                  description="Global Entertainer | DJ Sammy 'Shoebox Moses' Taggett"
                />
              </MKBox>
            </a>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TeamTwo;
