import Stepper from "./Stepper";

export default function ProductCard ({type, name, imgUrl, price}) {

    let maxWidth;
    let spanCollum;

    switch (type) {

        case 'basket':
            return <BusketProductCard/>
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
                <img src={imgUrl} alt="ProductCard.jpg"/>
                <div>
                    <h4>{name}</h4>
                    <p className="body-large-txt">£{price}</p>
                </div>
            </div>
    );
}


function BusketProductCard () {
    return (
        <div className="baskets-item">
            <img src="img/product/product_1.jpg" alt="ProductCard.jpg"/>
            <div className="basket-item-info">
                <h4>Graystone vase</h4>
                <span className="body-small-txt">A timeless ceramic vase with a tri color grey glaze.</span>
                <p className="body-medium-txt">£85</p>
            </div>
            <Stepper type='gray'/>
            <span className="body-large-txt total-price">£85</span>
        </div>
    );
}