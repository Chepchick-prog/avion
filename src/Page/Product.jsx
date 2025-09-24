import { useContext } from "react";
import { AvionUrlContext, ProductContext } from "../component/context/ProductContext";
import Features from "../component/Features";
import JoinClubPage from "../component/JoinClubPage";
import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";
import Listings from "../component/Listings";
import Button from "../component/Button";
import Stepper from "../component/Stepper";
import { useParams } from "react-router-dom";


export default function ProductPage () {

    return (
        <>
            <MainContent/>
            <Footer/>
        </>
    );
}

function MainContent () {

    const {prodData} = useContext(ProductContext);

    return (
        <main>
            <ProdDetails/>
            <Listings title='You might also like'>
                {prodData.slice(0, 4).map(prod => (
                    <ProductCard
                        key={prod.id}
                        id = {prod.id}
                        type={prod.type === 'Sofas' ? 'big' : ''}
                        name={prod.name}
                        imgUrl={prod.image}
                        price={prod.price}
                    />
                ))}
            </Listings>
            <Features/>
            <JoinClubPage type='split'/>
        </main>
    )
}

function ProdDetails () {

    const avionUrl = useContext(AvionUrlContext)

    const productId = useParams()
    const {prodData} = useContext(ProductContext);

    let product = {}

    prodData.forEach((prod) => {

        if(prod.id === Number(productId.productId)){
            product = prod
        } 
    })

    console.log(product.image)
    console.log(typeof(product.image))

    return (
        <section className='prod-details'>

            <img 
                className='hero-left' 
                src={`${avionUrl.avionUrl}/${product.image}`} 
                alt="hero-chair.jpg"
            />
            <div className='prod-info'>
                <div className="prod-info-top">
                    <h1>{product.name}</h1>
                    <p className='prod-price'>£{product.price}</p>
                </div>
                <hr className="prod-line-hor"/>
                <div className="prod-info-desc">
                    <h5>Product description</h5>
                    <p className="body-medium-txt">{product.description}</p>
                </div>
                <div className="prod-dimensions">
                    <h5>Dimensions</h5>
                    <ul className="dimensions-list">
                        <li className="dimensions-item">
                            <h6>Height</h6>
                            <span className="body-medium-txt">{product.dimensions.height}cm</span>
                        </li>
                        <hr className="prod-line-ver"/>
                        <li className="dimensions-item">
                            <h6>Width</h6>
                            <span className="body-medium-txt">{product.dimensions.width}cm</span>
                        </li>
                        <hr className="prod-line-ver"/>
                        <li className="dimensions-item">
                            <h6>Depth</h6>
                            <span className="body-medium-txt">{product.dimensions.depth}cm</span>
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