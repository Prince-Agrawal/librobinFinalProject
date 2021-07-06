import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import { Link, Redirect } from "react-router-dom";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import EllipsisText from "react-ellipsis-text";
import { Helmet } from "react-helmet";
import Loading from "../../LoadingComponent";
import baseURL from "../../shared/baseURL";
import { Book } from "@material-ui/icons";
import Thanks from "../../Greeting/thanks"

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

export default function CustomizedTables() {
  const classes = useStyles();
  const [total_items, set_total_item] = useState(["Load"]);
  const [isBuy, set_isBuy] = useState(false);
  const handelOrderDetailSubmit = () => {
    const data = {
      detail: total_items,
    };
    // console.log("hhhhhhhhhh", total_items);
    fetch(baseURL + "order_detail", {
      method: "POST",
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
        set_isBuy(true)
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  };
  const setTotalItem = () => {
    fetch(baseURL + "card_info?user_id=" + localStorage.getItem("user_id"))
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
        set_total_item(response.data);

        // console.log('sssssssssssssssssss' , response)
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  };
  const removeItem = (id)=>{
    // console.log("fdddddddddddddd" , id);
    const data = {
      card_id: id 
    }
    fetch(baseURL + "remove_from_card", {
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
        // console.log(response);
        setTotalItem()
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  
  }
  let total_pay = 0;
  let total_discount = 0;
  const getCardDetail = () => {
    // console.log("ddddddddd", total_items);
    if (total_items.length !== 0) {
      const result = total_items.map((book, index) => {
        const totalPrice =
          (book.price * book.quantity * (100 - book.discount)) / 100;

        total_pay = total_pay + totalPrice;
        total_discount =
          total_discount + (book.price * book.quantity - totalPrice);
        return (
          <StyledTableRow key={book._id}>
            <StyledTableCell>
              <EllipsisText text={(index + 1).toString()} length={"5"} />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText text={book.product_company} length={"30"} />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText
                text={JSON.stringify(book.quantity)}
                length={"30"}
              />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText text={JSON.stringify((book.price)*(100-book.discount)/100)} length={"30"} />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText
                text={JSON.stringify(book.discount)}
                length={"30"}
              />
            </StyledTableCell>
            <StyledTableCell>
              <EllipsisText text={JSON.stringify(totalPrice)} length={"30"} />
            </StyledTableCell>
            <StyledTableCell>
            <button
            type="button"
            className="btn btn-secondary"
            onClick={()=>removeItem(book._id)}
          >
            Remove
          </button>
            </StyledTableCell>
          </StyledTableRow>
        );
      });

      return result;
    }
    return null;
  };
  useEffect(() => {
    // Update the document title using the browser API
    setTotalItem();
  }, []);
  if(localStorage.getItem("user_id")){
  if(isBuy===false){
  return (
    <div>
      <Helmet>
        <title>Card</title>
      </Helmet>
      {total_items[0] === "Load" ? (
        <Loading />
      ) : (total_items.length===0 ? <h4>No data found . . .</h4>:(
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width="10%">S.No </StyledTableCell>
                  <StyledTableCell width="20%">Product Name</StyledTableCell>
                  <StyledTableCell width="10%">
                    Product Quantity
                  </StyledTableCell>
                  <StyledTableCell width="10%">Price</StyledTableCell>
                  <StyledTableCell width="10%">Discount(%)</StyledTableCell>
                  <StyledTableCell width="10%">Total Price</StyledTableCell>
                  <StyledTableCell width="10%">Remove Item</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {total_items.length === 0 ? <Loading /> : getCardDetail()}
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
            <h5 style={{ marginLeft: "5%" }}>
              You Have to Pay : {total_pay > 499 ? total_pay : total_pay + 30}{" "}
              Rs
            </h5>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginLeft: "70%" }}
              onClick={handelOrderDetailSubmit}
            >
              Buy Now
            </button>
            <hr />
          </div>
        </div>
      ))}
    </div>
  )}else{
    return(
      <Thanks>Your Order is Confirmed</Thanks>
    )
  }
}
else{
  return(
    <Redirect to="/login"/>
  )
}
}
