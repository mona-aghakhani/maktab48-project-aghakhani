import { AppBar, Grid, Toolbar, Typography,Box ,Tab, Tabs,Paper } from '@material-ui/core'
import React from 'react';
import { NavLink,Link } from "react-router-dom";

import {useStyles} from "./styles"



const PublicHeader = () => {
    const {  appbar,box,link,tab,tabs,paper,indicator,active,grid,item1,item2,item3} =useStyles();
    const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        // <header>
        <AppBar className={appbar}  position="relative">
          {/* <Box> */}
<Grid container className={grid}>
  <Grid item md={3} sm={2} xs={12} className={item1}>
     <Typography >
      پنل مدیریت فروشگاه 
     </Typography>
   </Grid>
  <Grid item md={7} sm={8} xs={12} container spacing={1} className={item2}>
      <Tabs
      // position="relative"
    //   classes={{ indicator:indicator }}
    // TabIndicatorProps={{ style: { background: "red",width:"50px" } }}
        value={value}
        indicatorColor="primary"
        textColor="black"
        onChange={handleChange}
        className={tabs}
        // aria-label="disabled tabs example"
      >
        <Tab label="کالاها" className={tab} component={Link} 
            to="/admin/products" />
        <Tab label="قیمت و موجودی" className={tab} component={Link}  to="/admin/prices" />
        
        <Tab label="سفارش ها" component={Link}  to="/admin/orders" className={tab} />
      </Tabs>
  {/* <NavLink to="/admin/products" className={link} activeClassName={active} >کالاها</NavLink>
                          <NavLink to="/admin/prices " className={link} activeClassName={active}> قیمت و موجودی </NavLink>
                          <NavLink to="/admin/orders" className={link} activeClassName={active}>سفارش ها</NavLink> */}
  </Grid>
  <Grid item md={2} sm={2} xs={12} className={item3} >
  <Link to="/" className={link}>بازگشت به سایت</Link>
  </Grid>

</Grid>
              
                    
                    {/* </Box> */}
                    </AppBar>
        // </header>
    )
}

export default PublicHeader

// const PublicHeader = () => {
//     const {  appbar,box,link,tab,tabs,paper,indicator,active} =useStyles();
//     const [value, setValue] = React.useState(2);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//     return (
//         <div>
//             <AppBar  position="relative">
//                 <Toolbar   className={appbar}>

//                     {/* <Grid container direction="row">
//                     <Grid item> */}
//                     {/* <div> */}
//                     <Typography xs={12}>
//                         پنل مدیریت فروشگاه 
//                     </Typography>
//                     {/* </div> */}
                   
//                         <Box xs={12} className={box}>
//                         {/* <Paper className={paper} square> */}
//                           <NavLink to="/admin/products" className={link} activeClassName={active} >کالاها</NavLink>
//                           <NavLink to="/admin/prices " className={link} activeClassName={active}> قیمت و موجودی </NavLink>
//                           <NavLink to="/admin/orders" className={link} activeClassName={active}>سفارش ها</NavLink>
//       {/* <Tabs
//       // position="relative"
//     //   classes={{ indicator:indicator }}
//     // TabIndicatorProps={{ style: { background: "red",width:"50px" } }}
//         value={value}
//         indicatorColor="primary"
//         textColor="black"
//         onChange={handleChange}
//         className={tabs}
//         // aria-label="disabled tabs example"
//       >
//         <Tab label="کالاها" className={tab} component={Link} 
//             to="/admin/products" />
//         <Tab label="قیمت و موجودی" className={tab} component={Link}  to="/admin/prices" />
        
//         <Tab label="سفارش ها" component={Link}  to="/admin/orders" className={tab} />
//       </Tabs> */}
//     {/* </Paper> */}
                  
                    
//                     </Box>
                  
//                 </Toolbar>
//             </AppBar>
            
//         </div>
//     )
// }

// export default PublicHeader


          // {/* <Tabs className={tab} >
          //           <Tab className={tab} exact label='کالاها'
          //   component={Link}
          //   to="/"
          //    />
          //           <Tab bgcolor="secondary" exact label='کالاها'
          //   component={Link}
          //   to="/"
          //    />
          //           <Tab bgcolor="secondary" exact label='کالاها'
          //   component={Link}
          //   to="/"
          //    />
                   
          //           </Tabs> */}

          // {/* <Tab label={
          //     <React.Fragment>
          //       قیمت<br />
          //       <span style={{ fontSize: "smaller",width:"10px" }}>قیمت</span>
          //     </React.Fragment>
          //   } className={tab} component={Link}  to="/admin/prices" /> */}
