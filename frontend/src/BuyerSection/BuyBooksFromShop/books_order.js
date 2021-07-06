import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import EllipsisText from "react-ellipsis-text";
import { Helmet } from "react-helmet";
import Loading from "../../LoadingComponent";
import baseURL from "../../shared/baseURL";
import { Book } from "@material-ui/icons";
import BookDetailOrder from "../../BuyerSection/BuyBooksFromShop/books_order";

const drawerWidth = 240;

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    before: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    after: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {},
});

export default function BookOrderDetail(props) {
  const classes = useStyles();
  const [orderDetails, setOrderDetails] = useState([]);

  const getBody = () => {
    if (orderDetails.length === 0) {
      return <Loading />;
    } else {
      // console.log("Dgdggdfggfgd" , orderDetails[0].type_of_item , orderDetails[0].item_name , orderDetails[0].old_new , orderDetails[0].discription)
      return (
        <StyledTableRow key={orderDetails[0]._id}>
          <StyledTableCell>
            <EllipsisText text="1" length={"5"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={orderDetails[0].type_of_item} length={"30"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={orderDetails[0].item_name} length={"30"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={orderDetails[0].old_new} length={"30"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={orderDetails[0].discription} length={"30"} />
          </StyledTableCell>
        </StyledTableRow>
      );
    }
  };

  const getData = () => {
    // console.log("djfhdf" , this.props.bookDetail);
    const data = {
      order_id: props.bookDetail.order_id[0],
    };
    // get_book_orderDetails
    return fetch(baseURL + "get_book_order_detail", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        console.log("buyer books>>>>>>>>>>..", response.data);
        console.log(setOrderDetails);
        setOrderDetails([response.data]);
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);
  console.log("dfdfdfdfdfdf", orderDetails);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No </StyledTableCell>
              <StyledTableCell>Type of Item</StyledTableCell>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell>Old-New</StyledTableCell>
              <StyledTableCell>Discription</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{getBody()}</TableBody>
        </Table>
      </TableContainer>
      <div>
      <h3 style={{ marginTop: "2%", marginLeft: "5%" }}>
        Additional Information
      </h3>

      <hr />

      <h5 style={{ marginLeft: "5%" }}>Item Amount : Amount will be notified you as soon as possible</h5>
      <h5 style={{ marginLeft: "5%" }}>
        Delivery Charge : Delivery Charge is Depends on your location (Free Delivery above 499Rs all over kota)
      </h5>
      <h5 style={{ marginLeft: "5%" }}>For Order Status Call On : 6377553654</h5>
      
      <hr />
    </div>

    </div>
  );
}
