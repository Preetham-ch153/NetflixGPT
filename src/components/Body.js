import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import resList from "./utils/mockData";
import { useState,useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer  from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./UserContext";

const Body = () => {
  const [listOfRestaurant,setlistOfRestaurant] = useState([]);
  const [filteredList,setFilteredList] =useState([]);
  const [searchText,setSearchText] =useState("");
  const onlineStatus=useOnlineStatus();
  const RestaurantsPromoted=withPromotedLabel(RestaurantCard);
  const {loggedInUser,setUserName} =useContext(UserContext);
  
  console.log("Body Rendered",listOfRestaurant);
  useEffect(()=>{
    fetchedData();
  },[]);
  
    const fetchedData = async () => {
      const data =await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(listOfRestaurant.length === 0){
      return <Shimmer />;
    }
    if(onlineStatus===false){
      return <h1>Your Internet is Off Please Check your Internet</h1>
    }
    
    return (
        <div className="body">
          <div className="filter flex">
            <div className="search m-2 p-2">
              <input type="text" className="border border-solid border-black" value={searchText} 
               onChange={(e) => {
                setSearchText(e.target.value);
               }}
              />
              <button className="px-4 py-1 rounded-lg bg-green-100 m-2 cursor-pointer" onClick={() =>{
                const filteredList=listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredList);
              }}>Search</button>
            </div>
          <div className="m-2 p-2 flex items-center">
          <button className="px-2 py-1 m-2 bg-gray-200 rounded-lg cursor-pointer" onClick={() => { 
            const filteredResList=listOfRestaurant.filter((res)=>res.info.avgRating > 4
            );
            setFilteredList(filteredResList);
          }}>Top Rated Restaurants
          </button>
          <label className="font-bold">UserName : </label>
          <input  type="text" className="border border-black" value={loggedInUser} 
          onChange={(e)=>setUserName(e.target.value)}/>
          
          </div>

          </div>
            <div className="px-2 flex flex-wrap m-2">
              {filteredList.map((restaurants) => (
                <Link
                key={restaurants.info.id}
                to={"/restaurants/" + restaurants.info.id}
                >
                {
                restaurants.info.avgRating > 4 ? (<RestaurantsPromoted key={restaurants.info.id} resData={restaurants}/>) :
                (<RestaurantCard key={restaurants.info.id} resData={restaurants}/>) }
                </Link>
              ))}
            </div>
        </div>
    )
}

export default Body;