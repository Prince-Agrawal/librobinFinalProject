const express = require("express");
const router = express.Router();
const StationaryDetail = require("../../../models/Buyer/stationary");
const StationaryCardDetail = require("../../../models/Buyer/stationaryCard");
const StationaryOrderDetail = require("../../../models/Buyer/stationaryOrderDetail");
const UserData = require("../../../models/Root/userDetail")
const smtpTransport = require("../util/mailConfiguration");

router.get("/get_order_details", async (req, res, next) => {
  try {
    //   console.log(req.query.user_id)
    const details = await StationaryOrderDetail.find({
      user_id: req.query.user_id,
    });
    // console.log(details)
    res.json({ data: details });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

router.put("/get_single_order", async (req, res, next) => {
  try {
    let details = [];
    for (const temp of req.body.order_id) {
      const tempDetail = await StationaryCardDetail.find({ _id: temp });
      details.push(tempDetail);
    }

    res.json({ data: details });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

router.post("/order_detail", async (req, res, next) => {
  try {
    let order_id = [],
      user_id = req.body.detail[0].user_id;
    for (const temp of req.body.detail) {
      order_id.push(temp._id);
    }

    const d = new Date(new Date());
    const date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    const time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    // console.log(JSON.stringify(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()))
    const detail = await new StationaryOrderDetail({
      order_id: order_id,
      stamp: {
        date: date,
        time: time,
      },
      user_id: user_id,
    }).save();

    let emailMess = [];
    for (const temp of order_id) {
      const updated_data = await StationaryCardDetail.findOneAndUpdate(
        { _id: temp },
        {
          $set: {
            isOrdered: true,
          },
        }
      );
      const tempKey = Object.keys(updated_data.product_detail)[0];
      // console.log("gggggggg" , updated_data.product_detail[tempKey]);
      const str =
        "id=" +
        updated_data._id +
        "||" +
        "Product Company:" +
        updated_data.product_company +
        "||" +
        tempKey +
        ":" +
        updated_data.product_detail[tempKey] +
        "||" +
        "Quantity:" +
        updated_data.quantity +
        "||" +
        "Price:" +
        updated_data.price +
        "||" +
        "Discount:" +
        updated_data.discount +
        "||" +
        "Price Paid:" +
        (updated_data.price *
          updated_data.quantity *
          (100 - updated_data.discount)) /
          100+"||||||"

          // console.log(str)
          emailMess.push(str)
    }
    console.log(emailMess)

    const mailOptions1 = {
      to: "utkarshagrawal2022@gmail.com",
      subject: "Regarding to Buy Stationary",
      html:
        `Hey , ${emailMess}`,
    };
    smtpTransport.sendMail(mailOptions1);

    //send mail to buyer
    const user_detail = await UserData.find({"_id": user_id});
    const mailOptions2 = {
      to: user_detail[0].email,
      subject: "Regarding to Your Order",
      html:
        `Hey , Your order is confirmed we are working on your order and try to complete it as soon as possible`,
    };
    smtpTransport.sendMail(mailOptions2);
    res.json({ message: "success" });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
