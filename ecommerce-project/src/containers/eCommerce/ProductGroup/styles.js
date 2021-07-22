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
              background:"rgb(103,182,108)",
              borderColor:"rgb(103,182,108)",
              color:"#fff"
          },
          '&>li > a':{
              border:"1px solid rgb(103,182,108)",
              padding:"5px 10px",
              outline:"none",
              cursor:"pointer"
          }

      },
      active:{
        //   color:"red"
          '&>a':{
            background:"rgb(103,182,108)",
            borderColor:"rgba(234,149,63,0.9)",
            color:"#fff" 
          }
      },
      mainContainer:{
          margin:"10% 10px"
      },
      sort:{
          display:"flex",
          alignItems:"center"
      },
      sortTilte:{
          marginRight:"5px"
      },
      headerCategory:{
        background:"rgba(111, 101 ,101,0.4)",
        width:"100%",
        // padding:"10px",
        textAlign:"center",
        color:"#636363",
        // height:"30px",
        borderRadius:"5px",
        margin:"0px auto"
        },
        search:{
            margin:"3px 1px",
            height:"32px"
        },
        // label:{
        //     color:"rgba(154,154,154,0.6)",
        //     // fontSize:"11px",
        //     // position:"relative",
        //     // bottom:"3px"
        // },
        select:{
            margin:0,
            height:"30px"
        },
      
            containerPaginate:{
                display:"flex",
                justifyContent:"center",
                margin:"20vh 0 0"
            },
            boxContainer:{
                background:"rgba(234,149,63,0.2)",
                padding:"5px",
                margin:"5px 20%",
            borderRadius:"5px",
            textAlign:"center",
            width:"60%",
            height:'50%'
            },
            box:{
                // width:"150px",
                height:"100%",
                width:"100%",
                overflow:"hidden",
                border:"1px solid rgba(234,149,63,0.9)",
                borderRadius:"5px",
                // margin:"5px auto",
                textAlign:"center",
                background:"white"
            },
            img:{
                objectFit:"contain",
                objectPosition:"center",
                height:"100px",
                width:"100px",
                margin:"auto"
                },
            cardItem:{
                width:"100%",
                height:"100%", 
                textAlign:"center",
                background:"rgb(223 219 219 / 20%)"
            },
            mainGrid:{
                overflow:"hidden"
            },
            nav:{
                textDecoration:"none",
                cursor:"pointer",
                color:"black",
                fontWeight:"bold",
                fontSize:"20px"
            
            },
            activeNav:{
                color:"rgb(103,182,108)",
                // background:"rgb(103,182,108)",
                '&>li':{
                    background:"rgb(103,182,108,0.1)",
                    paddingTop:0,
                    // borderColor:"rgba(234,149,63,0.9)",
                    // color:"#fff" 
                  }
            },
            link:{
                textDecoration:"none",
            }
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