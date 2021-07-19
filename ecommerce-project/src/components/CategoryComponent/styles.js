import { makeStyles } from "@material-ui/core";
// import image1 from "../../../assets/images/shop3.jpg"
export const useStyles=makeStyles((theme)=>({
    // root: {
    //     position: "relative",
    //     overflow: "hidden"
    // },
img:{
objectFit:"cover",
objectPosition:"center",
height:"100%",
width:"80%"
},
// container:{
//     position:"relative"
// },
imgContainer:{
   position:"relative",
   height:"300px",
   width:"100%",
//    backgroundImage:`url(${image1})` ,
   backgroundSize: "cover",
//    opacity:"0.6",
//    marginTop:"40px"
//    '&::before':{
// content:"",
// position:"absolute",
// top:0,
// left:0,
// width:"100%",
// backgroundImage:"url('https://placekitten.com/400/200')" ,
// // NodeFilter:"blur(2px)"
//    }
},
// content:{
//     position:"absolute",
//     top:"0",
//     right:"50px",
//     zIndex:"999"
// },
content:{
   position:"absolute",
   color:"rgb(250, 246 ,246,0.85)",
   right:"50px",
//    backdropFilter:"blur(4px)",
//    bottom:"0",
//    left:"0",
//    right:"0" 
},
// card:{
//     width:"100%",
//     height:"100%"
// },
// item:{
//     width:"100%",
//     height:"100%"
// }
item:{
marginTop:"40px",
height:"100%"
},
cardItem:{
    width:"100%",
    height:"100%", 
    textAlign:"center",
    background:"rgb(223 219 219 / 20%)"
},
paper:{
    // background:"#ededdc",
    background:"gray",
    padding:"2px 5px ",
marginTop:"30px",
textAlign:"center"
    // height:"300px"
},
boxContainer:{
    background:"rgba(234,149,63,0.2)",
    padding:"5px",
    margin:"5px 20%",
borderRadius:"5px",
textAlign:"center",
},
box:{
    // width:"150px",
    height:"100%",
    border:"1px solid rgba(234,149,63,0.9)",
    borderRadius:"5px",
    // margin:"5px auto",
    textAlign:"center",
    background:"white"
},
// container:{
//     margin:"10px 0"
// },
headerCategory:{
background:"rgba(111, 101 ,101,0.4)",
width:"100%",
padding:"10px",
textAlign:"center",
color:"#636363",
// height:"30px",
borderRadius:"5px",
margin:"10px auto"
},


}))