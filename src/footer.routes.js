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
        { name: "Giani Blue", href: "https://www.creative-tim.com/presentation" },
        { name: "BBBB BBB", href: "https://www.creative-tim.com/templates/free" },
        { name: "CCC CCCC", href: "https://www.creative-tim.com/templates/premium" },
        { name: "DD DDDDD", href: "https://www.creative-tim.com/blog" },
      ],
    },
    {
      name: "venue",
      items: [
        { name: "821 e 22nd St.", href: "https://iradesign.io/" },
        { name: "Denver, CO", href: "https://www.creative-tim.com/bits" },
        { name: "Name", href: "https://www.creative-tim.com/affiliates/new" },
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
