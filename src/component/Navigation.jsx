import { NavLink } from "react-router-dom";

import SideBar from "./NavSideBar";

export default function Navigation () {
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
                            <img src="img/icon/Search.svg" alt="Search-icon.svg"/>
                            <NavLink to="/baskets">
                                <img src="img/icon/Shopping--cart.svg" alt="Shopping-cart-icon.svg"/>
                            </NavLink>
                            <img src="img/icon/User--avatar.svg" alt="User-avatar-icon.svg"/>
                        </div>
                    </div>
                    <SideBar/>
                </div>
                <hr className="divider"/>
                <nav className="bottom-nav body-medium-txt">
                    <ul className="links-list ">
                        <NavLink to='/products'>
                            <li className="links-item">All products</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Plant pots</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Ceramics</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Tables</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Chairs</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Crockery</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Tableware</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="links-item">Cutlery</li>
                        </NavLink>
                    </ul>
                </nav>
            </div>
        </header>
    );
}