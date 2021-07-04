import { AppBar, Grid, Toolbar, Typography,Box ,Tab, Tabs,Paper } from '@material-ui/core'
import React from 'react';
import { NavLink,Link } from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import {useStyles} from "./styles"



const PublicHeader = () => {
    const {  appbar,box,link,tab,tabs,paper,indicator} =useStyles();
    const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div>
            <AppBar  position="relative">
                <Toolbar   className={appbar}>
                    {/* <Grid container direction="row">
                    <Grid item> */}
                    <Box>
                    <Typography>
                        پنل مدیریت فروشگاه 
                    </Typography>
                    </Box>
                   
                        <Box className={box}>
                        <Paper className={paper} square>
      <Tabs
    //   classes={{ indicator:indicator }}
    // TabIndicatorProps={{ style: { background: "red",width:"50px" } }}
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        className={tabs}
        // aria-label="disabled tabs example"
      >
        <Tab label="کالاها" className={tab} component={Link} 
            to="/admin/products" />
        <Tab label="قیمت و موجودی" className={tab} component={Link}  to="/admin/prices" />
        {/* <Tab label={
              <React.Fragment>
                قیمت<br />
                <span style={{ fontSize: "smaller",width:"10px" }}>قیمت</span>
              </React.Fragment>
            } className={tab} component={Link}  to="/admin/prices" /> */}
        <Tab label="Active" component={Link}  to="/admin/orders" className={tab} />
      </Tabs>
    </Paper>
                            {/* <Tabs className={tab} >
                    <Tab className={tab} exact label='کالاها'
            component={Link}
            to="/"
             />
                    <Tab bgcolor="secondary" exact label='کالاها'
            component={Link}
            to="/"
             />
                    <Tab bgcolor="secondary" exact label='کالاها'
            component={Link}
            to="/"
             />
                         
                    
     
                    </Tabs> */}
                    
               
                    </Box>
                  
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default PublicHeader
