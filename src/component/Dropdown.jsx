import { useContext, useState } from "react"
import { AvionUrlContext } from "./context/ProductContext"

export default function Dropdown ({ type, name, selectedSort, children}) {

    switch(type) {
        case 'single' :
            return <SingleDropdown selectedSort={selectedSort} children={children} />
        default :
            return <MultiDropdown name={name} children={children}/>
    }
}

function SingleDropdown ({selectedSort, children}) {

    const avionUrl = useContext(AvionUrlContext);

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className="dropdown-content"
            onMouseEnter={() => {setIsOpen(true)}}
            onMouseLeave={() => {setIsOpen(false)}}
            >
            <div
                className='dropdown mob-dropdown'
                onClick={() => {setIsOpen(!isOpen)}}
                >
                <span className="body-medium-txt">{selectedSort}</span>
                <img src={`${avionUrl.avionUrl}/img/icon/Caret--${isOpen ? 'up' : 'down'}.svg`} alt="ProductCard.jpg"/>
            </div>
            <ul className="dropdown-list" style={{display: `${isOpen ? 'unset' : 'none'}`}}>
                <li
                    className="dropdown-item"
                    onClick={() => {
                        setIsOpen(false);
                        
                    }}>
                    {children}
                </li>
            </ul>
        </div>
    )   
}

function MultiDropdown ({name, children}) {

    const [open, setOpen] = useState(false)

    const avionUrl = useContext(AvionUrlContext);

    return (
        <div
            className="dropdown-content"
            onMouseEnter={() => {setOpen(true)}}
            onMouseLeave={() => {setOpen(false)}}
            >
            <div
                className='dropdown mob-dropdown'>
                <span className="body-medium-txt">{name}</span>
                <img src={`${avionUrl.avionUrl}/img/icon/Caret--${open ? 'up' : 'down'}.svg`} alt="ProductCard.jpg"/>
            </div>
            <ul className="dropdown-list" style={{display: `${open ? '' : 'none'}`}}>
                <li className="dropdown-item">
                    {children}
                </li>
            </ul>
        </div>
    )   
}