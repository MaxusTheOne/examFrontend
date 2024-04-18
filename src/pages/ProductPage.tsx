import { ChangeEvent, useEffect, useState } from "react";
import ShowItemList from "../components/ShowItemList";
import {fetchProducts, postProduct} from "../services/fetchUtils";
import type {Product, ItemType} from "../services/types";
import Popup from 'reactjs-popup';


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
            id: product.id || 0,
            type: "product",
            list: product
        }}))
    }, [productData])

    const handleSubmit = (event :React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = postProduct({name: data.get('name') as string, price: data.get('price') as unknown as number, weightInGrams: data.get('weight') as unknown as number})
        console.log(response)
    }

    const handleSearch = (event :ChangeEvent) => {
        const search = (event.target as HTMLInputElement).value
        setItemList(productData.filter((product) => product.name.includes(search)).map((product) => {
            return {
                id: product.id || 0,
                type: "product",
                list: product
            }
        }))
    }

    return (
        <>
            <h1>ProductPage</h1>
            <Popup trigger={<button> Add product</button>} position="right center">
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" />
                    </label>
                    <label>
                        Weight:
                        <input type="text" name="weight" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </Popup>
            <div className="search-box">
                <input type="text" placeholder="Search..." onChange={handleSearch}/>
                <button className="search-button">Search</button>
            </div>
            <div className="product-table">
                <div className="product-row header">
                    <div className="product-cell">ID</div>
                    <div className="product-cell">Name</div>
                    <div className="product-cell">Price</div>
                    <div className="product-cell">Weight</div>
                </div>
                {<ShowItemList list= {itemList  
                    
                }/> }
            </div>
        </>
    )
}