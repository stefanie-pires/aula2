import "./primeiro.css"
import { useState } from "react"

export default function PrimeiroComponente(){
    const [num, setNum] = useState(14);
    
    function increment(){        
            setNum(a => a + 1);         
    }
    function decrement(){
            setNum(a => a - 1);   
    }

    return(
        <p className="paragrafo">
        <button onClick={decrement}> - </button>
        
        {num}

        <button onClick={increment}> + </button>
        </p>
    );

}

