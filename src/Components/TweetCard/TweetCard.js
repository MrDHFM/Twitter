import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReplyModal from "./ReplyModal";

const TweetCard = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReply = () => setOpenReplyModal(true);
  const handleCloseReply = () => setOpenReplyModal(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`profile/${3}`)}
          className="cursor-pointer"
          alt="username"
          src="https://pbs.twimg.com/profile_images/1424015789053530116/KjDoXEDr_400x400.jpg"
        />
        <div className="w-full ">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2 ">
              <span>name</span>
              <span>@uname . 2m</span>
              <VerifiedIcon className="ml-2 " />
            </div>
            <div>
              <div>
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
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Report</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <div>
            <div
              onClick={() => navigate(`/tweetDetails/${3}`)}
              className="cursor-pointer"
            >
              <p className="mb-2 p-0">Jai Babu Jai Jai Babu</p>
              <img
                className="w-80 h-80 border border-grey-400 p-5 "
                alt=""
                src="https://pbs.twimg.com/media/F6R5skYWYAAk1KP?format=webp&name=900x900"
              />
            </div>
          </div>
          <div className="py-5 flex flex-wrap justify-between items-center">
            <div className="space-x-3 flex items-center text-gray-600">
              <CommentIcon
                className="cursor-pointer"
                onClick={handleOpenReply}
              />
              <p>35</p>
            </div>
            <div
              className={`${
                true ? "text-blue-500 " : "text-gray-600"
              } space-x-3 flex items-center `}
            >
              <RepeatIcon className="cursor-pointer" />
              <p>35</p>
            </div>
            <div
              className={`${
                true ? "text-red-500 " : "text-gray-600"
              } space-x-3 flex items-center text-gray-600`}
            >
              {true ? (
                <FavoriteIcon className="cursor-pointer" />
              ) : (
                <FavoriteBorderIcon className="cursor-pointer" />
              )}
              <p>35</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <BarChartIcon className="cursor-pointer" />
              <p>35</p>
            </div>
            <div className="space-x-3 flex items-center text-gray-600">
              <ShareIcon className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReply} />
      </section>
    </div>
  );
};

export default TweetCard;
