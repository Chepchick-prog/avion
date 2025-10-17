import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AvionUrlContext, ProductContext } from "../../component/context/ProductContext";

import Button from "../../component/ui/Button/Button";
import Features from "../../component/features/Features/Features";
import ProductCard from "../../component/features/ProductCard/ProductCard";
import JoinClubPage from "../../component/features/JoinClub/JoinClubPage";
import Footer from "../../component/features/Footer/Footer";
import Listings from "../../component/features/Listings/Listings";

export default function HomePage() {
    return (
        <>
            <MainContent/>
            <Footer/>
        </>
    );
}

function MainContent () {

    const {prodData} = useContext(ProductContext)

    return (
        <main>
            <Hero/>
            <Features/>
            <Listings title='New Product'>
                {prodData.slice(0, 4).map((prodItem) => (
                    <ProductCard
                        key={prodItem.id}
                        id = {prodItem.id}
                        type={prodItem.type === 'Sofas' ? 'big' : ''}
                        name={prodItem.name}
                        imgUrl={prodItem.image}
                        price={prodItem.price}
                    />
                ))}
            </Listings>
            <Listings title='Most Popular'>
                {prodData.slice(4, 8).map((prodItem) => (
                    <ProductCard
                        key={prodItem.id}
                        id = {prodItem.id}
                        type={prodItem.type === 'Sofas' ? 'big' : ''}
                        name={prodItem.name}
                        imgUrl={prodItem.image}
                        price={prodItem.price}
                    />
                ))}
            </Listings>
            <JoinClubPage/>
            <Features type='split-right'/>
        </main>
    )
}

function Hero() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/catalog/all-product')
    }

    const avionUrl = useContext(AvionUrlContext);

    return (
        <section className='hero hero-container'>
            <div className='hero-right'>
                <h2>The furniture brand for the future, with timeless designs</h2>
                <Button className="opaque-btn" onClick={handleClick}>
                    <span className="body-medium-txt">View collection</span>
                </Button>
                <p className='body-large-txt'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
            </div>
            <img 
                className='hero-left' 
                src={`${avionUrl.avionUrl}/img/hero-chair.jpg`}
                alt="hero-chair.jpg"
            />
        </section>
    )
}
