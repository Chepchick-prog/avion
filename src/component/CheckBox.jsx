import { useState } from "react";

export default function CheckBox ({label}) {
    
    const [isChecked, setIsChecked] = useState(false)

    return (
        <label className="checkbox-container body-medium-txt">
            <input 
                type="checkbox" 
                checked={isChecked} 
                onChange={() => setIsChecked((prev) => !prev)} 
            />
            <span className="checkmark"></span>
        </label>
    );
}