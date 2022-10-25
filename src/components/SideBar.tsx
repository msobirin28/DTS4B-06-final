import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <Box
        sx={{
          width: 250,
          height: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AccountCircle />
        <Typography>emailjgfghf</Typography>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Favorite" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 1, ml: 2 }}>
              <MenuIcon />
            </IconButton>
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
