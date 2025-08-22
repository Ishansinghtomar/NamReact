import ResContainer from "./ResContainer.js";
import Data from "../Utils/data.js"
const Body=()=>
{
    return(
<div className="body">
    <div className="Search">Search</div>
    <div className="res-container">
        <ResContainer resData={Data[0]}/> 
        {Data.map((resturarnt)=>(
            <ResContainer resData={resturarnt} key={resturarnt?.info?.id}/>  
        ))}

    </div>

</div>


    )
}
export default Body;