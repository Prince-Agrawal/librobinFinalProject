const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserDetailSchems = new Schema({
    first_name: {
        type: Schema.Types.String
    },
    last_name: {
        type: Schema.Types.String
    },
    isVarified: {
        type: Schema.Types.Boolean,
        default: false
    },
    order_id: {
        type: [Schema.Types.String],
        default: false
    },
    email: {
        type: Schema.Types.String
    },
    contact_no: {
        type: Schema.Types.String,
        default: ""
    },
    whatsapp_no: {
        type: Schema.Types.String,
        default: ""
    },
    location: {
        type: Schema.Types.String,
        default: ""
    },
    password: {
        type: Schema.Types.String,
        default: ""
    },
});

UserDetail = mongoose.model("user_detail", UserDetailSchems);

module.exports = UserDetail;
