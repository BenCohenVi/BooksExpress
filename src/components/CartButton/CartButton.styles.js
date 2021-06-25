import { makeStyles } from "@material-ui/styles";

const cartButtonStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "25px",
    padding: "0.5rem 2rem",
    display: "flex",
    alignContent: "center",
  },
  text: {
    fontSize: "1rem",
    margin: "0 16px",
  },
  icon: {
    fontSize: "1.5rem",
    marginRight: "4px",
  },
  badge: {
    padding: "1px",
    backgroundColor: "#8a2b06",
  },
}));

export default cartButtonStyles;
