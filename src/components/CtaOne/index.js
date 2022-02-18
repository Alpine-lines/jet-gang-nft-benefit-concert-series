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
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import image from "assets/images/ethdenver-benefit-1.jpeg";
import { useEffect, useState } from "react";
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
      <MKBox bgColor="grey-100" py={12} px={{ xs: 3, lg: 0 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={6} ml="auto">
            <MKTypography variant="h4" mb={1}>
              Be the first to see the news
            </MKTypography>
            <MKTypography variant="body2" color="dark" mb={3}>
              Your company may not be in the software business, but eventually, a software company
              will be in your business.
            </MKTypography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                {!wallet?.provider && (
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
                {wallet?.provider && (
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
              mt={-24}
              display={{ xs: "none", lg: "block" }}
            />
          </Grid>
        </Grid>
      </MKBox>
    </MKBox>
  );
}

export default CtaOne;
