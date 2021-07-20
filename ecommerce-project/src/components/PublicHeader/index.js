import {
 AppBar,
//   Toolbar,
   Typography,
    // Box,
     InputBase,
    Grid
} from '@material-ui/core'
import React from 'react';
import { NavLink } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
// import Badge from '@material-ui/core/Badge';
// import IconButton from '@material-ui/core/IconButton';
// import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from "./styles"
const PublicHeader = () => {
    const { appbar,
        //  box,
          link, search, searchIcon, inputRoot, inputInput, grid, item1, item2, item3 } = useStyles();
    return (
        <div>
            <AppBar className={appbar} position="static">
                {/* <Toolbar   className={appbar}> */}
                {/* <Grid container direction="row">
                    <Grid item> */}
                {/* <Box> */}
                <Grid container className={grid} >
                    <Grid item md={3} sm={2} xs={12} className={item1}>
                        <Typography>
                            فروشگاه کسب و کالا
                    </Typography>
                    </Grid>
                    <Grid
                        item
                        md={7}
                        sm={8}
                        xs={12}
                        container
                        spacing={1}
                        className={item2}
                    >
                        {/* <div className={search}>
                            <div className={searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="جستجو..."
                                classes={{
                                    root: inputRoot,
                                    input: inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div> */}
                    </Grid>
                    {/* </Box> */}
                    {/* </Grid> */}
                    {/* <Grid item alignItems="center">
                        <Grid item> */}
                    {/* <Box className={box}> */}
                    {/* <div> */}
                    <Grid item md={2} sm={2} xs={12} className={item3} container>
                        <NavLink to="/login" exact className={link}  >
                           <Typography> مدیریت</Typography>
                    </NavLink >
                        <NavLink to="/" className={link}>
                            <LocalGroceryStoreIcon/>
                            <Typography>سبد خرید</Typography>
                    </NavLink>
                        {/* <NavLink to="/admin/login" exact >
      login
      </NavLink> */}
                        {/* </div> */}
                        {/* </Grid>
                    <Grid item> */}
                        {/* <div> */}

                        {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
                        {/* </div>
                    </Box> */}
                        {/* </Grid>
                    </Grid>
                    </Grid> */}
                    </Grid>
                </Grid>
                {/* </Toolbar> */}
            </AppBar>

        </div>
    )
}

export default PublicHeader
