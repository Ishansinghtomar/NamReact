import { LOGO_URL } from "../Utils/constants"

const Header=()=>
    {
        const style1={backgroundColor:"red"}
        return(
        <div className="header" style={style1}>
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-bar">
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
    export default Header