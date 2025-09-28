function CheckBox ({name, isActive, onChange}) {
    

    return (
        <div 
            className="checkbox" 
            onClick={onChange}
            >

            <label className="checkbox-container body-medium-txt">
                <input 
                type="checkbox" 
                checked={isActive} 
                readOnly
                />
                <span className="checkmark"></span>
            </label>
            <span className="body-medium-txt">{name}</span>
        </div>
    );
}

export default CheckBox;