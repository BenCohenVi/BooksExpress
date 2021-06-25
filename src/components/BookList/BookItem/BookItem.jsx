import React from "react";

import { ListItem } from "@material-ui/core";

import BookItemInfo from "./BookItemInfo";
import BookItemForm from "./BookItemForm/BookItemForm";

import bookItemStyles from "./BookItem.styles";

const BookItem = ({ book }) => {
  const classes = bookItemStyles();

  // CR: I have personal preference, that wrapping components like ListItem, Card etc. should be used in parent,
  // and component like `BookItem` would be without wrapping components.
  // then you can use `BookItem` in different contexts without the fear that you would need another wrapper.
  // You could use `<></>` to do it, but `<section class="book-item" />` would look better in the DOM.
  // After reading `BookList` code, I have a stronger opinion that I'm right
  return (
    <ListItem divider className={classes.root}>
      <BookItemInfo book={book} />
      <BookItemForm book={book} />
    </ListItem>
  );
};

export default BookItem;
