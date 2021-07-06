const express = require("express");
const router = express.Router();
const UserDetail = require("../../../models/Root/userDetail");

router.put("/update_profile", async (req, res, next) => {
 
  try {

    const updateData = JSON.parse(JSON.stringify(req.body));
    delete updateData._id;
   const data =  await UserDetail.findByIdAndUpdate(
      { _id: req.body.user_id },
      {
        $set: { ...updateData },
      }
    );
    // console.log(data)
    res.json({message : "success"})
  } catch (e) {
    console.log(e.message);
    res.status(400);
    next(e);
  }
});

module.exports = router;
