import { useState } from "react";
import './Counter.css';

function Counter(){
      let [count,setCount]=useState();

       let Increment=()=>{
        setCount(count +1);
   }     

   let Decrement=()=>{
    setCount(count -1);
}     

let Reset=()=>{
    setCount(count =0);
}     

return <div className='demo'>
    <h1>Counter App</h1><br></br>
    <h2>{count}</h2>
    <button class="btn1" onClick={Increment}>Increment</button>
    <button class="btn2" onClick={Decrement}>Decrement</button>
    <button class="btn3" onClick={Reset}>Reset</button>
</div>


}
export default Counter;
