import React, { useContext } from "react";
import { ListItem, Typography } from "@material-ui/core";

import ItemActions from "./ItemActions";

import CartContext from "../../../../store/cart/cart-context";

import cartItemStyles from "./CartItem.styles";

const CartItem = ({ item }) => {
  const classes = cartItemStyles();

  const cartCtx = useContext(CartContext);

  const increaseAmountHandler = () => {
    const { id, name, price } = item;
    cartCtx.addItem({
      id,
      name,
      price,
      amount: 1,
    });
  };

  const decreaseAmountHandler = () => {
    cartCtx.removeItem(item.id);
  };

  return (
    <ListItem className={classes.cartItem} divider>
      <div>
        <Typography variant="h6" className={classes.name}>
          {item.name}
        </Typography>
        <section className={classes.amountSection}>
          <Typography
            className={classes.price}
          >{`$${item.price}`}</Typography>
          <Typography
            className={classes.amount}
          >{`x ${item.amount}`}</Typography>
        </section>
      </div>
      <ItemActions
        increase={increaseAmountHandler}
        decrease={decreaseAmountHandler}
      />
    </ListItem>
  );
};

export default CartItem;
