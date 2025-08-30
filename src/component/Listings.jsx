import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Listings ({children, title}) {
    return (
        <section className='listings container'>
            <h2>{title}</h2>
            <div className="listings-content">
                <div className='listings-list'>
                    {children}
                </div>
                <NavLink to='/products'>
                    <Button type='secondary' name='View collection'/>
                </NavLink>
            </div>
        </section>
    );
}