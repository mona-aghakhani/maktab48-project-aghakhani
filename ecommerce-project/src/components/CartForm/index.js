import React, { useState } from "react";
// import { useFilePicker } from "use-file-picker";
// import { useDispatch } from "react-redux";

import {
    Button,
    TextField,
    Grid,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { addNewProduct } from "../../store/actions/productActions";
import { ToastContainer, toast } from "react-toastify";


export default function CartForm({ handleClose }) {
    const classes = useStyles();
    /*
      * usedispatch action for add product
      */

    //   const dispatch = useDispatch();

    /*
     * set states for input values
     */

    //   const [image, setImage] = useState("");
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState("");
    const [deliveryTime, setDeliveryTime] = useState("");



    /*
     * 'use-date-picker' 
     */


    const handleAdd = (e) => {

        e.preventDefault();
        // console.log("add comp");
        // if (title && category) {
        //     let newProduct = { title: title, image: filesContent[0]?.content, category: category, description: description, price: "", amount: "" };
        //     // console.log(newProduct);

        //     dispatch(addNewProduct(newProduct))
        //     handleClose();
        // } else {
        //     toast.error("نام کالا و دسته بندی را لطفا وارد کنید");
        //     console.error("err")
        // }
    };



    return (
        <>
            <ToastContainer />
            <Container component="main" maxWidth="sm">
                <form
                    onSubmit={handleAdd}
                    className={classes.form}
                    // noValidate
                    autoComplete="off"
                >
                    <Grid container column spacing={2}>
                        {/* <Grid
                            justify="space-between"
                            alignItems="center"
                            xs={12}
                            item
                            container
                        > */}
                        <Grid item
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <TextField
                                variant="outlined"
                                placeholder=" نام "
                                name="name"
                                // margin="normal"
                                // disabled
                                className={classes.input}
                            // fullWidth
                            // value={image}
                            // onChange={(e) => setImage(e.target.value)}

                            />
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={6}
                            md={6}
                        //  xs={2}
                        >
                            <TextField
                                variant="outlined"
                                placeholder=" نام خانوادگی "
                                name="lastName"
                                // margin="normal"
                                // disabled
                                className={classes.input}
                            // fullWidth
                            // value={image}
                            // onChange={(e) => setImage(e.target.value)}

                            />
                        </Grid>
                        {/* </Grid> */}
                        <Grid xs={12} item>
                            <TextField
                                placeholder="آدرس"
                                variant="outlined"
                                multiline
                                required
                                rows={1}
                                rowsMax={3}
                            // value={description}
                            // onChange={(e) => setDescription(e.target.value)}
                            />
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={6}
                            md={6}
                        >
                            <TextField
                                variant="outlined"
                                placeholder=" تلفن همراه "
                                name="phone"
                                // margin="normal"
                                // disabled
                                className={classes.input}
                            // fullWidth
                            // value={image}
                            // onChange={(e) => setImage(e.target.value)}

                            />
                        </Grid>
                        <Grid item
                            xs={12}
                            sm={6}
                            md={6}
                        //  xs={2}
                        >
                            <TextField
                                variant="outlined"
                                placeholder=" تاریخ تحویل  "
                                name="date"
                                // margin="normal"
                                // disabled
                                className={classes.input}
                            // fullWidth
                            // value={image}
                            // onChange={(e) => setImage(e.target.value)}

                            />
                        </Grid>
                        <Grid container xs={12} justify="center">
                            <Button
                                onClick={handleAdd}
                                type="submit"
                                // fullWidth
                                variant="contained"
                                // disabled={!title && !category && !image}

                                className={classes.btn}
                            >
                                پرداخت
            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>

        </>
    );
}


