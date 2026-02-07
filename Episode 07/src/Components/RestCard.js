import { CDN_URL } from "../utils/urls";
const RestCard=(props)=>{
    const {data}=props;
    const {name,avgRating,cuisines,costForTwo,sla}=data?.info
    const lengthcontrol=(string)=> string.length > 15 ? string.slice(0, 15) + "..." : string



    return (
                <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
                    <div className="logo1">
                        <img src={CDN_URL+data.info.cloudinaryImageId} alt="" />
                    </div>
                   <div className="card-info">
  <h3 className="name">{name}</h3>

  <div className="meta">
    <span className="rating">{avgRating} ⭐</span>
    <span className="sla">{sla?.slaString}</span>
  </div>
  <p className="cuisines">{lengthcontrol(cuisines.join(", "))}</p>
  <p className="cost">{costForTwo}</p>
</div>

                </div>
    )
}
export default RestCard