const { Schema } = require("mongoose");

const { dbConnection } = require("../config/db-connection");

const orderList = new Schema({
  itemName: { type: String, required: true },
  quantity: { type: Number, required: true },
  itemPrice: { type: Number, required: true },
  customerRequest: { type: String, required: false },
});

const orderSchema = new Schema({
  customerName: {
    type: String,
    required: false,
  },
  orderType: { type: String, required: [true, "Please enter the order type"] },
  orderList: { type: [orderList], required: true },
  orderPrice: { type: Number, required: true },
  tableNum: { type: String, required: false },
  createdAt: { type: Date, required: true },
  status: { type: String, required: true, default: "Preparing" },
});

const Order = dbConnection.model("Order", orderSchema);
module.exports = Order;
