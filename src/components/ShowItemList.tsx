import Item from './Item';
import type {ItemType} from '../services/types';

export default function ShowItemList({list}:{list: ItemType[]}) {
    console.log(list);
    return (
         <>
            {list.map((item)=> (
                <div key={item.id} id={item.id+item.type} className='product-row'>
                <Item item={item.list} type={item.type}/>
      
        </div>
        ))
    }
    </>

    )
}