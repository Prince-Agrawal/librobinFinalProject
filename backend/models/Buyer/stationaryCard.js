const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StationaryCardDetailSchema = new Schema({
    user_id: {
        type: Schema.Types.String
    },
    product_company: {
        type: Schema.Types.String
    },
    isOrdered: {
        type: Schema.Types.Boolean,
        default:false
    },
    product_detail: {},
    image_link: {
        type: Schema.Types.String
    },
    discount: {
        type: Schema.Types.Number
    },
    price: {
        type: Schema.Types.Number
    },
    quantity: {
        type: Schema.Types.Number   
    }
});

StationaryCardDetail = mongoose.model("stationary_card_detail", StationaryCardDetailSchema);

module.exports = StationaryCardDetail;
