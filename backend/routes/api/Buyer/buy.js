const express = require("express");
const router = express.Router();
const SoldBookDetail = require("../../../models/Seller/sell");

router.get("/buy", async (req, res, next) => {
  try {
    // console.log(req.body);
    const detail = await SoldBookDetail.find({sold_out: "no"});
    res.json(detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
})

module.exports = router;
