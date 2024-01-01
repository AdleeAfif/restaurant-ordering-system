const Order = require("../models/order.model");

const createNewOrder = async (payload) => {
  console.log("In Order Service: " + payload);
  return await Order.create(payload);
};

module.exports = { createNewOrder };
