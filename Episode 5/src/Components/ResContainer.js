import { CDN_URL } from "../Utils/constants";
const ResContainer=(props)=>{


    const {name,costForTwo}=props?.resData?.info
    return(
<div className="res-card">
    {console.log(props)}
    <img src={CDN_URL + props?.resData?.info?.cloudinaryImageId} ></img>
    <h5>{name}</h5>
    <h6>{props?.resData?.info?.cuisines.join(",")}</h6>
    <h6>{props?.resData?.info?.avgRating}</h6>
    <h6>{costForTwo}</h6>
    <h6>{props?.resData?.info?.sla?.deliveryTime} Minutes</h6>
   
   </div>
    )
}

export default ResContainer;