import React from "react";

import { Typography } from "@material-ui/core";

import bookItemStyles from "./BookItemInfo.styles";

const BookItemInfo = ({ book }) => {
  const classes = bookItemStyles();

  return (
    <section className={classes.bookInformation}>
      <Typography className={classes.title}>{book.name}</Typography>
      <Typography className={classes.author}>{book.author}</Typography>
      <Typography className={classes.price}>${book.price}</Typography>
    </section>
  );
};

export default BookItemInfo;
