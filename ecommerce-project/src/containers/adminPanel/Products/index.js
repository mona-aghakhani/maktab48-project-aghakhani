import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../store/actions/productActions";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  TablePagination,
  Paper,
  Typography,
  Grid,
  Button,Container
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import ProductRow from "../../../components/productRow";
import {CustomDialog} from "../../../components/CustomDialog"
import AddProduct from "../../../components/AddProduct";
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 650,
    // direction:'rtl',
    // marginTop: 50,
    // borderTop: "1px solid gray",
  },
  paper: {
    width: "90%",
    // height:"200px",
    // margin: theme.spacing(5),
    // padding: theme.spacing(3)
    margin: "20px auto",
    // background:"lightgray"
    background: "rgb(214,230,215,0.6)",
  },
  grid:{
    width: "90%",
    margin: "20px auto",

  },
  btn:{
    background: "rgb(103,182,108)",
    padding:" 5px 10px",
    "&:hover":{
      background:"primary",
    }
  },
  dialogTitle:{
    fontSize:"17px",
},
});
const Products = () => {
  /*
   * useselector & get products
   */
  const products = useSelector((state) => state.allProducts.products);
  // console.log("products",products);

  /*
   * const states for pagination table
   */
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, products?.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dispatch = useDispatch();
  /*
   * dispatch async action and get data
   */
  useEffect(() => {
    dispatch(getProducts());
  }, []);
/*
* setState for handle CustomDialog
*/
const [isOpen, setIsOpen] = useState(false)

const handleDialogOpen=()=>{
  setIsOpen(true)
}
const handleDialogClose=()=>{
  setIsOpen(false)
}
  return (
    <main>
      <Container maxWidth="md">
      <Grid container justify="space-between" className={classes.grid} >
        <Grid item>
          <Typography>مدیریت کالاها</Typography>
        </Grid>
        <Grid item>
          <Button className={classes.btn} onClick={handleDialogOpen} >افزودن کالا</Button>
        </Grid>
      </Grid>
      <TableContainer className={classes.paper} component={Paper}>
        {products !== "Not found" && (
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                {/* <TableCell>#</TableCell> */}
                {/* <TableCell>code</TableCell> */}
                <TableCell align="left">تصویر</TableCell>
                <TableCell align="left">نام کالا</TableCell>

                <TableCell align="left">دسته بندی</TableCell>
                <TableCell align="left">#</TableCell>
              </TableRow>
            </TableHead>
            <TableBody stripedRows>
              {products !== "Not found" &&
                (rowsPerPage > 0
                  ? products.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : products
                ).map((row) => <ProductRow key={row.id} product={row} />)}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "کل", value: -1 }]}
                  colSpan={3}
                  count={products.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": " rows per page " },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        )}
      </TableContainer>
      </Container>
      <CustomDialog isOpen={isOpen} handleClose={handleDialogClose} className={classes.dialogTitle} title='افزودن/ویرایش کالا'>
        {/* <h1>hi </h1> */}
        <AddProduct handleClose={handleDialogClose}/>
      </CustomDialog>
    </main>
  );
};

export default Products;
