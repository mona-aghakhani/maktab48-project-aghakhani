import { makeStyles } from "@material-ui/core/styles";
export const useStyles2 = makeStyles({
    // table: {
    //   minWidth: 650,
    //   // direction:'rtl',
    //   // marginTop: 50,
    //   // borderTop: "1px solid gray",
    // },
    paper: {
      width: "90%",
      display:"flex",
      height:"100%",
      // height:"200px",
      // margin: theme.spacing(5),
      // padding: theme.spacing(3)
      margin: "20px auto",
      // background:"lightgray"
      background: "rgba(231, 231 ,231,0.45)",
    },
    grid: {
      width: "90%",
      margin: "20px auto",
    },
    btn: {
      background: "rgb(103,182,108)",
      padding: " 5px 10px",
      "&:hover": {
        background: "primary",
      },
    },
  //   dialogTitle: {
  //     fontSize: "17px",
  //   },
  //   box:{
  //     textAlign:"center",
  //     cursor:"pointer",
  // // margin:"5px",
  // '&:hover':{
  // borderBottom:"1px solid rgb(234,149,63,0.9)"
  // }
  //   },
  //   img:{
  //     objectFit:'cover',
  //     objectPosition:'center',
  //     width:"60px",
  //     height:"60px",
  //     borderRadius:"50%",
  //   },
    progress: {
      marginLeft: '45%',
      marginTop:"15%"
    },
    // tableSortLabel: props => ({
    //   // backgroundColor: "gray",
    //   color:"gray",
    //   fill: "gray",
    //   "&:hover": {
    //     // backgroundColor: "gray",
    //     color:"gray"
    //   }
    // }),
    // icon:{
    //   color:"red"
    // },
    // caption: {
    //   color: "none",
    //   // padding: 8,
    //   // border: "1px dashed grey",
    //   // fontSize: "0.875rem"
    // },
    // toolbar: {
    //   "& > p:nth-of-type(2)": {
    //     // fontSize: "1.25rem",
    //     // opacity:0,
    //     direction:"ltr"
    //     // fontWeight: 600
    //   }

    // },
  //   icon: {
  //     display: 'none',
  // },
  // active: {
  //     '& $icon': {
  //         display: 'inline',
  //     },
  // },

    // activeSortIcon: {
    //   // "& > :not(nth-of-child(2))": {
    //     // fontSize: "1.25rem",
    //     opacity:1,
    //     color:"red"
    //     // fontWeight: 600
    //   // }
    //   // opacity: 1,
    //   // color:"black"
    // },
    // // Half visible for inactive icons
    // inactiveSortIcon: {
    //   opacity: 0,
    // },

  });
