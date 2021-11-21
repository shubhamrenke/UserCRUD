import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { serverUrl } from "../../constant";
import { IUser } from "../../interface/user";
import { useForm } from "react-hook-form";

const Register = () : React.ReactElement => {
     const { register, handleSubmit, formState: { errors } } = useForm<IUser>();
     const navigate = useNavigate()
     const [ error , setError] = useState<{message : string}>({message : ''})
     const onSubmit = (data : IUser) => {
        if(data){
            axios.post(`${serverUrl}/auth/register`, data)
            .then( res => {
                setError({message : res.data.message})
                navigate("/login")
            })
        } 
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>
            <input 
                className="form-input"
                type="text"
                {...register("initials", { required: true, pattern: /^[a-zA-Z ]*$/ })}
                placeholder="Mr/ Miss" 
              >
            </input>
             <span className="error">
             {errors.initials && errors.initials?.type !== 'pattern' && "initials is required"}
             {errors.initials?.type === 'pattern' && "Please enter alphabet characters only."}
            </span>
            <input 
                className="form-input"
                type="text"  
                {...register("firstName", { required: true, pattern: /^[a-zA-Z ]*$/ })}
                placeholder="Enter First Name">
            </input>
             <span className="error">
            {errors.firstName && errors.firstName?.type !== 'pattern' &&  "First Name is required"}
            {errors.firstName?.type === 'pattern' && "Please enter alphabet characters only."}
            </span>
            <input 
                className="form-input"
                type="text" 
                {...register("middleName", { required: true, pattern: /^[a-zA-Z ]*$/ })}
                placeholder="Enter Middle Name" 
            >
            </input>
             <span className="error">        
            {errors.middleName && errors.middleName?.type !== 'pattern' &&  "Middle Name is required"}
            {errors.middleName?.type === 'pattern' && "Please enter alphabet characters only."}
            </span>
            <input 
                className="form-input"
                type="text"
                {...register("lastName", { required: true, pattern: /^[a-zA-Z ]*$/ })}
                placeholder="Enter Last Name" 
            >
            </input>
             <span className="error">
            {errors.middleName && errors.lastName?.type !== 'pattern' &&  "Middle Name is required"}
            {errors.middleName?.type === 'pattern' && "Please enter alphabet characters only."}
            </span>
            <input 
                className="form-input"
                type="text"
                {...register("email", { required: true, pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i})}
                placeholder="Enter Email" 
               >
            </input>
             <span className="error">
            {errors.email && errors.email?.type !== 'pattern' &&  "Email is required"}
            {errors.email?.type === 'pattern' && "Please enter valid email."}
            </span>
            <input 
                className="form-input"
                type="text" 
                {...register("mobile", { required: true, pattern:/^[0-9]{10}$/ })}
                placeholder="Enter Mobile no." 
            >
            </input>
             <span className="error">
            {errors.mobile && errors.mobile?.type !== 'pattern' &&  "Mobile number is required"}
            {errors.mobile?.type === 'pattern'  && "Please enter 10 digit mobile number."}
            </span>
            <input 
                className="form-input"
                type="password" 
                {...register("password", { required: true, pattern: /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/ })}
                placeholder="Enter Password" 
            >
            </input>
            <span className="error">
             {errors.password && errors.password?.type !== 'pattern' &&  "Password is required"}
             {errors.password?.type === 'pattern' && "Must be at least 8 characters & 1 special character, 1 number, 1 lowercase, 1 uppercase letter"}
            </span>
            <div>
            <button className="submit-button" type="submit">Register</button>
            <button className="submit-button" onClick={() =>navigate("/login")}>Login</button>
            </div>
        </form>
         <span className="error">{error.message}</span>
        </div>
    )
}

export default Register