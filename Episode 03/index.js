import React from "react";
import ReactDOM from "react-dom/client"

const Title=()=>(
<div>
    <h1>Title Div</h1>
</div>
)
const Heading=()=>(
<div className="container">
     <h2>Head Div</h2>
     <Title/>
</div>

)

const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(<Heading/>)