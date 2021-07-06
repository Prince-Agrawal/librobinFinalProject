const express = require("express");
const router = express.Router();
const path = require("path");
const mult = require("multer");
const fs = require("fs");

// const getBookLink = require("../../../get_book_link");
const uploadBookDrive = require("../../../upload_book");
const SoldBookDetail = require("../../../models/Seller/sell");
const parseMultipartData = require("../util/helper");

let storage = mult.diskStorage({
  destination: function (req, file, cb) {
    cb(null, getAppPath());
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let load = mult({
  storage: storage,
});

router.post("/sell", async (req, res, next) => {
  try {
    const { fields, files } = await parseMultipartData(req);

    // console.log(files);
    // const file = req.file;
    console.log("gggggggg");
    let image_name;
    if (Object.keys(files).length === 0) {
      console.log("ffffffffff");
      // const error = new Error("Please upload file");
      // return next(error);
      image_name = "";
    } else {
      console.log("sdfadsadasdasdsad");

      // image_name_value=req.file.filename
      const file_id = await uploadBookDrive(files);
      // image_name = await getBookLink(file_id);
      image_name = file_id;
      console.log("ffffffffffff", image_name);
    }
    // // console.log(req.file)
    const sold_book_detail = await new SoldBookDetail({
      user_id: fields.user_id,
      book_name: fields.book_name,
      author_name: fields.author_name,
      subjects: fields.subjects,
      image_name: image_name,
      class: fields.class,
      institution_name: fields.institution_name,
      medium: fields.medium,
      type_of_board: fields.type_of_board,
      stream: fields.stream,
      category_of_book: fields.category_of_book,
      discription: fields.discription,
      condition_of_book: fields.condition_of_book,
      price_of_book: fields.price_of_book,
    }).save();
    // // console.log(sold_book_detail.image_name)
    // console.log(files.myFile.name);
    // console.log(files.myFile.type);
    // console.log(files.myFile.path);
    res.json(sold_book_detail);
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

router.put("/update", async (req, res, next) => {
  try {
    const { fields, files } = await parseMultipartData(req);
    const bookData = await SoldBookDetail.find({ _id: fields.book_id });
    const data = JSON.parse(JSON.stringify(fields));
    let image_name = "";
    if (Object.keys(files).length === 0) {
      image_name = bookData[0].image_name;
      delete data.myFile;
    } else {
      const file_id = await uploadBookDrive(files);
      image_name = file_id;
    }
    delete data.book_id;
    const updated_data = await SoldBookDetail.findOneAndUpdate(
      { _id: fields.book_id },
      {
        $set: {
          ...data,
          image_name: image_name,
        },
      }
      // { new: true }
    );
    res.json({ message: "Success" });
  } catch (e) {
    console.log(e);
    res.status(400);
    next(e);
  }
});

module.exports = router;
