import React, { useState, useEffect } from "react";
import { getCategoryList } from "../../../api/products/products"
import CategoryComponent from "../../../components/CategoryComponent";
// import image1 from "../../../assets/images/shop3.jpg"
import { useStyles } from "./styles";
const ProductListing = () => {
    const { imgContainer, content } = useStyles()

    const categoryList = [
        'خواروبار',
        'لبنیات',
        'شوینده',
        'نوشیدنی'
    ];


    const [dataDairy, setDataDairy] = useState([]);
    const [dataWasher, setDataWasher] = useState([]);
    const [dataِDrinks, setDataDrinks] = useState([]);
    const [dataِGrocery, setDataGrocery] = useState([]);
    // const getDairyList=async()=>{
    // let res = await axios.get('http://localhost:5000/products?category=لبنیات&start=0&_limit=6')
    // return res

    //     }

    useEffect(() => {
        getCategoryList(categoryList[1]).then(res => setDataDairy(res.data))
        getCategoryList(categoryList[2]).then(res => setDataWasher(res.data))
        getCategoryList(categoryList[3]).then(res => setDataDrinks(res.data))
        getCategoryList(categoryList[0]).then(res => setDataGrocery(res.data))

        // dispatch(getProducts());
    }, []);
    
    return (

        <div style={{ marginBottom: "5vh" }}>
            <div className={imgContainer}>
                <h2 className={content}> هرکسی می تواند قدری  <span style={{ color: "rgb(82, 195 ,89)" }}>سبز</span> زندگی کند</h2>
            </div>
            <CategoryComponent title='لبنیات' categorydata={dataDairy} />
            <CategoryComponent title='شوینده' categorydata={dataWasher} />
            <CategoryComponent title="خواروبار" categorydata={dataِGrocery} />
            <CategoryComponent title='نوشیدنی' categorydata={dataِDrinks} />
        </div>
    )

}

export default ProductListing
