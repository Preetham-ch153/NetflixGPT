import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data,showItems,setShowIndex}) => {
    // const[showItems,setShowItems] = useState(false);
    const handleClick = () => {
        setShowIndex();
        
    }

    return (
        <div className="p-4 w-6/12 mx-auto my-2 bg-gray-100 shadow-xl">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg py-1">{data.title} ({data?.itemCards.length})</span>
            <span className="font-bold">⌄</span>
            </div>
            {showItems && <ItemList items={data?.itemCards} />}
        </div>
    )
}

export default RestaurantCategory;