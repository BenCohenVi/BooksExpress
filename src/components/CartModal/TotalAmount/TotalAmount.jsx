import React, { useContext } from "react";

import { Typography } from "@material-ui/core";

import CartContext from "../../../store/cart/cart-context";

import totalAmountStyles from "./TotalAmount.styles";

const TotalAmount = () => {
  const classes = totalAmountStyles();

  const cartCtx = useContext(CartContext);

  const totalCartValue = cartCtx.items.reduce(
    // CR: dont mutate current price 
    // `=> currentPrice + (item.price * item.amount)`
    (currentPrice, item) => (currentPrice += item.price * item.amount),
    0
  );

  return (
    <div className={classes.root}>
      <Typography variant="h6">Total Amount</Typography>
      <Typography variant="h6">{`$${totalCartValue.toFixed(2)}`}</Typography>
    </div>
  );
};

export default TotalAmount;
