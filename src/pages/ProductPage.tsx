import ShowItemList from "../components/ShowItemList";
import type {Product} from "../../services/types";


export default function ProductPage() {
    return (
        <>
            <h1>ProductPage</h1>
            <ShowItemList list= {[{
                id: 3, type: "product", list:[{ id: 3,  name:"wow", price:3, weight: 5 } as Product],
                
            }]}/>
        </>
    )
}