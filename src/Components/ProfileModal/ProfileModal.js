import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./ProfileModal.css";

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

const ProfileModal = ({ open, handleClose }) => {
  // const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = () => {
    console.log("saved", formik.values);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      location: "",
      website: "",
    },
    onSubmit: handleSubmit,
  });

  const handleImageChange = (e) => {
    setUploading(true);
    const { name } = e.target;
    const file = e.target.files[0];
    formik.setFieldValue(name, file);
    setUploading(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose}>
                  <Close />
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className="hideScrollBar overflow-scroll overflow-x-hidden h-[80vh]">
              <React.Fragment>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://pbs.twimg.com/profile_banners/1029757676/1633458588/1080x360"
                    />
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                      name="backgroundImage"
                    />
                  </div>
                  <div>
                    <div className=" w-full transform -translate-y-20 ml-4">
                      <div className=" relative">
                        <Avatar
                          className=""
                          sx={{
                            width: "10rem",
                            height: "10rem",
                            border: "4px solid white",
                          }}
                          alt="username"
                          src="https://pbs.twimg.com/profile_images/1424015789053530116/KjDoXEDr_400x400.jpg"
                        />
                        <input
                          type="file"
                          onChange={handleImageChange}
                          className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                          name="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
              <div className="space-y-3">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="bio"
                  name="bio"
                  label="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
                <TextField
                  fullWidth
                  id="website"
                  name="website"
                  label="Website"
                  value={formik.values.website}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.website && Boolean(formik.errors.website)
                  }
                  helperText={formik.touched.website && formik.errors.website}
                />

                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.location && Boolean(formik.errors.location)
                  }
                  helperText={formik.touched.location && formik.errors.location}
                />
                <div className="m-y-3">
                  <p className="text-lg">Birth date . Edit</p>
                  <p className="text-2xl">April 7th,1999</p>
                </div>
                <p className="py-3 text-lg">Edit Personal Profile</p>
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
