import Footer from "../component/Footer";
import ProductCard from "../component/ProductCard";
import Filter from "../component/FIlter";
import MobFilter from "../component/MobFilter";
import { useContext } from "react";
import { ProductContext } from "../component/context/ProductContext";


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

    const {prodData} = useContext(ProductContext);


    return (
        <div className="product-list">
            {prodData.map(prod => (
                // <NavLink to={`/products/${prod.id}`}>
                    <ProductCard
                        key={prod.id}
                        id = {prod.id}
                        type={prod.type === 'Sofas' ? 'big' : ''}
                        name={prod.name}
                        imgUrl={prod.image}
                        price={prod.price}

                    />
                // </NavLink>
            ))}
        </div>
    );
}


