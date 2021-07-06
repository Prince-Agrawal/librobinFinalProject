const express = require("express");
const router = express.Router();
const UserDetail = require("../../../models/Root/userDetail");
router.get("/user_data", async (req, res, next) => {
  try {
    // console.log(req.query.user_id);
    const user_data = await UserDetail.find({_id : req.query.user_id})
    // console.log(user_data[0])
    res.json({message: user_data[0]});
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
