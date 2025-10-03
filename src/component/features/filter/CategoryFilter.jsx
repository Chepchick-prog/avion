import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";

import Dropdown from "../Dropdown";
import Button from "../../common/Button";
import CheckBox from "../../common/CheckBox";

function CategoryFilter () {

    const { filters, resetFilter, filterProductData, filterListChange } = useContext(FilterContext)

    const { resetProductData } = useContext(ProductContext)

    const filterType = 'category'

    return (
        <>
            <Dropdown name={'Category'}>
                {filters.category.map((item, itemIndex) => (
                    <CheckBox key={itemIndex} itemId={itemIndex} name={item.name} isActive={item.isActive} onChange={()=>{filterListChange(filterType, filters.category, itemIndex)}}/>
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

export default CategoryFilter