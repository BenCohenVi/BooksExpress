import axios from "axios";

import config from "../config/default.json";

const sendOrder = async (orderInfo, items) => {
  const response = await axios.post(`${config.serverUrl}/orders.json`, {
    firstName: orderInfo.firstName,
    lastName: orderInfo.lastName,
    address: orderInfo.address,
    items,
  });

  return response.status;
};

export default sendOrder;
