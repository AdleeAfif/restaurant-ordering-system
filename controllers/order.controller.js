const asyncHandler = require("express-async-handler");
const { createNewOrder } = require("../services/order.service");

const createOrder = asyncHandler(async (req, res) => {
  const { orderType, customerName, orderList, tableNum, orderPrice } = req.body;

  if (!(orderType && orderList && orderPrice)) {
    console.log("Order price: " + orderPrice);
    console.log("No order type or order list or order price");
    return res.status(400).redirect("/");
  }

  const orderData = {
    customerName,
    orderType,
    orderList: JSON.parse(orderList),
    orderPrice,
    tableNum,
    createdAt: new Date(),
  };

  const newOrder = await createNewOrder(orderData);
  console.log(`New order has been created: ${newOrder}`);

  res.status(201).redirect("/");
});

module.exports = { createOrder };
