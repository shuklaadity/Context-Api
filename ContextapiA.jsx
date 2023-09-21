import React, { createContext } from "react";
import Conb from "./Conb";

const fistname=createContext()
const lastname=createContext()

const ContextapiA =()=>{

    return(
        <>
        <fistname.Provider value={'aditya'}>
           <lastname.Provider value={'shukla'}>
               <Conb/>
           </lastname.Provider>
        </fistname.Provider>

        </>
    )
}

export default ContextapiA;
export {fistname};
export {lastname};