import { NavLink } from "react-router-dom";
import Button from "../../ui/Button/Button";

import "./styles.css"

export default function Listings ({children, title}) {
    return (
        <section className='listings container'>
            <h2>{title}</h2>
            <div className="listings-content">
                <div className='listings-list'>
                    {children}
                </div>
                <NavLink to={`/catalog/${'all-product'}`}>
                    <Button className='secondary-btn'>
                        <span className="body-medium-txt">View collection</span>
                    </Button>
                </NavLink>
            </div>
        </section>
    );
}