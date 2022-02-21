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
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Coworking page component
import AboutUsOption from "components/AboutUsOption";
import StatsThree from "components/StatsThree";

function FeaturesOne() {
  return (
    <MKBox component="section">
      {/* /py={{ xs: 3, md: 6 }} */}
      <Container>
        <Grid container spacing={1} alignItems="center">
          <Grid
            item
            xs={12}
            lg={5}
            sx={({ breakpoints }) => ({
              [breakpoints.down("md")]: {
                mt: "-2.5em",
                mb: "-15em",
              },
            })}
          >
            <MKTypography textAlign="start" variant="h3" my={1}>
              Why?
            </MKTypography>
            <MKTypography
              variant="p"
              color="light"
              textAlign="center"
              mb={5}
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {
                  mt: "2.5em",
                },
              })}
            >
              As a community, we all care about specifc social issues facing our society today. We
              all want to make a difference, whether it be through our businesses or through the way
              we spend our money. Which is why the Jet Gang NFT Benefit Concert Series will feature
              a new local partner foundation every event, every year. This way, no issue is left
              unadressed as we strive for the future.
            </MKTypography>
            <MKTypography
              variant="h3"
              my={1}
              sx={({ breakpoints }) => ({
                [breakpoints.up("lg")]: {
                  mt: "-1.25em",
                  ml: "-2em",
                },
                [breakpoints.down("md")]: {},
              })}
            >
              <StatsThree />
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { md: -2, lg: "auto" }, mt: { md: "-5em", lg: 0 } }}>
            <Stack>
              <AboutUsOption
                icon="attach_money"
                content={
                  <>
                    <MKTypography variant="p" color="light">
                      Each year we will work with a new nonprofit foundation focusing on a different
                      issue ranging from public health to forest health, helping the less fortunate,
                      or wildlife preservation.
                      <br />
                    </MKTypography>
                  </>
                }
              />
              <AboutUsOption
                icon="account_balance"
                content={
                  <>
                    <MKTypography variant="p" color="light">
                      This year, we are working with
                      <a
                        href="https://nftree.org/"
                        style={{ color: "#FB0E7D" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        &nbsp;Asociación Micorriza
                      </a>
                      , through our sponsor,
                      <a
                        href="https://nftree.org/"
                        style={{ color: "#FB0E7D" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        &nbsp;NFTrees
                      </a>
                      , for our ETHDenver event. Asociación Micorriza is currently working on
                      projects related to the conservation maintenance, and the protection of
                      biodiversity.
                      <br />
                    </MKTypography>
                  </>
                }
              />
              <AboutUsOption
                icon="token"
                content={
                  <>
                    <MKTypography variant="p" color="light">
                      We are all truly blessed to be here at ETHDenver 2022 and we&#39;d like to
                      invite you to join us on our mission to save the world and have fun doing it!
                      Check out some of the stats from this year&#39;s event&#39;s NFT ticket mint
                      and learn more about NFTrees
                      <a
                        href="https://nftree.org/"
                        style={{ color: "#FB0E7D" }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        &nbsp;here
                      </a>
                      .<br />
                    </MKTypography>
                  </>
                }
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
