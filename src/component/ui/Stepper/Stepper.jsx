import "./styles.css"

function Stepper ({type , value, onChange}) {

    let style = ''

    switch(type) {
        case 'gray' :
            style = 'gray-stepper'
            break;

        default :
            style = ''
            break;
    }

    function countUp () {
        onChange(value + 1)
    }
    
    function countDown () {
        onChange(value - 1)
    }

    return (
        <div className={`stepper ${style}`}>
            <button className="body-medium-txt" onClick={countDown}>-</button>
            <span className="body-medium-txt">{value}</span>
            <button className="body-medium-txt" onClick={countUp}>+</button>
        </div>
    );
}

export default Stepper;