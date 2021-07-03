import { Card } from "@material-ui/core";
import React, { useState,useEffect } from "react";

const ProductListing = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const getTasks = async ()=>{
          const taskFromServer = await fetchTasks()
          setTasks(taskFromServer)
        }
    
        getTasks();
      }, [])
      const fetchTasks = async () => {
        try {
          const response = await fetch(`http://localhost:5000/products`);
          const data = await response.json();
          return data;
        } catch (err) {
        //   toast.error("request failed!");
        } finally {
          console.log("it is done!!");
        }
      };
      console.log(tasks);
    return (
        <div style={{width:"100%",height:"500px",background:"yellow"}}>
           {tasks.map((task)=>(
               <>
               <div>{task.title}</div>
               <img style={{width:"100px",height:"100px"}} src={task.image}/>
               </>
           ))

           }
        </div>
    )
}

export default ProductListing
