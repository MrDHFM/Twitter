import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function GetVerifiedModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex items-center space-x-3">
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </div>
            <section className="mt-10">
              <div className="flex flex-col justify-center items-center space-y-4">
                <h1 className="font-bold text-xl">Who are you?</h1>
                <p>Choose the right subscription for you:</p>
              </div>
            </section>
            <section className="mt-6">
              <div className="flex justify-around ">
                <Card sx={{ width: "250px" }}>
                  <CardActionArea>
                    <CardContent>
                      <p className="text-sm">Premium</p>
                      <h3 className="text-lg font-bold">I am Individual</h3>
                      <p className="text-sm">For individuals and creators</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Card sx={{ width: "250px" }}>
                  <CardActionArea>
                    <CardContent>
                      <p className="text-sm">Verified organizations</p>
                      <h3 className="text-lg font-bold">
                        I am an organization
                      </h3>
                      <p className="text-sm">
                        For businesses,government agencies and non -profits
                      </p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </section>
            <div className=" mt-5">
              <Button
                className=" w-full border-2   "
                sx={{
                  border: "2px solid black",
                  borderRadius: "20px",
                  bgcolor: "black",
                  color: "white",
                }}
                variant="contained"
              >
                Subscribe
              </Button>
            </div>
            <div className="mt-5 mb-5 text-center">
              <p>
                Learn more about{" "}
                <a href="" className="text-blue-400">
                  Premium
                </a>{" "}
                and{" "}
                <a href="" className="text-blue-400">
                  Verified Organizations
                </a>
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
