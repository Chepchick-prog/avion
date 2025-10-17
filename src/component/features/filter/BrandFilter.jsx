import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";

import CheckBox from "../../ui/CheckBox/CheckBox";
import Button from "../../ui/Button/Button";

import Dropdown from "../Dropdown/Dropdown";

function BrandFilter () {

    const { filters, resetFilter, filterProductData, filterListChange } = useContext(FilterContext)

    const { resetProductData } = useContext(ProductContext)


    const filterType = 'brand'

    return (
        <>
            <Dropdown name={'Brand'}>
                {filters.brand.map((item, itemIndex) => (
                    <CheckBox key={itemIndex} isActive={item.isActive} onChange={()=>{filterListChange(filterType, filters.brand, itemIndex)}}>{item.name}</CheckBox>
                ))}
                <div className="filter-content">
                    <Button className='secondary-btn' onClick={()=>{resetProductData(); resetFilter(filterType)}}>
                        <span className="body-medium-txt">Cancel</span>
                    </Button>
                    <Button 
                        className='primary-btn'
                        onClick={() => {
                            resetProductData()
                            filterProductData(filters)
                        }
                    }>
                        <span className="body-medium-txt">Done</span>
                    </Button>
                </div>
            </Dropdown>    
        </>
    )
}

export default BrandFilter;