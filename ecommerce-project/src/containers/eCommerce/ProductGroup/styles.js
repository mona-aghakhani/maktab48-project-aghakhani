import { makeStyles } from "@material-ui/core";

export const useStyles=makeStyles((theme)=>({
    sidebar :{
        border:"1px solid rgba(0,0,0,0.12)",
        // BorderBottom:"1px solid rgba(0,0,0,0.12)"
    },
    progress: {
        marginLeft: '45%',
        marginTop:"15%"
      },
      pagination :{
          margin:"15px auto",
          display:"flex",
          listStyle:"none",
          outline:"none",
          '&>active > a':{
              background:"green",
              borderColor:"green",
              color:"#fff"
          },
          '&>li > a':{
              border:"1px solid #47ccde",
              padding:"5px 10px",
              outline:"none",
              cursor:"pointer"
          }

      },
      active:{
        //   color:"red"
          '&>a':{
            background:"green",
            borderColor:"green",
            color:"#fff" 
          }
      }

}))