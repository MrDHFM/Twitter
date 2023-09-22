import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonIcon from "@mui/icons-material/Person";
import PendingIcon from "@mui/icons-material/Pending";

export const navigationMenu = [
  {
    icon: <HomeIcon />,
    title: "Home",
    path: "/home",
  },
  {
    icon: <SearchIcon />,
    title: "Explore",
    path: "/explore",
  },
  {
    icon: <NotificationsIcon />,
    title: "Notifications",
    path: "/notifications",
  },
  {
    icon: <EmailIcon />,
    title: "Messages",
    path: "/messages",
  },
  {
    icon: <ListAltIcon />,
    title: "Lists",
    path: "/lists",
  },
  {
    icon: <GroupIcon />,
    title: "Communities",
    path: "/communities",
  },
  {
    icon: <VerifiedIcon />,
    title: "Verified",
    path: "/verified",
  },
  {
    icon: <PersonIcon />,
    title: "Profile",
    path: "/profile",
  },
  {
    icon: <PendingIcon />,
    title: "More",
    path: "/more",
  },
];
