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
  Modal,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import avatar from "../../img/imgMain/Avatar.png";
import NaviHome from "../Home/index";
import imgChoice from "../../img/ImgCurrent/choice.png";
import LocationChildren from "../pageChildren/LocationChildren";
const Location: React.FC<any> = () => {
  const columns: GridColDef[] = [
    {
      field: "addressID",
      headerName: "ADDRES ID",
      width: 150,
      editable: true,
    },
    {
      field: "address",
      headerName: "ADDRES",
      // type: "number",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <>
          <Avatar
            sx={{ width: `18px`, height: `18px`, marginRight: `20px` }}
            src={avatar}
          />
          {params.row.address}
        </>
      ),
    },
    {
      field: "location",
      headerName: "LOCATION",
      width: 200,
      editable: true,
    },

    {
      field: "addDate",
      headerName: "ADDED DATE",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 100,
      editable: true,
    },
    {
      field: "dsa",
      headerName: " ",
      width: 50,
      renderCell: () => (
        <>
          <img
            style={{ minWidth: "26px", minHeight: "12px" }}
            src={imgChoice}
            alt=""
          />
        </>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      addressID: "Snow",
      address: "Ha DOng",
      location: "Jon",
      addDate: "04/50/2022",
      status: "online",
    },
    {
      id: 2,
      addressID: "Lannister",
      address: "Ha DOng",
      location: "Cersei",
      addDate: "04/50/2022",
      status: "online",
    },
    {
      id: 3,
      addressID: "Lannister",
      address: "Ha DOng",
      location: "Jaime",
      addDate: "04/50/2022",
      status: "online",
    },
    {
      id: 4,
      addressID: "Stark",
      address: "Ha DOng",
      location: "Arya",
      addDate: "04/50/2022",
      status: "online",
    },
  ];
  /* start Model */
  const styleOpenBox = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <NaviHome>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#F4F5F6",
          p: 3,
          marginTop: `92px`,
        }}
      >
        <Toolbar
          style={{
            padding: `0`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          <Typography style={{ fontWeight: `600` }} variant="h4">
            Location Management{" "}
          </Typography>
          <div>
            <Button
              onClick={handleClickOpen}
              sx={{ padding: `10px` }}
              variant="contained"
              color="success"
            >
              + New new location
            </Button>

            <Dialog open={open} onClose={handleClose}>
              {<LocationChildren />}
            </Dialog>
          </div>
        </Toolbar>

        <Box sx={{ height: 650, bgcolor: "#fff" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      </Box>
    </NaviHome>
  );
};

export default Location;
