const express = require("express");
const router = express.Router();
const StationaryDetail = require("../../../models/Buyer/stationary");
const StationaryCardDetail = require("../../../models/Buyer/stationaryCard");


router.put("/remove_from_card", async (req, res, next) => {
  try {
    // console.log(req.body);
    // console.log("gggggggggggggg")
    const detail = await StationaryCardDetail.deleteOne({"_id": req.body.card_id});
    res.json({message: "Success"});
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
