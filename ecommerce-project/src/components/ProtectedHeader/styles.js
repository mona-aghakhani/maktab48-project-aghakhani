import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../styles/constantVariable";
export const useStyles=makeStyles((theme)=>({
    appbar:{
        minHeight:"40px",
        justifyContent:"space-between",
        padding:"10px"
    },
    box:{
        display:"flex",
        justifyContent:"space-between"
    },
    paper:{
        borderRadius:"5px",
        // width:"60vw"
    },
    tabs:{
        // border:"1px solid black",
        // width:"30vw",
        // width:"60vw",
        minHeight:"10px",
        background:"beige",
      
        

    },
    indicator: {
        backgroundColor: "blue"
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
        // width:"10vw"
        // color: COLORS.textColor,
    }
}))