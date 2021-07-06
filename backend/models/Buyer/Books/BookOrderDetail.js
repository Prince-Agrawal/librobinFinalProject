const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookOrderDetailSchema = new Schema({
  user_id: {
    type: Schema.Types.String,
  },
  stamp: {
    date: { type: Schema.Types.String },
    time: { type: Schema.Types.String },
  },
  user_name: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
  },
  phone_no: {
    type: Schema.Types.Number,
  },
  type_of_item: {
    type: Schema.Types.String,
  },
  item_name: {
    type: Schema.Types.String,
  },
  state: {
    type: Schema.Types.String,
  },
  city: {
    type: Schema.Types.String,
  },
  location: {
    type: Schema.Types.String,
  },
  address: {
    type: Schema.Types.String,
  },
  old_new: {
    type: Schema.Types.String,
  },
  discription: {
    type: Schema.Types.String,
  },
});

BookOrderDetail = mongoose.model("book_order_detail", BookOrderDetailSchema);

module.exports = BookOrderDetail;
