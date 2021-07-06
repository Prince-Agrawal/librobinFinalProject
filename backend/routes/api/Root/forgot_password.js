const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const bcrypt = require("bcrypt");
const smtpTransport = require("../util/mailConfiguration");
const UserDetail = require("../../../models/Root/userDetail");

//forgot password for recruiter.
router.put("/forgot", async (req, res, next) => {
  try {
    const currentUser = await UserDetail.findOne({
      email: req.body.email,
    });

    if (currentUser) {
      const newPassword = crypto.randomBytes(4).toString("hex");
      const encstring = bcrypt.hashSync(newPassword, 8);
      const data = await UserDetail.findOneAndUpdate(
        { email: req.body.email },
        {
          $set: {
            password: encstring,
          },
        },
        { new: true }
      );
      mailOptions = {
        to: req.body.email,
        subject: "Forgot Mail",
        html: "Hello,<br> Your new Password :<br>" + newPassword,
      };
      // console.log(mailOptions);
      smtpTransport.sendMail(mailOptions);
      res.json({ message: "Password changed" });
    } else {
      res.status(400).json({ message: "User does not exist" });
    }
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
