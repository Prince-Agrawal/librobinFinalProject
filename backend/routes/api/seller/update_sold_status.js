const express = require("express");
const router = express.Router();
const SoldBookDetail = require("../../../models/Seller/sell");

router.put("/update_sold_status", async (req, res, next) => {
  try {
    // console.log(req.body);
    const updated_data = await SoldBookDetail.findOneAndUpdate(
        { _id: req.body.book_id },
        {
            $set: {
                sold_out: req.body.sold_status,
            },
        },
        // { new: true }
    );
    res.json({message : "Success"});
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
