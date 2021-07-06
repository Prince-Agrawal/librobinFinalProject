const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const smtpTransport = require("../util/mailConfiguration");
const UserDetail = require("../../../models/Root/userDetail");
router.get("/signin", async (req, res, next) => {
  try {
    const currentUser = await UserDetail.findOne({
      email: req.query.email,
    });

    if (currentUser) {
      const bcrypt = require("bcrypt");

      bcrypt.compare(req.query.password, currentUser.password, function (
        err,
        result
      ) {
        if (err) next(err);

        if (result) {
          res.json({ message: "Login Success", user_id: currentUser._id , name: currentUser.first_name });
        } else {
          res.json({ message: "INVALID_CREDENTIALS" });
        }
      });
    } else {
      res.json({ message: "user does not exist" });
    }
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
