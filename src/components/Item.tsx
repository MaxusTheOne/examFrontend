
import { Delivery, Van, Product } from "../services/types";

export default function Item({ item, type }: ItemProps) {


  return (
    <>
   
      {
            Object.entries(item).map(([key, value], i) => (
              
              <div key={i} id={(item.id!.toString())+i.valueOf()+type} className="product-cell">
                {typeof value === 'string' || typeof value === 'number' ? value : 'unknown'}
              </div>
            ))
            
          }
    </>
  );
}

interface ItemProps {
  item: Delivery | Van | Product;
  type: string;
}