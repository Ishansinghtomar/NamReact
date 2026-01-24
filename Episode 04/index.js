import React from "react";
import ReactDOM from "react-dom/client"
import resdata from "./data";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="img" src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/83/51/f0/8351f06c-2826-69bf-1cd5-3d501d1b2a3e/iMessage_App_Icon-1x_U007emarketing-0-0-85-181-0.png/1200x630wa.jpg" alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul>
                </div>
                </div>

    )
}
const RestCard=(props)=>{
    const {data}=props;
    const {name,avgRating,cuisines,costForTwo,sla}=data?.info
    return (
                <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
                    <div className="logo1">
                        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data.info.cloudinaryImageId} alt="" />
                    </div>
                   <div className="card-info">
  <h3 className="name">{name}</h3>

  <div className="meta">
    <span className="rating">{avgRating} ⭐</span>
    <span className="sla">{sla?.slaString}</span>
  </div>
  <p className="cuisines">{cuisines.join(", ")}</p>
  <p className="cost">{costForTwo}</p>
</div>

                </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="Search">Search </div>
            <div className="res-container">
           {
            resdata.map((resturarant)=>
                <RestCard data={resturarant} key={resturarant.info.id} ></RestCard>

           )
           }
               

            </div>

        </div>
    )
}
const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(<AppLayout/>)