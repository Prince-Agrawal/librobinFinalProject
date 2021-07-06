const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StationaryOrderDetailSchema = new Schema({
  user_id: {
    type: Schema.Types.String,
  },
  stamp: {
    date: { type: Schema.Types.String },
    time: { type: Schema.Types.String },
  },
  order_id: {
    type: [Schema.Types.String],
  },
  isStationary: {
    type: Schema.Types.Boolean,
    default: true
  }
});

StationaryOrderDetail = mongoose.model(
  "stationary_order_detail",
  StationaryOrderDetailSchema
);

module.exports = StationaryOrderDetail;
