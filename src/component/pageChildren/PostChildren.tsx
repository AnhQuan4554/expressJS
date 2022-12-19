import React, { useState } from "react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  styled,
  Avatar,
  Button,
  FormControl,
  InputLabel,
  InputBase,
  TextField,
  Dialog,
} from "@mui/material";
import addImg from "./imgPageChildren/addImg.svg";
import { Link } from "react-router-dom";
import FormSucess from "./FormSucess";
const S_OverChildren = styled(Box)({
  padding: `10px 40px`,
  // height: `1023px`,
  background: "#fff",
  margin: `auto`,
});
const S_InputInfor = styled(Box)({
  display: `flex`,
  //   alignItems: "center",
  flexDirection: "column",
});
/* CSS input */
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& lable": { position: `initial` },
  "label + &": {
    marginTop: theme.spacing(3),
  },

  "& .MuiInputBase-input": {
    marginTop: `8px`,
    marginBottom: "16px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid #EBEAED",
    fontSize: 16,
    color: "##141416",
    fontWeight: 600,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
const S_inputSelect = styled(TextField)({
  marginLeft: `12px`,
  marginTop: `8px`,
  marginBottom: "16px",
  background: `#fff`,
  borderRadius: `4px`,
  // padding: "20px",
  // width: `94px`,
  // height: `43px`,
});
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const PostChildren: React.FC<any> = () => {
  const [currency, setCurrency] = useState<any>("EUR");
  const [location, setLocation] = useState<any>("Sydney");
  const [address, setAddress] = useState<any>("Crawford Room, Mortlock ....");
  useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Box
      style={{
        justifyContent: `center`,
        // display: "none",
      }}
    >
      <S_OverChildren>
        <Typography
          style={{ fontWeight: `600`, marginBottom: `20px` }}
          variant="h4"
        >
          Add new post
        </Typography>
        <S_InputInfor>
          <Typography style={{ fontWeight: `600`, fontSize: `18px` }}>
            Post Information
          </Typography>
          <FormControl variant="standard">
            <Typography variant="h6">Tittle</Typography>
            <BootstrapInput
              defaultValue="Crawford Room, Mortlock Wing...."
              id="bootstrap-input"
            />
          </FormControl>
          <FormControl variant="standard">
            <Box
              component="form"
              sx={{
                padding: "0",
                "& .MuiTextField-root": {
                  width: "10ch",
                },
                "& select": {
                  padding: `10px`,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography variant="h6">Raising</Typography>
              <div
                style={{
                  display: `flex`,
                  alignItems: `center`,
                }}
              >
                <BootstrapInput
                  sx={{ width: "85%" }}
                  defaultValue="1000"
                  id="bootstrap-input"
                />
                <S_inputSelect
                  id="filled-select-currency-native"
                  select
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </S_inputSelect>
              </div>
            </Box>
          </FormControl>
          <FormControl variant="standard">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  width: "25ch",
                },
                "& select": {
                  padding: `10px`,
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Typography variant="h6">Location</Typography>
              <Typography
                style={{ position: `absolute`, top: `0px`, left: `51%` }}
                variant="h6"
              >
                Location
              </Typography>
              <div>
                <S_inputSelect
                  style={{ marginLeft: "0" }}
                  id="filled-select-currency-native"
                  select
                  value={location}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}

                  // variant="filled"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </S_inputSelect>
                <S_inputSelect
                  id="filled-select-currency-native"
                  select
                  value={address}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}

                  // variant="filled"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </S_inputSelect>
              </div>
            </Box>
          </FormControl>
          <Box>
            <Typography variant="h5">Media</Typography>
            <label style={{ marginTop: `20px` }} htmlFor="inputFile">
              <img src={addImg} />
            </label>
            <input
              style={{ display: "none" }}
              accept="image/*"
              id="inputFile"
              type="file"
            />
          </Box>
          <Button
            style={{ marginTop: `20px` }}
            size="large"
            color="success"
            variant="contained"
            onClick={handleClickOpen}
          >
            {/* <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {<FormSucess open={open} />}
            </Dialog> */}
            Creat new post
          </Button>
        </S_InputInfor>
      </S_OverChildren>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {<FormSucess open={open} />}
      </Dialog>
    </Box>
  );
};

export default PostChildren;
