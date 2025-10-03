import { useState } from "react";

export default function Stepper ({type}) {

    let style = ''

    switch(type) {
        case 'gray' :
            style = 'gray-stepper'
            break;

        default :
            style = ''
            break;
    }

    const [count, setCount] = useState(1)

    function countUp () {
        setCount(count + 1)
    }
    
    function countDown () {
        setCount(count - 1)
    }

    return (
        <div className={`stepper ${style}`}>
            <button className="body-medium-txt" onClick={countDown}>-</button>
            <span className="body-medium-txt">{count}</span>
            <button className="body-medium-txt" onClick={countUp}>+</button>
        </div>
    );
}