import React, { useContext } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

import sendOrder from "../../../api/send-order";
import CartContext from "../../../store/cart/cart-context";

import checkoutFormStyles from "./CheckoutForm.styles";

const CheckoutForm = ({ onClose }) => {
  const classes = checkoutFormStyles();

  const cartCtx = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await sendOrder(data, cartCtx.items);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
      <FormControl className={classes.firstName}>
        <InputLabel htmlFor="first-name">First Name</InputLabel>
        <Input
          id="first-name"
          inputProps={{ ...register("firstName", { required: true }) }}
        />
      </FormControl>

      <FormControl className={classes.lastName}>
        <InputLabel htmlFor="last-name">Last Name</InputLabel>
        <Input
          id="last-name"
          inputProps={{ ...register("lastName", { required: true }) }}
        />
      </FormControl>

      <FormControl className={classes.address}>
        <InputLabel htmlFor="address">Address</InputLabel>
        <Input
          id="address"
          inputProps={{ ...register("address", { required: true }) }}
        />
      </FormControl>
      <section className={classes.actions}>
        <Button
          onClick={onClose}
          variant="outlined"
          className={classes.closeBtn}
        >
          Close
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.orderBtn}
        >
          Order
        </Button>
      </section>
    </form>
  );
};

export default CheckoutForm;
