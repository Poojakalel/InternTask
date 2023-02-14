import './App.css'
import React,{useState,useEffect} from "react";


function AllProduct({addToCart}){

    //https://fakestoreapi.com/products

    const [fake,setFake]=useState([]);

    useEffect(()=>{
        fakestore();
    },[])
    console.log(fake);

    const fakestore=async()=>{
        const response=await fetch("https://fakestoreapi.com/products");
        // console.log(response);
        const jsonData=await response.json();
        // console.log(jsonData);
        setFake(jsonData);
    }

    // fakestore();


    return(
        <div>

            <div className='container'>
                {
                    fake.map((values,productItem)=>{
                        return(
                            <div>

<div className='box'>
                    <div className='content'>
                        <h3>{values.title}</h3>
                        <p>{values.description}</p>
                        <p>{values.price}</p>
                        
                    </div>
                    <img src={values.image} alt=""/>
                    <div>
                        <button onClick={()=>addToCart(productItem)}>Add To cart</button>
                    </div>
                </div>



                            </div>
                        )
                    })
                }
              
            </div>
        </div>
    )

  
    
    
}

export default AllProduct;