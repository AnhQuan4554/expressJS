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
} from "@mui/material";
import React from "react";
import logomain from "../../img/imgMain/logoMain.png";
import document from "../../img/imgMain/document.png";
import hand from "../../img/imgMain/hand.png";
import location from "../../img/imgMain/location.png";
import Vector from "../../img/imgMain/Vector.png";
const index = () => {
  const arrayIcon = [Vector, document, location, hand];
  const drawerWidth = 240;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          style={{ background: `red` }}
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />

          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => console.log("click")}>
                  <ListItemIcon>
                    <img style={{ width: `60px` }} src={arrayIcon[index]} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />

          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim verra maecenas accumsan lacus vel facilisis.
            Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default index;
