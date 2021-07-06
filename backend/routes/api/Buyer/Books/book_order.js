const express = require("express");
const router = express.Router();
const BookOrderDetail = require("../../../../models/Buyer/Books/BookOrderDetail");
const UserData = require("../../../../models/Root/userDetail");
const smtpTransport = require("../../util/mailConfiguration");
const StationaryOrderDetail = require("../../../../models/Buyer/stationaryOrderDetail");

router.post("/book_order", async (req, res, next) => {
  try {
    const user_detail = await UserData.find({ _id: req.body.user_id });
    // console.log(req.body);
    const book_order_data = await new BookOrderDetail({
      user_name: req.body.user_name,
      email: user_detail[0].email,
      phone_no: req.body.phone_no,
      type_of_item: req.body.type_of_book,
      item_name: req.body.book_name,
      state: req.body.state,
      city: req.body.city,
      location: req.body.area,
      address: req.body.address,
      old_new: req.body.new_old,
      discription: req.body.discription,
    }).save();

    const d = new Date(new Date());
    const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    const stat_detail = await new StationaryOrderDetail({
      user_id: req.body.user_id,
      stamp: {
        date: date,
        time: time,
      },
      order_id: book_order_data._id,
      isStationary: false
    }).save();

    const mailOptions1 = {
      to: user_detail[0].email,
      subject: "Regarding to Your Order",
      html: `Hey , ${req.body.user_name} <br/>Thanks for being a member of our plateform . We are working on your request and we will contact you asap .`,
    };
    const mailOption2 = {
      to: "utkarshagrawal2022@gmail.com",
      subject: "Regarding to Buy a Book",
      html: `Hey , user_name: ${req.body.user_name} <br/> email:  ${user_detail[0].email} <br/> Phone Number:  ${req.body.phone_no}<br/> State:  ${req.body.state} <br/> city:  ${req.body.city}<br/> Area:  ${req.body.area} <br/> New/Old:  ${req.body.new_old} <br/> Type Of Book:  ${req.body.type_of_book}  <br/> Book Name:  ${req.body.book_name} <br/> Discription:  ${req.body.discription}`,
    };
    smtpTransport.sendMail(mailOptions1);
    smtpTransport.sendMail(mailOption2);
    res.json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
