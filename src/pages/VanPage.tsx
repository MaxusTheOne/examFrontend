import { useEffect, useState } from "react";
import ShowItemList from "../components/ShowItemList";
import {fetchVans } from "../services/fetchUtils";
import type {Van, ItemType} from "../services/types";


export default function VanPage() {

    //hook for fetching Van data
    const [vanData, setVanData] = useState<Van[]>([]);
    const [itemList, setItemList] = useState<ItemType[]>([]);
    
    useEffect(() => {
        fetchVans().then((data) => setVanData(data));  
    }, []);

    //log vanData
    //transform Vanlist into itemlist
    useEffect(() => {
        console.log(vanData)
         setItemList(vanData.map((Van) => {
        return {
            id: Van.id,
            type: "Van",
            list: Van
        }}))
    }, [vanData])
    return (
        <>
            <h1>VanPage</h1>
            <div className="product-table">
                <div className="product-row header">
                <div className="product-cell">ID</div>
                <div className="product-cell">Brand</div>
                <div className="product-cell">Model</div>
                <div className="product-cell">Capacity (kg)</div>
                <div className="product-cell">Deliveries</div>
                <div className="product-cell">Weight of Deliveries</div>
                </div>
            {<ShowItemList list= {itemList  
                
            }/> }
            </div>
        </>
    )
}