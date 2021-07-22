import { makeStyles } from "@material-ui/core";
export const useStyles=makeStyles((theme)=>({
btn:{
    background: "rgb(103,182,108)",
    padding:"5px 40px",
    // width:"80px",
    // height:"40px",
    // color:"white",
    // margin:"10px",
    borderRadius:"5px",
    marginTop:"5%"
    // fontSize:"10px"
},
dialogTitle:{
    fontSize:"17px",
},
input:{
    padding:0
},
// btnFile:{
//     fontSize: "10px",
//     padding: "5px 20px",
//     margin:"20px auto",
//     background: "rgb(103,182,108)",
//     // borderRadius:"1px",
//     // outline:"none",
//     // border:"none",
//     cursor:"pointer"
// },
label:{
    color:"rgba(154,154,154,0.6)",
    fontSize:"11px"
},
paper: {
    margin: "10% auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // minWidth:"300px",
    padding:theme.spacing(6),
    width:"70%"
  },
  title:{
      marginBottom:"5%"

  }

}))