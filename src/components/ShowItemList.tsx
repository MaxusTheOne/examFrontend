import Item from './Item';
import type {ItemType} from '../../services/types';

export default function ShowItemList({list}:{list: ItemType[]}) {
    return (
         <>
            {list.map((item)=> (
                <div key={item.id}>
                <Item item={item}/>
      
        </div>
        ))
    }
    </>

    )
}