import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"

function Admin(){
    return(
        <div>
           <div className="navi">
            <NavLink to="/allproduct">AllProduct</NavLink>
            <NavLink to="/addtocart">AddToCart<FaShoppingCart/></NavLink>
            <NavLink to="/login">Login</NavLink>
        
           </div>
        </div>
    )
}

export default Admin;