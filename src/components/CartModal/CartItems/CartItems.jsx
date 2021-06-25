import React, { useContext } from "react";
import { List } from "@material-ui/core";

import CartContext from "../../../store/cart/cart-context";
import CartItem from "./CartItem/CartItem";

import cartItemsStyles from "./CartItems.styles";

const CartItems = () => {
  const classes = cartItemsStyles();

  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return <List className={classes.root}>{cartItems}</List>;
};

export default CartItems;
