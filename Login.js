import { useState } from "react";

function Login(){

    const [user,setUser]=useState("");
    const [userErr,setUserErr]=useState(false)
    const [password,setPassword]=useState("")
    const [passwordErr,setPasswordErr]=useState(false)

    function userHandler(e){
        console.log(e.target.value)

        let item=e.target.value;
        if(item.length<4){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUser(item)
    }

    function passwordHandler(e){
        let item=e.target.value;
        if(item.length<4){
            setPasswordErr(true)
        }
        else{
            setPasswordErr(false)
        }

          setPassword(item)
    }

    function loginHandler(e){
        if(user.length<4|| password.length<4){
            alert("Invalid Data")
        }
        else{
            alert("all good")
        }
        e.preventDefault()
    }

    return(
        <div className="login">
            <h1>Login to my page</h1>
            
            <form onSubmit={loginHandler}>
                <input type="text" className="txt_field" placeholder="Enter user Id" onChange={userHandler}/>
                {userErr?<span>Invalid Data</span>:null}

                <br/><br/>
                <input type="password" className="txt_field" placeholder="Enter User password" onChange={passwordHandler}/><br/>
                {passwordErr?<span>Invalid Data</span>:null}

                <button className="txt_field">Login</button>
            </form>

          

        </div>
    )

}

export default Login;