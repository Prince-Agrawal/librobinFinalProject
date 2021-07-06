const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const smtpTransport = require("../util/mailConfiguration");
const UserDetail = require("../../../models/Root/userDetail");


// var rand, mailOptions, host, link, email;

// router.get("/verify", async function (req, res) {
//   // console.log(email);
//   console.log(req.protocol + ":/" + req.get("host"));
//   try {
//     if (req.protocol + "://" + req.get("host") == "http://" + host) {
//       console.log("Domain is matched. Information is from Authentic email");
//       console.log("email is verified");

//       const user = await UserDetail.findOne({
//         email: email,
//       });

      
//       if (user) {
//         // already have this user
//         const job = await UserDetail.findOneAndUpdate(
//           { email: email },
//           { $set: { isVerified: true } },
//         );
//         res.send(email + " has been successfully verified");
//         // res.json({ status: "success", error: null, data: job });
//       }  else {
//         res.json({
//           status: "success",
//           error: null,
//           data: "current user not found",
//         });
//       }
//     } else {
//       res.end("<h1>Request is from unknown source");
//     }
//   } catch (e) {
//     console.log(e.message);
//   }
// });



//signUp for recruiter.
router.post("/signup", async (req, res, next) => {
  try {
    // console.log(req.body)
    if (req.body.password === req.body.confirm_password) {
      const currentUser = await UserDetail.findOne({
        email: req.body.email,
      });

      if (currentUser) {
        // already have this user
        res.json({ message: "User already exist." });
      } else {
        // save user to db
        const encstring = bcrypt.hashSync(req.body.password, 8);
        const user = await new UserDetail({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: encstring,
        }).save();
        // send mail
       
        mailOptions = {
          to: req.body.email,
          subject: "Regarding to sign up",
          html:
            `Hey , ${user.first_name} ${user.last_name} thanks for being a member of our plateform .`,
        };
        smtpTransport.sendMail(mailOptions);
        res.json({ message: "success", user_id: user._id  , name: user.first_name});
      }
    } else {
      res.json({ message: "Password not Match" });
    }
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
