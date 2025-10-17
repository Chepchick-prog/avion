import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";

import Dropdown from "../Dropdown/Dropdown";

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";

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
                    <Button className='secondary-btn' onClick={()=>{resetProductData(); resetFilter(filterType)}}>
                        <span className="body-medium-txt">Cancel</span>
                    </Button>
                    <Button className='primary-btn'
                        onClick={() => {
                            resetProductData()
                            filterProductData(filters)
                        }
                    }>
                        <span className="body-medium-txt">Done</span>
                    </Button>
                </div>
            </div>
        </Dropdown>
    )
}

export default PriceFilter;