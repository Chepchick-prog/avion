import { useContext } from "react";

import { FilterContext } from "../../context/FilterContext";
import { ProductContext } from "../../context/ProductContext";

import Dropdown from "../Dropdown/Dropdown";

import CheckBox from "../../ui/CheckBox/CheckBox";
import Button from "../../ui/Button/Button";

function CategoryFilter () {

    const { filters, resetFilter, filterProductData, filterListChange } = useContext(FilterContext)

    const { resetProductData } = useContext(ProductContext)

    const filterType = 'category'

    return (
        <>
            <Dropdown name={'Category'}>
                {filters.category.map((item, itemIndex) => (
                    <CheckBox key={itemIndex} itemId={itemIndex} isActive={item.isActive} onChange={()=>{filterListChange(filterType, filters.category, itemIndex)}}>{item.name}</CheckBox>
                ))}
                <div className="filter-content">
                    <Button className='secondary-btn' onClick={()=>{resetProductData(); resetFilter(filterType)}}>
                        <span className="body-medium-txt">Cancel</span>
                    </Button>
                    <Button className='primary-btn' onClick={() => { resetProductData(); filterProductData(filters)}}>
                        <span className="body-medium-txt">Done</span>
                    </Button>
                </div>
            </Dropdown>
        </>
    )
}

export default CategoryFilter