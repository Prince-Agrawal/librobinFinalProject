import React from "react";
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
import Loading from "../LoadingComponent";

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

export default function CustomizedTables({ searchBooks }) {
  const classes = useStyles();
  console.log("Search books >>>>>>>>", searchBooks);
  const allBooks = () => {
    const result = searchBooks.map((book, index) => {
      return (
        <StyledTableRow key={book._id}>
          <StyledTableCell>
            <EllipsisText text={(index + 1).toString()} length={"5"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={book.book_name} length={"30"} />
          </StyledTableCell>
          <StyledTableCell>
            <EllipsisText text={book.writer_name} length={"30"} />
          </StyledTableCell>
          <StyledTableCell>
            <div className={classes.butt}>
              {" "}
              <a href={book.link_of_book} target="_blank">
                <Button variant="contained" color="primary">
                  Download
                </Button>
              </a>
            </div>{" "}
          </StyledTableCell>
        </StyledTableRow>
      );
    });
    return result;
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No </StyledTableCell>
              <StyledTableCell width="30%">Book Name </StyledTableCell>
              <StyledTableCell width="30%">Author Name</StyledTableCell>
              <StyledTableCell>Click To Download</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <h3 style={{"marginTop": "5%" , "marginBottom": "5%" , "color": "green"}}>Temporary Unavailable </h3>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
