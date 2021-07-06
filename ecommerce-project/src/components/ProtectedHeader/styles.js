import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../styles/constantVariable";
export const useStyles=makeStyles((theme)=>({
    appbar:{
        // minHeight:"40px",
        // display:"block",
        justifyContent:"space-between",
        padding:"0 5px"
    },
    box:{
        display:"flex",
        justifyContent:"space-between"
    },
    grid:{
        alignItems:"center",
        justifyContent:"center"
    },
    item1:{
        textAlign:"center"
    },
    
    item3:{
        textAlign:"center",
        textDecoration:"none"
    },
    item2:{
        justifyContent:"center",
        margin:"20px 0"
        
    },
    // paper:{
    //     borderRadius:"5px",
    //     // width:"60vw"
    // },
    link:{
        textDecoration:"none",
        color:"black",
        fontSize:"10px",
        margin:"10px",
        '&:hover':{
            textDecoration:"none"
        }
        // border:"1px solid beige",
        // padding:"10px 15px",
        // background:"beige"
    },
    active:{
        background:"rgb(214,230,215,0.9)",
    },
    tabs:{
        // border:"1px solid black",
        // width:"30vw",
        // width:"60vw",
        minHeight:"10px",
        background:"rgba(245, 245, 220 , 0.85)",
    //   direction:"ltr"
        

    },
    indicator: {
        backgroundColor: "rgb(103,182,108)"
      },
    tab:{
        fontSize: '12px',
            lineHeight: '10px',
            padding: '10px',
            // width:"30%",
            // marginBottom: '12px',
            letterSpacing: '0',
            // fontWeight: Typography.fontWeightNormal,
            // color: Typography.textDarkBlack,
        // margin:"10px 0",
        // background:"blue",
        // textDecoration:"none",
        minHeight:"10px",
        color:"black",
        textDecoration:"none",
        '&:hover':{
            textDecoration:"none"
        }
        // width:"10vw"
        // color: COLORS.textColor,
    }
}))