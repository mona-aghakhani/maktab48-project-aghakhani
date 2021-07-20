// import { Card } from "@material-ui/core";
import React,
{ useState, useEffect }
    from "react";
    // import { useSelector, useDispatch } from "react-redux";

// import Carousel from 'react-material-ui-carousel';
// import CarouselSlide from 'react-material-ui-carousel';
// import Card from '@material-ui/core/Card';
// // import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import image1 from "../../../assets/images/shop3.jpg"
// import image2 from '../../../assets/images/dairy1 (3).jpg';
// import {  getProducts, deleteProductById } from "../../../store/actions/productActions";
// import image4 from "./4.jpg";
import { useStyles } from "./styles";
// import { Container, Grid, Toolbar } from "@material-ui/core";
// import axios from "axios";
import {getCategoryList} from "../../../api/products/products"
import CategoryComponent from "../../../components/CategoryComponent";


const ProductListing = () => {
    const {  imgContainer, content } = useStyles()
    // const pictures = [
    //     {image:image1, title:'خواروبار'},
    //     {image:image2, title:'لبنیات'},
    //     // {image:'./3.jpg', title:'Iu 2'},
    //     // {image:'./4.jpg', title:'Iu 3'}
    // ];
    // const products = useSelector((state) => state.allProducts.products);
    // const dispatch = useDispatch();
    // console.log(products);
    const categoryList = [
        'خواروبار',
        'لبنیات',
        'شوینده',
        'نوشیدنی'
    ];
    // function getData() {
    //     for (let i = 0; i < categoryList.length; i++) {
    //         const categoryData=products.filter((item)=>item.category === categoryList[i])
    //         console.log(categoryData);
    //     }
    // }
    // getData()
  
    const [dataDairy, setDataDairy] = useState([]);
    const [dataWasher, setDataWasher] = useState([]);
    const [dataِDrinks, setDataDrinks] = useState([]);
    const [dataِGrocery, setDataGrocery] = useState([]);
//     const getDairyList=async()=>{
// let res = await axios.get('http://localhost:5000/products?category=لبنیات&start=0&_limit=6')
// return res
// // console.log(res.data);
// // setData(res.data)
//     }

    useEffect(() => {
        getCategoryList(categoryList[1]).then(res=>setDataDairy(res.data))
        getCategoryList(categoryList[2]).then(res=>setDataWasher(res.data))
        getCategoryList(categoryList[3]).then(res=>setDataDrinks(res.data))
        getCategoryList(categoryList[0]).then(res=>setDataGrocery(res.data))
        
        // dispatch(getProducts());
      }, []);
      console.log(dataDairy);
      console.log(dataWasher);
    // const dairyList=
    // const getData = () => {
    //     Promise.all(categoryList.map((item) => axios.get(`http://localhost:5000/products?category=${item}`)
    //         .then(res => {
    //       setData([...data,res.data])
                
    //             // console.log(res.data)
    //         }
    //         )
    //         .catch(err => console.log(err))
    //     ))
    //     //   setData(taskFromServer)
    // }

    // getData();
    // console.log(data);
    // useEffect(() => {
    //     const getData = () => {
    //         Promise.all(categoryList.map((item) => axios.get(`http://localhost:5000/products?category=${item}`)
    //             .then(res => {
    //           setData([...data,res.data])
                    
    //                 // console.log(res.data)
    //             }
    //             )
    //             .catch(err => console.log(err))
    //         ))
    //         //   setData(taskFromServer)
    //     }

    //     getData();
    // }, [])


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
         style={{marginBottom:"5vh"}}
        >

            <div className={imgContainer}>

                <h2 className={content}> هرکسی می تواند قدری  <span style={{ color: "rgb(82, 195 ,89)" }}>سبز</span> زندگی کند</h2>

            </div>
            {/* <div style={{margin:"10px 0"}}> */}
                <CategoryComponent title='لبنیات' categorydata={dataDairy} />
                {/* </div> */}
            {/* <div style={{margin:"10px 0"}}> */}
                <CategoryComponent title='شوینده' categorydata={dataWasher} />
                <CategoryComponent title='خوار و بار' categorydata={dataِGrocery} />
                <CategoryComponent title='نوشیدنی' categorydata={dataِDrinks} />
                {/* </div> */}
           
           {/* <CategoryComponent title='شوینده' categorydata={dataWasher} /> */}
            {/* {tasks.map((task)=>(
               <>
               <div>{task.title}</div>
               <img style={{width:"100px",height:"100px"}} src={task.image}/>
               </>
           ))

           } */}


        </div>
    )

}

export default ProductListing
