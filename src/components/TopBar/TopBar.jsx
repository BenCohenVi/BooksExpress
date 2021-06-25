import React from "react";

import { AppBar, Typography } from "@material-ui/core";

import CartButton from "../CartButton";

import topBarStyles from "./TopBar.styles";

const TopBar = () => {
  const classes = topBarStyles();

  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Typography variant="h4" color="inherit" className={classes.title}>
        BooksExpress
      </Typography>
      <CartButton />
    </AppBar>
  );
};

export default TopBar;
