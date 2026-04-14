
import { LOGO_URL } from "../utils/urls"
import { Link } from "react-router-dom"
import useOnline from "../utils/useOnline"
const Header=()=>{
    const online= useOnline()||"";
    console.log(online)
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="img" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                <li>Status:{online ? "🟢 Online" : "🔴 Offline"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/instamart">Mart</Link></li>
                <li><a href="/cart">Cart</a></li>
                </ul>
                </div>
                </div>

    )
}
export default Header