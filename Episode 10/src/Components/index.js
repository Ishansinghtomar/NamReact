import ReactDOM from "react-dom/client"
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import ResMenu from "./ResMenu";
import { lazy ,Suspense} from "react";

//const Insta=lazy(()=> import("./Instamart/Instamart"))
const Insta = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./Instamart/Instamart.js")), 3000);
  })
);


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
                },
            {
                path:"/instamart",
                element:<Suspense fallback="Loading.."><Insta/></Suspense>
                },
            {
                path:"/restaurant/:resid",
                element:<ResMenu/>

            }
        ]
    }
]
)



const Root=ReactDOM.createRoot(document.getElementById("root"))
Root.render(<RouterProvider router={appRouter} />)