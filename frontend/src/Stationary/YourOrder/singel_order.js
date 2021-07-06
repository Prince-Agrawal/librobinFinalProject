import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import EllipsisText from "react-ellipsis-text";
import { Helmet } from "react-helmet";
import Loading from "../../LoadingComponent";
import baseURL from "../../shared/baseURL";
import { Book } from "@material-ui/icons";

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

export default function SingleOrderDetail({single_order_detail}) {
  const classes = useStyles();

  let total_pay = 0;
  let total_discount = 0;
  const getCardDetail = () => {
    // console.log("ddddddddd", single_order_detail);
      const result = single_order_detail.map((book, index) => {
        const totalPrice =
          (book[0].price * book[0].quantity * (100 - book[0].discount)) / 100;

        total_pay = total_pay + totalPrice;
        total_discount =
          total_discount + (book[0].price * book[0].quantity - totalPrice);
        // console.log("Fgfgfgfdggfd" , book[0])
        return (
            
          <StyledTableRow key={book._id}>
            <StyledTableCell>
              <EllipsisText text={JSON.stringify(index + 1)} length={"5"} />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText text={book[0].product_company} length={"30"} />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText
                text={JSON.stringify(book[0].quantity)}
                length={"30"}
              />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText text={JSON.stringify((book[0].price)*(100-book[0].discount)/100)} length={"30"} />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText
                text={JSON.stringify(book[0].discount)}
                length={"30"}
              />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText text={JSON.stringify(totalPrice)} length={"30"} />
            </StyledTableCell>
          </StyledTableRow>
        );
      });

      return result;
    
  };
// console.log("Ffffffffffffffffffff" , single_order_detail)
  return (
    <div>
      <Helmet>
        <title>Card</title>
      </Helmet>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell width="10%">S.No </StyledTableCell>
              <StyledTableCell width="20%">Product Name</StyledTableCell>
              <StyledTableCell width="10%">Product Quantity</StyledTableCell>
              <StyledTableCell width="10%">Price</StyledTableCell>
              <StyledTableCell width="10%">Discount(%)</StyledTableCell>
              <StyledTableCell width="10%">Total Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {single_order_detail.length===0 ? <Loading/>: getCardDetail()}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <h3 style={{ marginTop: "2%", marginLeft: "5%" }}>
          Billing Information
        </h3>

        <hr />

        <h5 style={{ marginLeft: "5%" }}>You Save : {total_discount} Rs</h5>
        <h5 style={{ marginLeft: "5%" }}>
          Delivery Charge : {total_pay > 499 ? 0 : 30} RS
        </h5>
        <h5 style={{ marginLeft: "5%" }}>Paid : {total_pay>499 ? total_pay : total_pay+30} Rs</h5>
        
        <hr />
      </div>
    </div>
  );
}
