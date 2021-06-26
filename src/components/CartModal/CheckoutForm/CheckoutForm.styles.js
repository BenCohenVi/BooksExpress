import { makeStyles } from "@material-ui/styles";

const checkoutFormStyles = makeStyles((theme) => ({
  root: {
    margin: "1%",
  },
  firstName: {
    width: "40%",
    marginRight: "10%",
  },
  lastName: {
    width: "40%",
    marginLeft: "10%",
  },
  address: {
    width: "100%",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  orderBtn: {
    backgroundColor: "#8a2b06",
    color: "white",
    margin: "1rem",
    fontSize: "1.1rem",
    borderRadius: "6px",
  },
  closeBtn: {
    color: "#8a2b06",
    margin: "1rem",
    fontSize: "1.1rem",
    borderRadius: "6px",
  },
}));

export default checkoutFormStyles;
