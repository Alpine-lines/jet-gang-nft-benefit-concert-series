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
// import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";
// import FilledInfoCard from "components/Cards/InfoCards/FilledInfoCard";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/gold-stardoor.jpg";
import gb from "assets/images/GB no background.png";
import CtaOne from "components/CtaOne";
import LogoAreaThree from "components/LogoAreaThree";
import StatsThree from "components/StatsThree";
import TeamTwo from "components/TeamTwo";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-pro-react",
        //   label: "buy now",
        //   color: "info",
        // }}
        sticky
      />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(1, 0, 42, 0.55), rgba(1, 0, 42, 0.4)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Zodiac Haus{" "}
              <MKBadge
                badgeContent="pro"
                size="lg"
                variant="contained"
                color="white"
                container
                sx={{ mt: -4 }}
              />
            </MKTypography>
            <MKTypography variant="body1" color="white" textAlign="center" px={6} mt={1}>
              Sunday February 20th, 2022 | Denver, CO
            </MKTypography>
            {/* <Grid container xs={12} lg={5} spacing={2} justifyContent="center" mx="auto"> */}
            {/* <Grid item> */}
            <MKBox>
              <img src={gb} alt="Giani Blu" height="150px" />
              <img src={gb} alt="Giani Blu" height="150px" />
              <img src={gb} alt="Giani Blu" height="150px" />
              <img src={gb} alt="Giani Blu" height="150px" />
            </MKBox>
            {/* </Grid> */}
            {/* </Grid> */}
          </Grid>
        </Container>
      </MKBox>
      {/* <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.975),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > */}
      <Container>
        <MKBox
          sx={{
            margin: "5em 0",
          }}
        >
          <TeamTwo />
        </MKBox>
        <MKBox
          sx={{
            margin: "0 0 0 0",
          }}
        >
          <StatsThree />
        </MKBox>
        <MKBox
          sx={{
            margin: "0em 0 7.5em 0",
          }}
        >
          <LogoAreaThree />
        </MKBox>
        <MKBox
          sx={{
            margin: "5em 0",
          }}
        >
          <CtaOne />
        </MKBox>
      </Container>
      {/* </Card> */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
