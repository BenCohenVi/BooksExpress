import { makeStyles } from "@material-ui/styles";

const bookItemInfoStyles = makeStyles((theme) => ({
  bookInformation: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    // CR: all has same margin, use inheritance (don't know it is done with `makeStyles`)
    margin: "4px 0",
  },
  author: {
    fontStyle: "italic",
    margin: "4px 0",
  },
  price: {
    fontWeight: "bold",
    margin: "4px 0",
    // CR: put all colors in the material-ui theme
    color: "#ad5502",
  },
}));

export default bookItemInfoStyles;
