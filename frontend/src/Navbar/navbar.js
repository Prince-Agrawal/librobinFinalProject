import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";

import ContactsIcon from "@material-ui/icons/Contacts";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
//import CssBaseline from '@material-ui/core/CssBaseline';

import List from "@material-ui/core/List";
import "./navbar.css";

import Divider from "@material-ui/core/Divider";
//import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, NavLink } from "react-router-dom";
//import InboxIcon from "@material-ui/icons/MoveToInbox";
//import MailIcon from "@material-ui/icons/Mail";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const drawar = [
  {
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    icon: <ContactsIcon />,
    text: "Buy Stationary",
    link: "/buy_stationary",
  },
  {
    icon: <i class="fa fa-cart-arrow-down buy-icon"></i>,
    text: "Buy A Book",
    link: "/buy",
  },
  {
    icon: <i class="fa fa-handshake-o sell-icon"></i>,
    text: "Sell A Book",
    link: "/sell",
  },

  {
    icon: <ContactsIcon />,
    text: "Contact Us",
    link: "/contact",
  },
  {
    icon: <InfoIcon />,
    text: "About Us",
    link: "/aboutUs",
  },
];

export default function SearchAppBar({ setBooks, open, setOpen }) {
  const classes = useStyles();
  //const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [open, setOpen] = useState(false);
  const opend = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelLogout = () => {
    localStorage.clear();
  };

  const handleTextFieldChange = (e) => {
    setBooks(e.target.value);

    // console.log(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#34495e' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            LibroBin
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleTextFieldChange}
            />
          </div>

          <Link
            to="/card_detail"
            style={{ color: "white", textDecoration: "none" }}
          >
            <i class="fa fa-cart-arrow-down buy-card"></i>
          </Link>
          {
            <div>
              {localStorage.getItem("user_id") ? (
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  color="white"
                  className={classes.margin}
                >
                  <Link
                    to="/login"
                    style={{ color: "blue", textDecoration: "none" }}
                  >
                    <strong>Login</strong>
                  </Link>
                </Button>
              )}

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={opend}
                onClose={handleClose}
              >
                <Link
                  to="/profile"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    view Profile
                  </MenuItem>
                </Link>
                <Link
                  to="/your_orders"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    your orders 
                  </MenuItem>
                </Link>
                <Link
                  to="/change_password"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    Change Password
                  </MenuItem>
                </Link>
                <Link style={{ color: "black", textDecoration: "none" }}>
                  <MenuItem
                    onClick={() => {
                      handelLogout();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Link>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <h2 id="foo">LibroBin</h2>

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {drawar.map((text, index) => (
            <Link
              to={text.link}
              key={index}
              style={{ color: "black", textDecoration: "none" }}
              onClick={handleDrawerClose}
            >
              <ListItem button key={text.text}>
                <ListItemIcon style={{ color: "black" }}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.text} style={{ color: "black" }} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
