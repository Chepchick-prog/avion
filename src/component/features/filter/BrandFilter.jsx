import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";

import CheckBox from "../../common/CheckBox";
import Dropdown from "../Dropdown";
import Button from "../../common/Button";

function BrandFilter () {

    const { filters, resetFilter, filterProductData, filterListChange } = useContext(FilterContext)

    const { resetProductData } = useContext(ProductContext)


    const filterType = 'brand'

    return (
        <>
            <Dropdown name={'Brand'}>
                {filters.brand.map((item, itemIndex) => (
                    <CheckBox key={itemIndex} name={item.name} isActive={item.isActive} onChange={()=>{filterListChange(filterType, filters.brand, itemIndex)}}/>
                ))}
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
            </Dropdown>    
        </>
    )
}

export default BrandFilter;