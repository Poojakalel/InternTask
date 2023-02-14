import { useState } from 'react';
import {Link} from 'react-router-dom'

function ProCreate(){

    const [id,idchange]=useState("");
    const [title,titlechange]=useState("");
    const [price,pricechange]=useState("");
    const [category, categorychange]=useState("");
    const [active,activechange]=useState(true);

    const handlesubmit=(e)=>{

        e.preventDefault();
        console.log({id,title,price,category})
    }
    return(
        <div>

            <form className="row">
                <div className="contai" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>

                        <div className="card-title">
                            <h2>product create</h2>
                        </div>

                        <div className="card-body">
               
                       <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Id</label>
                                <input value={id}  disabled="disabled" className="form-control"/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>title</label>
                                <input value={title} onChange={e=>titlechange(e.target.value)} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>price</label>
                                <input value={price} onChange={e=>pricechange(e.target.value)} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>category</label>
                                <input value={category} onChange={e=>categorychange(e.target.value)} className="form-control"/>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-check">
                                <label>Id</label>
                                <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">Is Active</label>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Save</button>
                                <Link to="/" className="btn btn-danger">Back</Link>
                            </div>
                        </div>


                       </div>

                        </div>

                    </div>
                </div>
            </form>

        </div>
    )
}


export default ProCreate;