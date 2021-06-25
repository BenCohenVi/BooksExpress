import React from "react";
import { Modal, Card, Button } from "@material-ui/core";

import CartItems from "./CartItems";
import TotalAmount from "./TotalAmount";

import cartModalStyles from "./CartModal.styles";

// CR: this should be a cart component, and the component consumer will wrap it with <Modal /> and its logic
//
// CR: I would get `CartContext` in top component and inject its values to children instead of children accessing global state.
// I would also move section.actions to a different component to seperate logic from UI
const CartModal = ({ shouldOpen, handleClose }) => {
  const classes = cartModalStyles();

  return (
    <Modal open={shouldOpen} onClose={handleClose} className={classes.root}>
      <Card className={classes.card} raised>
        <CartItems />
        <TotalAmount />
        <section className={classes.actions}>
          <Button
            onClick={handleClose}
            variant="outlined"
            className={classes.closeBtn}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.orderBtn}
          >
            Order
          </Button>
        </section>
      </Card>
    </Modal>
  );
};

export default CartModal;
