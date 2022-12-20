import React, { useEffect, useState } from "react";
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
import { changeIndexPage } from "../../store/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
const Location: React.FC<any> = () => {
  const S_dataGrid = styled(DataGrid)({
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: `600`,
      fontSize: `18px`,
    },
    "& .MuiSvgIcon-fontSizeMedium": {
      display: "none",
    },
  });
  const S_textColoum = styled(Typography)({
    width: `100%`,
    height: `72%`,
    borderRadius: `20px`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#D5EEDB",
    color: `#30993B`,
    fontWeight: `500`,
  });
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
  const [dataLocation, setdataLocation] = useState([]);
  const renderDataLocation = async () => {
    try {
      const res = await axios.get("http://localhost:5000/location");
      const { data } = res.data;
      res.data && setdataLocation(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    renderDataLocation();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ADDRESS ID",
      width: 180,
      editable: true,
      renderCell: (params) => (
        <>
          <Typography variant="h6" sx={{ color: "green" }}>
            {params.id.toString().slice(0, 8)}
          </Typography>
        </>
      ),
    },
    {
      field: "wrapAdress",
      headerName: "ADDRESS",
      width: 300,
      editable: true,
      renderCell: (params) => (
        <>
          <Avatar
            sx={{ width: `28px`, height: `28px`, marginRight: `20px` }}
            src={params.row.imgAddress}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", overflow: "hidden" }}
          >
            {" "}
            {params.row.contentAddress}
          </Typography>
        </>
      ),
    },
    {
      field: "location",
      headerName: "LOCATION",
      // type: "number",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <Typography variant="h6">{params.row.location}</Typography>
      ),
    },
    {
      field: "addedDate",
      headerName: "ADDED DATE",
      sortable: false,
      width: 300,

      renderCell: (param) => (
        <Typography variant="h6"> {param.row.addedDate}</Typography>
      ),
    },
    {
      field: "status",
      headerName: "STATUS",
      width: 120,
      editable: true,

      renderCell: (params) => <S_textColoum>{params.row.status}</S_textColoum>,
    },
    {
      field: "dsa",
      headerName: " ",
      width: 80,
      renderCell: () => (
        <>
          <img
            style={{ maxWidth: "26px", minHeight: "12px" }}
            src={imgChoice}
            alt=""
          />
        </>
      ),
    },
  ];

  //chinh sua index
  const dispath = useDispatch();
  dispath(changeIndexPage(2));
  const arrRender = dataLocation.map((item: any) => ({
    ...item,
    id: item._id,
  }));
  const rows = arrRender;
  // console.log("rows là ", rows);
  // console.log("arrRender là ", arrRender);
  /* start Model */

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
              + New Location
            </Button>

            <Dialog open={open} onClose={handleClose}>
              {<LocationChildren />}
            </Dialog>
          </div>
        </Toolbar>

        {dataLocation && (
          <Box sx={{ height: 650, bgcolor: "#fff" }}>
            <S_dataGrid
              rows={rows}
              columns={columns}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        )}
      </Box>
    </NaviHome>
  );
};

export default Location;
