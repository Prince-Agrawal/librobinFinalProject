const express = require("express");
const router = express.Router();
const StationaryDetail = require("../../../models/Buyer/stationary");

router.post("/push_stationary", async (req, res, next) => {
  try {
    // console.log(req.body);
    const _detail = await new StationaryDetail({
        product_company: req.body.product_company,
        product_detail: req.body.product_detail,
        price: req.body.price,
        image_link: req.body.image_link,
        discount:req.body.discount
      }).save();
    res.json(_detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
