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

import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import DefaultFooter from "components/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/gold-stardoor.jpg";

// Content
import CtaOne from "components/CtaOne";
import LogoAreaThree from "components/LogoAreaThree";
import StatsThree from "components/StatsThree";
import TeamTwo from "components/TeamTwo";

// Web3
import { useWeb3 } from "@chainsafe/web3-context";
import Web3 from "web3";
import abi from "../../abi";

function Presentation() {
  const [contract, setContract] = useState({});
  const [web3, setWeb3] = useState({});
  const { address, wallet, onboard, provider } = useWeb3();

  // provider
  useEffect(() => {
    if (provider) {
      const w3 = new Web3(provider.provider);
      setWeb3(w3);
      const ctr = new w3.eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS);
      setContract(ctr);
    }
  }, [provider]);

  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        width="100%"
        sx={({ breakpoints }) => ({
          display: "grid",
          placeItems: "center",
          [breakpoints.up("lg")]: {
            minHeight: "80vh",
            backgroundImage: `linear-gradient(rgba(1, 0, 42, 0.55), rgba(1, 0, 42, 0.4)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          },
          [breakpoints.down("md")]: {
            minHeight: "40vh",
            backgroundImage: `linear-gradient(rgba(1, 0, 42, 0.55), rgba(1, 0, 42, 0.4))`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          },
        })}
      >
        <Container>
          <Grid container item xs={12} lg={9} pt={25} mx="auto">
            <Grid
              container
              item
              sx={({ breakpoints }) => ({
                [breakpoints.up("lg")]: {
                  direction: "column",
                  alignContent: "center",
                  justifyContent: "center",
                },
                [breakpoints.down("md")]: {
                  direction: "column-reverse",
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "-5em",
                  py: "5em",
                },
              })}
            >
              <Grid
                item
                sx={({ breakpoints }) => ({
                  mx: "auto",
                  [breakpoints.up("lg")]: {
                    mt: "4em",
                    mb: "-1.5em",
                    display: "inline",
                  },
                  [breakpoints.down("md")]: {
                    display: "none",
                  },
                })}
              >
                {!wallet?.provider && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      onboard.walletSelect();
                      onboard.walletCheck();
                    }}
                  >
                    Select Wallet
                  </MKButton>
                )}
                {wallet?.provider && !address && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      onboard.walletCheck();
                    }}
                  >
                    Connect To RSVP
                  </MKButton>
                )}
                {wallet?.provider && address && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      contract.methods.buyTicket(0).send({
                        value: web3.utils.toWei("0.0015"),
                        from: address,
                      });
                    }}
                  >
                    Mint GA Tickets
                  </MKButton>
                )}
              </Grid>
              <Grid item sx={{ mt: "5em", mx: "auto" }}>
                <MKTypography
                  variant="h1"
                  color="white"
                  mt={-6}
                  mb={1}
                  sx={({ breakpoints }) => ({
                    [breakpoints.up("lg")]: {
                      fontSize: "45pt",
                    },
                    [breakpoints.down("md")]: {
                      fontSize: "28pt",
                    },
                  })}
                >
                  Jet Gang NFT Benefit{" "}
                </MKTypography>
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <MKTypography
                  variant="subtitle1"
                  color="white"
                  textAlign="center"
                  sx={({ breakpoints }) => ({
                    [breakpoints.up("lg")]: {
                      fontSize: "14pt",
                    },
                    [breakpoints.down("md")]: {
                      fontSize: "14pt",
                    },
                  })}
                  px={6}
                  mt={1}
                >
                  &#186; Zodiac House | Sunday February 20th, 2022 | Denver, CO &#186;
                </MKTypography>
              </Grid>

              <Grid
                item
                sx={({ breakpoints }) => ({
                  mx: "auto",
                  [breakpoints.up("lg")]: {
                    mt: "4em",
                    mb: "-1.5em",
                    display: "none",
                  },
                  [breakpoints.down("md")]: {
                    mt: "2.5em",
                    ml: "5.5em",
                    textAlign: "center",
                    display: "inline",
                  },
                })}
              >
                {!wallet?.provider && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      onboard.walletSelect();
                      onboard.walletCheck();
                    }}
                  >
                    Select Wallet
                  </MKButton>
                )}
                {wallet?.provider && !address && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      onboard.walletCheck();
                    }}
                  >
                    Connect To RSVP
                  </MKButton>
                )}
                {wallet?.provider && address && (
                  <MKButton
                    variant="gradient"
                    color="warning"
                    onClick={() => {
                      contract.methods.buyTicket(0).send({
                        value: web3.utils.toWei("0.0015"),
                        from: address,
                      });
                    }}
                  >
                    Mint GA Tickets
                  </MKButton>
                )}
              </Grid>
              <Grid item sx={{ mx: "auto" }}>
                <MKBox
                  id="sponsor"
                  sx={({ breakpoints }) => ({
                    margin: "0em -5em 7.5em 1em",
                    [breakpoints.down("md")]: {
                      display: "inline",
                    },
                    [breakpoints.down("md")]: {
                      display: "none",
                    },
                  })}
                >
                  <LogoAreaThree />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Container>
        <MKBox
          id="lineup"
          sx={{
            my: "5em",
          }}
        >
          <TeamTwo />
        </MKBox>
        <MKBox
          id="charity"
          sx={{
            margin: "0em 0",
          }}
        >
          <StatsThree />
        </MKBox>
        <Grid item sx={{ mx: "auto" }}>
          <MKBox
            id="sponsor"
            sx={({ breakpoints }) => ({
              [breakpoints.up("md")]: {
                display: "none",
              },
              [breakpoints.down("md")]: {
                display: "inline",
              },
            })}
          >
            <MKTypography variant="h2" color="light" ml={14} mt={17.5} mb={5}>
              Sponsors
            </MKTypography>
            <LogoAreaThree />
          </MKBox>
        </Grid>
        <MKBox
          sx={{
            margin: "5em 0",
          }}
        >
          <CtaOne />
        </MKBox>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
