import { useState } from "react"

export default function Dropdown ({ type, name, menu }) {

    switch(type) {
        case 'single' :
            return <SingleDropdown menu={menu}/>
        default :
            return <MultiDropdown name={name} menu={menu}/>

    }
}

function SingleDropdown ({menu}) {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(menu[1])

    return (
        <div className="dropdown-content"
            onMouseEnter={() => {setOpen(true)}}
            onMouseLeave={() => {setOpen(false)}}
            >
            <button
                className='dropdown mob-dropdown'
                onClick={() => {setOpen(!open)}}
                >
                <span className="body-medium-txt">{selected}</span>
                <img src={`img/icon/Caret--${open ? 'up' : 'down'}.svg`} alt="ProductCard.jpg"/>
            </button>
            <ul className="dropdown-list" style={{display: `${open ? '' : 'none'}`}}>
                {menu.map((menuItem, index) => (
                    <li
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                            setOpen(false);
                            setSelected(menuItem)
                        }}>
                        {menuItem}
                    </li>
                ))}
            </ul>
        </div>
    )   
}

function MultiDropdown ({name, menu}) {

    const [open, setOpen] = useState(false)

    return (
        <div
            className="dropdown-content"
            onMouseEnter={() => {setOpen(true)}}
            onMouseLeave={() => {setOpen(false)}}
            >
            <button
                className='dropdown mob-dropdown'>
                <span className="body-medium-txt">{name}</span>
                <img src={`img/icon/Caret--${open ? 'up' : 'down'}.svg`} alt="ProductCard.jpg"/>
            </button>
            <ul className="dropdown-list" style={{display: `${open ? '' : 'none'}`}}>
                {menu.map((menuItem, index) => (
                    <li key={index}className="dropdown-item">
                        {menuItem}
                    </li>
                ))}
            </ul>
        </div>
    )   
}