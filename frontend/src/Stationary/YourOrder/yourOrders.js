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
import SingleOrderDetail from "./singel_order";
import BookDetailOrder from "../../BuyerSection/BuyBooksFromShop/books_order"

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
  const [total_orders, set_total_orders] = useState(["Load"]);
  const [is_single_order_detail, set_is_single_order_detail] = useState(false);
  const [is_single_book_order_detail, set_is_single_book_order_detail] = useState(false);
  const [single_order_detail, set_single_order_detail] = useState([]);

  const setShortData = () => {
    //   console.log("Ffffffffffffffffffffffff")
    fetch(
      baseURL + "get_order_details?user_id=" + localStorage.getItem("user_id")
    )
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
        set_total_orders(response.data);

        // console.log('sssssssssssssssssss' , response)
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  };

  const getSingelOrder = (data) => {
    if(data.isStationary===true){
      // console.log("Gggggggggggg" , data)
    fetch(baseURL + "get_single_order", {
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
        // console.log("buyer books>>>>>>>>>>..", response);
        set_is_single_order_detail(true);
        set_single_order_detail(response.data);
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
    // console.log("xxxxxxxxxxxx", detailArr)
    }
    else{
      set_is_single_book_order_detail(true)
      set_single_order_detail(data);
    }
  };
  const getShortData = () => {
    const result = total_orders.map((book, index) => {
      return (
        <StyledTableRow
          key={book._id}
          onClick={() => getSingelOrder(book)}
          style={{ cursor: "pointer" }}
        >
          <StyledTableCell>
            <EllipsisText text={JSON.stringify(index + 1)} length={"5"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={book.stamp.date} length={"30"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={book.stamp.time} length={"30"} />
          </StyledTableCell>
        </StyledTableRow>
      );
    });

    return result;
  };

  useEffect(() => {
    // Update the document title using the browser API
    setShortData();
  }, []);
  if (localStorage.getItem("user_id")) {
    if (is_single_order_detail === true) {
      return <SingleOrderDetail single_order_detail={single_order_detail} />;
    }
    else if(is_single_book_order_detail){
      return(
        <BookDetailOrder bookDetail = {single_order_detail}/>
      )
    } 
    else {
      return (
        <div>
          <Helmet>
            <title>Card</title>
          </Helmet>
          {total_orders[0] === "Load" ? (
            <Loading />
          ) : total_orders.length === 0 ? (
            <h4>No data Found . . .</h4>
          ) : (
            <div>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>S.No </StyledTableCell>
                      <StyledTableCell>Order Date</StyledTableCell>
                      <StyledTableCell>Order Time</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {total_orders.length === 0 ? <Loading /> : getShortData()};
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </div>
      );
    }
  } else {
    return <Redirect to="/login" />;
  }
}
