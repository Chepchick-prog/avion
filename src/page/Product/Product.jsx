import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { AvionUrlContext, ProductContext } from "../../component/context/ProductContext";
import { BusketsContext } from "../../component/context/BusketsContext";

import Features from "../../component/features/Features/Features";
import JoinClubPage from "../../component/features/JoinClub/JoinClubPage";
import Footer from "../../component/features/Footer/Footer";
import ProductCard from "../../component/features/ProductCard/ProductCard";
import Listings from "../../component/features/Listings/Listings";
import Button from "../../component/ui/Button/Button";
import Stepper from "../../component/ui/Stepper/Stepper";

import "./styles.css"

export default function ProductPage () {

    return (
        <>
            <MainContent/>
            <Footer/>
        </>
    );
}

function MainContent () {

    const productId = useParams()

    const {prodData} = useContext(ProductContext);

    const prodList = prodData.filter(item => item.id !== Number(productId.productId))

    return (
        <main>
            <ProdDetails/>
            <Listings title='You might also like'>
                {prodList.slice(0, 4).map(prod => (
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
    const { prodData } = useContext(ProductContext);
    const {updateBusketList} = useContext(BusketsContext)

    const productId = useParams()

    const [quantity, setQuantity] = useState(1)

    let product = {}

    prodData.forEach((prod) => {

        if(prod.id === Number(productId.productId)){
            product = prod
        } 
    })

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
                    <Stepper value={quantity} onChange={setQuantity}/>
                </div>
                <div className="prod-cta">
                    <Button className='primary-btn' onClick={() => {updateBusketList(product, quantity)}}>
                        <span className="body-medium-txt">Add to card</span>
                    </Button>
                    <Button className='white-btn'>
                        <span className="body-medium-txt">Save to favorites</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}