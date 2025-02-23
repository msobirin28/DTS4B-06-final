import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
import SideBar from "./SideBar";
import { Typography } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const navItems = [
  { text: "News", link: "/news" },
  { text: "Protal", link: "/portal" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "12ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ display: "flex", marginBottom: 5 }}>
      <AppBar>
        <Toolbar>
          <NewspaperIcon sx={{ display: "flex", mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              display: "block",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            <Link style={{ color: "inherit", textDecoration: "inherit", mr: 2 }} to="/">
              MSN
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              mr: 1,
            }}
          >
            {navItems.map((item) => (
              <NavLink to={item.link} key={item.text} className={({ isActive }) => (isActive ? "nav-active" : "nav-inactive")}>
                {item.text}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
            </Search>
            <SideBar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
