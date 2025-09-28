import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import Button from "./Button";
import Input from "./Input";
import { useContext, useState } from "react";
import { BrandContext, CategoryContext, PriceContext, SortingContext } from "./context/FilterContext";


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
);
}

function CategoryFilter () {
    const {categoryList, updateCategoryFilter} = useContext(CategoryContext);

    function CategoryFilterChange (itemIndex) {
        const newCategoryList = categoryList.map((item, index) => {

            if(index === itemIndex) {
                return ({...item, isActive: !item.isActive});
            } else {
                return item;
            }
        })

        updateCategoryFilter(newCategoryList);
    }

    return (
        <>
            <Dropdown name={'Category'}>
                {categoryList.map((item, itemIndex) => (
                    <CheckBox key={itemIndex} itemId={itemIndex} name={item.name} isActive={item.isActive} onChange={()=> {CategoryFilterChange(itemIndex)}}/>
                ))}
                <div className="filter-content">
                    <Button className='filter-btn' name='Cancel' />
                    <Button className='filter-btn' type='primary' name='Done' />
                </div>
            </Dropdown>
        </>
    )
}

function BrandFilter () {

    const {brandList, updateBrandFilter} = useContext(BrandContext)

    function BrandFilterChange (itemIndex) {
        const newBrandList = brandList.map((item, index) => {

            if(index === itemIndex) {
                return ({...item, isActive: !item.isActive});
            } else {
                return item;
            }
        })

        updateBrandFilter(newBrandList);
    }

    return (
        <>
            <Dropdown name={'Brand'}>
                {brandList.map((item, itemIndex) => (
                    <CheckBox key={itemIndex} name={item.name} isActive={item.isActive} onChange={()=>{BrandFilterChange(itemIndex)}}/>
                ))}
                <div className="filter-content">
                    <Button className='filter-btn' name='Cancel' />
                    <Button className='filter-btn' type='primary' name='Done' />
                </div>
            </Dropdown>    
        </>
    )
}

function PriceFilter () {

    const {price, updatePriceFilter} = useContext(PriceContext)


    function minPriceChange (e) {
        e.preventDefault()
        updatePriceFilter({min: e.target.value, max: price.max})
    }

    function maxPriceChange (e) {
        e.preventDefault()
        updatePriceFilter({min: price.min , max: e.target.value})
    }

    return (
        <Dropdown name={'Price'}>
            <div className="price-filter">
                <div className="filter-content">
                    <div>
                        <span className="body-small-txt">From</span>
                        <Input type='number' value={price.min} onChange={minPriceChange}/>
                    </div>
                    <div>
                        <span className="body-small-txt">Before</span>
                        <Input type='number' value={price.max} onChange={maxPriceChange}/>
                    </div>
                </div>
                <div className="filter-content">
                    <Button className='filter-btn' name='Cancel' />
                    <Button className='filter-btn' type='primary' name='Done' />
                </div>
            </div>
        </Dropdown>
    )
}

function SortingFilter () {

    const {sortList} = useContext(SortingContext)

    const [selectedSort, setSelectedSort] = useState(sortList[0])

    function SortingFilterChange (itemId) {
        sortList.forEach((item) => {
            if(item.id === itemId) {
                return setSelectedSort(item)
            }
        })

    }

    return (
        <>
            <span className="body-small-txt">Sorting by:</span>
            <Dropdown type='single' selectedSort={selectedSort.name}>
                {sortList.map((item) => (
                    <span key={item.id} name={item.name} onClick={()=>{SortingFilterChange(item.id)}}>
                        {item.name}
                    </span>
                ))}
            </Dropdown>
        </>
    )
}

export default Filter;