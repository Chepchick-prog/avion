import Button from "../component/Button";
import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";

export default function BusketsPage () {
    return (
        <>
            <MainContent/>
            <Footer/>
        </>
    );
}

function MainContent () {
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
                        <ProductCard type='basket'/>
                        <ProductCard type='basket'/>
                    </div>
                    <hr className="divider"/>
                    <div className="baskets-bottom">
                        <span className="body-small-txt">Taxes and shipping are calculated at checkout</span>
                        <div>
                            <h4>Subtotal</h4>
                            <h3>£210</h3>
                        </div>
                        <Button type='primary' name='Go to checkout'/>
                    </div>
                </div>
            </section>
        </main>
    )
}