import React from "react";
import { fistname} from "./ContextapiA";
import { lastname } from "./ContextapiA";


const Conc=()=>{

    return(
        <>
            
             <fistname.Consumer>
                {
                    (fname)=>{
                       return (
                        <>
                           <lastname.Consumer>
                             {
                                (lname)=>{
                                  return  <h1>hello I am {fname} { lname} </h1>;
                                }
                             }
                           </lastname.Consumer>
                        </>
                       )
                    }
                }
             </fistname.Consumer>
        </>
    )
}

export default Conc;