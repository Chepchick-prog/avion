import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AvionUrlContext } from "../context/ProductContext";

import SideBar from "./NavSideBar";

export default function Navigation () {

    const avionUrl = useContext(AvionUrlContext)

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
        <header className="header-container">
            <div className="navigation">
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
                            <img src={`${avionUrl.avionUrl}/img/icon/Search.svg`} alt="Search-icon.svg"/>
                            <NavLink to="baskets">
                                <img src={`${avionUrl.avionUrl}/img/icon/Shopping--cart.svg`} alt="Shopping-cart-icon.svg"/>
                            </NavLink>
                            <img src={`${avionUrl.avionUrl}/img/icon/User--avatar.svg`} alt="User-avatar-icon.svg"/>
                        </div>
                    </div>
                    <SideBar/>
                </div>
                <hr className="divider"/>
                <nav className="bottom-nav body-medium-txt">
                    <ul className="links-list ">

                        <NavLink to={`/catalog/${'all-product'}`}>
                            <li className="links-item">All products</li>
                        </NavLink>

                        {navList.map(item => 
                            (
                                <NavLink to={`/catalog/${item.url}`}>
                                    <li className="links-item">{item.name}</li>
                                </NavLink>
                            )
                        )}

                    </ul>
                </nav>
            </div>
        </header>
    );
}