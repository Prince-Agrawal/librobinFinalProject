const express = require("express");
const router = express.Router();
const SoldBookDetail = require("../../../models/Seller/sell");

router.get("/get_detail", async (req, res, next) => {
  try {
    // console.log(req.body);
    // console.log(req.query.book_id);
    const detail = await SoldBookDetail.find({_id: req.query.book_id})
    res.json(detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
