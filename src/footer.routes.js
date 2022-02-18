// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 PRO React components
import MKTypography from "components/MKTypography";

// Images
import gb from "assets/images/GB no background.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Jet Gang NFT Benefit Concert Series",
    image: gb,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "artists",
      items: [
        { name: "Giani Blue", href: "https://solo.to/gianniblu" },
        { name: "DJ Howl", href: "https://www.instagram.com/howl_official_ig/?hl=en" },
        { name: "Shoebox Moses", href: "https://www.shoeboxmoses.com/" },
      ],
    },
    {
      name: "venue",
      items: [
        { name: "Zodiac House", href: "http://zodiachause.com/" },
        { name: "821 e 22nd St.", href: "http://zodiachause.com/" },
        { name: "Denver, CO", href: "http://zodiachause.com/" },
      ],
    },
    {
      name: "ticketing",
      items: [
        { name: "Buy GA Now", href: "https://www.creative-tim.com/contact-us" },
        { name: "VIP", href: "https://www.creative-tim.com/knowledge-center" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Jet Gang NFT Benefit Concert Series{" "}
    </MKTypography>
  ),
};
