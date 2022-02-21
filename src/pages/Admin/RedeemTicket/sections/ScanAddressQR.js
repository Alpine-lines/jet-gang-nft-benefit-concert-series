/**
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
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Images
import bgImage1 from "assets/images/examples/color1.jpg";
import DefaultBackgroundCard from "components/Cards/BackgroundCards/DefaultBackgroundCard";

import { QrReader } from "react-qr-reader";

// Web3
import Web3 from "web3";
import { useWeb3 } from "@chainsafe/web3-context";
import ListItem from "../components/ListItem";
import abi from "../../../../abi";

function ScanAddressQR() {
  const [state, setState] = useState({
    tab: 1,
    wrong_address: false,
    status: false,
    requests: {
      ticketsOfUser: false,
      listOfTickets: false,
      requestsDone: false,
    },
  });
  const [web3, setWeb3] = useState();
  const [contract, setcontract] = useState();
  // eslint-disable-next-line no-unused-vars
  const [listOfTickets, setListOfTickets] = useState([]);
  const [ticketsOfUser, setTicketsOfUser] = useState();
  const [userAddress, setUserAddress] = useState();
  const [scanQr, setScanQr] = useState(false);
  const [success, setSuccess] = useState(false);

  const { provider } = useWeb3();

  useEffect(() => {
    if (!typeof provider === "undefined") {
      const w3 = new Web3(provider.provider);
      setWeb3(w3);
      const ctr = new web3.eth.Contract(abi, process.env.REACT_APP_CONTRACT_ADDRESS);
      setcontract(ctr);
      console.log({ provider, web3, ctr });
    }
  }, [provider]);

  const runChecking = (addr) => {
    setTicketsOfUser(contract.methods.ticketsOf.cacheCall(addr));
    setState({
      wrong_address: false,
      requests: {
        ticketsOfUser: true,
        listOfTickets: false,
        requestsDone: false,
      },
      status: false,
    });
  };

  const checkManual = () => {
    if (!userAddress || !web3.utils.isAddress(userAddress)) {
      setState({ wrong_address: true });
    } else {
      runChecking(userAddress);
    }
  };

  const checkQR = (data) => {
    if (data) {
      if (web3.utils.isAddress(data)) {
        runChecking(data);
      }
    }
  };

  const checkTickets = () => {
    if (
      state.requests.ticketsOfUser &&
      ticketsOfUser !== null &&
      typeof contract.methods.ticketsOf(userAddress) !== "undefined" &&
      !state.requests.listOfTickets
    ) {
      const tickets = contract.methods.ticketsOf(userAddress).call();

      for (let i = 0; i < tickets.length; i += 1) {
        listOfTickets.push(contract.methods.getTicket(tickets[i]).call());
      }

      setState({
        requests: {
          ticketsOfUser: true,
          listOfTickets: true,
          requestsDone: false,
        },
      });
    }

    if (state.requests.listOfTickets) {
      let loading = false;
      let found = false;

      for (let i = 0; i < listOfTickets.length; i += 1) {
        if (typeof contract.methods.getTicket[state.listOfTickets[i]] === "undefined") {
          loading = true;
        } else {
          const ticket = contract.methods.getTicket[state.listOfTickets[i]];
          console.log({
            ticket,
            tId: ticket.args[0],
            t: state.listOfTickets[i],
            eId: state.props.event_id,
          });
          if (ticket.value[0] === state.props.event_id && ticket.value[2] === true) {
            contract.methods.redeemTicket.cacheSend(ticket.args[0], state.props.event_id);
            setSuccess(true);
            console.log({
              tId: ticket.args[0],
              eId: state.props.event_id,
            });
            found = true;
          }
        }
      }

      if (!loading) {
        setState({
          requests: {
            ticketsOfUser: false,
            listOfTickets: false,
            requestsDone: true,
          },
          status: found,
        });
        setTicketsOfUser(null);
        state.listOfTickets = [];
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={5}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBox
            width="3rem"
            height="3rem"
            borderRadius="lg"
            shadow="md"
            variant="gradient"
            bgColor="info"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon fontSize="small" sx={{ opacity: 0.8 }}>
              settings
            </Icon>
          </MKBox>
          <MKTypography variant="h3" mt={3}>
            How To Handle Them
          </MKTypography>
          <MKTypography variant="body2" color="text">
            We&apos;re constantly trying to express ourselves and actualize our dreams. Don&apos;t
            stop.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
            <DefaultBackgroundCard
              image={bgImage1}
              label="website visitors"
              title="The Best Productivity Apps on Market"
              description="As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others."
              action={{
                type: "internal",
                route: "/pages/support/help-center",
                label: "get started",
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <ListItem title="1. Scan QR Code">
              {!scanQr && (
                <MKButton color="warning" onClick={() => setScanQr(true)}>
                  Scan QR
                </MKButton>
              )}
              {scanQr && provider && (
                <QrReader
                  delay={300}
                  onResult={(result, error) => {
                    if (error) {
                      handleError();
                    } else {
                      checkQR();
                    }
                  }}
                  onError={() => {}}
                  style={{ width: "100%" }}
                />
              )}
            </ListItem>
            <ListItem title="2. Enter Address">
              <Grid container direction="row">
                {provider && (
                  <MKInput
                    id="address"
                    onSubmit={(e) => {
                      setUserAddress(e.target.value);
                      checkManual();
                    }}
                  />
                )}
              </Grid>
            </ListItem>
            <ListItem title="3. Redeem Ticket">
              {provider && (
                <MKButton color="warning" onClick={checkTickets}>
                  Redeem Ticket
                </MKButton>
              )}
              {success && (
                <MKTypography component="subtitle2">
                  Success! Ticket has been successfully redeemed!
                </MKTypography>
              )}
            </ListItem>
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
      </Container>
    </MKBox>
  );
}

export default ScanAddressQR;
