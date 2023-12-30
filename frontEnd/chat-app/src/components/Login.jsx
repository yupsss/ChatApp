
import styled from "styled-components";
import {Link} from "react-router-dom";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const handleChange = (event) =>{
        setValues({ ...values , [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(handleValidation())
        {
            alert("submit");
        }
    }

    const [values , setValues] = useState({
        username : "",
        password : "",
    })

    const handleValidation = () => {
        const {password ,username} = values;

        let flag = true;

        if(username === ""){
            flag = false;
            toast.error("username required",{
                position : "bottom-right",
                autoClose : 2000,
                theme : "colored"
            })
        }
        if(password === ""){
            flag = false;
            toast.error("password required",{
                position : "bottom-right",
                autoClose : 2000,
                theme : "colored"
            })
        }

        if(username !== "" && username.length < 5)
        {
            flag = false;
            toast.error("username length should be atleast 5",{
                position : "bottom-right",
                autoClose : 2000,
                theme : "dark"
            })

        }
        if(password!=="" && password.length < 8)
        {
            flag = false;
            toast.error("password length should be atleast 8",{
                position : "bottom-right",
                autoClose : 2000,
                theme : "dark"
            })
        }
        return flag;
    }


    
    return ( 
        <>
        <FormContainer>
                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <div className="logo">
                        <img src="" alt="" />
                        <h1>chat-app</h1>
                    </div>
                    <input 
                        type="text" 
                        placeholder="username" 
                        name="username" 
                        onChange={(event)=>{handleChange(event)}} 
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        name="password" 
                        onChange={(event)=>{handleChange(event)}} 
                    />
                    
                    <button type="submit"> Login </button>
                    <span>don't have an account ? <Link to="/register">Register</Link></span>
                </form>
            </FormContainer>
            <ToastContainer/>
        </>
     );
}

const FormContainer = styled.div`
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
input{
    min-width: 22lh;
    padding: 15px;
    border: solid 2px black;
    font-size: 20px;
    border-radius: 5px;
}
button{
    background-color: #ece8e8;
    padding :15px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 5px;
}
span a{
    text-decoration: none;
}

`;
 
export default Login;