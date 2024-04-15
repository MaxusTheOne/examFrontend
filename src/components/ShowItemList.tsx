import Item from './Item';
import {ItemType} from '../../services/types';

export default function ShowItemList(list: ItemType[]) {
    return (
         <div>
            {list.map((item)=> (
                <div key={item.id}>
                <Item item={item}/>
      
        </div>
        ))
    }
    </div>

    )
}