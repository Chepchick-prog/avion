import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import SortingFilter from "./SortingFilter";

import "./styles.css"

function Filter() {

    return (
        <section className="dectop-product-filter ">
            <div className="left">
                <CategoryFilter/>
                <PriceFilter/>
                <BrandFilter/>
            </div>
            <div className="right">
                <SortingFilter/>
            </div>

        </section>
)}

export default Filter;