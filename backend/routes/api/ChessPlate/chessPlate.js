const express = require("express");
const router = express.Router();
const smtpTransport = require("../util/mailConfiguration");

router.post("/book_chessPlate", async (req, res, next) => {
  try {
    // console.log("bfhgfhg")
    const mailDetails = {
      from: "librobinhelp@gmail.com",
      to: "utkarshagrawal2022@gmail.com",
      subject: `Order for Chessplate ${req.body.your_name}`,
      text: ` Name: ${req.body.your_name} \n Phone_No: ${req.body.contact_no}`,
    };

    await smtpTransport.sendMail(mailDetails);

    
    console.log("email send success");
    res.json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
