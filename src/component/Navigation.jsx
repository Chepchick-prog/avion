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
                            <span className="body-medium-txt">Contact</span>
                            <span className="body-medium-txt">Blog</span>
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
                        <li className="links-item"><span>Plant pots</span></li>
                        <li className="links-item"><span>Ceramics</span></li>
                        <li className="links-item"><span>Tables</span></li>
                        <li className="links-item"><span>Chairs</span></li>
                        <li className="links-item"><span>Crockery</span></li>
                        <li className="links-item"><span>Tableware</span></li>
                        <li className="links-item"><span>Cutlery</span></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}