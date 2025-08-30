import Features from "../component/Features";
import JoinClubPage from "../component/JoinClubPage";
import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";
import Listings from "../component/Listings";
import Button from "../component/Button";
import Stepper from "../component/Stepper";

export default function ProductPage () {

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
            <ProdDetails/>
            <Listings title='You might also like'>
                <ProductCard
                    type='big'
                    name='The Poplar suede sofa'
                    imgUrl='img/product/product_6.jpg'
                    price='980'
                />
                <ProductCard
                    name='The Dandy chair'
                    imgUrl='img/product/product_1.jpg'
                    price='250'
                />
                <ProductCard
                    name='The Dandy chair'
                    imgUrl='img/product/product_5.jpg'
                    price='250'
                />
            </Listings>
            <Features/>
            <JoinClubPage type='split'/>
        </main>
    )
}

function ProdDetails () {
    return (
        <section className='prod-details'>
            <img 
                className='hero-left' 
                src="img/hero-chair.jpg" 
                alt="hero-chair.jpg"
            />
            <div className='prod-info'>
                <div className="prod-info-top">
                    <h1>The Dandy Chair</h1>
                    <p className='prod-price'>£250</p>
                </div>
                <hr className="prod-line-hor"/>
                <div className="prod-info-desc">
                    <h5>Product description</h5>
                    <p className="body-medium-txt">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                </div>
                <div className="prod-dimensions">
                    <h5>Dimensions</h5>
                    <ul className="dimensions-list">
                        <li className="dimensions-item">
                            <h6>Height</h6>
                            <span className="body-medium-txt">110cm</span>
                        </li>
                        <hr className="prod-line-ver"/>
                        <li className="dimensions-item">
                            <h6>Width</h6>
                            <span className="body-medium-txt">75cm</span>
                        </li>
                        <hr className="prod-line-ver"/>
                        <li className="dimensions-item">
                            <h6>Depth</h6>
                            <span className="body-medium-txt">50cm</span>
                        </li>
                    </ul>
                </div>
                <div className="prod-quantity">
                    <h5>Quantity</h5>
                    <Stepper/>
                </div>
                <div className="prod-cta">
                    <Button type='primary' name='Add to card'/>
                    <Button type='white' name='Save to favorites'/>
                </div>

            </div>

        </section>
    );
}