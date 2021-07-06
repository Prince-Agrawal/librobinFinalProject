const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SoldBookDetailSchema = new Schema({
  user_id: {
    type: Schema.Types.String,
  },
  book_name: {
    type: Schema.Types.String,
  },
  author_name: {
    type: Schema.Types.String,
  },
  subjects: {
    type: Schema.Types.String,
  },
  image_name: {
    type: Schema.Types.String,
  },
  class: {
    type: Schema.Types.String,
  },
  institution_name: {
    type: Schema.Types.String,
  },
  medium: {
    type: Schema.Types.String,
  },
  type_of_board: {
    type: Schema.Types.String,
  },
  stream: {
    type: Schema.Types.String,
  },
  category_of_book: {
    type: Schema.Types.String,
  },
  condition_of_book:{
    type: Schema.Types.String,
  },
  discription: {
    type: Schema.Types.String,
  },
  sold_out: {
    type: Schema.Types.String,
    default: "no"
  },
  price_of_book: {
    type: Schema.Types.Number,
  },
});

SoldBookDetail = mongoose.model("sold_book_detail", SoldBookDetailSchema);

module.exports = SoldBookDetail;
