import {ITEMS_IMG_URL} from "./utils/constants";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";
// import Cart from "./Cart";

const ItemList = ({items}) => {
    console.log(items);
    const dispatch = useDispatch();
    const handleAddItem =(item) => {
        dispatch(addItem(item));
    }


    return(
        <div>
            {items.map((item) => (
            <div key={item.card?.info?.id} 
               className="text-left border-b-3 my-2 border-gray-200 flex justify-between">
                <div className="w-11/12">
                    <div className="font-bold py-0.5 ">
                    <span>{item.card?.info.name}</span>
                    -₹ <span>{item.card?.info.price ? item.card?.info.price / 100 : item.card?.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{item.card?.info?.description}</p>
                </div>
                <div className="w-2/12 my-2 ">
                <div className="absolute">
                    <button className="my-13 mx-8 p-1 rounded-lg bg-white text-black shadow-lg cursor-pointer" onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                    <img src={ITEMS_IMG_URL + item.card.info.imageId}/>  
                </div>
            </div>
        

                
        ))}
        </div>

    );
}

export default ItemList;