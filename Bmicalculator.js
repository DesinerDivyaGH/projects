import React, {useState} from 'react';

import './Bmicalculator.css';

const Bmicalculator=() =>{
    const [Weight,setWeight]=useState('');

    const [Height,setHeight]=useState('');

    const [Bmi,setBmi]=useState(null);

    const [Status,setStatus]=useState('');

    const calculatorBMI =()=>{
        if(!Weight || !Height){
            alert('please enter both weight and height');

          
        }

        const heightInmeters=parseFloat(Height)/100;

        const bmiValue=(parseFloat(Weight)/(heightInmeters*heightInmeters)).toFixed(2);
        setBmi(bmiValue);

        let bmiStatus='';
        if(bmiValue<18.5){
            bmiStatus='underweight';
        }
        else if(bmiValue<24.9){
            bmiStatus='Normal weight';   
        }
        else if(bmiValue<29.9){
            bmiStatus='overweight';
        }
        else{
            bmiStatus='obesity';
        }
        setStatus(bmiStatus);
    };

    return(
        <div className='cantainer'>
            <h1>BMI calculator</h1><br></br>

            <div className='input-group'>
                <label>Weight(kg):</label>
                <input type='number' value={Weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter your weight' />

            </div><br></br>

            <div className='input-group'>
                <label>Height(cm):</label>
                <input type='number' value={Height} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter your Height' />

            </div><br></br>

            <button onClick={calculatorBMI}>calculator</button>
            {Bmi && ( <div className='result'>
                <h3>your BMI:{Bmi}</h3>
                <h3>status:{Status}</h3>  </div>

                )}
        </div>
    )
}
export default Bmicalculator;