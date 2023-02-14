import { useEffect, useState } from "react";

function CartList({cart}){

    const[CART,SetCART]=useState([])

    useEffect(()=>{
        SetCART(cart)
    },[cart])
    return(
        <div>
            {
                CART.map((cartItem,cartIndex)=>{
                    return(
                        <div>
                            <h1>{cartItem.id}</h1>
                            <p>{cartItem.title}</p>
                            <p>{cartItem.image}</p>
                            <p>{cartItem.description}</p>
                            
                            <button onClick={()=>{
                                const _CART=CART.map((item,index)=>{
                                    return cartIndex==index ? {...item,quantity:quantity+1}:item
                                })
                                SetCART(_CART)
                            }}>+</button>
                            <span>{cartItem.price * cartItem.quantity}</span>
                            <span>{cartItem.quantity}</span>
                            <button>-</button>
                        </div>    
                    )
                })
            }

            <p>Total:<span></span>
            {
                CART.map(item=>item.price*item.quantity).reduce((total,value)=>total+value,0)
            }
            </p>
        </div>
    )
}


export default CartList;