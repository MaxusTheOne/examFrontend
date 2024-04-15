import { ItemType } from "../../services/types";


export default function Item({ item}: { item: ItemType }) {
  return (
    <>
   
      {Object.entries(item.list).map(([key, value], i) => (
            Object.entries(value).map(([key, value], i) => (
              <div key={i}>
                {key}: {typeof value === 'string' || typeof value === 'number' ? value : 'unknown'}
              </div>
            ))
            
          ))}
    </>
  );
}