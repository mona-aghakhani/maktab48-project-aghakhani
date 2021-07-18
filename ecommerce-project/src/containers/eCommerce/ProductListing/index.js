// import { Card } from "@material-ui/core";
import React 
// { useState,useEffect } 
from "react";
import Carousel from 'react-material-ui-carousel';
import CarouselSlide from 'react-material-ui-carousel';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image1 from "../../../assets/images/1.jpg"
import image2 from '../../../assets/images/dairy1 (1).jpg';
// import image4 from "./4.jpg";
import { useStyles } from "./styles";
const ProductListing = () => {
const {img,root}=useStyles()
    const pictures = [
        {image:image1, title:'خواروبار'},
        {image:image2, title:'لبنیات'},
        // {image:'./3.jpg', title:'Iu 2'},
        // {image:'./4.jpg', title:'Iu 3'}
    ];

/*
* without redux
*/

    // const [tasks, setTasks] = useState([]);
    // useEffect(() => {
    //     const getTasks = async ()=>{
    //       const taskFromServer = await fetchTasks()
    //       setTasks(taskFromServer)
    //     }
    
    //     getTasks();
    //   }, [])
    //   const fetchTasks = async () => {
    //     try {
    //       const response = await fetch(`http://localhost:5000/products`);
    //       const data = await response.json();
    //       return data;
    //     } catch (err) {
    //     //   toast.error("request failed!");
    //     } finally {
    //       // console.log("it is done!!");
    //     }
    //   };
      // console.log(tasks);




    return (
        <div
        //  style={{width:"100%",height:"500px"}}
         >
           {/* {tasks.map((task)=>(
               <>
               <div>{task.title}</div>
               <img style={{width:"100px",height:"100px"}} src={task.image}/>
               </>
           ))

           } */}
           <Carousel>
           {/* <div className={root}> */}
                {pictures.map(({image, title}) => (
                    <CarouselSlide key={image}>
                        {/* <Card> */}
                            <CardMedia
                                image={image}
                                title={title}
                                style={{
                                    height: 0,
                                    paddingTop: '25%',
                                }}
                                className={img}
                            />
                            {/* <CardContent>
                                <Typography>{title}</Typography>
                            </CardContent> */}
                        {/* </Card> */}
                    </CarouselSlide>
                ))}
                {/* </div> */}
            </Carousel>
        </div>
    )
}

export default ProductListing
