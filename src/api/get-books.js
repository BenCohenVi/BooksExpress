import axios from "axios";
import config from "../config/default.json";

const getBooks = async () => {
  const response = await axios.get(`${config.serverUrl}/books.json`);
  const responseData = response.data;

  const books = [...Object.keys(responseData).map((key) => responseData[key])];

  return books;
};

export default getBooks;
