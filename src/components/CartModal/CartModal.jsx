import React, { useState } from "react";
import { Modal, Card, Button } from "@material-ui/core";

import CartItems from "./CartItems";
import TotalAmount from "./TotalAmount";
import CheckoutForm from "./CheckoutForm";

import cartModalStyles from "./CartModal.styles";

const CartModal = ({ shouldOpen, handleClose }) => {
  const classes = cartModalStyles();

  const [isCheckout, setIsCheckout] = useState(false);

  const showCheckoutHandler = () => setIsCheckout(true);

  return (
    <Modal open={shouldOpen} onClose={handleClose} className={classes.root}>
      <Card className={classes.card} raised>
        <CartItems />
        <TotalAmount />
        {isCheckout && <CheckoutForm onClose={handleClose} />}
        {!isCheckout && (
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
              onClick={showCheckoutHandler}
            >
              Order
            </Button>
          </section>
        )}
      </Card>
    </Modal>
  );
};

export default CartModal;
