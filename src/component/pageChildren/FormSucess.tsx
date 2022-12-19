import React from "react";
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
} from "@mui/material";
import imgSuccess from "./imgPageChildren/imgSucess.png";
const S_formSucess = styled(Box)({
  minWidth: `645px`,
  minHeight: `463px`,
  display: `flex`,
  alignItems: "center",
  flexDirection: "column",
  padding: `40px`,
});
const FormSucess: React.FC<any> = ({ setshowDialogParent }) => {
  return (
    <S_formSucess>
      <Typography
        style={{
          fontWeight: `700`,
          fontSize: `24px`,
          lineHeight: `32px`,
          color: `#2BA84A`,
        }}
        variant="h4"
      >
        Create successfully{" "}
      </Typography>
      <Typography
        style={{ color: `#141416`, fontSize: `16px`, marginTop: `12px` }}
        variant="h5"
      >
        Your post created successfully.
      </Typography>
      <img
        style={{
          width: `300px`,
          height: `211.14px`,
          marginTop: ` 40px`,
          marginBottom: `36px`,
        }}
        src={imgSuccess}
        alt=""
      />
      <Button variant="contained" color="success">
        Back to reward management{" "}
      </Button>
    </S_formSucess>
  );
};

export default FormSucess;
