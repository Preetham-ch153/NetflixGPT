import {RES_LOGO_URL} from "./utils/constants";
import UserContext from "./UserContext";
import {useContext} from "react";

const RestaurantCard = (props) => {
    const {loggedInUser} =useContext(UserContext);
    const {resData} =props;
  
     const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla,
      } = resData.info;
    return (
        <div className="w-[250] m-2 px-2 bg-gray-200 rounded-lg">
            <img className="w-[250] p-2  rounded-xl" src={RES_LOGO_URL + cloudinaryImageId}/>
            <div className="p-2">
                <h3 className="font-bold text-xl">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{sla.slaString}</h4>
                <h4>User : {loggedInUser}</h4>
            </div>
        </div>
    )

}
export default RestaurantCard;

export const withPromotedLabel = (RestaurantCard) => {
    return (props) =>{
        return(
            <div>
            <label className="absolute bg-black text-white m-2 px-2 rounded-lg ">Promoted</label>
            <RestaurantCard {...props} />
            </div>
        );
    };
};