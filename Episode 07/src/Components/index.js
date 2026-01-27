import ReactDOM from "react-dom/client"
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";

const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    )
}

const appRouter=createBrowserRouter(
    [{
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
                }
        ]
    }
]
)



const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter} />)