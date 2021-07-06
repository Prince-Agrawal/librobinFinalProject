const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookDetailSchema = new Schema({
    user_id: {
        type: Schema.Types.String
    },
    book_name: {
        type: Schema.Types.String
    },
    edition: {
        type: Schema.Types.String
    },
    publication_year: {
        type: Schema.Types.String
    },
    writer_name: {
        type: Schema.Types.String
    },
    link_of_book: {
        type: Schema.Types.String
    },
    book_type: {
        type: Schema.Types.String
    },
    book_name_keyword: {
        type: Schema.Types.String
    },
    writer_name_keyword: {
        type: Schema.Types.String
    },
});

BookDetail = mongoose.model("book_detail", BookDetailSchema);

module.exports = BookDetail;
