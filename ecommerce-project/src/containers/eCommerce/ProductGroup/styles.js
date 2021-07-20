import { makeStyles,fade } from "@material-ui/core";

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
        img:{
            objectFit:"cover",
            objectPosition:"center",
            height:"100%",
            width:"100%"
            },
            containerPaginate:{
                display:"flex",
                justifyContent:"center"
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