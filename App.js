import AllProduct from "./AllProduct"
import "./App.css"
// import allproduct from './allproduct.json'
import { BrowserRouter, Route,Routes } from "react-router-dom"
import Login from "./Login"
import NavBar from "./NavBar"
import Home from './Home'
import CartList from './CartList'
import { useState } from "react"
import ProdList from "./ProdList"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProCreate from "./ProCreate"
import ProDetails from "./ProDetails"
import ProEdit from "./ProEdit"
function App(){

  const [cart,setCart]=useState([])

  console.log(cart)
  const addToCart=(data)=>{
    setCart([...cart, {...data,quantity:1}])
  }
  

  return(
    <div className="App">

      <BrowserRouter>

      <NavBar/>


      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/allproduct" element={<AllProduct addToCart={addToCart}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cartlist" element={<CartList cart={cart}/>}/>
        <Route path="/prodList" element={<ProdList/>}/>
        <Route path="/procreate" element={<ProCreate/>}/>
        <Route path="/prodetails/:proid" element={<ProDetails/>}/>
        <Route path="proedit/:empid" element={<ProEdit/>}/>
      </Routes>
      </BrowserRouter>

      

      

      {/* <div className="maine">
        {
          allproduct.map((element,index)=>{
            return(
              <AllProduct
              key={index}
              id={element.id}
              title={element.title}
              category={element.category}
              price={element.price}
              description={element.description}
              image={element.image}
              rating={element.rating}

              />
            )
          })
        }

        
      </div> */}



    </div>
  )
}


export default App;