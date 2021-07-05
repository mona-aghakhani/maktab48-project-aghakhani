import React, { useState,useEffect } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../store/actions/productActions";
// import EmployeeForm from "./EmployeeForm";
// import PageHeader from "../../components/PageHeader";
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment, Typography } from '@material-ui/core';
import useTable from "../../../hook/useTable";
// import * as employeeService from "../../services/employeeService";
// import Controls from "../../components/controls/Controls";
// import { Search } from "@material-ui/icons";
import {useStyles} from "./styles"
// const useStyles = makeStyles(theme => ({
//     pageContent: {
//         margin: theme.spacing(5),
//         padding: theme.spacing(3)
//     },
//     searchInput: {
//         width: '75%'
//     }
// }))


const headCells = [
    { id: 'image', label: 'تصویر',disableSorting: true },
    { id: 'titleProduct', label: 'نام کالا' },
    { id: 'category', label: 'دسته بندی' },
    { id: 'edit', label: '', disableSorting: true },
]

export default function Products() {

    const classes = useStyles();
    // const [records, setRecords] = useState(employeeService.getAllEmployees())
    // const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    /*
* useselector & get products
*/
const products = useSelector((state) => state.allProducts.products);
// console.log("products",products);
const dispatch = useDispatch();
  /*
   * dispatch async action and get data
   */
  useEffect(() => {
    dispatch(getProducts());
  }, []);

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(products, headCells
        // , filterFn
        );

    // const handleSearch = e => {
    //     let target = e.target;
    //     setFilterFn({
    //         fn: items => {
    //             if (target.value == "")
    //                 return items;
    //             else
    //                 return items.filter(x => x.fullName.toLowerCase().includes(target.value))
    //         }
    //     })
    // }

    return (
        <>
        <Typography>مدیریت کالاها</Typography>
            {/* <PageHeader
                title="New Employee"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            /> */}
            <Paper 
            className={classes.pageContent}
            >
                {/* <EmployeeForm /> */}
                {/* <Toolbar>
                    <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar> */}
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                             recordsAfterPagingAndSorting().map(product =>
                                (<TableRow key={product.id}>
                                    <TableCell className={classes.cell} colSpan={1}><img className={classes.img} src={product?.image}/></TableCell>
                                    <TableCell className={classes.cell} colSpan={1}>{product.title}</TableCell>
                                    <TableCell className={classes.cell} colSpan={1}>{product.category}</TableCell>
                                    <TableCell className={classes.cell} colSpan={1}></TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination className={classes.div} />
            </Paper>
        </>
    )
}