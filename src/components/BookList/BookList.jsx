import React from "react";

import { Card, List } from "@material-ui/core";

import BookItem from "./BookItem";

import bookListStyles from "./BookList.styles";

const BookList = ({ books }) => {
  const classes = bookListStyles();

  // CR: I would inline this variable, just a preference
  const bookItems = books.map((book) => <BookItem key={book.id} book={book} />);

  return (
    <Card raised className={classes.root}>
      <List>{bookItems}</List>
    </Card>
  );
};

export default BookList;
