import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function ProdList(){

    const [prodData,proddatachange]=useState([])

    useEffect(()=>{

        fetch("https://fakestoreapi.com/products").then((res)=>{
            return res.json();
        }).then((resp)=>{
            proddatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })

    },[])
    return(
        <div className="contai">

     <div className="card">
        <div className="card-title">
            <h2>Product List</h2>
        </div>

        <div className="card-body">
            <div className='divbtn'>
                <Link to="/procreate" className="btn btn-success">Add New (+)</Link>
            </div>
            <table className="table table-bordered">

                <thead className="bg-dark text-white">

                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Category</td>
                        <td>Action</td>
                    </tr>

                </thead>

                <tbody>
                    {
                        
                        prodData.map(item=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td><a className="btn btn-success">Edit</a>
                                <a className="btn btn-danger">Remove</a>
                                <a className="btn btn-primary">Details</a>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
     </div>

        </div>
    )
}

export default ProdList;