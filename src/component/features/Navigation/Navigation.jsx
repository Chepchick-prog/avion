import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AvionUrlContext } from "../../context/ProductContext";
import SideBar from "../NavSideBar/NavSideBar";
import Button from "../../ui/Button/Button"
import { BusketsContext } from "../../context/BusketsContext";

import "./styles.css"

export default function Navigation () {

    return (
        <header className="header-container">
            <div className="navigation">
                <TopNav/>
                <hr className="divider"/>
                <DownNav/>
            </div>
        </header>
    );
}

function TopNav () {

    const navBusket = useNavigate()

    const avionUrl = useContext(AvionUrlContext)

    const { busketsList } = useContext(BusketsContext)


    return (
        <div className="top-nav">
            <NavLink to="/">
                <span className="logo-txt">Avion</span>
            </NavLink>
            <div className="top-nav-right">
                <div className="right-links">
                    <NavLink to="/about">
                        <span className="body-medium-txt">About us</span>
                    </NavLink>
                    <NavLink>
                        <span className="body-medium-txt">Contact</span>
                    </NavLink>
                    <NavLink>
                        <span className="body-medium-txt">Blog</span>
                    </NavLink>
                </div>
                <div className="right-actions">
                    <Button className='nav-btn'>
                        <img src={`${avionUrl.avionUrl}/img/icon/Search.svg`} alt={`search-icon.svg`}/>
                    </Button>
                    <Button className='nav-btn' onClick={() => navBusket('/buskets')}>
                        <img src={`${avionUrl.avionUrl}/img/icon/Shopping--cart.svg`} alt={`ShoppingCart-icon.svg`}/>
                        {busketsList.length !== 0 && <div className="nav-buskets-counter">{busketsList.length}</div>}
                        
                    </Button>
                    <Button className='nav-btn'>
                        <img src={`${avionUrl.avionUrl}/img/icon/User--avatar.svg`} alt={`UserAvatar-icon.svg`}/>
                    </Button>
                </div>
            </div>
            <SideBar/>
        </div>
    )
}

function DownNav () {

    const navList = [
        {url: 'plant-pots', name: 'Plant pots'},
        {url: 'ceramics', name: 'Ceramics'},
        {url: 'tables', name: 'Tables'},
        {url: 'chairs', name: 'Chairs'},
        {url: 'crockery', name: 'Crockery'},
        {url: 'tableware', name: 'Tableware'},
        {url: 'cutlery', name: 'Cutlery'},
    ]

    return (
        <nav className="bottom-nav body-medium-txt">
            <ul className="links-list ">

                <NavLink to={`/catalog/${'all-product'}`}>
                    <li className="links-item">All products</li>
                </NavLink>

                {navList.map((item, index) => 
                    (
                        <NavLink key={index} to={`/catalog/${item.url}`}>
                            <li className="links-item">{item.name}</li>
                        </NavLink>
                    )
                )}

            </ul>
        </nav>
    )
}