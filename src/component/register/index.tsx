import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  styled,
  Button,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import imgRegister from "../../img/imgRegister.png";
import imgLogo from "../../img/logoRegister.png";
const S_Register = styled(Box)({
  width: `100%`,
  display: "flex",
  alignItems: `center`,
  height: `100vh`,
});
const S_formRegister = styled(Box)({
  width: `35%`,
  height: `100vh`,
  padding: `50px`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
});
const S_tittle = styled(Typography)({
  fontWeight: `700`,
  fontSize: `32px`,
  lineHeight: `38px`,
  color: `#2BA84A`,
  textAlign: `center`,
  marginBottom: `20px`,
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    marginTop: `10px`,
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "343px",
    color: "#B1B5C4",
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
const S_wrapInput = styled(Box)({
  marginTop: `10px`,
});
const S_buttonNext = styled(Button)({
  padding: `16px 80px`,
  gap: `8px`,
  width: `376px`,
  height: `56px`,
  background: `#777E91`,
  borderRadius: `4px`,
  marginTop: `50px`,
  fontWeight: `600`,
  fontSize: `16px`,
  color: `#fff`,
  "&:hover": {
    background: `#777E91`,
  },
});

const index = () => {
  return (
    <S_Register>
      <img style={{ height: `100%`, width: `65%` }} src={imgRegister} alt="" />
      <S_formRegister>
        <S_tittle variant="h1">Welcome to StartNow</S_tittle>
        <img src={imgLogo} style={{ width: `343px`, height: "242px" }} alt="" />
        <S_wrapInput>
          <FormControl style={{ marginTop: `40px` }} variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography
                style={{
                  fontSize: `30px`,
                  fontWeight: `700`,
                  color: `#353945`,
                }}
              >
                Email
              </Typography>
            </InputLabel>
            <BootstrapInput
              defaultValue="Enter your Email"
              id="bootstrap-input"
            />
          </FormControl>
          <FormControl style={{ marginTop: `40px` }} variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography
                style={{
                  fontSize: `30px`,
                  fontWeight: `700`,
                  color: `#353945`,
                }}
              >
                Password
              </Typography>
            </InputLabel>
            <BootstrapInput
              defaultValue="Enter your  password"
              id="bootstrap-input"
            />
          </FormControl>
          <FormControl style={{ marginTop: `40px` }} variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
              <Typography
                style={{
                  fontSize: `30px`,
                  fontWeight: `700`,
                  color: `#353945`,
                }}
              >
                Confirm password
              </Typography>
            </InputLabel>
            <BootstrapInput
              defaultValue="Enter your confirm password"
              id="bootstrap-input"
            />
          </FormControl>
        </S_wrapInput>
        <S_buttonNext>Next</S_buttonNext>
        <Link
          style={{ marginTop: `10px`, textDecoration: `none` }}
          to={"/Signin"}
        >
          {" "}
          <span style={{ color: `#2BA84A` }}> Click here</span> to Sign up if
          you have an account
        </Link>
      </S_formRegister>
    </S_Register>
  );
};

export default index;
