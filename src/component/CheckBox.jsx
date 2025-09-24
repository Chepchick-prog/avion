import { useState } from "react";

export default function CheckBox ({name, isActive}) {
    
    const [isChecked, setIsChecked] = useState(isActive)

    const handleClick = () => {
        setIsChecked((prev) => !prev)
    }

    return (
        <div 
            className="checkbox" 
            onClick={() => handleClick()}>

            <label className="checkbox-container body-medium-txt">
                <input 
                type="checkbox" 
                checked={isChecked} 
                readOnly
                />
                <span className="checkmark"></span>
            </label>
            <span className="body-medium-txt">{name}</span>
        </div>
    );
}