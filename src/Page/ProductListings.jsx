import Footer from "../component/features/Footer";
import ProductCard from "../component/features/ProductCard";
import Filter from "../component/features/filter/Filter";
import MobFilter from "../component/features/MobFilter";
import { useContext } from "react";
import { ProductContext } from "../component/context/ProductContext";


export default function CatalogListingsPage () {

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
                    <ProductCard
                        key={prod.id}
                        id = {prod.id}
                        type={prod.category === 'Sofas' ? 'big' : ''}
                        name={prod.name}
                        imgUrl={prod.image}
                        price={prod.price}
                    />
            ))}
        </div>
    );
}


