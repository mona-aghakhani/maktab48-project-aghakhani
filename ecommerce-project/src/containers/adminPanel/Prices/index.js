import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TableContainer, Paper, Typography, Grid, Button,Container } from "@material-ui/core";
import { useStyles2 } from "./styles";
import { DataGrid } from '@material-ui/data-grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import {getProducts} from "../../../store/actions/productActions"
import CircularProgress from '@material-ui/core/CircularProgress';



// const useStyles = makeStyles(
//     (theme) => ({
//       root: {
//         justifyContent: 'center',
//         display: 'flex',
//         borderBottom: `1px solid ${theme.palette.divider}`,
//       },
//     }),
//     // { defaultTheme },
//   );
  
  function EditToolbar(props) {
    const { selectedCellParams, apiRef, setSelectedCellParams } = props;
    // const classes = useStyles();
  
    const handleClick = () => {
      if (!selectedCellParams) {
        return;
      }
      const { id, field, cellMode } = selectedCellParams;
      if (cellMode === 'edit') {
        apiRef.current.commitCellChange({ id, field });
        apiRef.current.setCellMode(id, field, 'view');
        setSelectedCellParams({ ...selectedCellParams, cellMode: 'view' });
      } else {
        apiRef.current.setCellMode(id, field, 'edit');
        setSelectedCellParams({ ...selectedCellParams, cellMode: 'edit' });
      }
    };
  
    const handleMouseDown = (event) => {
      // Keep the focus in the cell
      event.preventDefault();
    };
  
    return (
      // <div className={classes.root}>
        <Button
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          disabled={!selectedCellParams}
          color="primary"
        >
          {selectedCellParams?.cellMode === 'edit' ? 'Save' : 'Edit'}
        </Button>
      // </div>
    );
  }
  
//   EditToolbar.propTypes = {
//     apiRef: PropTypes.shape({
//       current: PropTypes.object.isRequired,
//     }).isRequired,
//     selectedCellParams: PropTypes.any,
//     setSelectedCellParams: PropTypes.func.isRequired,
//   };
const Prices = () => {
    const classes = useStyles2();

    const products = useSelector((state) => state.allProducts.products);
    const loading = useSelector((state) => state.allProducts.loading);
    console.log(loading);
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
    * use Data Grid - Editing for handle Edit
    * const columns 
    */
    const columns = [
    //   {
    //     field: 'id',
    //     headerName: 'ردیف',
    //     width: 200 
    // },
        {
            field: 'title',
            headerName: 'نام کالا',
            // width: 350,
            // type: 'string',
            flex:0.4,
            editable: false
        },
        {
            field: 'price',
            headerName: 'قیمت(تومان)',
            // width: 250,
            flex:0.3,
            // type: 'number',
            // sortable: true,
            editable: true
        },
        {
            field: 'amount',
            headerName: 'موجودی',
            // type: 'number',
            // width: 250,
            flex:0.3,
            editable: true,
        }
    ];

    // setState for handle pagnation
    // const [pageSize, setPageSize] = React.useState(5);
    // const handlePageSizeChange = (params) => {
    //     setPageSize(params.pageSize);
    //   };
      const [editRowsModel, setEditRowsModel] = React.useState({});
      // const [arrOfEdit, setArrOfEdit] = React.useState([]);

      const handleEditRowModelChange = React.useCallback((params) => {
        setEditRowsModel(params.model);
        // setArrOfEdit([...arrOfEdit,editRowsModel])
      }, []);
      console.log("obj",editRowsModel);
      // console.log("arr",arrOfEdit);

    // const apiRef = useGridApiRef();
    const [selectedCellParams, setSelectedCellParams] = React.useState(null);




    return (
        <main>
          {loading && <CircularProgress className={classes.progress} size={100} thickness={4} disableShrink />}
          {!loading && <Container 
          // maxWidth="md"
          >
            <Grid container justify="space-between" className={classes.grid}>
                <Grid item>
                    <Typography>مدیریت موجودی و قیمت ها</Typography>
                </Grid>
                <Grid item>
                    <Button className={classes.btn} 
                    // onClick={}
                    >
            ذخیره
            </Button>
                </Grid>
            </Grid>
            <TableContainer className={classes.paper} component={Paper}>
                <div style={{ flexGrow: 1 }}>
                <div style={{ height: 400, width: '100%' }}>
                <DataGrid
        rows={products}
        columns={columns}
        pageSize={5}
        // onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
        // pagination
        editRowsModel={editRowsModel}
        onEditRowModelChange={handleEditRowModelChange}
        // apiRef={apiRef}
        // onCellClick={handleCellClick}
        // onCellDoubleClick={handleDoubleCellClick}
        // onCellFocusOut={handleCellFocusOut}
        // onCellKeyDown={handleCellKeyDown}
        // components={{
        //   Toolbar: EditToolbar,
        // }}
        componentsProps={{
          toolbar: {
            selectedCellParams,
            // apiRef,
            setSelectedCellParams,
          },
        }}
      />
                </div>
                </div>
            </TableContainer>
            </Container>}
        </main>
    )
}

export default Prices
