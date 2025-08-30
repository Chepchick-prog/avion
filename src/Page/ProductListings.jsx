import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";
import Filter from "../component/FIlter";
import MobFilter from "../component/MobFilter";
import { productData } from "../component/product-data";
import { NavLink } from "react-router-dom";


export default function ProductListingsPage () {

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
            <section className="product-listings-image">
                <h1>All products</h1>
            </section>
            <MobFilter/>
            <Filter/>
            <section className="product-listings-content container">
                <ProductList/>
            </section>
        </main>
    )
}

function ProductList () {

    const productList = productData.products;


    return (
        <div className="product-list">
            {productList.map(prod => (
                <NavLink to={`/products/${prod.id}`}>
                    <ProductCard
                        key={prod.id}
                        type={prod.type === 'Sofas' ? 'big' : ''}
                        name={prod.name}
                        imgUrl={prod.image}
                        price={prod.price}

                    />
                </NavLink>
            ))}
        </div>
    );
}


