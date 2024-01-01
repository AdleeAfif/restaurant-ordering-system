const { Router } = require("express");
const { createOrder } = require("../controllers/order.controller");

const router = Router();

router.route("/").get((req, res) => {
  res.render("orderEntry");
});

router.route("/order/add").post(createOrder);

module.exports = { router };
