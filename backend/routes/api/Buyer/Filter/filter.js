const express = require("express");
const router = express.Router();
const SoldBookDetail = require("../../../../models/Seller/sell");

router.put("/filter", async (req, res, next) => {
  try {
    // console.log(req.body.low_price ,"v" ,  req.body.high_price)
    const temp = [];
    // const soldOutArray = [];
    // if (req.body.sold_out) {
    //   // console.log('sold out')
    //   soldOutArray.push({ sold_out: "yes" });
    // }

    // if (req.body.not_sold_out) {
    //   // console.log('not  out')
    //   soldOutArray.push({ sold_out: "no" });
    // }

    const mediumArray = [];
    // console.log("........" , req.body.hindi , req.body.english)
    if (req.body.hindi) {
      // console.log('sold out')
      mediumArray.push({ medium: "Hindi" });
    }

    if (req.body.english) {
      // console.log('not  out')
      mediumArray.push({ medium: "English" });
    }

    const classArray = [];
    const class1_3Obj = {};
    if (req.body.class1_3 == true) {
      class1_3Obj["$or"] = [{ class: "1" }, { class: "2" }, { class: "3" }];
      classArray.push(class1_3Obj);
    }

    const class4_8Obj = {};
    if (req.body.class4_8 == true) {
      class4_8Obj["$or"] = [
        { class: "4" },
        { class: "5" },
        { class: "6" },
        { class: "7" },
        { class: "8" },
      ];
      classArray.push(class4_8Obj);
    }

    const class9_10Obj = {};
    if (req.body.class9_10 == true) {
      class9_10Obj["$and"] = [{ class: "9" }, { class: "10" }];
      classArray.push(class9_10Obj);
    }

    const class11_12Obj = {};
    if (req.body.class11_12 == true) {
      class11_12Obj["$and"] = [{ class: "11" }, { class: "12" }];
      classArray.push(class11_12Obj);
    }

    const classHigherObj = {};
    if (req.body.class_higher == true) {
      classHigherObj["$and"] = [
        { class: {$ne: "1"} },
        { class: {$ne: "2"} },
        { class: {$ne: "3"} },
        { class: {$ne: "4"} },
        { class: {$ne: "5"} },
        { class: {$ne: "6"} },
        { class: {$ne: "7"} },
        { class: {$ne: "8"} },
        { class: {$ne: "9"} },
        { class: {$ne: "10"} },
        { class: {$ne: "11"} },
        { class: {$ne: "12"} },
      ];
      classArray.push(classHigherObj);
    }

    const condition_of_book_array = [];

    if (req.body.poor == true) {
      condition_of_book_array.push({ condition_of_book: "Poor" });
    }

    if (req.body.moderate == true) {
      condition_of_book_array.push({ condition_of_book: "Moderate" });
    }

    if (req.body.good == true) {
      condition_of_book_array.push({ condition_of_book: "Good" });
    }
    const category_of_book_array = [];
    if (req.body.school_book == true) {
      category_of_book_array.push({ category_of_book: "school_book" });
    }

    if (req.body.college_book == true) {
      category_of_book_array.push({ category_of_book: "college_book" });
    }

    if (req.body.coaching_module == true) {
      category_of_book_array.push({ category_of_book: "coaching_module" });
    }
    if (req.body.other_prep_books == true) {
      category_of_book_array.push({ category_of_book: "other_prep_books" });
    }

    if (req.body.other_book == true) {
      category_of_book_array.push({ category_of_book: "other_book" });
    }

    // if (soldOutArray.length !== 0) {
    //   temp["$or"] = soldOutArray;
    // }

    const mediumObj = {}
    if (mediumArray.length !== 0) {
      mediumObj["$or"] = mediumArray;
      temp.push(mediumObj);
    }

    const classObj={}
    if (classArray.length !== 0) {
      classObj["$or"] = classArray;
      temp.push(classObj);
    }

    const condition_of_book_obj={};
    if (condition_of_book_array.length !== 0) {
      condition_of_book_obj["$or"] = condition_of_book_array;
      temp.push(condition_of_book_obj);
    }

    const category_of_book_obj ={}
    if (category_of_book_array.length !== 0) {
      category_of_book_obj["$or"] = category_of_book_array;
      temp.push(category_of_book_obj);
    }

    const priceObj={}
    priceObj["$and"] = [ { price_of_book: {$gte: req.body.low_price} }, { price_of_book: {$lte: req.body.high_price} }] 
    temp.push(priceObj);

    const not_sold_obj = {sold_out: "no"};  //  for showing always avaliable in stock books
    temp.push(not_sold_obj);
    // console.log("condition_of_book_array " , temp)
    const docs = await SoldBookDetail.find({"$and" : temp});
    res.json(docs);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
