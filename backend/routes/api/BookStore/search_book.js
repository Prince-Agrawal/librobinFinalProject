const express = require('express');
const router = express.Router();
const BookDetail = require('../../../models/BookStore/bookDetails');

router.post('/' , async (req , res , next)=>{
    try {
      const docs = await BookDetail.find({book_name: {$regex: req.body.search_field, $options: "$i"}});
        res.json(docs);
      } catch (e) {
        console.log(e);
        res.status(400);
        next(e);
      }
})

module.exports = router;