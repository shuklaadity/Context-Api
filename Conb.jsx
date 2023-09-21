import React, { useContext } from "react";
import Conc from "./Conc";
import { fistname, lastname } from "./ContextapiA";

const Conb =()=>{
     const fname=useContext(fistname);
     const lname=useContext(lastname);
    return(
        <>
           <h1> {fname} {lname}</h1>
        </>
    )
}

export default Conb;