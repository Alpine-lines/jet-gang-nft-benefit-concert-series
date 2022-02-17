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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import HorizontalTeamCard from "components/Cards/TeamCards/HorizontalTeamCard";

// Images
import bgImage from "assets/images/green-vector-bg.jpg";
import giani from "assets/images/giani-blu.jpeg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";
import team4 from "assets/images/ivana-square.jpg";

function TeamTwo() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={12}
      sx={{
        padding: "2em",
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKBox
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="3rem"
              height="3rem"
              variant="gradient"
              bgColor="info"
              color="white"
              shadow="md"
              borderRadius="lg"
              mb={2}
            >
              <Icon>supervisor_account</Icon>
            </MKBox>
            <MKTypography variant="h3" color="white">
              Lineup
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Lorem ipsum dolor sit amet...
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={giani}
                name="Giani Blu"
                position={{ color: "warning", label: "House" }}
                description="International DJ | Producer | Entertainer | Crypto Enthusiast"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="William Pearce"
                position={{ color: "primary", label: "Boss" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team3}
                name="Ivana Flow"
                position={{ color: "dark", label: "Athlete" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Marquez Garcia"
                position={{ color: "error", label: "JS Developer" }}
                description="Artist is a term applied to a person who engages in an activity deemed to be an art."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TeamTwo;
