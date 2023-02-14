import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

function NavBar(){

    return(
        <div>
            <div className="navi-menu">
            <Link to='/'>Home</Link>
      <Link to="/allproduct">AllProduct</Link>
      <Link to="/login">Login</Link>
      <Link to="/prodlist">ProdList</Link>
      <Link to="/cartList"><p id="count"><FaShoppingCart/></p></Link>
      </div>
      
        </div>
    )
}

export default NavBar;