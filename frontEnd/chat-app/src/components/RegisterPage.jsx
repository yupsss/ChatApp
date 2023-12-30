import styled from "styled-components";
import {Link} from "react-router-dom";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

        const handleSubmit = (event) =>{
            event.preventDefault();
            if(handleValidation())
            {
                alert("submit");
            }
        }
        const handleChange = (event) =>{
            setValues({ ...values , [event.target.name] : event.target.value});
        }

        const [values , setValues] = useState({
            username : "",
            email : "",
            password : "",
            confirmpassword : ""
        })

        const handleValidation = () => {
            const {password , confirmpassword, username, email} = values;

            let flag = true;

            if(username === ""){
                flag = false;
                toast.error("username required",{
                    position : "bottom-right",
                    autoClose : 2000,
                    theme : "colored"
                })
            }
            if(email === ""){
                flag = false;
                toast.error("email required",{
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
            if(confirmpassword === ""){
                flag = false;
                toast.error("confirm password required",{
                    position : "bottom-right",
                    autoClose : 2000,
                    theme : "colored"
                })
            }
            if(password !== "" && confirmpassword !== "" && password !== confirmpassword){
                flag = false;
                toast.error("password and confirm password should be same ",{
                    position : "bottom-right",
                    autoClose : 2000,
                    theme : "dark"
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
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        onChange={(event)=>{handleChange(event)}} 
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        name="password" 
                        onChange={(event)=>{handleChange(event)}} 
                    />
                    <input 
                        type="password" 
                        placeholder="confirm password" 
                        name="confirmpassword" 
                        onChange={(event)=>{handleChange(event)}} 
                    />
    
                    <button type="submit"> Create User </button>
                    <span>already have an account ? <Link to="/login">Login</Link></span>
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

 
export default RegisterPage;