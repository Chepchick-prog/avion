import { useState } from "react";
import { NavLink } from "react-router-dom";

import Input from "./Input";

export default function SideBar () {

    const [isOpen, setIsOpen] = useState(false);

    const [isNav, setIsNav] = useState(false);

    return (
        <>
            <div className="mob-actions">
                <button 
                    className="side-bttn"
                    onClick={() => {setIsOpen(!isOpen)}}
                >
                    <img src="img/icon/Search.svg" alt="Search-icon.svg"/>
                </button>
                <button 
                    className="side-bttn"
                    onClick={() => {setIsOpen(!isOpen); setIsNav(!isNav)}}
                >
                    <img src="img/icon/Menu.svg" alt="Menu-icon.svg"/>
                </button>
            </div>
            <div  
                className={`side-bar ${isOpen ? 'open' : ''}`}
                
            >
                {isNav 
                ? <NavSide isOpen={isOpen} setIsOpen={setIsOpen} isNav={isNav} setIsNav={setIsNav}/>
                : <SearchSide isOpen={isOpen} setIsOpen={setIsOpen}/>
                }
                
            </div>
        </>
    );
}


function NavSide ({isOpen, setIsOpen, isNav, setIsNav}) {
    return (
        <>
            <div className="side-top">
                <span className="logo-txt">Avion</span>
                <button 
                    className="side-bttn"
                    onClick={() => {setIsOpen(!isOpen); setIsNav(!isNav)}}
                >
                    <img src="img/icon/Close.svg" alt="Close-icon.svg"/>
                </button>
            </div>
            <hr/>
            <nav className="side-bottom">
                <ul>
                    <li className="links-item">All products</li>
                    <li className="links-item">Plant pots</li>
                    <li className="links-item">Ceramics</li>
                    <li className="links-item">Tables</li>
                    <li className="links-item">Chairs</li>
                    <li className="links-item">Crockery</li>
                    <li className="links-item">Tableware</li>
                    <li className="links-item">Cutlery</li>
                </ul>
            </nav>
            <hr/>
            <nav className="side-bottom">
                <ul>
                    <li>
                        <img src="img/icon/User--avatar.svg" alt="Search-icon.svg"/>
                        My Profile
                    </li>                        
                    <li>
                        <NavLink to="/baskets">
                            <img src="img/icon/Shopping--cart.svg" alt="Search-icon.svg"/>
                            My bag
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}


function SearchSide ({isOpen, setIsOpen}) {
    return (
        <>
            <div className="side-top">
                <span className="logo-txt">Avion</span>
                <button 
                    className="side-bttn"
                    onClick={() => {setIsOpen(!isOpen)}}
                >
                    <img src="img/icon/Close.svg" alt="Close-icon.svg"/>
                </button>
            </div>
            <div className="side-bottom">
                <Input type='search'/>
            </div>
        </>
    );
}