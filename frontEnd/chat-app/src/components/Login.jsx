import styled from "styled-components";
import {Link} from "react-router-dom";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const handleChange = (event) =>{
        setValues({ ...values , [event.target.name] : event.target.value});
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(handleValidation())
        {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            };
            const  funct = async() =>
            {
                const response = await fetch('http://localhost:5000/login', requestOptions);

                if(response.status === 200)
                {
                    toast.error("login successfull",{
                        position : "bottom-right",
                        type : "success",
                        autoClose : 2000,
                        theme : "light"
                    })
                    console.log(response);
                    navigate('/home',{ replace: true });
                }

                else
                {
                    const mssg = await response.json();
                    if(mssg.error === "incorrect password") 
                    {toast.error("incorrect password",{
                        position : "bottom-right",
                        autoClose : 2000,
                        theme : "colored"
                    })}
                    else if(mssg.error === "register first")
                    {
                        toast.error("register first",{
                            position : "bottom-right",
                            autoClose : 2000,
                            theme : "colored"
                        })
                    }
                    else
                    console.log(mssg);
                }
            }
            funct();
        }
    }

    const [values , setValues] = useState({
        email : "",
        password : "",
    })

    const handleValidation = () => {
        const {password ,email} = values;

        let flag = true;

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
                        type="email" 
                        placeholder="email" 
                        name="email" 
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
    width: 75%;
    max-width: 400px;
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