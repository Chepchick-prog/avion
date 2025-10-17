import { useContext } from "react";
import { BusketsContext } from "../../component/context/BusketsContext";

import Button from "../../component/ui/Button/Button";
import Footer from "../../component/features/Footer/Footer";
import BusketProductCard from "../../component/features/ProductCard/BusketProductCard";

import "./styles.css"

function updateSubtotalPrice ( prodList ) {
    let newPrice = 0
    
    prodList.map(prod => {
        return newPrice += prod.price * prod.quantity
    })

    return newPrice
}

export default function BusketsPage () {
    return (
        <>
            <MainContent/>
            <Footer/>
        </>
    );
}

function MainContent () {

    const { busketsList, updateProdBusketsQuantity } = useContext(BusketsContext)

    let totalPrice = 0

    return (
        <main>
            <section className='baskets baskets-container'>
                <h1>Your shopping cart</h1>
                <div>
                    <div className="baskets-top">
                        <h6>Product</h6>
                        <h6>Quantity</h6>
                        <h6>Total</h6>
                    </div>
                    <hr className="divider"/>
                    <div className="baskets-list">
                        {busketsList.map(prod => (
                                <BusketProductCard
                                    key={prod.id}
                                    id = {prod.id}
                                    name={prod.name}
                                    imgUrl={prod.image}
                                    price={prod.price}
                                    description={prod.description}
                                    quantity={prod.quantity}
                                    onChange={updateProdBusketsQuantity}
                                />
                        ))}
                    </div>
                    <hr className="divider"/>
                    <div className="baskets-bottom">
                        <span className="body-small-txt">Taxes and shipping are calculated at checkout</span>
                        <div>
                            <h4>Subtotal</h4>
                            <h3>£ {busketsList.length === 0 ? totalPrice : updateSubtotalPrice( busketsList )}</h3>
                        </div>
                        <Button className='primary-btn'>
                            <span className="body-medium-txt">Go to checkout</span>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}