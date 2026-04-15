import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {RES_MENU_API} from "./utils/constants";
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [menuList,setMenuList] =useState(null);
    const [showIndex,setShowIndex] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data=await fetch(RES_MENU_API + resId);
        
        const json= await data.json();
        console.log(json);
        setMenuList(json.data);

    };
    if(menuList === null)
        return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = menuList?.cards[2]?.card?.card?.info;
    const { itemCards } =menuList?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
    
    const categories =menuList?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return(
        <div className="menu text-center">
            <h1 className="font-bold text-2xl p-2">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")} -{costForTwoMessage}</p>
            <div>
                {categories.map((category,index) => (
                    <RestaurantCategory key={category?.card?.card?.title} 
                    data={category?.card?.card}
                    showItems={index ===showIndex ? true :false }
                    setShowIndex={()=>setShowIndex(index)}
                
                    />
                ))}
            </div>

        </div>
    )

}

export default RestaurantMenu;