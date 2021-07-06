const express = require("express");
const router = express.Router();
const StationaryDetail = require("../../../models/Buyer/stationary");

router.get("/get_stationary", async (req, res, next) => {
  try {
    // console.log(req.body);
    const detail = await StationaryDetail.find();
    res.json(detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
