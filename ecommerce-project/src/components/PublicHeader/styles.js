import { makeStyles } from "@material-ui/core";
import { COLORS } from "../../theme/constantVariable";
export const useStyles=makeStyles((theme)=>({
    appbar:{
        minHeight:"40px",
        justifyContent:"space-between"
    },
    box:{
        display:"flex",
        justifyContent:"space-between"
    },
    link:{
        marginRight:"20px",
        textDecoration:"none",
        color: COLORS.textColor,
    }
}))