import Button from "../component/Button";
import Features from "../component/Features";
import ProductCard from "../component/ProductCard";
import JoinClubPage from "../component/JoinClubPage";
import Footer from "../component/Footer";
import Listings from "../component/Listings";
import { NavLink } from "react-router-dom";

export default function HomePage() {
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
            <Hero/>
            <Features/>
            <Listings title='New Product'>
                <ProductCard
                    name='The Dandy chair'
                    imgUrl='img/product/chair/product_1.jpg'
                    price='250'
                />
                <ProductCard
                    name='Rustic Vase Set'
                    imgUrl='img/product/chair/product_1.jpg'
                    price='155'
                />
                <ProductCard
                    imgUrl='img/product/chair/product_1.jpg'
                    name='The Silky Vase'
                    price='125'
                />
                <ProductCard
                    imgUrl='img/product/chair/product_1.jpg'
                    name='The Lucy Lamp'
                    price='399'
                />
            </Listings>
            <Listings title='Most Popular'>
                <ProductCard
                    name='The Poplar suede sofa'
                    imgUrl='img/product/chair/product_1.jpg'
                    price='980'
                />
                <ProductCard
                    name='The Dandy chair'
                    imgUrl='img/product/chair/product_1.jpg'
                    price='250'
                />
                <ProductCard
                    name='The Dandy chair'
                    imgUrl='img/product/chair/product_1.jpg'
                    price='250'
                />
                <ProductCard
                    name='The Dandy chair'
                    imgUrl='img/product/chair/product_1.jpg'
                    price='250'
                />
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
