const express = require("express");
const router = express.Router();
const SoldBookDetail = require("../../../models/Seller/sell");

router.put("/delete", async (req, res, next) => {
  try {
    // console.log(req.body);
    const updated_data = await SoldBookDetail.deleteOne({ _id: req.body._id });
    // { new: true }
    res.json({ message: "Success" });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
