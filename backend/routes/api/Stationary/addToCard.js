const express = require("express");
const router = express.Router();
const StationaryDetail = require("../../../models/Buyer/stationary");
const StationaryCardDetail = require("../../../models/Buyer/stationaryCard");


router.post("/add_to_card", async (req, res, next) => {
  try {
    // console.log(req.body);
    for(const temp of req.body.data){
        if(temp.qua>0){
        const detail = await StationaryDetail.find({"_id": temp.stat_id});
        const card_detail = await new StationaryCardDetail({
            user_id: req.body.user_id,
            product_company: detail[0].product_company,
            product_detail: detail[0].product_detail,
            image_link: detail[0].image_link,
            discount: detail[0].discount,
            price: detail[0].price,
            quantity: temp.qua
        }).save()}
    }
    // const detail = await StationaryDetail.find();
    res.json({message: "Success"});
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
