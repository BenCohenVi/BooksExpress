// CR: this component doesn't feel like it belongs to TopBar, because it actually controls the cart context.
// either move it to components, or another state if `cartModal` should be open or not then put `CartModal` in `App`
import React, { useState, useContext } from "react";

import { Button, Badge, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CartModal from "../../CartModal";
import CartContext from "../../../store/cart/cart-context";

import cartButtonStyles from "./CartButton.styles";

// CR: Component has both logic and styling. This is considered as bad practice
const CartButton = () => {
  const classes = cartButtonStyles();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  // CR: shouldn't be a func :( you just call it later.
  // wrap it with `useMemo` for saving extra computations
  const getBookInCart = () =>
    cartCtx.items.reduce((quantity, item) => (quantity += item.amount), 0);

  // CR: useCallback
  const openCartHandler = () => {
    setIsModalOpen(true);
  };

  // CR: useCallback
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
          badgeContent={getBookInCart()}
          color="secondary"
          classes={{ badge: classes.badge }}
          showZero
        >
          <ShoppingCartIcon className={classes.icon} />
        </Badge>
        <Typography variant="p" color="inherit" className={classes.text}>
          Your Cart
        </Typography>
      </Button>
    </>
  );
};

export default CartButton;
