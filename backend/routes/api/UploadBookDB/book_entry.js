const express = require('express');
const router = express.Router();
const csv = require("csvtojson");
const _ = require("lodash");
const mongoose = require('mongoose');
const BookDetail = require('../../../models/BookStore/bookDetails');

const csvFilePath = "first_year_books - Sheet1 (1).csv";

mongoose.connect(
  "mongodb+srv://prince:prince1009@lineupx.8bdr5.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongoose connected...");
  }
);

// router.get('/insertBook' , async (req , res , next)=>{
  csv()
  .fromFile(csvFilePath)
  .then(async (jsonArray) => {
    try {
      await BookDetail.insertMany(jsonArray);
      console.log("done");
    } catch (e) {
      console.log(e);
    }
  });
// })



  // module.exports = router;
