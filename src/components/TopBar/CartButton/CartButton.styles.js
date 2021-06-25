import { makeStyles } from "@material-ui/styles";

const cartButtonStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "25px",
    // CR: dimensions with rem should be avoided, percentage and pixels are best for such things
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
    // CR: fills like padding will be semantically better
    margin: "1px",
    backgroundColor: "#8a2b06",
  },
}));

export default cartButtonStyles;
