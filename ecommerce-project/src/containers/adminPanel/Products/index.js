import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table, TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableFooter,
  TableRow,
  TablePagination,
  Paper,
  Typography,
  Grid,
  Button,
  Container,
  Box,
  TableSortLabel
} from "@material-ui/core";
import { useStyles2 } from "./styles";
import { TablePaginationActions } from "./TablePaginationActions";

import { CustomDialog } from "../../../components/CustomDialog";
import AddProduct from "../../../components/AddProduct";
import EditProduct from "../../../components/EditProduct";

import { getProducts, deleteProductById } from "../../../store/actions/productActions";
// import { getAllProducts, deleteApiProduct, postNewProduct, putApiProduct } from "../../../api/products/products";
import CircularProgress from '@material-ui/core/CircularProgress';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}
const headCells = [
  { id: 'image', label: 'تصویر', disableSorting: true },
  { id: 'titleProduct', label: 'نام کالا', disableSorting: true },
  {
    id: 'category', label: 'دسته بندی',
    disableSorting: true
  },
  { id: 'edit', label: '', disableSorting: true },
]
const styles = {
  activeSortIcon: {
    // "& > :not(nth-of-child(2))": {
    // fontSize: "1.25rem",
    opacity: 1,
    color: "red"
    // fontWeight: 600
    // }
    // opacity: 1,
    // color:"black"
  },
  // Half visible for inactive icons
  inactiveSortIcon: {
    opacity: 0,
  },
  icon: {
    display: 'none',
    color: "red"
  },
  active: {
    '& $icon': {
      display: 'inline',
    },
  },
};

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            olSpan={1}
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.disableSorting ? headCell.label :
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                // style={styles}
                // style={{ opacity: (true === headCell.disableSorting ) ? 0 :1 }}
                classes={{
                  // Override with the active class if this is the selected column or inactive otherwise
                  icon: ((true === headCell.disableSorting) ? styles.activeSortIcon : styles.inactiveSortIcon)
                  // icon: ((orderBy === 'category') ? styles.activeSortIcon : styles.inactiveSortIcon ) 
                  // icon:  classes.activeSortIcon 
                }}
              >
                {headCell.label}
              </TableSortLabel>
            }
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


const Products = () => {
  /*
   * use useselector & dispatch for get products and handle api calls
   */
  const products = useSelector((state) => state.allProducts.products);
  const loading = useSelector((state) => state.allProducts.loading);
  // console.log(loading);
  const dispatch = useDispatch();
  /*
   * dispatch sync action(setProducts) and get data
   */
  // useEffect(() => {
  //   getAllProducts().then((res) => {
  //     console.log("res data for products", res.data);
  //     dispatch(setProducts(res.data));
  //   });
  // }, []);

  /*
   * dispatch async action and get data
   */
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  /*
   * setState for handle CustomDialog
   */
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);


  const [editedObj, setEditedObj] = useState(null);

  const handleOpenAddDialog = () => {
    setIsOpenAdd(true);
    console.log(isOpenAdd);
  };
  const handleDialogAddClose = () => {
    setIsOpenAdd(false);
  };
  const handleOpenUpdateDialog = (obj) => {
    setEditedObj(obj)
    setIsOpenUpdate(true);
  };


  const handleDialogUpdateClose = () => {
    setIsOpenUpdate(false);
  };

  /*
   * const states and function for pagination table
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



  const [order, setOrder] = useState()
  const [orderBy, setOrderBy] = useState()

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };



  /*
   *  initial states & functions without redux
   */
  // const [products, setproducts] = useState([]);
  // useEffect(() => {
  //   const getproducts = async () => {
  //     const productsFromServer = await getAllProducts();
  //     console.log(productsFromServer);
  //     // setproducts(productsFromServer.data);
  //   };
  //   getproducts();
  // }, []);


  return (
    <main
    //  style={{height:"80vh"}}
    >
      {loading && <CircularProgress className={classes.progress} size={100} thickness={4} disableShrink />}
      {!loading && <Container maxWidth="md">
        <Grid container justify="space-between" className={classes.grid}>
          <Grid item>
            <Typography>مدیریت کالاها</Typography>
          </Grid>
          <Grid item>
            <Button className={classes.btn} onClick={handleOpenAddDialog}>
              افزودن کالا
            </Button>
          </Grid>
        </Grid>
        <TableContainer className={classes.paper} component={Paper}>
          {products !== "Not found" && (
            <Table className={classes.table}>
              <EnhancedTableHead
                classes={{
                  icon: classes.icon,
                  active: classes.active
                }}
                // classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={products.length}
              />


              <TableBody>
                {stableSort(products, getComparator(order, orderBy))?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                  // : products
                  // )?
                  .map((row, index) => (
                    <TableRow key={row?.index}>

                      <TableCell>
                        <img className={classes.img} src={row?.image} alt="product" />
                      </TableCell>
                      <TableCell>{row?.title}</TableCell>
                      <TableCell>{row?.category}</TableCell>
                      <TableCell>
                        <Box onClick={() => handleOpenUpdateDialog(row)} className={classes.box}> ویرایش </Box>
                        <Box onClick={() => { dispatch(deleteProductById(row.id)); }} className={classes.box} > حذف</Box>
                      </TableCell>
                    </TableRow>

                  ))}

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
                    count={products?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    labelRowsPerPage='تعداد سطر های هر صفحه'
                    // classes={{
                    //   toolbar: classes.toolbar,
                    //   caption: classes.caption
                    // }}
                    // SelectProps={{
                    //   inputProps: { "aria-label": "none " },
                    //   // variant="",
                    //   native: true,

                    // }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          )}
        </TableContainer>
      </Container>}
      {isOpenAdd && <CustomDialog
        isOpen={isOpenAdd}
        handleClose={handleDialogAddClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
        <AddProduct handleClose={handleDialogAddClose} />
      </CustomDialog>}
      {isOpenUpdate && <CustomDialog
        isOpen={isOpenUpdate}
        handleClose={handleDialogUpdateClose}
        className={classes.dialogTitle}
        title="افزودن/ویرایش کالا"
      >
        <EditProduct
          handleClose={handleDialogUpdateClose}
          editedObj={editedObj} />

      </CustomDialog>}
    </main>
  );
};

export default Products;

