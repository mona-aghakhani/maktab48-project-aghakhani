import { makeStyles,fade  } from "@material-ui/core";
// import { COLORS } from "../../theme/constantVariable";
export const useStyles=makeStyles((theme)=>({
    appbar:{
        minHeight:"30px",
        justifyContent:"space-between",
        padding:"10px",
        alignItems:"center"
    },
    grid:{
      alignItems:"center",
      justifyContent:"center"
  },
   item1:{
    textAlign:"center"
},
item2:{
  justifyContent:"center",
  margin:"10px 0"
  
},
item3:{
  textAlign:"center",
  textDecoration:"none",
  alignItems:"center",
  justifyContent:"center",
},
    box:{
        display:"flex",
        justifyContent:"space-between"
    },
    link:{
        // marginRight:"20px",
        // textDecoration:"none",
        textDecoration:"none",
        color:"black",
        fontSize:"13px",
        display:"flex",
        alignItems:"center",
        // margin:"10px 0 0 5px",
        // width:"60px",
        // color: COLORS.textColor,
        '&:hover':{
          textDecoration:"none",
          borderBottom:"1px solid rgb(214,230,215)",
      }
    },
    // badge:{
    //   color:"white",
    //   background:"green"
    // }
    // search: {
    //     position: 'relative',
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: fade(theme.palette.common.white, 0.15),
    //     '&:hover': {
    //       backgroundColor: fade(theme.palette.common.white, 0.25),
    //     },
    //     marginRight: theme.spacing(2),
    //     marginLeft: 0,
    //     width: '100%',
    //     [theme.breakpoints.up('sm')]: {
    //       marginLeft: theme.spacing(3),
    //       width: 'auto',
    //     },
    //   },
    //   searchIcon: {
    //     padding: theme.spacing(0, 2),
    //     height: '100%',
    //     position: 'absolute',
    //     pointerEvents: 'none',
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //   },
    //   inputRoot: {
    //     color: 'inherit',
    //   },
    //   inputInput: {
    //     padding: theme.spacing(1, 1, 1, 0),
    //     // vertical padding + font size from searchIcon
    //     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    //     transition: theme.transitions.create('width'),
    //     width: '100%',
    //     [theme.breakpoints.up('md')]: {
    //       width: '20ch',
    //     },
    //   },
}))