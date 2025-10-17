import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AvionUrlContext } from "../../context/ProductContext";

import "./styles.css"

export default function ProductCard ( {...props }) {

    const avionUrl = useContext(AvionUrlContext)
    
    const prod = {...props}

    let maxWidth;
    let spanCollum;

    switch (prod.type) {
        case 'big':
            maxWidth = 630
            spanCollum = 2
            break;
        default:
            maxWidth = 305
            spanCollum = 1
            break;
    }

    return (
            <div className="product-card" style={{maxWidth: `${maxWidth}px`, gridColumn: `span ${spanCollum}`}}>
                <NavLink to={`/product/${prod.id}`}>
                    <img src={`${avionUrl.avionUrl}/${prod.imgUrl}`} alt="ProductCard.jpg"/>
                    <div>
                        <h4>{prod.name}</h4>
                        <p className="body-large-txt">£{prod.price}</p>
                    </div>
                </NavLink>
            </div>
    );
}


