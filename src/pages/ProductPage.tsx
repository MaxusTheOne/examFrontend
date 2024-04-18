import { useEffect, useState } from "react";
import ShowItemList from "../components/ShowItemList";
import {fetchProducts } from "../services/fetchUtils";
import type {Product, ItemType} from "../services/types";


export default function ProductPage() {

    //hook for fetching Product data
    const [productData, setProductData] = useState<Product[]>([]);
    const [itemList, setItemList] = useState<ItemType[]>([]);
    
    useEffect(() => {
        fetchProducts().then((data) => setProductData(data));  
    }, []);

    //log productData
    //transform productlist into itemlist
    useEffect(() => {
        console.log(productData)
         setItemList( productData.map((product) => {
        return {
            id: product.id,
            type: "product",
            list: product
        }}))
    }, [productData])
    return (
        <>
            <h1>ProductPage</h1>
            <div className="product-table">
            {<ShowItemList list= {itemList  
                
            }/> }
            </div>
        </>
    )
}