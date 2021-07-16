import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/icons/Menu";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import jex from '../jex.png';

import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#212121",
    margin: 0,
    position: "fixed",
    top: 0
  },
  toolBar: {
    justifyContent: "space-between",
  },
  menu: {
    color: "#e0e0e0",
  },
  title: {
    color: "#e0e0e0",
  },
  menuSliderContainer: {
    width: 250,
    background: "#212121",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  center: {
    margin: "0.5rem auto",
    marginTop: "3rem"
  },
  listItem: {
    color: "#bdbdbd",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <VerifiedUser />, listText: "Skills", listPath: "/skills" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={[classes.avatar, classes.center]} src={avatar} alt="Johann Villalvir" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Avatar className={classes.avatar} src={jex} alt="Johann Villalvir" component={Link} to={"/"} />
            <IconButton onClick={() => setOpen(true)}>
              <Menu className={classes.menu} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
