import { useEffect, useState } from "react";
import ShowItemList from "../components/ShowItemList";
import {fetchDeliveries } from "../services/fetchUtils";
import type {Delivery, ItemType} from "../services/types";


export default function DeliveriesPage() {

    //hook for fetching Deliveries data
    const [deliveriesData, setDeliveriesData] = useState<Delivery[]>([]);
    const [itemList, setItemList] = useState<ItemType[]>([]);
    
    useEffect(() => {
        fetchDeliveries().then((data) => setDeliveriesData(data));  
    }, []);

    //log DeliveriesData
    //transform Deliverieslist into itemlist
    useEffect(() => {
        console.log(deliveriesData)
         setItemList(deliveriesData.map((Deliveries) => {
        return {
            id: Deliveries.id,
            type: "Deliveries",
            list: Deliveries
        }}))
    }, [deliveriesData])
    return (
        <>
            <h1>DeliveriesPage</h1>
            <div className="product-table">
            {<ShowItemList list= {itemList  
                
            }/> }
            </div>
        </>
    )
}