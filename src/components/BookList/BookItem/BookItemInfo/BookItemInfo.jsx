import React from "react";

import { Typography } from "@material-ui/core";

import bookItemStyles from "./BookItemInfo.styles";

const BookItemInfo = ({ book }) => {
  const classes = bookItemStyles();

  return (
    <section className={classes.bookInformation}>
      <Typography variant="p" className={classes.title}>
        {book.name}
      </Typography>
      <Typography variant="p" className={classes.author}>
        {book.author}
      </Typography>
      <Typography
        variant="p"
        className={classes.price}
      /* CR: `>${book.price}</Typography>` */
      >{`$${book.price}`}</Typography>
    </section>
  );
};

export default BookItemInfo;
