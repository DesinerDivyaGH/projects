import React, { useState }  from "react";

import './calculator.css';


const Calculator = () =>{
           
    const [Data,setData]=useState("");

    const getValue = (event) =>{
        console.log(event.target.value);
        setData( Data.concat( event.target.value))
    }
    
    const calculation=()=>{ 
            setData(eval(Data).toString())
    }
      
    const Back=()=>{
        setData(Data.slice(0,-1))
    }

    return(
        <>
        <div className="cantainer">
            <div >
                <input placeholder="0"  value={Data}/>
            </div>
               <div className="btn">

               <button onClick={getValue} value="(">(</button>
               <button onClick={getValue} value=")">)</button>
               <button onClick={getValue} value="%">%</button>
               <button onClick={getValue} value="AC">AC</button><br></br>

               <button onClick={getValue} value="7">7</button>
               <button onClick={getValue} value="8">8</button>
               <button onClick={getValue} value="9">9</button>
               <button onClick={getValue} value="-">-</button><br></br>

               <button onClick={getValue} value="6">6</button>
               <button onClick={getValue} value="5">5</button>
               <button onClick={getValue} value="4">4</button>
               <button onClick={getValue} value="+">+</button><br></br>

               <button onClick={getValue} value="3">3</button>
               <button onClick={getValue} value="2">2</button>
               <button onClick={getValue} value="1">1</button>
               <button onClick={getValue} value="*">*</button><br></br>

               <button onClick={getValue} value="0">0</button>
               <button onClick={Back} >Back</button>
               <button onClick={calculation} value="=">=</button>
               <button onClick={getValue} value="/">/</button><br></br>

        </div>
        </div>

        </>

    )
    
}

export default Calculator;
 