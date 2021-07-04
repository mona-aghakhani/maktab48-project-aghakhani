import { AppBar, Grid, Toolbar, Typography,Box } from '@material-ui/core'
import React from 'react';
import { NavLink } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import {useStyles} from "./styles"
const PublicHeader = () => {
    const {  appbar,box,link} =useStyles();
    return (
        <div>
            <AppBar  position="relative">
                <Toolbar   className={appbar}>
                    {/* <Grid container direction="row">
                    <Grid item> */}
                    <Box>
                    <Typography>
                        فروشگاه 
                    </Typography>
                    </Box>
                    {/* </Grid> */}
                    {/* <Grid item alignItems="center">
                        <Grid item> */}
                        <Box className={box}>
                            <div>
                    <NavLink to="/login" exact className={link}  >
                        مدیریت 
                    </NavLink >
                      {/* <NavLink to="/admin/login" exact >
      login
      </NavLink> */}
                    </div>
                    {/* </Grid>
                    <Grid item> */}
                    <div>
                    <NavLink to="/" className={link}>
                        سبد خرید 
                    </NavLink>
                    {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton> */}
                    </div>
                    </Box>
                    {/* </Grid>
                    </Grid>
                    </Grid> */}
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default PublicHeader
