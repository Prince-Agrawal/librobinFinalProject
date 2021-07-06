const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require("dotenv").config();




//For importing api
const BookDetailRoute = require("./routes/api/BookStore/live_book");
const BookSearchRoute = require("./routes/api/BookStore/search_book");
const ContactUsRoute = require("./routes/api/Contact/contact");
const SellRoute = require("./routes/api/seller/sell");
const SellerDetailRoute = require("./routes/api/seller/get_detail");
const UpdateSoldStatusRoute = require("./routes/api/seller/update_sold_status");
const DeleteSoldBookRoute = require("./routes/api/seller/deleteBook");
const getSoldBookDetailRoute = require("./routes/api/seller/get_book_detail_using_id");
const getBuyBookDetailRoute = require("./routes/api/Buyer/buy");
const filterBuyerBookRoute = require("./routes/api/Buyer/Filter/filter");
const signUpRoute = require("./routes/api/Root/signup");
const signInRoute = require("./routes/api/Root/signin");
const ProfileRoute = require("./routes/api/Profile/profile");
const ForgotPasswordRoute = require("./routes/api/Root/forgot_password");
const ChangePasswordRoute = require("./routes/api/Root/change_password");
const UserDetailRoute = require('./routes/api/Root/get_based_on_userId');
const getStaionaryDetailRoute = require("./routes/api/Stationary/stationary");
const addTOcardStationaryRoute = require("./routes/api/Stationary/addToCard")
const cardDetailStationaryRoute = require("./routes/api/Stationary/getCard")
const orderDetailStationaryRoute = require("./routes/api/Stationary/orderDetail")
const BookOrderRoute = require("./routes/api/Buyer/Books/book_order");
const GetBookOrderDetailRoute = require("./routes/api/Buyer/Books/get_order_detail");
const removeFromCardStationaryRoute = require("./routes/api/Stationary/removeFromCard")
const pushStationaryDetailRoute = require("./routes/api/Stationary/push_stationary_item");
// const loginOtpDetailRoute = require("./routes/api/Root/sendOtp");
const ChessPlateRoute = require("./routes/api/ChessPlate/chessPlate");



// const BookEntryToDbRoute = require('./routes/api/UploadBookDB/book_entry');

const app = express();

app.use(cors());


app.use(express.json());
app.use("/books", BookDetailRoute);
app.use("/book", BookSearchRoute);
app.use("/contactus", ContactUsRoute);
app.use("/", SellRoute);
app.use("/", SellerDetailRoute);
app.use("/", UpdateSoldStatusRoute);
app.use("/", DeleteSoldBookRoute);
app.use("/", getSoldBookDetailRoute);
app.use("/", getBuyBookDetailRoute);
app.use("/" , filterBuyerBookRoute);
app.use("/" , signUpRoute);
app.use("/" , signInRoute);
app.use("/" , ProfileRoute);
app.use("/" , ForgotPasswordRoute);
app.use("/" , ChangePasswordRoute);
app.use("/" , UserDetailRoute);
app.use("/" , getStaionaryDetailRoute);
app.use("/" , addTOcardStationaryRoute);
app.use("/" , cardDetailStationaryRoute);
app.use("/" , orderDetailStationaryRoute);
app.use("/" , pushStationaryDetailRoute);
app.use("/" , BookOrderRoute);
app.use("/" , GetBookOrderDetailRoute);
app.use("/" , removeFromCardStationaryRoute);
// app.use("/" , loginOtpDetailRoute);
app.use("/" , ChessPlateRoute);



// app.use('/book' , BookEntryToDbRoute);

// const db = "mongodb://127.0.0.1:27017/librobin" 
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongoose connected...");
  }
);
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server connected on port ${port}`);
});

const tempFunc = () => {
  return __dirname;
}

module.exports = {tempFunc};
