import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { serverUrl } from "../../constant"
import { useForm } from "react-hook-form"
import { ILogin } from "../../interface/user"

interface IProps {
   setLoginUser : any 
}

const Login = (props : IProps) : React.ReactElement => {
     const [ error , setError] = useState<{message : string}>({message : ''})
     const { register, handleSubmit, formState: { errors } } = useForm<ILogin>();
     const navigate  = useNavigate()

     const onSubmit = (data :ILogin) => {
        axios.post(`${serverUrl}/auth/login`, data)
        .then(res => {
            props.setLoginUser(res.data.user)
            setError({message : res.data.message})
            navigate("/")
        }).catch(err => {
            console.log('errr', err.message)
        })
    }

    return (
         <div className="form">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
                className="form-input"
                type="text" 
                {...register("email", { required: true, pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i})}
                placeholder="Enter your Email"
            ></input>
            <span className="error">
            {errors.email && errors.email?.type !== 'pattern' &&  "Email is required"}
            {errors.email?.type === 'pattern' && "Please enter valid email."}
            </span>
            <input 
                className="form-input"
                type="password" 
                {...register("password", { required: true})}  
                placeholder="Enter your Password">
            </input>
            <span className="error">
            {errors.password && "Password is required"}
            </span>
            <div>
            <button type="submit" className="submit-button">Login</button>
            <button className="submit-button" onClick={() => navigate("/register")}>Register</button>
            </div>
            </form>
            <span className="error">{error.message}</span>
        </div>
    )
}

export default Login