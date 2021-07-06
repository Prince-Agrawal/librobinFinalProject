const express = require("express");
const router = express.Router();
const BookOrderDetail = require("../../../../models/Buyer/Books/BookOrderDetail");
const UserData = require("../../../../models/Root/userDetail");
const smtpTransport = require("../../util/mailConfiguration");
const StationaryOrderDetail = require("../../../../models/Buyer/stationaryOrderDetail");

router.put("/get_book_order_detail", async (req, res, next) => {
  try {
      const order_detail = await BookOrderDetail.find({"_id": req.body.order_id});
    //   console.log(order_detail);
        res.json({ data: order_detail[0] });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
