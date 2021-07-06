const express = require("express");
const router = express.Router();
const smtpTransport = require("../util/mailConfiguration");

router.post("/", async (req, res, next) => {
  try {
    console.log("bfhgfhg")
    const mailDetails = {
      from: "librobinhelp@gmail.com",
      to: "utkarshagrawal2022@gmail.com",
      subject: `Feedback from ${req.body.your_name}`,
      text: ` Email: ${req.body.email} \n Phone_No: ${req.body.phone_no} \n Message: ${req.body.message}`,
    };

    await smtpTransport.sendMail(mailDetails);

    const mailDetails2 = {
      from: "librobinhelp@gmail.com",
      to: req.body.email,
      subject: `Regarding Your Suggestion`,
      text: `Hey ${req.body.your_name}\n Thanks for giving us your valuable suggestion . We try to resolve it as soon as posible .`,
    };

    await smtpTransport.sendMail(mailDetails2);
    console.log("email send success");
    res.json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
