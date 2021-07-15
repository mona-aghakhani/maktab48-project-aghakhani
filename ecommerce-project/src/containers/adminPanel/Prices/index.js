import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TableContainer, Paper, Typography, Grid, Button,Container } from "@material-ui/core";
import { useStyles2 } from "./styles";
import { DataGrid } from '@material-ui/data-grid';
import {getProducts} from "../../../store/actions/productActions"
import {putApiProduct,getAllProducts} from "../../../api/products/products"
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";


const Prices = () => {
    const classes = useStyles2();
const [updatedata, setupdatedata] = useState([])
    const rows = useSelector((state) => state.allProducts.products);
    // console.log(rows);
    const loading = useSelector((state) => state.allProducts.loading);
    // console.log(loading);
    const dispatch = useDispatch();

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
    //     flex:0.3,
    //     // width: 200 
    // },
        {
            field: 'title',
            headerName: 'نام کالا',
            headerClassName: 'super-app-theme--header',
            // width: 350,
            // type: 'string',
            flex:1,
            // flex:0.4,
            // filterable:false,
            editable: false
        },
        {
            field: 'price',
            headerName: 'قیمت(تومان)',
            headerAlign: 'left',
            align:"left",
            headerClassName: 'super-app-theme--header',
            // width: 250,
            flex:0.5,
            // flex:0.3,
            type: 'number',
            // sortable: true,
            editable: true,
            valueFormatter: (params) => {
              const valueFormatted = Number(params.value).toLocaleString();
              return valueFormatted;
            },
            // filterable:false,
        },
        {
            field: 'amount',
            headerName: 'موجودی',
            type: 'number',
            headerAlign: 'left',
            align:"left",
            headerClassName: 'super-app-theme--header',
            // width: 250,
            flex:0.5,
            // flex:0.3,
            // sortable: true,
            editable: true,
            valueFormatter: (params) => {
              const valueFormatted = Number(params.value).toLocaleString();
              return valueFormatted;
            },
            // filterable:false,
        }
    ];

 /*
 * const function handleEditCellChange for setState updatedObj
 */
    const handleEditCellChange=({ id, field, props })=>{

let updatedObj={field,value:props.value}
// console.log(updatedObj);
let obj=rows.filter((item)=>item.id === id)

if (updatedObj.field === "amount") {
  
  obj[0].amount=updatedObj.value
 
}else{
  obj[0].price=updatedObj.value
}

setupdatedata([...updatedata,...obj])

    }
    
   /*
 * const function handleEdit for save updatedData and multiple put api in for loop
 */
    const handleEdit=()=>{
      // Promise.all(updatedata.map(product=>axios.put(`http://localhost:5000/products/${product.id}`,product)
      // .then(res=>console.log(res.data))
      // .catch(err=>console.log(err))
      // ))
     
      for (let i = 0; i < updatedata.length; i++) {
    
        const getData = async () => {
          try {
              return await axios.put(`http://localhost:5000/products/${updatedata[i].id}`, updatedata[i])
          } catch (error) {
              console.error(error)
          }
      }
      const callEndpoint = async () => {
        const responseData = await getData()
    
        console.log(responseData)
    }
    
    callEndpoint();
        window.location.reload()
      } 
      // const getproducts = async () => {
      //       const productsFromServer = await getAllProducts();
      //       console.log(productsFromServer);
      //       // setproducts(productsFromServer.data);
      //     };
      //     getproducts();
       dispatch(getProducts());
    }

   
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
                    onClick={handleEdit}
                    disabled={updatedata.length === 0}
                    >
            ذخیره
            </Button>
                </Grid>
            </Grid>
            <TableContainer className={classes.paper} component={Paper}>
                <div style={{ flexGrow: 1 }}>
                <div style={{ height: 400, width: '100%' ,textAlign:"center"}} className={classes.root}>
                <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        // onPageSizeChange={handlePageSizeChange}
        rowsPerPageOptions={[5, 10, 20]}
        // pagination
        onCellModeChange={(e)=>console.log(e)}
        // className={classes.DataGrid}
        onEditCellChangeCommitted={handleEditCellChange}
        disableColumnMenu={true}
        hideFooterSelectedRowCount={true}
      />
                </div>
                </div>
            </TableContainer>
            </Container>}
        </main>
    )
}

export default Prices
