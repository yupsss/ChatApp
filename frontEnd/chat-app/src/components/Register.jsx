import styled from "styled-components";

const Register = () => {

    const handleSubmit = (event) =>{
        alert("submit");
    }
    const handleChange = (event) =>{
        alert("change");
    }

    return ( 
    <>
        <FormContainer>
            <form onSubmit={(event) => {handleSubmit(event)}}>
                <div className="logo">
                    <img src="" alt="" />
                    <h2>chat-app</h2>
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
                    name="Email" 
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
                <span>already have an account ? <link to="/login">Login</link></span>
            </form>
        </FormContainer>
    </>
     );
}

const FormContainer = styled.div`

    form{
        display: flex;
        flex-direction: column;
    }
`;
 
export default Register;