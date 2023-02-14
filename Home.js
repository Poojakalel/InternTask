import "./App.css"
import {useState,useEffect} from 'react'
function Home(){

    
    
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










    return(
        <div>
            
        <h1 className="text-center text-info">Shopping Items|Category</h1>

        <div className="container-fluid mx-2">
            <div className="row mt-5 mx-2">
                <div className="col-md-3">

                    <button className="btn btn-warning w-100 mb-4">Men</button>
                    <button className="btn btn-warning w-100 mb-4">WoMen</button>

                    <button className="btn btn-warning w-100 mb-4">Children</button>
                    <button className="btn btn-warning w-100 mb-4">Black</button>
                    <button className="btn btn-warning w-100 mb-4">All</button>




                </div>

                <div className="col-md-9">

                    <div className="row">

                    {
                    fake.map((value)=>{
                        return(
                            <div>
                        
                        <div className="col-md-4 mb-4">

<div className="card">
    <img src={value.image} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
     
        <p className="card-text">{value.description}</p>
        <p>Price:{value.price}</p>
        <p>{value.category}</p>
        <button className="btn btn-dark">Buy Now</button>
    </div>
</div>
</div>



                            </div>
                        )
                    })
                }

                        

                      

                        


                    </div>


                </div>

            </div>
        </div>

            
        </div>
    )
}

export default Home;