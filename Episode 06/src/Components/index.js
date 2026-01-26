import ReactDOM from "react-dom/client"
import Header from "./Header";
import Body from "./Body";

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