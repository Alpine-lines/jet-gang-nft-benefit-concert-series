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
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultCounterCard from "components/Cards/CounterCards/DefaultCounterCard";

function StatsThree() {
  return (
    <MKBox component="section" mt={5} pt={5}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={8}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h3" color="light" mb={5}>
            Jet Gang Charity
          </MKTypography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={9}
          sx={{ mx: "auto", display: "flex", alignContent: "center", justifyContent: "center" }}
        >
          <Grid item xs={12} md={4} lg={3} display="flex">
            <DefaultCounterCard color="info" count={450} description="Tickets Remaining" />
          </Grid>
          <Grid item xs={12} md={4} lg={3} display="flex">
            <DefaultCounterCard
              color="primary"
              count={10}
              suffix="%"
              description="To local charities"
            />
          </Grid>
          <Grid item xs={12} md={4} lg={3} display="flex">
            <DefaultCounterCard
              color="success"
              count={3500}
              prefix="$"
              description="Raised so far"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default StatsThree;
