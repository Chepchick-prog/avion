import { useContext, useState } from "react";
import { AvionUrlContext } from "../../context/ProductContext";

import Stepper from "../../ui/Stepper/Stepper";

function BusketProductCard ({onChange, ...prod}) {

    const [counter, setCounter] = useState(prod.quantity)

    const handleChangeCounter = (value) => {
        setCounter(value)
        onChange(prod, value)
    }


    const avionUrl = useContext(AvionUrlContext);

    return (
        <div className="baskets-item">
            <img src={`${avionUrl.avionUrl}/${prod.imgUrl}`} alt="ProductCard.jpg"/>
            <div className="basket-item-info">
                <h4>{prod.name}</h4>
                <span className="body-small-txt">A timeless {prod.description} ceramic vase with a tri color grey glaze.</span>
                <p className="body-medium-txt">£{prod.price}</p>
            </div>
            <Stepper type='gray' value={counter} onChange={handleChangeCounter}/>
            <span className="body-large-txt total-price">£{prod.price * prod.quantity}</span>
        </div>
    );
}

export default BusketProductCard;