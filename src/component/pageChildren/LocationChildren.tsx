import React, { useEffect, useState } from "react";

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
import axios from "axios";
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

//////////////////////////////////////////////////
const LocationChildren = () => {
  const [open, setOpen] = React.useState(false);
  const [unShow, setUnShow] = useState(false);
  const [currency, setCurrency] = useState<any>("EUR");
  const [location, setLocation] = useState<any>("Sydney");
  const [address, setAddress] = useState<any>("Crawford Room, Mortlock ....");
  interface typeLocation {
    id: String;
    imgAddress: String;
    contentAddress: String;
    location: String;
    addedDate: String;
    status: String;
    userID: String;
  }
  const [stateLocation, setstateLocation] = useState<typeLocation>({
    id: "",
    imgAddress: "",
    contentAddress: "",
    location: "",
    addedDate: "",
    status: "",
    userID: "",
  });
  const creatLocation = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/location/creatLocation",
        stateLocation
      );
      console.log(stateLocation);
    } catch (err) {
      console.log(err);
    }
  };
  const [urlImg, seturlImg] = useState("");
  const handleImage = (e: any) => {
    var file = e.target.files;
    seturlImg(URL.createObjectURL(file[0]));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
    setstateLocation({
      ...stateLocation,
      [event.target.name]: event.target.value,
      userID: "4325345",
    });
  };
  useEffect(() => {
    setstateLocation({
      ...stateLocation,
      imgAddress: urlImg,
    });
  }, [urlImg]);

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
      }}
    >
      <S_OverChildren>
        <form onSubmit={creatLocation}>
          <Typography
            style={{ fontWeight: `600`, marginBottom: `20px` }}
            variant="h4"
          >
            Add new location
          </Typography>
          <S_InputInfor>
            <Typography style={{ fontWeight: `600`, fontSize: `18px` }}>
              Location Information
            </Typography>

            <FormControl variant="standard">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    width: "55ch",
                  },
                  "& select": {
                    padding: `10px`,
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <Typography variant="h6">Location</Typography>
                <div>
                  <S_inputSelect
                    style={{ marginLeft: "0" }}
                    id="filled-select-currency-native"
                    select
                    value={location}
                    name="location"
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
                </div>
              </Box>
            </FormControl>
            <FormControl variant="standard">
              <Typography variant="h6">Address</Typography>
              <BootstrapInput
                name="contentAddress"
                onChange={handleChange}
                defaultValue="Sydney"
                id="bootstrap-input"
              />
            </FormControl>
            <Box>
              <Typography variant="h5">Media</Typography>
              <label style={{ marginTop: `20px` }} htmlFor="inputFile">
                <img src={urlImg ? urlImg : addImg} />
              </label>
              <input
                style={{ display: "none" }}
                accept="image/*"
                id="inputFile"
                type="file"
                onChange={(e) => {
                  handleImage(e);
                }}
              />
            </Box>
            <Button
              style={{ marginTop: `20px` }}
              size="large"
              color="success"
              variant="contained"
              onClick={handleClickOpen}
              type="submit"
            >
              Creat new post
            </Button>
          </S_InputInfor>
        </form>
      </S_OverChildren>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {<FormSucess />}
      </Dialog>
    </Box>
  );
};

export default LocationChildren;
