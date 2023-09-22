import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate, useNavigation } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navigation = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
  };

  return (
    <div className="h-screen sticky top-0 ">
      <div className="px-10">
        <div className="py-5">
          <svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>

        <div className=" space-y-5  ">
          {navigationMenu.map((item) => (
            <div
              className="flex space-x-3 items-center cursor-pointer"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${3}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="py-6">
          <Button
            sx={{ width: "100%", borderRadius: "20px", bgcolor: "#1e88e5" }}
            variant="contained"
          >
            Post
          </Button>
        </div>

        <div className="flex items-center space-x-3">
          <Avatar
            alt="username"
            src="https://pbs.twimg.com/profile_images/1424015789053530116/KjDoXEDr_400x400.jpg"
          />
          <div className="flex flex-col">
            <span>Mr.Dhfm</span>
            <span>@JButchiraju</span>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
