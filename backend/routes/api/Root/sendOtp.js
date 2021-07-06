const express = require("express");
const router = express.Router();
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
require("dotenv").config();
router.get("/testLogin", async (req, res, next) => {
  try {
    client.verify.services(process.env.SERVICE_ID).verifications.create({
        to:"+916377552654",
        channel:"sms"
    }).then((data)=>{
        res.send(data)
    })
  } catch (e) {
    res.status(400);
    console.log(e.message);
    next(e);
  }
});
router.get("/verifylogin", async (req, res, next) => {
    try {
      client.verify.services(process.env.SERVICE_ID).verificationChecks.create({
          to:"+916377552654",
          code:"939211"
      }).then((data)=>{
          res.send(data)
      })
    } catch (e) {
      res.status(400);
      console.log(e.message);
      next(e);
    }
  });

module.exports = router;
