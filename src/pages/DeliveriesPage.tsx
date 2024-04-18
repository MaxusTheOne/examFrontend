import { ChangeEvent, useEffect, useState } from "react";
import ShowItemList from "../components/ShowItemList";
import {fetchDeliveries, postDelivery } from "../services/fetchUtils";
import type {Delivery, ItemType} from "../services/types";
import Popup from 'reactjs-popup';


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
            id: Deliveries.id || 0,
            type: "Deliveries",
            list: Deliveries
        }}))
    }, [deliveriesData])

    const handleSearch = (event :ChangeEvent) => {
        const search = (event.target as HTMLInputElement).value
        setItemList(deliveriesData.filter((product) => product.toDestination.includes(search)).map((product) => {
            return {
                id: product.id || 0,
                type: "product",
                list: product
            }
        }))
    }

    const handleSubmit = (event :React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = postDelivery({deliveryDate: data.get('date') as unknown as Date, fromWarehouse: data.get('fromWarehouse') as string, toDestination: data.get('destination') as string})
        console.log(response)
    }

    return (
        <>
            <h1>DeliveriesPage</h1>
            <Popup trigger={<button> Add product</button>} position="right center">
                <form onSubmit={handleSubmit}>
                    <label>
                        Date:
                        <input type="date" name="date" />
                    </label>
                    <label>
                        From warehouse:
                        <input type="text" name="fromWarehouse" />
                    </label>
                    <label>
                        Destination:
                        <input type="text" name="destination" />
                    </label>
                    <label>
                        Total price:
                        <input type="number" name="totalPrice" />
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
                <div className="product-cell">Date</div>
                <div className="product-cell">From warehouse</div>
                <div className="product-cell">Destination</div>
                <div className="product-cell"></div>
                <div className="product-cell"></div>
                <div className="product-cell">Total price</div>
                <div className="product-cell">Total weight (g)</div>
                <div className="product-cell">Total weight (kg)</div>
                </div>
            {<ShowItemList list= {itemList  
                
            }/> }
            </div>
        </>
    )
}