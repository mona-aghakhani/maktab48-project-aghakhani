import { makeStyles } from "@material-ui/core";
export const useStyles=makeStyles((theme)=>({
    container:{
        margin:"5vh auto",
        padding:'0 10%'
    },
    img:{
        objectFit:"contain",
        objectPosition:"center",
        // height:"200px",
        // width:"200px",
        width:"100%",
        height:"100%",
        margin:"auto",
        // borderRight:"0.5px solid rgba(234,149,63,0.9) ",
        // borderTop:"0.5px solid rgba(234,149,63,0.9) ",
        },
        box:{
            width:"100%",
            height:'100%',
            textAlign:"center",
            boxShadow:"-5px 5px 5px rgba(234,149,63,0.9)",
            borderRight:"0.5px solid rgba(234,149,63,0.9) ",
            borderTop:"0.5px solid rgba(234,149,63,0.9) ",
            background:'white',
            boxSizing:"border-box"
        },
        boxDetail:{
            background:"rgba(234,149,63,0.2)",
            width:"100%",
            height:'100%',
        },
        paper:{
            padding:"5% 20%"
        },
        divider:{
            margin:"10px 0",
            background:"rgba(234,149,63,0.9)"
        },
        input:{
            width:"100%",
            fontWeight:"bold",
            fontSize:"18px"
        },
        btn: {
            background: "rgb(103,182,108)",
            padding: " 5px 10px",
            "&:hover": {
              background: "primary",
            },
          },
          gridImg:{
              height:"70%"
          }
}))