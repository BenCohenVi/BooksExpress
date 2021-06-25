import React, { useState, useContext } from "react";

import { Button, Badge, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CartModal from "../CartModal";
import CartContext from "../../store/cart/cart-context";

import cartButtonStyles from "./CartButton.styles";

const CartButton = () => {
  const classes = cartButtonStyles();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const booksInCart = cartCtx.items.reduce(
    (quantity, item) => quantity + item.amount,
    0
  );

  const openCartHandler = () => {
    setIsModalOpen(true);
  };

  const closeCartHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CartModal shouldOpen={isModalOpen} handleClose={closeCartHandler} />
      <Button
        onClick={openCartHandler}
        variant="contained"
        color="default"
        className={classes.root}
      >
        <Badge
          badgeContent={booksInCart}
          color="secondary"
          classes={{ badge: classes.badge }}
          showZero
        >
          <ShoppingCartIcon className={classes.icon} />
        </Badge>
        <Typography color="inherit" className={classes.text}>
          Your Cart
        </Typography>
      </Button>
    </>
  );
};

export default CartButton;
