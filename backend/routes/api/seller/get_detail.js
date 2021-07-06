const express = require("express");
const router = express.Router();
const SoldBookDetail = require("../../../models/Seller/sell");

router.get("/not_sold", async (req, res, next) => {
  try {
    // console.log(req.body);
    const detail = await SoldBookDetail.find({user_id: req.query.user_id , sold_out: "no"});
    res.json(detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

router.get("/sold", async (req, res, next) => {
  try {
    // console.log(req.body);
    const detail = await SoldBookDetail.find({user_id: req.query.user_id , sold_out: "yes"});
    res.json(detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
