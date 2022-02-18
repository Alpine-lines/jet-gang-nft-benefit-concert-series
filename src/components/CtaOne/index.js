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
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import image from "assets/images/ethdenver-benefit-1.jpeg";

// Web3
import { useWeb3 } from "@chainsafe/web3-context";
import Web3 from "web3";
import abi from "../../abi";

function CtaOne() {
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
    <MKBox component="section" py={12}>
      <MKBox
        bgColor="grey-100"
        py={12}
        px={{ xs: 3, lg: 0 }}
        sx={({ breakpoints }) => ({
          borderRadius: "16px",
          [breakpoints.down("md")]: {
            mt: "2.5em",
            flexDirection: "column-reverse",
          },
        })}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            xl={6}
            ml="auto"
            sx={({ breakpoints }) => ({
              [breakpoints.down("md")]: {
                mt: "12em",
                textAlign: "center",
              },
            })}
          >
            <MKTypography variant="h4" mb={1}>
              Celebrate ETHDenver. Make a Difference.
            </MKTypography>
            <MKTypography variant="body2" color="dark" mb={3}>
              <p>
                Cheers to another great year @ ETHDenver. Come celebrate the tremendous growth of
                one of the world&#39;s premier cryptocurrency events. 10% of All revenue will be
                donated to NFTrees, helping to adress the world&#39;s climate crisis. The most
                amazing thing about this community is how much we care about people and the world.
                Let&#39;s get together and show our love!
              </p>
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
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
            </Grid>
          </Grid>
          <Grid item xs={12} xl={4} position="relative">
            <MKBox
              component="img"
              src={image}
              alt="image"
              maxWidth="18.75rem"
              width="100%"
              borderRadius="lg"
              shadow="xl"
              display={{ xs: "block" }}
              sx={({ breakpoints }) => ({
                borderRadius: "16px",
                [breakpoints.up("md")]: {
                  mr: "-4em",
                  mt: "-12em",
                },
                [breakpoints.down("md")]: {
                  ml: "1em",
                  mt: "-40em",
                },
              })}
            />
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default CtaOne;
