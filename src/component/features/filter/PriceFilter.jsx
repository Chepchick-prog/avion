import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";

import Dropdown from "../Dropdown";
import Button from "../../common/Button";
import Input from "../../common/Input";

function PriceFilter () {

    const { resetProductData } = useContext(ProductContext)

    const { filters, resetFilter, filterListChange, filterProductData } = useContext(FilterContext)

    const filterType = "price"

    return (
        <Dropdown name={'Price'}>
            <div className="price-filter">
                <div className="filter-content">
                    <div>
                        <span className="body-small-txt">From</span>
                        <Input 
                            type='number'
                            value={filters.price.min}
                            onChange={(e) => {
                                e.preventDefault();
                                filterListChange(filterType, {min: e.target.value, max: filters.price.max})
                            }}/>
                    </div>
                    <div>
                        <span className="body-small-txt">Before</span>
                        <Input 
                            type='number'
                            value={filters.price.max}
                            onChange={(e) => {
                                e.preventDefault();
                                filterListChange(filterType, {min: filters.price.min , max: e.target.value})
                            }}/>
                    </div>
                </div>
                <div className="filter-content">
                    <Button className='filter-btn' name='Cancel' onClick={()=>{resetProductData(); resetFilter(filterType)}}/>
                    <Button 
                        className='filter-btn'
                        type='primary'
                        name='Done'
                        onClick={() => {
                            resetProductData()
                            filterProductData(filters)
                        }
                    }/>
                </div>
            </div>
        </Dropdown>
    )
}

export default PriceFilter;