const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StationaryDetailSchema = new Schema({
    product_company: {
        type: Schema.Types.String
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
    }
});

StationaryDetail = mongoose.model("stationary_detail", StationaryDetailSchema);

module.exports = StationaryDetail;
