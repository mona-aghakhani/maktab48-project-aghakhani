import React, { useState } from "react";
import {  useSelector } from 'react-redux';
// import { useFilePicker } from "use-file-picker";
// import { useDispatch } from "react-redux";
import {Button, TextField, Grid, Container, Paper, Card, Typography} from "@material-ui/core";
import { useStyles } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import jMoment from "moment-jalaali";
import JalaliUtils from "@date-io/jalaali";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });


export default function FinalizeCart({ }) {
    const classes = useStyles();
    /*
      * useSelector and get cardItems 
      */
    const cartItems=useSelector((state)=>state.cartItems)
    //   const dispatch = useDispatch();


    /*
     * set states for input values
     */

    //   const [image, setImage] = useState("");
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState("");
    /*
     * 'use-date-picker' 
     */

  
    const [selectedDate, handleDateChange] = useState(moment());


    const handleNewOrder = (e) => {

        e.preventDefault();
        const fullName = `${name}${lastName}`
        // console.log(fullName);
        const orderTime=new Date().toLocaleDateString('fa-IR')
        console.log(orderTime);
        // console.log(moment());
        const regex = RegExp(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          );
        if (name && lastName &&  address && phone && selectedDate) {
            if (!regex.test(phone)) {
                toast.error("لطفا شماره تماس را  به درستی وارد کنید");
            }
            // console.log(selectedDate.getFullYear());
            // console.log(moment(selectedDate).format("YYYY/M/D"));
            // console.log(selectedDate.format("jYYYY/jMM/jDD"));
            // console.log(selectedDate.toLocaleDateString('fa-IR'));
        let newOrder = { fullName: fullName, address:address, phone: phone, orderTime: orderTime, deliveryTime: selectedDate.format("jYYYY/jMM/jDD"), products:cartItems };
          
        console.log(newOrder);

            // dispatch(addNewProduct(newProduct))
            // handleClose();
        } else {
            toast.error("لطفا تمام اطلاعات را وارد کنید");
            // console.error("err")
        }
    };



    return (
        <>
            <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
                {/* <ToastContainer /> */}
                <Container component="main" maxWidth="md">
                    {/* <Typography component="h1" variant="h5">
             نهایی کردن خرید
          </Typography> */}
                    <Card className={classes.paper}>
                        <Typography component="h1" variant="h5" className={classes.title}>
                            نهایی کردن خرید
          </Typography>
                        <form
                            onSubmit={handleNewOrder}
                            className={classes.form}
                            noValidate
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}

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
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}

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
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
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
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}

                                    />
                                </Grid>
                                <Grid item
                                    xs={12}
                                    sm={6}
                                    md={6}
                                //  xs={2}
                                >
                                    <DatePicker
                                        clearable
                                        inputVariant="outlined"
                                        okLabel="تأیید"
                                        cancelLabel="لغو"
                                        clearLabel="پاک کردن"
                                        labelFunc={date => (date ? date.format("jYYYY/jMM/jDD") : "")}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                    />
                                    {/* <TextField
                                variant="outlined"
                                placeholder=" تاریخ تحویل  "
                                name="date"
                                // margin="normal"
                                // disabled
                                className={classes.input}
                            // fullWidth
                            // value={image}
                            // onChange={(e) => setImage(e.target.value)}

                            /> */}
                                </Grid>
                                <Grid container xs={12} justify="center">
                                    <Button
                                        onClick={handleNewOrder}
                                        // type="submit"
                                        // fullWidth
                                        variant="contained"
                                        disabled={!name && !lastName && !phone && !address }

                                        className={classes.btn}
                                    >
                                        پرداخت
            </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </Container>
            </MuiPickersUtilsProvider>
        </>
    );
}


