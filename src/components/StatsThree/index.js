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

import { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Web3-Context
import { useWeb3 } from "@chainsafe/web3-context";
import Web3 from "web3";
import abi from "../../abi";

function StatsThree() {
  // const [avbl, setAvbl] = useState(400);
  // eslint-disable-next-line no-unused-vars
  const [contract, setContract] = useState(0);
  const { provider } = useWeb3();

  useEffect(async () => {
    if (provider) {
      const w3 = new Web3(provider.provider);
      const ctr = new w3.eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS);
      setContract(ctr);
      // const event = await ctr.methods.getEvent(0).call();
      // setAvbl(event.seats - event.sold);
      // setRaised(event.sold * w3.utils.fromWei(event.price) * 0.1).toFixed(4);
    }
  }, [provider]);

  return (
    <MKBox
      component="section"
      sx={({ breakpoints }) => ({
        mx: "auto",
        [breakpoints.up("lg")]: {
          mt: "1em",
          pt: "1em",
          px: "1.5em",
        },
        [breakpoints.down("md")]: {
          mt: "5em",
          mb: "-5em",
          py: "5em",
          px: "1.5em",
        },
      })}
    >
      <Container>
        <Grid container item direction="column" xs={12} lg={12} spacing={3} textAlign="start">
          {/* <Grid item>
            <MKTypography variant="h3" color="info">
              Jet Gang Benefit Proceeds
            </MKTypography>
          </Grid> */}
          {/* <Grid
            container
            item
            spacing={1}
            xs={8}
            lg={12}
            sx={({ breakpoints }) => ({
              textAlign: "start",
              justifyContent: "flex-start",
              [breakpoints.up("lg")]: {
                flexDirection: "row",
              },
              [breakpoints.down("md")]: {
                flexDirection: "column",
              },
            })}
          >
            <Grid item xs={12} md={6} lg={6}>
              <MKTypography variant="h3" color="warning">
                {avbl}
              </MKTypography>
              <MKTypography variant="h5" fontWeight="light" color="light">
                Tickets Remaining
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MKTypography variant="h3" color="warning">
                10%
              </MKTypography>
              <MKTypography variant="h5" fontWeight="light" color="light">
                Donated
              </MKTypography>
            </Grid>
            {raised > 1 && (
              <Grid item xs={12} md={6} lg={2}>
                <MKTypography variant="h3" color="warning">
                  {raised} ETH
                </MKTypography>
                <MKTypography variant="h5" fontWeight="light" color="light">
                  Donated so far
                </MKTypography>
              </Grid>
            )}
          </Grid> */}
          {/* <Grid
            container
            item
            justifyContent="center"
            xs={12}
            sx={({ breakpoints }) => ({
              flexDirection: "column",
              [breakpoints.down("md")]: {
                display: "none",
              },
              [breakpoints.down("md")]: {
                display: "inline",
              },
            })}
          >
            <MKTypography
              variant="p"
              color="light"
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
              <br />
            </MKTypography>
            <MKTypography
              variant="p"
              color="light"
              mb={5}
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {
                  mt: "2.5em",
                  display: "none",
                },
              })}
            >
              Each year we will work with a new nonprofit foundation focusing on a different issue
              ranging from public health to forest health, helping the less fortunate, or wildlife
              preservation. This year, we are working with
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
              , for our ETHDenver event. Asociación Micorriza is currently working on projects
              related to the conservation maintenance, and the protection of biodiversity.
              <br />
            </MKTypography>
            <MKTypography
              variant="p"
              color="light"
              mb={5}
              sx={({ breakpoints }) => ({
                [breakpoints.down("md")]: {
                  mt: "2.5em",
                },
              })}
            >
              We are all truly blessed to be here at ETHDenver 2022 and we&#39;d like to invite you
              to join us on our mission to save the world and have fun doing it! Check out some of
              the stats from this year&#39;s event&#39;s NFT ticket mint and learn more about
              NFTrees
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
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default StatsThree;
