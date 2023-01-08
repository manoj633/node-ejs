const express = require("express");
const router = express.Router();

const shopRoutes = require("./admin");

router.get("/", (req, res, next) => {
  res.render("shop", { pageTitle: "Shop", prods: shopRoutes.products });
});
exports.routes = router;
