const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const bcrypt = require("bcrypt");
const smtpTransport = require("../util/mailConfiguration");
const UserDetail = require("../../../models/Root/userDetail");

//forgot password for recruiter.
router.put("/change_password", async (req, res, next) => {
  try {
    const currentUser = await UserDetail.find({
      _id: req.body.user_id,
    });

    if (currentUser) {
      if (req.body.new_password === req.body.confirm_password) {
        bcrypt.compare(
          req.body.old_password,
          currentUser[0].password,
          async function (err, result) {
            if (err) next(err);

            if (result) {
              const encstring = bcrypt.hashSync(req.body.new_password, 8);
              await UserDetail.findOneAndUpdate(
                { _id: req.body.user_id },
                {
                  $set: {
                    password: encstring,
                  },
                }
              );
              res.json({ message: "Password_Changed" });
            } else {
              res.json({
                message: "INVALID_CREDENTIALS",
              });
            }
          }
        );
      }
      else{
        res.json({
            message: "Password not matched",
          });
      }
    }
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
