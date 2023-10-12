import React, {useState} from "react";
import './style.css';

const App=()=>{
    const [number, setNumber] = useState(0)
    return <div>
        <h1>Welcome to Counter App!</h1>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1)} className="button">Up</button>
        <button onClick={()=> setNumber(number-1)} className="button">Down</button>
        <button onClick={()=> setNumber(0)} className="button">Reset</button>
        </div>
}

export default App;