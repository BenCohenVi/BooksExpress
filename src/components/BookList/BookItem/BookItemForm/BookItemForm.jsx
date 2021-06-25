// CR: so many new lines?? only add a space between libraries and your files
import React, { useContext, useRef } from "react";

import { Button, Input, InputLabel, FormControl } from "@material-ui/core";

import CartContext from "../../../../store/cart/cart-context";

import bookItemFormStyles from "./BookItemForm.styles";

// CR: this isn't a form because you don't fill many fields or something
// you would better call it `BookItemAdder` or `ItemToCartSelector`. 
// Also, you could do the component uncoupled to books or book item (with composition), but for now it will be an overkill
const BookItemForm = ({ book }) => {
  const classes = bookItemFormStyles();

  const cartCtx = useContext(CartContext);
  const amountRef = useRef();

  // CR: wierd name :| I would call it `onFormSubmit` or `addItemAndClearInput` or something
  const addItemHandler = (e) => {
    e.preventDefault();
    cartCtx.addItem({ ...book, amount: +amountRef.current.value });
    amountRef.current.value = "";
  };

  return (
    <form onSubmit={addItemHandler}>
      <FormControl>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          inputRef={amountRef}
          id="amount"
          type="number"
          inputProps={{ max: 5, min: 1 }}
          className={classes.input}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submitBtn}
        >
          + Add
        </Button>
      </FormControl>
    </form>
  );
};

export default BookItemForm;
