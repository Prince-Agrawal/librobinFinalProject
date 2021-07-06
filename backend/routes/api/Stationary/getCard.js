const express = require("express");
const router = express.Router();
const StationaryDetail = require("../../../models/Buyer/stationary");
const StationaryCardDetail = require("../../../models/Buyer/stationaryCard");


router.get("/card_info", async (req, res, next) => {
  try {
    // console.log(req.query.user_id);
    
    const detail = await StationaryCardDetail.find({"user_id": req.query.user_id , isOrdered: false});
    // console.log("ffffffffffffff" , detail)
    res.json({data: detail});
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
