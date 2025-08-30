import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../component/context/ProductContext";

import Button from "../component/Button";
import Features from "../component/Features";
import ProductCard from "../component/ProductCard";
import JoinClubPage from "../component/JoinClubPage";
import Footer from "../component/Footer";
import Listings from "../component/Listings";

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
    return (
        <section className='hero hero-container'>
            <div className='hero-right'>
                <h2>The furniture brand for the future, with timeless designs</h2>
                <NavLink to='/products'>
                    <Button type='opaque' name='View collection'/>
                </NavLink>
                <p className='body-large-txt'>A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.</p>
            </div>
            <img 
                className='hero-left' 
                src="img/hero-chair.jpg" 
                alt="hero-chair.jpg"
            />
        </section>
    )
}
