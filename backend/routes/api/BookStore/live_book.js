const express = require("express");
const router = express.Router();
const BookDetail = require("../../../models/BookStore/bookDetails");


router.get("/", async (req, res, next) => {
  try {
   
    const docs = await BookDetail.find()
    res.json({books : docs});
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});


module.exports = router;
