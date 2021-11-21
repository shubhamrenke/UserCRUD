import React from "react";
import './home.css'

interface IProps {
   setLoginUser : any 
}

const Home = (props: IProps) : React.ReactElement => {
    return (
        <div className="homepage">
            <h1>List of users</h1>
            <div className="button" onClick={() => props.setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Home