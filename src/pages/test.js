import React from "react";
import {navigate} from 'gatsby';
import Header from "../components/Header";

const Test = () => (

    <div>
         <Header></Header>
        <h1>This is a test page</h1>
        <p>I'm a'working</p>
        <button onClick={()=>navigate("/") }>Navigate to Homepage</button>
    </div>
)

export default Test;
